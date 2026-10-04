import { useEffect, useState, type FormEvent } from "react";
import {
  ShieldCheck,
  FileCheck2,
  AlertTriangle,
  CheckCircle2,
  CircleAlert,
  XCircle,
  Building2,
  Lock,
  Users,
  Activity,
  Mail,
  Share2,
  KeyRound,
  UserX,
  Smartphone,
  ScrollText,
  ArrowRight,
  Gauge,
  FileText,
  ListChecks,
  CalendarClock,
  Tag,
  Sun,
  Moon,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <DashboardPreview />
        <Collects />
        <Workflow />
        <Trust />
        <Pilot />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-navy text-navy-foreground">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <span className="text-sm font-semibold tracking-tight text-navy">MSP Proof</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#problem" className="hover:text-foreground">Problem</a>
          <a href="#solution" className="hover:text-foreground">Solution</a>
          <a href="#workflow" className="hover:text-foreground">For MSPs</a>
          <a href="#pilot" className="hover:text-foreground">Pilot</a>
          <a href="/guides/best-cmmc-compliance-software/" className="hover:text-foreground">Guides</a>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#sample"
            className="hidden rounded-md border border-border px-3 py-1.5 text-sm font-medium text-foreground hover:bg-secondary sm:inline-flex"
          >
            View sample report
          </a>
          <a
            href="#pilot-form"
            className="inline-flex items-center gap-1.5 rounded-md bg-navy px-3 py-1.5 text-sm font-medium text-navy-foreground hover:opacity-95"
          >
            Join the pilot <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-foreground hover:bg-secondary"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,theme(colors.slate.100),transparent_60%)]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            CMMC evidence automation for MSPs
          </div>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-navy md:text-5xl lg:text-6xl">
            CMMC evidence reports from Microsoft 365 in hours, not weeks.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            MSP Proof scans Microsoft 365 and Entra configurations, maps findings to CMMC / NIST
            800-171 evidence needs, and generates client-ready assessment packets MSPs can
            white-label.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#pilot-form"
              className="inline-flex items-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-medium text-navy-foreground shadow-sm hover:opacity-95"
            >
              Join the MSP pilot <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#sample"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary"
            >
              View sample report
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Lock className="h-3.5 w-3.5" /> Read-only Microsoft Graph access</span>
            <span className="inline-flex items-center gap-1.5"><FileCheck2 className="h-3.5 w-3.5" /> NIST 800-171 control mapping</span>
            <span className="inline-flex items-center gap-1.5"><Building2 className="h-3.5 w-3.5" /> Multi-tenant by default</span>
          </div>
        </div>
        <div className="lg:pl-6">
          <HeroReportCard />
        </div>
      </div>
    </section>
  );
}

function HeroReportCard() {
  return (
    <div className="rounded-xl border border-border bg-card p-1 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.25)]">
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <div className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-border" />
            <span className="h-2 w-2 rounded-full bg-border" />
            <span className="h-2 w-2 rounded-full bg-border" />
          </div>
          <span className="ml-2 font-mono">mspproof.app / tenants / acme-defense</span>
        </div>
        <span className="rounded-full bg-success/10 px-2 py-0.5 text-[10px] font-medium text-success">LIVE SCAN</span>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-wide text-muted-foreground">Tenant</div>
            <div className="mt-0.5 text-sm font-semibold text-navy">Acme Defense Industries</div>
          </div>
          <div className="text-right">
            <div className="text-xs uppercase tracking-wide text-muted-foreground">Readiness</div>
            <div className="text-2xl font-semibold text-navy">82<span className="text-base text-muted-foreground">/100</span></div>
          </div>
        </div>
        <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-secondary">
          <div className="h-full w-[82%] rounded-full bg-success" />
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2 text-sm">
          <ControlRow status="ready" label="MFA enforced (all admins)" code="IA.L2-3.5.3" />
          <ControlRow status="ready" label="Audit logging enabled" code="AU.L2-3.3.1" />
          <ControlRow status="review" label="Conditional Access gaps" code="AC.L2-3.1.12" />
          <ControlRow status="gap" label="External sharing unrestricted" code="AC.L2-3.1.3" />
          <ControlRow status="ready" label="Admin role assignments" code="AC.L2-3.1.5" />
          <ControlRow status="review" label="Inactive users (3)" code="AC.L2-3.1.1" />
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
          <span>Evidence packet · 47 artifacts · timestamped</span>
          <span className="inline-flex items-center gap-1 font-medium text-navy">
            Export PDF <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </div>
  );
}

type Status = "ready" | "review" | "gap";
function ControlRow({ status, label, code }: { status: Status; label: string; code: string }) {
  const map = {
    ready: { icon: <CheckCircle2 className="h-4 w-4 text-success" />, bg: "bg-success/5", ring: "ring-success/20" },
    review: { icon: <CircleAlert className="h-4 w-4 text-warning" />, bg: "bg-warning/5", ring: "ring-warning/25" },
    gap: { icon: <XCircle className="h-4 w-4 text-destructive" />, bg: "bg-destructive/5", ring: "ring-destructive/20" },
  } as const;
  const s = map[status];
  return (
    <div className={`flex items-start gap-2 rounded-md ${s.bg} px-2.5 py-2 ring-1 ${s.ring}`}>
      <div className="mt-0.5">{s.icon}</div>
      <div className="min-w-0">
        <div className="truncate text-[13px] font-medium text-foreground">{label}</div>
        <div className="font-mono text-[10px] text-muted-foreground">{code}</div>
      </div>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`border-b border-border ${className}`}>
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {eyebrow}
            </div>
          )}
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy md:text-4xl">{title}</h2>
          {description && <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>}
        </div>
        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
}

function Problem() {
  return (
    <Section
      id="problem"
      eyebrow="The problem"
      title="Evidence collection eats your engineers."
      description="For every CMMC client, MSPs spend hours collecting screenshots, exports, logs, MFA settings, admin roles, audit settings, and policy evidence — then formatting it into something an assessor or consultant can review."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { t: "Manual screenshots", d: "Engineers click through admin centers gathering proof of every setting." },
          { t: "Stale exports", d: "CSVs and logs go out of date before the assessment date arrives." },
          { t: "Inconsistent packets", d: "Every client packet looks different. Reviewers ask for the same things twice." },
        ].map((x) => (
          <div key={x.t} className="rounded-lg border border-border bg-card p-6">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <h3 className="mt-4 text-base font-semibold text-navy">{x.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{x.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Solution() {
  const steps = [
    { i: "01", t: "Connect", d: "Authorize a read-only Microsoft Graph connection per tenant. No agents to install." },
    { i: "02", t: "Scan", d: "MSP Proof pulls configuration evidence across identity, audit, mail, sharing, and devices." },
    { i: "03", t: "Map", d: "Each finding is mapped to CMMC Level 2 / NIST 800-171 control families with source data and timestamps." },
    { i: "04", t: "Deliver", d: "Generate a white-labeled evidence packet with gaps highlighted and remediation notes." },
  ];
  return (
    <Section
      id="solution"
      eyebrow="The solution"
      title="From tenant settings to a client-ready evidence packet."
      description="MSP Proof connects to Microsoft 365, pulls configuration evidence, maps it to control requirements, and generates clean reports with gaps, source data, timestamps, and remediation notes."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div key={s.i} className="rounded-lg border border-border bg-card p-6">
            <div className="font-mono text-xs text-muted-foreground">{s.i}</div>
            <h3 className="mt-3 text-base font-semibold text-navy">{s.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function DashboardPreview() {
  const cards = [
    { icon: Gauge, label: "Tenant readiness score", value: "82/100", hint: "+6 since last scan", tone: "success" as const },
    { icon: FileText, label: "Evidence collected", value: "1,284", hint: "artifacts across 12 tenants", tone: "neutral" as const },
    { icon: ListChecks, label: "Controls mapped", value: "110 / 110", hint: "NIST 800-171 r2", tone: "success" as const },
    { icon: AlertTriangle, label: "Gaps found", value: "7", hint: "3 high · 4 medium", tone: "warning" as const },
    { icon: FileCheck2, label: "Report generated", value: "Today, 09:14", hint: "v3 · 47 pages · signed", tone: "neutral" as const },
    { icon: CalendarClock, label: "Renewal due", value: "94 days", hint: "Acme Defense · Level 2", tone: "neutral" as const },
  ];
  return (
    <section id="sample" className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              The dashboard
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy md:text-4xl">
              One view across every defense contractor client.
            </h2>
          </div>
          <span className="rounded-md border border-border bg-card px-3 py-1.5 font-mono text-xs text-muted-foreground">
            12 tenants · last sync 2 min ago
          </span>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => {
            const Icon = c.icon;
            const tone =
              c.tone === "success"
                ? "text-success"
                : c.tone === "warning"
                  ? "text-warning"
                  : "text-navy";
            return (
              <div key={c.label} className="rounded-lg border border-border bg-card p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{c.label}</span>
                  <Icon className={`h-4 w-4 ${tone}`} />
                </div>
                <div className={`mt-3 text-3xl font-semibold tracking-tight ${tone}`}>{c.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{c.hint}</div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-lg border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <h3 className="text-sm font-semibold text-navy">Tenants</h3>
              <span className="text-xs text-muted-foreground">Sorted by readiness</span>
            </div>
            <div className="divide-y divide-border">
              {[
                { name: "Acme Defense Industries", score: 82, gaps: 2, status: "ready" as Status },
                { name: "Cardinal Aerospace LLC", score: 74, gaps: 4, status: "review" as Status },
                { name: "Northpoint Munitions", score: 91, gaps: 1, status: "ready" as Status },
                { name: "Beacon Systems (GCC High)", score: 58, gaps: 9, status: "gap" as Status },
                { name: "Ironforge Robotics", score: 88, gaps: 1, status: "ready" as Status },
              ].map((t) => (
                <div key={t.name} className="grid grid-cols-12 items-center gap-3 px-5 py-3.5 text-sm">
                  <div className="col-span-5 truncate font-medium text-foreground">{t.name}</div>
                  <div className="col-span-4">
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                      <div
                        className={`h-full rounded-full ${
                          t.status === "ready"
                            ? "bg-success"
                            : t.status === "review"
                              ? "bg-warning"
                              : "bg-destructive"
                        }`}
                        style={{ width: `${t.score}%` }}
                      />
                    </div>
                  </div>
                  <div className="col-span-1 text-right font-mono text-xs text-muted-foreground">{t.score}</div>
                  <div className="col-span-2 text-right">
                    <StatusPill status={t.status} count={t.gaps} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-5">
            <h3 className="text-sm font-semibold text-navy">Recent activity</h3>
            <ul className="mt-4 space-y-4 text-sm">
              <ActivityItem text="Evidence packet exported — Acme Defense" hint="2 min ago · 47 pages" status="ready" />
              <ActivityItem text="Conditional Access gap detected — Cardinal" hint="14 min ago · AC.L2-3.1.12" status="gap" />
              <ActivityItem text="3 inactive users flagged — Beacon Systems" hint="32 min ago · review" status="review" />
              <ActivityItem text="Audit log retention verified — Ironforge" hint="1 hr ago · AU.L2-3.3.8" status="ready" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatusPill({ status, count }: { status: Status; count: number }) {
  const map = {
    ready: "bg-success/10 text-success",
    review: "bg-warning/15 text-warning",
    gap: "bg-destructive/10 text-destructive",
  } as const;
  const label = status === "ready" ? "Ready" : status === "review" ? "Needs review" : "Gap";
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium ${map[status]}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {label} · {count}
    </span>
  );
}

function ActivityItem({ text, hint, status }: { text: string; hint: string; status: Status }) {
  const dot =
    status === "ready" ? "bg-success" : status === "review" ? "bg-warning" : "bg-destructive";
  return (
    <li className="flex gap-3">
      <span className={`mt-1.5 h-2 w-2 flex-none rounded-full ${dot}`} />
      <div>
        <div className="text-[13px] font-medium text-foreground">{text}</div>
        <div className="text-xs text-muted-foreground">{hint}</div>
      </div>
    </li>
  );
}

function Collects() {
  const items = [
    { icon: KeyRound, t: "MFA status", d: "Per-user and admin MFA enforcement, methods, and exceptions." },
    { icon: Lock, t: "Conditional Access policies", d: "Policy coverage, gaps, named locations, and exclusions." },
    { icon: Users, t: "Admin role assignments", d: "Privileged role inventory, eligible vs active, PIM usage." },
    { icon: Activity, t: "Audit logging settings", d: "Unified audit log status, retention, and mailbox auditing." },
    { icon: Mail, t: "Mailbox forwarding rules", d: "External auto-forwarding, transport rules, and risky inbox rules." },
    { icon: Share2, t: "External sharing settings", d: "SharePoint, OneDrive, and Teams guest sharing posture." },
    { icon: ShieldCheck, t: "Encryption configuration", d: "BitLocker, OneDrive encryption, and message encryption defaults." },
    { icon: UserX, t: "Inactive users", d: "Stale accounts, unused licenses, and dormant guest identities." },
    { icon: AlertTriangle, t: "Risky sign-ins", d: "Identity Protection signals, MFA failures, and unusual locations." },
    { icon: Smartphone, t: "Device compliance signals", d: "Intune enrollment, compliance state, and OS baseline drift." },
  ];
  return (
    <Section
      id="collects"
      eyebrow="What it collects"
      title="Configuration evidence, pulled and timestamped."
      description="Every artifact captures the source query, the tenant, and the time of collection — so an assessor can trace any finding back to its origin."
    >
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {items.map((x) => {
          const Icon = x.icon;
          return (
            <div key={x.t} className="flex items-start gap-3 rounded-lg border border-border bg-card p-5">
              <div className="flex h-9 w-9 flex-none items-center justify-center rounded-md bg-secondary text-navy">
                <Icon className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-navy">{x.t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{x.d}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function Workflow() {
  const items = [
    { icon: Building2, t: "Multi-tenant dashboard", d: "One pane for every contractor client. Sort by readiness, renewal, or gaps." },
    { icon: Tag, t: "White-label reports", d: "Your logo, your colors, your cover page. The packet is yours." },
    { icon: Gauge, t: "Client readiness scores", d: "A consistent score per tenant so you can show progress over time." },
    { icon: FileText, t: "Evidence packet export", d: "PDF + supporting CSV/JSON, structured by control family." },
    { icon: ListChecks, t: "Remediation checklist", d: "Each gap comes with a concrete, MSP-ready remediation task." },
    { icon: CalendarClock, t: "Renewal tracking", d: "Know which assessments expire when, before clients have to ask." },
  ];
  return (
    <Section
      id="workflow"
      eyebrow="Built for MSP workflow"
      title="Fits the way you already run your CMMC practice."
    >
      <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {items.map((x) => {
          const Icon = x.icon;
          return (
            <div key={x.t} className="bg-card p-6">
              <Icon className="h-5 w-5 text-navy" />
              <h3 className="mt-4 text-base font-semibold text-navy">{x.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{x.d}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function Trust() {
  return (
    <section id="trust" className="border-b border-border bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-3 md:py-24">
        <div className="md:col-span-1">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-foreground/60">
            What MSP Proof is — and isn't
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            We don't replace assessors. We make their job easier.
          </h2>
        </div>
        <div className="md:col-span-2">
          <p className="text-lg leading-relaxed text-navy-foreground/85">
            MSP Proof does not replace assessors or consultants. It reduces evidence collection work
            and helps MSPs prepare cleaner CMMC documentation. Certification is granted by qualified
            third parties — our job is to make sure your clients walk in with a packet that doesn't
            waste anyone's time.
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-navy-foreground/85 sm:grid-cols-2">
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-success" /> Read-only access to tenant configuration</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-success" /> Evidence sourced, timestamped, and traceable</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-success" /> Mapped to CMMC Level 2 / NIST 800-171 r2</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-success" /> No claims of guaranteed certification</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Pilot() {
  return (
    <Section
      id="pilot"
      eyebrow="Pilot program"
      title="Looking for 10 MSPs managing 10+ CMMC / NIST 800-171 clients."
      description="We're working closely with a small group of design partners to shape MSP Proof around how real defense-focused MSPs operate."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { t: "Free pilot scans", d: "Run MSP Proof across your contractor tenants at no cost during the pilot." },
          { t: "Founder support", d: "Direct line to the founders. We treat your feedback as the roadmap." },
          { t: "White-label sample reports", d: "Ship branded evidence packets to your clients from day one." },
          { t: "Early partner pricing", d: "Lock in founding-partner pricing before public launch." },
        ].map((x) => (
          <div key={x.t} className="rounded-lg border border-border bg-card p-6">
            <ScrollText className="h-5 w-5 text-navy" />
            <h3 className="mt-4 text-base font-semibold text-navy">{x.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{x.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

// Web3Forms access key (public by design). Set PUBLIC_WEB3FORMS_KEY in the
// Cloudflare env; Astro inlines it at build. Unset → submit shows an error
// rather than a fake "received".
const WEB3FORMS_ACCESS_KEY = import.meta.env.PUBLIC_WEB3FORMS_KEY as string | undefined;

function LeadForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const submitted = status === "success";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      setError("Applications can't be submitted right now. Please try again later.");
      return;
    }
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New MSP Proof pilot application");
    formData.append("from_name", "MSP Proof pilot form");

    setStatus("loading");
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please try again in a moment.");
    }
  }

  return (
    <section id="pilot-form" className="border-b border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-24 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Apply to the pilot
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy md:text-4xl">
            Tell us about your MSP.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We'll get back within two business days. If you're a fit, we'll set up a working session
            and provision a pilot tenant connection together.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-success" /> Read-only Microsoft Graph access</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-success" /> No long-term commitment</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-success" /> White-label sample report on call #1</li>
          </ul>
        </div>
        <div className="lg:col-span-3">
          {submitted ? (
            <div className="rounded-xl border border-border bg-card p-10 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-success/10">
                <CheckCircle2 className="h-6 w-6 text-success" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-navy">Application received.</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We'll reach out within two business days to schedule a working session.
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="rounded-xl border border-border bg-card p-6 md:p-8"
            >
              {/* honeypot */}
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Jordan Smith" required />
                <Field label="Company" name="company" placeholder="Northstar IT Partners" required />
                <Field label="Work email" name="email" type="email" placeholder="you@company.com" required />
                <Field
                  label="Defense contractor clients"
                  name="clients"
                  type="number"
                  placeholder="e.g. 12"
                  required
                  min={0}
                />
                <div className="sm:col-span-2">
                  <span className="text-sm font-medium text-foreground">Do you manage Microsoft 365 GCC High tenants?</span>
                  <div className="mt-2 flex gap-3">
                    <label className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground hover:bg-secondary has-[:checked]:border-navy has-[:checked]:bg-navy has-[:checked]:text-navy-foreground">
                      <input type="radio" name="gcc" value="yes" className="sr-only" defaultChecked />
                      Yes
                    </label>
                    <label className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground hover:bg-secondary has-[:checked]:border-navy has-[:checked]:bg-navy has-[:checked]:text-navy-foreground">
                      <input type="radio" name="gcc" value="no" className="sr-only" />
                      No
                    </label>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your CMMC client mix and what you'd want from a pilot."
                    className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs text-muted-foreground">
                  By submitting, you agree to be contacted about the MSP Proof pilot.
                </p>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-2 rounded-md bg-navy px-5 py-2.5 text-sm font-medium text-navy-foreground hover:opacity-95 disabled:opacity-60"
                >
                  {status === "loading" ? "Submitting…" : "Submit application"} <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              {status === "error" && (
                <p role="alert" className="mt-4 text-sm text-destructive">
                  {error}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  min,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  min?: number;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        min={min}
        className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-navy text-navy-foreground">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <div>
            <div className="text-sm font-semibold text-navy">MSP Proof</div>
            <div className="text-xs text-muted-foreground">CMMC evidence automation for MSPs.</div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a href="/guides/best-cmmc-compliance-software/" className="hover:text-foreground">CMMC compliance software for MSPs</a>
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="#" className="hover:text-foreground">Contact</a>
          <span className="text-xs">© {new Date().getFullYear()} MSP Proof</span>
        </div>
      </div>
    </footer>
  );
}
