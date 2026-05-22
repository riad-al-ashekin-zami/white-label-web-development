CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company_name TEXT,
  website_url TEXT,
  service_needed TEXT,
  budget TEXT,
  timeline TEXT,
  project_details TEXT,
  preferred_contact TEXT,
  nda_required BOOLEAN NOT NULL DEFAULT false,
  source_page TEXT,
  status TEXT NOT NULL DEFAULT 'New',
  lead_score TEXT NOT NULL DEFAULT 'Unreviewed',
  notes TEXT
);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Anyone (anon + authenticated) can submit a lead
CREATE POLICY "Anyone can submit a lead"
  ON public.leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated users can read/manage leads (admin via dashboard)
CREATE POLICY "Authenticated users can view leads"
  ON public.leads
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update leads"
  ON public.leads
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can delete leads"
  ON public.leads
  FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX idx_leads_status ON public.leads(status);