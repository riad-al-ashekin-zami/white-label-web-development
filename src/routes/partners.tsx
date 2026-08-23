import { createFileRoute } from "@tanstack/react-router";

const PARTNERS = [
  { name: "MOAR Mortgages", url: "https://www.moarmortgages.ca/" },
  { name: "MiPropertyPortal", url: "https://www.mipropertyportal.com/" },
  { name: "Dhaka Kitchen", url: "https://dhakakitchen.ca/" },
  { name: "Dhaka Bazar", url: "https://www.dhakabazar.ca/" },
  { name: "SEO Course in Bangladesh", url: "https://seocourseinbangladesh.com/" },
  { name: "SDO Custom Softwares", url: "https://softwaredevelopmentontario.ca" },
  { name: "Website Maintenance Services", url: "https://websitemaintenanceservices.org" },
  { name: "White Label Local SEO", url: "https://whitelabelseolocal.com/" },
  { name: "White Label Web Development", url: "https://whitelabelwebsitedevelopment.com/" },
  { name: "CyberShieldBD", url: "https://cybershieldbd.com/" },
  { name: "UnitScale Digital", url: "https://unitscaledigital.com" },
  { name: "Zaaag System Ltd", url: "https://zaagsys.com/" },
  { name: "Glamhair Studio UK", url: "https://www.glamhairstudio.uk/" },
  { name: "Woodward Barber", url: "https://woodwardbarbers.com/" },
  { name: "Southampton SEO Agency", url: "https://southamptonseo.agency" },
  { name: "St. Lucia Taxi and Tours", url: "https://stluciantaxiandtours.com" },
  { name: "Premium Shawarma", url: "https://premiumshawarma.com/" },
  { name: "Galaviz Barber Shop", url: "https://galavizbarbershop.com/" },
  { name: "Marcs Taxi Service Tours", url: "https://marcstaxiservicetours.com/sitemap.xml" },
  { name: "Marius Taxi and Tours", url: "http://mariustaxiandtours.com/" },
  { name: "Commerdo", url: "https://commerdo.com" },
  { name: "Next.js Development Agency", url: "https://nextjsdevelopment.agency" },
  { name: "That SaaS", url: "https://thatsaas.com" },
  { name: "Estatyc", url: "https://www.estatyc.com" },
  { name: "Amco", url: "https://aqsaalmadena.com" },
  { name: "Dermatology Website Design", url: "https://dermatologywebsitedesign.com/" },
  { name: "Islamarc", url: "https://islamarc.com/" },
  { name: "Launch Craftar", url: "https://launchcraftar.com/" },
  { name: "Leeren Beauty Salon", url: "https://leerenbeautysalon.com" },
  { name: "Riad Al Ashekin", url: "https://riadalashekin.com" },
  { name: "What Generation Am I", url: "https://whatgenerationami.fun/" },
  { name: "Nannu Group", url: "https://nannugroup.com/" },
  { name: "AltitudeCare.net", url: "https://altitudecare.net" },
  { name: "Socanalyst", url: "https://socanalyst.pro" },
  { name: "Thanavimadani", url: "https://thanavimadani.org" },
];

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PartnersPage,
});

function PartnersPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
        Partners
      </h1>
      <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
        {PARTNERS.map((partner) => (
          <li key={partner.url} className="bg-white">
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 px-5 py-4 transition-colors hover:bg-neutral-50"
            >
              <span className="min-w-0">
                <span className="block truncate text-sm font-medium text-neutral-900">
                  {partner.name}
                </span>
                <span className="block truncate text-xs text-neutral-500">
                  {partner.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                </span>
              </span>
              <span aria-hidden className="text-neutral-400">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
