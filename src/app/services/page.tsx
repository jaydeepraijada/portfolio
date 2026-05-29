import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { DATA } from "@/data/resume";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI engineering services — model fine-tuning & evals, RAG, AI agents, and automation. Built and shipped by Jaydeep Raijada.",
  openGraph: {
    title: "Services",
    description:
      "AI engineering services — model fine-tuning & evals, RAG, AI agents, and automation.",
  },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-5">
      {children}
    </div>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border/70 pt-10">
      <SectionLabel>{label}</SectionLabel>
      {children}
    </section>
  );
}

function ExtLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`underline underline-offset-4 decoration-foreground/25 hover:decoration-foreground transition-colors ${className}`}
    >
      {children}
    </a>
  );
}

const offerings: {
  title: string;
  outcome: string;
  includes: string[];
}[] = [
  {
    title: "Model Fine-Tuning & Evaluation",
    outcome:
      "For teams that have outgrown prompting. I domain-adapt or post-train open models so they're faster, cheaper, and better at your specific task — and I build the eval harness to prove it.",
    includes: [
      "SFT / LoRA / QLoRA / continued pre-training",
      "RL post-training (GRPO, reward design)",
      "Eval suite + benchmark vs. your current setup",
      "Deployable checkpoint + handoff",
    ],
  },
  {
    title: "RAG & Knowledge Systems",
    outcome:
      "Turn your documents, catalog, or knowledge base into accurate, grounded answers — with citations, so you can trust the output.",
    includes: [
      "Retrieval pipeline over your data",
      "Grounded, cited responses",
      "Evaluation for accuracy & hallucination",
      "API or chat interface",
    ],
  },
  {
    title: "AI Agents & Automation",
    outcome:
      "Tool-using agents and workflow automation that take real work off your team. For businesses: WhatsApp & voice assistants that answer customers, capture leads, and book appointments 24/7.",
    includes: [
      "WhatsApp / voice assistants (multilingual)",
      "Lead capture, FAQs & booking automation",
      "Tool-using agents for internal workflows",
      "Setup + ongoing maintenance",
    ],
  },
  {
    title: "AI Audit & Advisory",
    outcome:
      "A focused sprint to assess an existing LLM system or map where AI can actually help your business — with a concrete, prioritized roadmap you can act on.",
    includes: [
      "System / opportunity review",
      "Eval harness for what you already run",
      "Prioritized roadmap + cost estimate",
      "1–2 week turnaround",
    ],
  },
];

const process: { step: string; detail: string }[] = [
  { step: "Intro call", detail: "A free 20-minute call to understand the problem and whether I'm the right fit." },
  { step: "Fixed-scope proposal", detail: "Clear deliverables, timeline, and price — no open-ended hourly billing." },
  { step: "Build", detail: "I build it, with progress you can see along the way." },
  { step: "Handoff & support", detail: "Deployed, documented, and maintained — with ongoing support where it makes sense." },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
        {/* Header */}
        <header className="flex items-center justify-between mb-16">
          <Link
            href="/"
            className="text-sm font-medium tracking-tight text-foreground hover:text-foreground/70 transition-colors"
          >
            jaydeep raijada
          </Link>
          <nav className="flex items-center gap-5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              home
            </Link>
            <Link href="/blog" className="hover:text-foreground transition-colors">
              blog
            </Link>
            <a
              href={DATA.contact.social.GitHub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              github
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section className="mb-16">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight mb-4">
            Work with me
          </h1>
          <p className="text-[15px] leading-relaxed text-muted-foreground text-pretty">
            I help teams and businesses build and ship AI — from custom model
            fine-tuning to RAG, agents, and automation. I&apos;m an applied AI
            engineer who trains and deploys models in the open; you get the
            depth without the agency overhead.
          </p>
          <p className="text-[15px] text-foreground/85 mt-4">
            Currently taking on a few projects. Reach me at{" "}
            <ExtLink
              href={`mailto:${DATA.contact.email}`}
              className="font-mono text-[14px]"
            >
              {DATA.contact.email}
            </ExtLink>
            .
          </p>
        </section>

        <div className="flex flex-col gap-14">
          {/* Offerings */}
          <Section label="What I build">
            <div className="flex flex-col gap-10">
              {offerings.map((o) => (
                <article key={o.title} className="flex flex-col gap-3">
                  <h3 className="text-[15px] font-medium text-foreground tracking-tight">
                    {o.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-foreground/75 text-pretty">
                    {o.outcome}
                  </p>
                  <ul className="flex flex-col gap-1 text-[14px] text-muted-foreground">
                    {o.includes.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-border select-none">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Section>

          {/* How it works */}
          <Section label="How it works">
            <ol className="flex flex-col gap-5">
              {process.map((p, i) => (
                <li key={p.step} className="flex gap-4">
                  <span className="text-xs tabular-nums text-muted-foreground pt-1 shrink-0">
                    0{i + 1}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[15px] font-medium text-foreground">
                      {p.step}
                    </span>
                    <span className="text-[15px] leading-relaxed text-foreground/75 text-pretty">
                      {p.detail}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </Section>

          {/* Proof */}
          <Section label="Why me">
            <p className="text-[15px] leading-relaxed text-foreground/85 text-pretty">
              I don&apos;t just integrate APIs — I train models from scratch and
              ship them publicly. I trained a 1.5B RL safety monitor to 0.893
              AUROC (Top 100 at the Hugging Face × Meta OpenEnv Hackathon),
              domain-adapted a small model for a 20% perplexity drop, and built
              a full LLM training stack by hand. That depth is what you get on
              your project.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mt-4">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 underline underline-offset-4 decoration-foreground/25 hover:decoration-foreground"
              >
                Selected work
                <ArrowUpRight className="size-3" aria-hidden />
              </Link>
              <ExtLink
                href={DATA.contact.social.GitHub.url}
                className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
              >
                GitHub
                <ArrowUpRight className="size-3" aria-hidden />
              </ExtLink>
              <ExtLink
                href="https://huggingface.co/JaydeepR"
                className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
              >
                Hugging Face
                <ArrowUpRight className="size-3" aria-hidden />
              </ExtLink>
            </div>
          </Section>

          {/* Contact */}
          <Section label="Get started">
            <p className="text-[15px] leading-relaxed text-foreground/85 text-pretty">
              Tell me what you&apos;re trying to do and I&apos;ll tell you
              honestly whether AI is the right tool and how I&apos;d approach it.
              Email{" "}
              <ExtLink href={`mailto:${DATA.contact.email}`}>
                {DATA.contact.email}
              </ExtLink>{" "}
              or reach me on{" "}
              <ExtLink href={DATA.contact.social.X.url}>X</ExtLink> and{" "}
              <ExtLink href={DATA.contact.social.LinkedIn.url}>
                LinkedIn
              </ExtLink>
              .
            </p>
          </Section>
        </div>

        <footer className="mt-20 pt-8 border-t border-border/70 flex items-center justify-between text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Jaydeep Raijada</span>
          <span>{DATA.location}</span>
        </footer>
      </div>
    </div>
  );
}
