import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/tamal-portrait.jpg";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Tamal Roy — Full-Stack Software Developer" },
      { name: "description", content: "Full-stack developer with 7+ years building mission-critical web applications, ERP systems, and APIs. Based in Klagenfurt, Austria." },
    ],
  }),
});

const experience = [
  {
    role: "Information Systems Developer",
    company: "IUCN — International Union for Conservation of Nature",
    period: "Sep 2022 — Oct 2025",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Core member of the HQ Global Information Systems group, maintaining web apps for IUCN's network of 1,400+ member organizations.",
      "Led full migration of the IUCN Library System from Drupal 7 to Drupal 10 with zero data loss and measurable performance gains.",
      "Owned the IUCN Accounts Module end-to-end across reliability, new business requirements, and platform integrations.",
      "Represented the GIS team at HQ strategy conferences in Gland, Switzerland (2022, 2024).",
    ],
  },
  {
    role: "Software Developer",
    company: "Air Alliance Ltd. (UPS Bangladesh)",
    period: "May 2019 — Aug 2022",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Designed and deployed a nationwide API-based Android app replacing legacy TUNDRA handheld devices for real-time parcel tracking.",
      "Built upsbd-pickup.com from scratch, letting customers self-schedule pickups and reducing call center load.",
      "Delivered ERP enhancements, API integrations, and custom reporting tools for Customer Care and Operations.",
      "Awarded Employee of the Quarter for the Expedited Tracking Tool.",
    ],
  },
  {
    role: "Software Developer",
    company: "B-Cause Bangladesh Ltd.",
    period: "May 2017 — May 2019",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Contributed to the full SDLC of a multilingual API-based ERP for the translation industry across Japan, China, Korea, and the Philippines.",
      "Built and optimized multilingual platforms: transpro.com.au, transpro.cn, b-cause-erp.com.",
      "Managed servers in Bangladesh, Japan, and Germany; handled deployments and cross-region security.",
      "Mentored junior and intern developers; led overseas client communication.",
    ],
  },
];

const skills = {
  Backend: ["PHP", "Python", "C#", "Java", "CodeIgniter", "Laravel", "ASP.NET", "Drupal"],
  Frontend: ["JavaScript", "Angular", "AJAX", "CSS", "TWIG", "JSON", "XML", "XSLT"],
  Databases: ["MySQL", "PostgreSQL", "MS SQL Server", "Oracle", "CouchDB"],
  Mobile: ["Android (Java)", "Google APIs", "REST integration"],
  DevOps: ["Git", "Linux/Windows admin", "Cross-region deployments"],
  Other: ["UML", "ERP systems", "Agile / SDLC", "API design", "Multilingual platforms"],
};

const projects = [
  { name: "Library System Migration", detail: "Drupal 7 → Drupal 10 migration with zero data loss for IUCN's global member network." },
  { name: "TPD (Tundra Pickup & Delivery) Mobile Application", detail: "Engineered a nationwide Android solution for UPS to replace legacy TUNDRA devices, modernizing the entire pickup and delivery workflow. The application integrated real-time API synchronization and barcode scanning, allowing customers to track parcels live during field operations. This automation significantly increased logistical efficiency and remains a core component of the UPS courier business in Bangladesh." },
  { name: "UPS BD Online Pickup", detail: "Customer-facing self-service pickup scheduler at upsbd-pickup.com." },
  { name: "Multilingual Translation ERP", detail: "API-based ERP serving translation clients across Japan, China, Korea, and the Philippines." },
  { name: "Embedded Android Applications", detail: "Multiple embedded Android applications built for field operations and integrated hardware workflows." },
  { name: "Grameenphone Field Marketing Automation", detail: "Developed a field-service Android app to manage the nationwide deployment of billboards and branding assets for Grameenphone. The system allows team leads to assign daily retail routes while agents track inventory and tasks in real-time. By requiring geo-tagged photo confirmation for every shop visit, the application ensures high execution standards and provides a transparent audit trail for marketing campaigns." },
  { name: "Samsung Field Marketing Automation", detail: "Engineered an API-driven Android application for Samsung's nationwide operations to digitize complex field marketing and logistics. Integrated GPS geo-fencing for verified attendance and route tracking, ensuring full visibility into team movements and shop visits. The solution features a real-time inventory and task management system where agents receive supervisor assignments and track marketing collateral on-site. To ensure compliance, implemented photo-proof confirmation with location-stamping, providing a transparent audit trail from morning check-in to final product placement." },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />

      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-sm">
          <a href="#top" className="font-display font-bold text-lg tracking-tight">Tamal Roy</a>
          <div className="hidden md:flex items-center gap-8 text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <a href="mailto:tamaldx@gmail.com" className="text-primary hover:opacity-80 transition-opacity">tamaldx@gmail.com</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="pt-40 pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_auto] gap-12 items-end">
          <div>
            <p className="font-mono text-xs tracking-widest text-primary uppercase mb-6">Klagenfurt am Wörthersee · Austria</p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8">
              Full-stack developer<br />
              building <span className="text-primary">mission-critical</span><br />
              web platforms.
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
              7+ years shipping ERP systems, APIs, and CMS platforms for international organizations including
              IUCN, B-cause Inc and UPS. Currently pursuing an MSc in Communication Engineering at FH Kärnten.
            </p>
          </div>
          <div className="relative w-48 md:w-56 shrink-0">
            <div className="absolute inset-0 translate-x-3 translate-y-3 bg-primary/30 rounded-md" />
            <img src={portrait} alt="Portrait of Tamal Roy" className="relative rounded-md grayscale hover:grayscale-0 transition-all duration-500 w-full" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24 border-t border-border/60">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="font-mono text-xs tracking-widest text-muted-foreground uppercase">01 / Profile</div>
          <div className="md:col-span-2 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p className="text-foreground text-2xl font-display font-semibold leading-snug">
              Results-driven full-stack developer seeking a software role in the DACH region where backend
              and CMS expertise meet high-impact digital products.
            </p>
            <p>
              I work across the stack — from Drupal, Java, and .NET backends to Android field applications,
              multilingual ERP platforms, and the database tier. My strongest signal is ownership: a
              zero-data-loss platform migration serving 1,400+ organisations globally, API-driven Android
              field apps with GPS geo-fencing, real-time task management, and photo-proof audit trails for
              nationwide operations, and production systems that simply could not afford to go down. I ship
              with confidence using CI/CD pipelines via GitLab CI and GitHub Actions.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <div className="font-mono text-xs text-primary uppercase tracking-widest mb-2">Now</div>
                <div className="text-foreground">MSc, FH Kärnten</div>
                <div className="text-sm">Communication Engineering</div>
              </div>
              <div>
                <div className="font-mono text-xs text-primary uppercase tracking-widest mb-2">Languages</div>
                <div className="text-foreground">EN C2 · DE A1.2 · BN Native</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="px-6 py-24 border-t border-border/60">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="font-mono text-xs tracking-widest text-muted-foreground uppercase">02 / Experience</div>
            <h2 className="md:col-span-2 text-4xl md:text-5xl">Seven years across three<br />engineering organizations.</h2>
          </div>
          <div className="space-y-2">
            {experience.map((job) => (
              <article key={job.company} className="grid md:grid-cols-3 gap-8 py-10 border-t border-border/60 group">
                <div>
                  <div className="font-mono text-xs text-primary tracking-widest">{job.period}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{job.location}</div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl md:text-3xl mb-1">{job.role}</h3>
                  <div className="text-muted-foreground mb-5">{job.company}</div>
                  <ul className="space-y-2 text-muted-foreground">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-primary mt-2 shrink-0">—</span>
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="px-6 py-24 border-t border-border/60">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="font-mono text-xs tracking-widest text-muted-foreground uppercase">03 / Selected work</div>
            <h2 className="md:col-span-2 text-4xl md:text-5xl">Things I've built.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border/60 border border-border/60">
            {projects.map((p) => (
              <div key={p.name} className="bg-background p-8 hover:bg-surface transition-colors">
                <div className="font-display text-2xl font-semibold mb-3">{p.name}</div>
                <p className="text-muted-foreground leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 py-24 border-t border-border/60">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="font-mono text-xs tracking-widest text-muted-foreground uppercase">04 / Toolkit</div>
            <h2 className="md:col-span-2 text-4xl md:text-5xl">Stack & capabilities.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([cat, items]) => (
              <div key={cat} className="border-t border-border/60 pt-5">
                <div className="font-mono text-xs text-primary uppercase tracking-widest mb-4">{cat}</div>
                <div className="flex flex-wrap gap-x-3 gap-y-2 text-foreground">
                  {items.map((s) => <span key={s} className="text-sm">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-32 border-t border-border/60">
        <div className="max-w-6xl mx-auto">
          <div className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-8">05 / Contact</div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl mb-12 leading-[0.95]">
            Let's build something<br />
            <span className="text-primary">reliable</span> together.
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl">
            <a href="mailto:tamaldx@gmail.com" className="group border border-border/60 p-6 hover:border-primary transition-colors">
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">Email</div>
              <div className="text-foreground group-hover:text-primary transition-colors">tamaldx@gmail.com</div>
            </a>
            <a href="tel:+4369020085160" className="group border border-border/60 p-6 hover:border-primary transition-colors">
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">Phone</div>
              <div className="text-foreground group-hover:text-primary transition-colors">+43 690 20085160</div>
            </a>
            <a href="https://linkedin.com/in/tamalroy" target="_blank" rel="noreferrer" className="group border border-border/60 p-6 hover:border-primary transition-colors">
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">LinkedIn</div>
              <div className="text-foreground group-hover:text-primary transition-colors">in/tamalroy</div>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Tamal Roy. Klagenfurt, Austria.</div>
          <div className="font-mono text-xs tracking-widest uppercase">Available for opportunities in DACH</div>
        </div>
      </footer>
    </div>
  );
}
