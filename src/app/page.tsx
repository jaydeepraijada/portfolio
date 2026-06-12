/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Markdown from "react-markdown";
import { ArrowUpRight } from "lucide-react";
import { DATA } from "@/data/resume";

const socials = [
  { label: "github", url: DATA.contact.social.GitHub.url },
  { label: "hugging face", url: DATA.contact.social.HuggingFace.url },
  { label: "x", url: DATA.contact.social.X.url },
  { label: "linkedin", url: DATA.contact.social.LinkedIn.url },
  { label: "substack", url: DATA.contact.social.Substack.url },
];

const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Post-training & alignment",
    items: [
      "CPT",
      "SFT",
      "RLHF",
      "PPO",
      "GRPO",
      "Reward Modeling",
      "Preference Optimization",
      "LoRA / QLoRA",
      "Self-Distillation",
      "Unsloth",
    ],
  },
  {
    label: "RL environments",
    items: ["OpenEnv", "Reward Design", "Verifiers"],
  },
  {
    label: "Applied AI",
    items: [
      "LLMs",
      "RAG",
      "Agentic Workflows",
      "Prompting & Context Engineering",
      "Tool Use",
      "Diffusion LMs",
    ],
  },
  {
    label: "Multimodal",
    items: [
      "VLMs",
      "Vision Transformers (ViT, Swin, DeiT, DETR, PaliGemma)",
      "Audio AI (STT, TTS)",
    ],
  },
  {
    label: "Frameworks & MLOps",
    items: [
      "PyTorch",
      "Transformers",
      "TRL",
      "MLFlow",
      "DVC",
      "DagShub",
      "CI/CD (GitHub Actions)",
    ],
  },
  {
    label: "Languages & analytics",
    items: ["Python", "SQL", "Pandas", "Power BI"],
  },
];

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

export default function V2Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
        {/* Header */}
        <header className="flex items-center justify-between mb-16">
          <span className="text-lg font-medium tracking-tight text-foreground">
            jaydeep raijada
          </span>
          <nav className="flex items-center gap-5 text-sm text-muted-foreground">
            <Link
              href="/services"
              className="hover:text-foreground transition-colors"
            >
              services
            </Link>
            <Link
              href="/blog"
              className="hover:text-foreground transition-colors"
            >
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
          <div className="flex items-start gap-6">
            <img
              src={DATA.avatarUrl}
              alt={DATA.name}
              className="size-20 rounded-full object-cover ring-1 ring-border shrink-0"
            />
            <div className="flex flex-col gap-3 min-w-0">
              <h1 className="text-4xl sm:text-5xl font-medium tracking-tight leading-[1.05]">
                Hi, I&apos;m Jaydeep
              </h1>
              <p className="text-[15px] leading-relaxed text-muted-foreground text-pretty">
                {DATA.description}
              </p>
              <div className="text-[15px] text-foreground/85 mt-1">
                <ExtLink
                  href={`mailto:${DATA.contact.email}`}
                  className="font-mono text-[14px]"
                >
                  {DATA.contact.email}
                </ExtLink>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                {socials.map((s, i) => (
                  <span key={s.label} className="flex items-center gap-x-4">
                    {i > 0 && <span className="text-border">·</span>}
                    <ExtLink href={s.url} className="text-muted-foreground hover:text-foreground decoration-transparent hover:decoration-foreground">
                      {s.label}
                    </ExtLink>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-14">
          {/* About */}
          <Section label="About">
            <div className="prose prose-sm max-w-none text-[15px] leading-relaxed text-foreground/85 prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 prose-a:decoration-foreground/30 hover:prose-a:decoration-foreground prose-strong:text-foreground">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </Section>

          {/* Currently */}
          <Section label="Currently">
            {DATA.work.map((job) => (
              <div key={job.company} className="flex flex-col gap-2">
                <div className="flex items-baseline justify-between gap-4">
                  <div className="text-[15px] text-foreground">
                    <span className="font-medium">{job.title}</span>{" "}
                    <span className="text-muted-foreground">at</span>{" "}
                    <ExtLink href={job.href}>{job.company}</ExtLink>
                    <span className="text-muted-foreground">
                      {" "}
                      · {job.location}
                    </span>
                  </div>
                  <div className="text-xs tabular-nums text-muted-foreground shrink-0">
                    {job.start} – {job.end}
                  </div>
                </div>
                <p className="text-[15px] leading-relaxed text-foreground/75 text-pretty">
                  {job.description}
                </p>
              </div>
            ))}
          </Section>

          {/* Research */}
          <Section label="Research">
            <p className="text-[15px] leading-relaxed text-foreground/75 text-pretty mb-6">
              One research program, two studies: on-policy distillation and
              forgetting in small models. What survives when you shrink the
              student, and what to do when it doesn&apos;t.
            </p>
            <div className="flex flex-col gap-6">
              {DATA.research.map((r) => (
                <article
                  key={r.title}
                  className="flex flex-col gap-3 rounded-2xl border border-border/70 bg-foreground/[0.02] p-5 sm:p-6 transition-colors hover:border-foreground/25"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-lg font-medium text-foreground text-pretty">
                      {r.title}
                    </h3>
                    <div className="text-xs tabular-nums text-muted-foreground shrink-0">
                      {r.dates}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground/[0.04] border border-border/80 px-2.5 py-0.5 text-muted-foreground">
                      {r.dates.includes("Present") && (
                        <span className="relative flex size-1.5" aria-hidden>
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
                          <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                        </span>
                      )}
                      {r.status}
                    </span>
                    <span className="inline-flex items-center rounded-full border border-border/80 px-2.5 py-0.5 text-muted-foreground">
                      {r.model}
                    </span>
                    {r.target && (
                      <span className="inline-flex items-center rounded-full border border-border/80 px-2.5 py-0.5 text-muted-foreground">
                        Target: <span className="text-foreground/80 ml-1">{r.target}</span>
                      </span>
                    )}
                  </div>
                  <p className="text-[15px] leading-relaxed text-foreground/75 text-pretty">
                    {r.description}
                  </p>
                  <p className="border-l-2 border-foreground/15 pl-3 text-[15px] leading-relaxed text-foreground/85 text-pretty">
                    <span className="font-medium text-foreground">
                      Hypothesis:{" "}
                    </span>
                    {r.hypothesis}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    {r.links.map((l) => (
                      <ExtLink
                        key={l.href}
                        href={l.href}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {l.type} ↗
                      </ExtLink>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Section>

          {/* Selected work */}
          <Section label="Selected work">
            <div className="flex flex-col gap-10">
              {DATA.projects.map((p) => (
                <article key={p.title} className="flex flex-col gap-3">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-lg font-medium text-foreground tracking-tight">
                      {p.href ? (
                        <ExtLink
                          href={p.href}
                          className="decoration-transparent hover:decoration-foreground"
                        >
                          {p.title}
                        </ExtLink>
                      ) : (
                        p.title
                      )}
                    </h3>
                    <div className="text-xs tabular-nums text-muted-foreground shrink-0">
                      {p.dates}
                    </div>
                  </div>
                  <div className="prose prose-sm max-w-none text-[15px] leading-relaxed text-foreground/75 prose-strong:text-foreground prose-strong:font-medium prose-p:my-0 text-pretty">
                    <Markdown>{p.description}</Markdown>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border/70 bg-foreground/[0.03] px-2.5 py-0.5 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.links.length > 0 && (
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1">
                      {p.links.map((l) => (
                        <ExtLink
                          key={l.href}
                          href={l.href}
                          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
                        >
                          {l.type}
                          <ArrowUpRight className="size-3" aria-hidden />
                        </ExtLink>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </Section>

          {/* Writing */}
          <Section label="Writing">
            <p className="text-[15px] leading-relaxed text-foreground/85 text-pretty">
              Notes on post-training, RL environments, and small-model
              experiments. Read on{" "}
              <Link
                href="/blog"
                className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground"
              >
                the blog
              </Link>{" "}
              or{" "}
              <ExtLink href={DATA.contact.social.Substack.url}>
                Substack
              </ExtLink>
              .
            </p>
          </Section>

          {/* Skills */}
          <Section label="Skills">
            <dl className="flex flex-col gap-5">
              {skillGroups.map((group) => (
                <div
                  key={group.label}
                  className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-x-6 gap-y-1"
                >
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground pt-0.5">
                    {group.label}
                  </dt>
                  <dd className="text-[15px] leading-relaxed text-foreground/85">
                    {group.items.map((item, i) => (
                      <span key={item}>
                        {i > 0 && (
                          <span className="text-border mx-2">·</span>
                        )}
                        <span>{item}</span>
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </Section>

          {/* Contact */}
          <Section label="Get in touch">
            <p className="text-[15px] leading-relaxed text-foreground/85 text-pretty">
              The fastest way to reach me is by email at{" "}
              <ExtLink href={`mailto:${DATA.contact.email}`}>
                {DATA.contact.email}
              </ExtLink>
              . Or find me on{" "}
              <ExtLink href={DATA.contact.social.X.url}>X</ExtLink>,{" "}
              <ExtLink href={DATA.contact.social.GitHub.url}>GitHub</ExtLink>,{" "}
              <ExtLink href={DATA.contact.social.HuggingFace.url}>
                Hugging Face
              </ExtLink>
              , and{" "}
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
