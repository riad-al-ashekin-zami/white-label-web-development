ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS admin_email_sent boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS visitor_email_sent boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS last_email_error text;