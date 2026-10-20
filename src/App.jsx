import React, { useState } from "react";
import {
  Phone,
  Mail,
  Users,
  CalendarCheck,
  Globe,
  Target,
  Headset,
  Network,
  ShieldCheck,
  Brain,
  Star,
  TrendingUp,
  Quote,
  PlayCircle,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Boxes,
  Cloud,
  CreditCard,
  HeartPulse,
  Factory,
  Database,
  Shield,
  Linkedin,
  Youtube,
  Twitter,
  MapPin,
} from "lucide-react";

/**
 * Callbox homepage \u2014 initial mockup
 * Stack: React + Tailwind CSS (utility classes, arbitrary hex values used directly
 * so this renders without any tailwind.config.js changes) + lucide-react icons.
 *
 * Palette (as given):
 *   accent1 (amber)  #fcbb00
 *   accent2 (sky)    #75c7fa
 *   dominant (paper) #f7f7f8
 *   ink (near-black) #0b0b0d
 *   slate (lighter black) #303035
 *
 * All copy, logos and stats below are SAMPLE content for layout purposes.
 */

/* ----------------------------- sample content ---------------------------- */

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Why Callbox", href: "#why-callbox" },
  { label: "Results", href: "#results" },
  { label: "Industries", href: "#industries" },
  { label: "FAQ", href: "#faq" },
];

const TRUST_LOGOS = ["NORTHPEAK", "VELORA", "ORBITAL", "ARKHAUS", "FINWAVE", "GRIDLINE"];

const ORBIT_SERVICES = [
  { icon: Phone, label: "Calling" },
  { icon: Mail, label: "Email" },
  { icon: Users, label: "ABM" },
  { icon: CalendarCheck, label: "Events" },
  { icon: Globe, label: "Cross-border" },
];

const STATS = [
  { value: "20+", label: "Years in B2B lead generation" },
  { value: "15K+", label: "Companies engaged" },
  { value: "10K+", label: "Campaigns delivered" },
  { value: "60+", label: "Countries reached" },
];

const AWARDS = [
  { icon: Star, label: "Clutch \u2014 Top B2B Agency" },
  { icon: TrendingUp, label: "G2 \u2014 High Performer" },
  { icon: ShieldCheck, label: "DesignRush \u2014 Verified Partner" },
];

const SERVICES = [
  {
    icon: Target,
    title: "Lead Generation",
    desc: "Build a pipeline of sales-ready leads matched to your ideal customer profile.",
  },
  {
    icon: Headset,
    title: "Appointment Setting & SDR",
    desc: "Dedicated SDR pods book qualified meetings straight onto your calendar.",
  },
  {
    icon: Users,
    title: "Account-Based Marketing",
    desc: "Coordinated, multi-touch campaigns that open doors at priority accounts.",
  },
  {
    icon: CalendarCheck,
    title: "Event & Webinar Marketing",
    desc: "Fill the room and the follow-up pipeline, before and after the event.",
  },
  {
    icon: Globe,
    title: "Cross-Border Expansion",
    desc: "Local market know-how to launch outbound in a new region with confidence.",
  },
];

const DIFFERENTIATORS = [
  {
    icon: Brain,
    title: "Human + AI, working together",
    desc: "AI handles the research and signals; real SDRs handle the conversation.",
  },
  {
    icon: Headset,
    title: "A dedicated pod, not a shared queue",
    desc: "A named team learns your pitch and owns your pipeline end to end.",
  },
  {
    icon: Network,
    title: "Every channel, one cadence",
    desc: "Phone, email, LinkedIn and events sequenced into a single outreach rhythm.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance built in",
    desc: "Verified, consent-aware data sourced and handled the right way, everywhere you sell.",
  },
];

const RESULTS = [
  {
    tag: "An enterprise MSP growing in North America",
    stat: "3x",
    statLabel: "qualified meetings in 90 days",
    quote: "Callbox didn\u2019t just hit our target \u2014 they reset what we thought was possible.",
    person: "VP of Sales",
  },
  {
    tag: "An AI SaaS company expanding into APAC and SEA",
    stat: "52",
    statLabel: "appointments, 140 MQLs from one ABM program",
    quote: "We opened three new accounts in our first month of outbound.",
    person: "Head of Growth",
  },
  {
    tag: "An office solutions provider in the United States",
    stat: "57",
    statLabel: "appointments, 41 MQLs in one campaign cycle",
    quote: "Our reps stopped prospecting and started closing.",
    person: "Sales Director",
  },
];

const INDUSTRIES = [
  { icon: Boxes, label: "Software & SaaS" },
  { icon: Shield, label: "Cybersecurity" },
  { icon: Cloud, label: "Cloud & IT" },
  { icon: Brain, label: "AI & Machine Learning" },
  { icon: CreditCard, label: "FinTech" },
  { icon: HeartPulse, label: "Healthcare Tech" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Database, label: "ERP & CRM" },
];

const FAQS = [
  {
    q: "What does Callbox actually do?",
    a: "Callbox is a B2B lead generation agency. We combine AI-driven research and outreach with dedicated human SDRs to book qualified sales meetings for your team.",
  },
  {
    q: "How fast can we see meetings on the calendar?",
    a: "Most programs start generating qualified appointments within the first two to three weeks of launch, once your ICP and messaging are locked.",
  },
  {
    q: "Do we get a dedicated team?",
    a: "Yes. Every engagement is staffed with a named SDR pod that learns your product \u2014 not a rotating shared queue.",
  },
  {
    q: "Which regions do you cover?",
    a: "We run live outbound campaigns across North America, APAC, Europe and Latin America, with local-market expertise in each.",
  },
  {
    q: "Is your contact data compliant?",
    a: "Yes. Our data sourcing and handling practices are built around GDPR, CCPA and regional consent requirements.",
  },
];

/* --------------------------------- shared --------------------------------- */

function Container({ className = "", children }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</div>;
}

function Kicker({ children, light = false }) {
  return (
    <p className={`text-sm font-medium mb-3 ${light ? "text-[#75c7fa]" : "text-[#fcbb00]"}`}>
      {children}
    </p>
  );
}

function PrimaryButton({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#fcbb00] px-6 py-3 text-sm font-semibold text-[#0b0b0d] transition hover:bg-[#e3a800] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fcbb00] ${className}`}
    >
      {children}
    </button>
  );
}

function GhostButton({ children, className = "", dark = false, ...props }) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#75c7fa] ${
        dark
          ? "border-white/25 text-white hover:border-white/50"
          : "border-[#0b0b0d]/15 text-[#0b0b0d] hover:border-[#0b0b0d]/40"
      } ${className}`}
    >
      {children}
    </button>
  );
}

/* ---------------------------------- nav ----------------------------------- */

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[#0b0b0d]/95 backdrop-blur border-b border-white/10">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fcbb00] text-[#0b0b0d] font-bold">
            C
          </span>
          <span className="text-lg font-semibold tracking-tight">Callbox</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/70 hover:text-white transition">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <PrimaryButton>
            Book a Call <ArrowRight className="h-4 w-4" />
          </PrimaryButton>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0b0b0d] px-6 py-4">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-white/80" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <PrimaryButton className="w-full mt-2">Book a Call</PrimaryButton>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------------------- 1. hero + illustration ----------------------- */

function OrbitIllustration() {
  const radius = 150;
  return (
    <div className="relative mx-auto h-[380px] w-[380px]">
      {/* pulse rings */}
      <span className="cb-pulse-ring absolute inset-0 m-auto h-24 w-24 rounded-full border border-[#fcbb00]/40" />
      <span
        className="cb-pulse-ring absolute inset-0 m-auto h-24 w-24 rounded-full border border-[#75c7fa]/40"
        style={{ animationDelay: "1s" }}
      />
      <span
        className="cb-pulse-ring absolute inset-0 m-auto h-24 w-24 rounded-full border border-[#fcbb00]/30"
        style={{ animationDelay: "2s" }}
      />

      {/* dashed orbit path */}
      <span className="absolute inset-0 m-auto h-[300px] w-[300px] rounded-full border border-dashed border-white/15" />

      {/* center mark */}
      <div className="absolute inset-0 m-auto flex h-24 w-24 flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#fcbb00] to-[#f5a800] text-[#0b0b0d] shadow-[0_0_40px_rgba(252,187,0,0.35)]">
        <Phone className="h-6 w-6" />
        <span className="mt-1 text-xs font-bold tracking-tight">Callbox</span>
      </div>

      {/* orbiting service icons */}
      <div className="cb-orbit absolute inset-0 m-auto h-[300px] w-[300px]">
        {ORBIT_SERVICES.map(({ icon: Icon, label }, i) => {
          const angle = (360 / ORBIT_SERVICES.length) * i;
          return (
            <div
              key={label}
              className="absolute left-1/2 top-1/2 h-0 w-0"
              style={{ transform: `rotate(${angle}deg) translate(${radius}px)` }}
            >
              <div className="cb-orbit-counter -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-14 w-14 flex-col items-center justify-center gap-0.5 rounded-2xl border border-white/10 bg-[#161619] shadow-lg">
                  <Icon className="h-5 w-5 text-[#75c7fa]" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#0b0b0d]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <Container className="relative grid grid-cols-1 items-center gap-16 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Real conversations. Smarter pipeline.
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/70">
            Callbox pairs dedicated SDRs with AI-driven data and outreach to book
            qualified meetings for B2B teams, across every channel and region.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <PrimaryButton>
              Book a Call <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
            <GhostButton dark>See how it works</GhostButton>
          </div>

          <div className="mt-14">
            <p className="text-xs text-white/40">Trusted by sales teams at</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3">
              {TRUST_LOGOS.map((name) => (
                <span key={name} className="text-sm font-semibold tracking-wide text-white/35">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <OrbitIllustration />
        </div>
      </Container>
    </section>
  );
}

/* --------------------------- 2. proof in numbers --------------------------- */

function ProofStats() {
  return (
    <section className="bg-[#f7f7f8] py-20">
      <Container>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-bold tracking-tight text-[#0b0b0d] sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm text-[#303035]/70">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-4 border-t border-[#0b0b0d]/10 pt-10">
          {AWARDS.map((a) => (
            <div
              key={a.label}
              className="flex items-center gap-2 rounded-full border border-[#0b0b0d]/10 bg-white px-4 py-2"
            >
              <a.icon className="h-4 w-4 text-[#fcbb00]" />
              <span className="text-xs font-medium text-[#303035]">{a.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------- 3. services ------------------------------ */

function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24">
      <Container>
        <div className="max-w-xl">
          <Kicker>What we do</Kicker>
          <h2 className="text-3xl font-bold tracking-tight text-[#0b0b0d] sm:text-4xl">
            Everything you need to start more sales conversations.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-[#0b0b0d]/10 p-7 transition hover:border-[#fcbb00]/60 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0b0b0d]">
                <s.icon className="h-5 w-5 text-[#fcbb00]" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[#0b0b0d]">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#303035]/75">{s.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#0b0b0d]/60 group-hover:text-[#0b0b0d]">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------ 4. why callbox ------------------------------ */

function WhyCallbox() {
  return (
    <section id="why-callbox" className="bg-[#303035] py-24">
      <Container>
        <div className="max-w-xl">
          <Kicker light>Why Callbox</Kicker>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Human judgment, backed by AI at scale.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {DIFFERENTIATORS.map((d) => (
            <div key={d.title} className="flex gap-5">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/5">
                <d.icon className="h-5 w-5 text-[#75c7fa]" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">{d.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------- 5. results -------------------------------- */

function ResultsSection() {
  return (
    <section id="results" className="bg-[#f7f7f8] py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Kicker>Results that speak</Kicker>
            <h2 className="text-3xl font-bold tracking-tight text-[#0b0b0d] sm:text-4xl">
              Pipeline outcomes from real Callbox programs.
            </h2>
          </div>
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#0b0b0d]">
            <PlayCircle className="h-5 w-5 text-[#fcbb00]" />
            Watch client stories
          </button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {RESULTS.map((r) => (
            <div key={r.tag} className="flex flex-col rounded-2xl bg-white p-8 shadow-[0_2px_20px_rgba(0,0,0,0.05)]">
              <p className="text-sm text-[#0b0b0d]/50">{r.tag}</p>
              <p className="mt-4 text-4xl font-bold tracking-tight text-[#0b0b0d]">{r.stat}</p>
              <p className="mt-1 text-sm text-[#303035]/70">{r.statLabel}</p>
              <div className="mt-6 flex-1 border-t border-[#0b0b0d]/10 pt-6">
                <Quote className="h-4 w-4 text-[#75c7fa]" />
                <p className="mt-2 text-sm italic leading-relaxed text-[#303035]">&ldquo;{r.quote}&rdquo;</p>
                <p className="mt-3 text-xs font-semibold text-[#0b0b0d]/60">{r.person}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------- 6. industries ------------------------------ */

function IndustriesSection() {
  return (
    <section id="industries" className="bg-white py-24">
      <Container>
        <div className="max-w-xl">
          <Kicker>Industries we serve</Kicker>
          <h2 className="text-3xl font-bold tracking-tight text-[#0b0b0d] sm:text-4xl">
            Deep campaign experience across B2B tech.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-[#0b0b0d]/10 px-4 py-8 text-center transition hover:border-[#75c7fa] hover:bg-[#75c7fa]/5"
            >
              <ind.icon className="h-6 w-6 text-[#0b0b0d]" />
              <span className="text-sm font-medium text-[#303035]">{ind.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------- 7. faq ---------------------------------- */

function FAQItem({ item, open, onToggle }) {
  return (
    <div className="border-b border-[#0b0b0d]/10 py-6">
      <button
        className="flex w-full items-center justify-between gap-6 text-left"
        onClick={onToggle}
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-[#0b0b0d]">{item.q}</span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-[#0b0b0d]/50 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#303035]/75">{item.a}</p>}
    </div>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section id="faq" className="bg-[#f7f7f8] py-24">
      <Container className="max-w-3xl">
        <Kicker>FAQ</Kicker>
        <h2 className="text-3xl font-bold tracking-tight text-[#0b0b0d] sm:text-4xl">
          Your questions, answered.
        </h2>

        <div className="mt-10">
          {FAQS.map((item, i) => (
            <FAQItem
              key={item.q}
              item={item}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------- 8. final cta -------------------------------- */

function FinalCTA() {
  return (
    <section className="bg-[#0b0b0d] py-24">
      <Container className="text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to fill your pipeline?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-white/60">
          Book a free 30-minute strategy call and see what a dedicated SDR pod
          could do for your pipeline.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <PrimaryButton>
            Book a Call <ArrowRight className="h-4 w-4" />
          </PrimaryButton>
          <GhostButton dark>Talk to Sales</GhostButton>
        </div>
        <p className="mt-6 text-xs text-white/35">No contracts. No setup fees. Cancel anytime.</p>
      </Container>
    </section>
  );
}

/* --------------------------------- footer ----------------------------------- */

function Footer() {
  return (
    <footer className="bg-[#0b0b0d] border-t border-white/10 py-14">
      <Container>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fcbb00] text-[#0b0b0d] font-bold">
                C
              </span>
              <span className="text-lg font-semibold tracking-tight">Callbox</span>
            </div>
            <p className="mt-4 flex items-center gap-2 text-sm text-white/40">
              <MapPin className="h-4 w-4" /> Global B2B lead generation
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Services</p>
            <ul className="mt-4 space-y-2 text-sm text-white/50">
              <li>Lead Generation</li>
              <li>Appointment Setting</li>
              <li>ABM</li>
              <li>Event Marketing</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Company</p>
            <ul className="mt-4 space-y-2 text-sm text-white/50">
              <li>About Us</li>
              <li>Careers</li>
              <li>Case Studies</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Follow</p>
            <div className="mt-4 flex gap-3">
              <Linkedin className="h-5 w-5 text-white/50" />
              <Twitter className="h-5 w-5 text-white/50" />
              <Youtube className="h-5 w-5 text-white/50" />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/35">
          {"\u00a9 2026 Callbox Inc. Mockup for internal review \u2014 sample content only."}
        </div>
      </Container>
    </footer>
  );
}

/* ---------------------------------- app ------------------------------------- */

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f7f8] font-sans text-[#0b0b0d] antialiased">
      <style>{`
        .cb-orbit {
          animation: cb-orbit-spin 40s linear infinite;
        }
        .cb-orbit-counter {
          animation: cb-orbit-counter-spin 40s linear infinite;
        }
        .cb-pulse-ring {
          animation: cb-pulse 3s ease-out infinite;
        }
        @keyframes cb-orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes cb-orbit-counter-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes cb-pulse {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(3.2); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .cb-orbit, .cb-orbit-counter, .cb-pulse-ring {
            animation: none !important;
          }
        }
      `}</style>

      <Nav />
      <main>
        <Hero />
        <ProofStats />
        <ServicesSection />
        <WhyCallbox />
        <ResultsSection />
        <IndustriesSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
