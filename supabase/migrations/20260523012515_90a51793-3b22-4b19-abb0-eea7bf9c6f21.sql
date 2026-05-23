-- 1) Restrict EXECUTE on SECURITY DEFINER helper
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO service_role;

-- 2) Replace overly permissive INSERT policy on leads with a validated one
DROP POLICY IF EXISTS "Anyone can submit a lead" ON public.leads;

CREATE POLICY "Anyone can submit a validated lead"
ON public.leads
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(btrim(name)) BETWEEN 1 AND 200
  AND length(btrim(email)) BETWEEN 3 AND 320
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND (project_details IS NULL OR length(project_details) <= 5000)
  AND (company_name IS NULL OR length(company_name) <= 200)
  AND (website_url IS NULL OR length(website_url) <= 500)
);
