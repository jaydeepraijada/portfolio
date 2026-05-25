import { allPosts } from "content-collections";
import { formatDate } from "@/lib/utils";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXContent } from "@content-collections/mdx/react";
import { mdxComponents } from "@/mdx-components";
import Link from "next/link";

function getSortedPosts() {
  return [...allPosts].sort((a, b) =>
    new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1
  );
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._meta.path.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const post = allPosts.find(
    (p) => p._meta.path.replace(/\.mdx$/, "") === slug
  );

  if (!post) return undefined;

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${slug}`,
      ...(image && { images: [{ url: `${DATA.url}${image}` }] }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image && { images: [`${DATA.url}${image}`] }),
    },
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sortedPosts = getSortedPosts();
  const currentIndex = sortedPosts.findIndex(
    (p) => p._meta.path.replace(/\.mdx$/, "") === slug
  );
  const post = sortedPosts[currentIndex];

  if (!post) notFound();

  const previousPost =
    currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < sortedPosts.length - 1
      ? sortedPosts[currentIndex + 1]
      : null;

  const getSlug = (p: (typeof sortedPosts)[0]) =>
    p._meta.path.replace(/\.mdx$/, "");

  const jsonLdContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    description: post.summary,
    image: post.image
      ? `${DATA.url}${post.image}`
      : `${DATA.url}/blog/${slug}/opengraph-image`,
    url: `${DATA.url}/blog/${slug}`,
    author: { "@type": "Person", name: DATA.name },
  }).replace(/</g, "\\u003c");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: jsonLdContent }}
        />

        <header className="flex items-center justify-between mb-16">
          <Link
            href="/"
            className="text-sm font-medium tracking-tight text-foreground hover:text-foreground/80 transition-colors"
          >
            jaydeep raijada
          </Link>
          <nav className="flex items-center gap-5 text-sm text-muted-foreground">
            <Link
              href="/blog"
              className="hover:text-foreground transition-colors"
            >
              ← writing
            </Link>
          </nav>
        </header>

        <article>
          <div className="flex flex-col gap-3 mb-10">
            <time
              dateTime={post.publishedAt}
              className="text-xs tabular-nums uppercase tracking-[0.18em] text-muted-foreground"
            >
              {formatDate(post.publishedAt)}
            </time>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.15] text-pretty">
              {post.title}
            </h1>
            {post.summary && (
              <p className="text-[15px] leading-relaxed text-muted-foreground text-pretty">
                {post.summary}
              </p>
            )}
          </div>

          <div className="prose max-w-full text-pretty font-sans leading-relaxed text-foreground/85 dark:prose-invert prose-headings:text-foreground prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 prose-a:decoration-foreground/30 hover:prose-a:decoration-foreground prose-strong:text-foreground prose-strong:font-medium">
            <MDXContent code={post.mdx} components={mdxComponents} />
          </div>
        </article>

        {(previousPost || nextPost) && (
          <nav className="mt-20 pt-8 border-t border-border/70 grid grid-cols-2 gap-6 text-sm">
            <div>
              {previousPost ? (
                <Link
                  href={`/blog/${getSlug(previousPost)}`}
                  className="group flex flex-col gap-1 text-left"
                >
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    ← Previous
                  </span>
                  <span className="text-foreground/85 group-hover:text-foreground transition-colors leading-snug">
                    {previousPost.title}
                  </span>
                </Link>
              ) : null}
            </div>
            <div className="text-right">
              {nextPost ? (
                <Link
                  href={`/blog/${getSlug(nextPost)}`}
                  className="group flex flex-col gap-1 text-right items-end"
                >
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Next →
                  </span>
                  <span className="text-foreground/85 group-hover:text-foreground transition-colors leading-snug">
                    {nextPost.title}
                  </span>
                </Link>
              ) : null}
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}
