import { allPosts } from "content-collections";
import Link from "next/link";
import type { Metadata } from "next";
import { paginate, normalizePage } from "@/lib/pagination";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on post-training, RL environments, and small models.",
  openGraph: {
    title: "Writing",
    description: "Notes on post-training, RL environments, and small models.",
  },
};

const PAGE_SIZE = 12;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;

  const sortedPosts = [...allPosts].sort((a, b) =>
    new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1
  );

  const totalPages = Math.max(1, Math.ceil(sortedPosts.length / PAGE_SIZE));
  const currentPage = normalizePage(pageParam, totalPages);
  const { items: paginatedPosts, pagination } = paginate(sortedPosts, {
    page: currentPage,
    pageSize: PAGE_SIZE,
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
        <header className="flex items-center justify-between mb-16">
          <Link
            href="/"
            className="text-sm font-medium tracking-tight text-foreground hover:text-foreground/80 transition-colors"
          >
            jaydeep raijada
          </Link>
          <nav className="flex items-center gap-5 text-sm text-muted-foreground">
            <Link
              href="/"
              className="hover:text-foreground transition-colors"
            >
              home
            </Link>
          </nav>
        </header>

        <section className="mb-12">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-5">
            Writing
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight mb-3">
            Notes & experiments
          </h1>
          <p className="text-[15px] leading-relaxed text-muted-foreground text-pretty">
            Mostly on post-training, RL environments, and small-model
            experiments. Write-ups of what I learn while training things.
          </p>
        </section>

        {paginatedPosts.length > 0 ? (
          <>
            <ul className="border-t border-border/70">
              {paginatedPosts.map((post) => {
                const slug = post._meta.path.replace(/\.mdx$/, "");
                return (
                  <li
                    key={slug}
                    className="border-b border-border/70"
                  >
                    <Link
                      href={`/blog/${slug}`}
                      className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-5"
                    >
                      <time
                        dateTime={post.publishedAt}
                        className="text-xs tabular-nums text-muted-foreground sm:w-28 sm:shrink-0"
                      >
                        {formatDate(post.publishedAt)}
                      </time>
                      <div className="flex flex-col gap-1 flex-1 min-w-0">
                        <h2 className="text-[15px] font-medium text-foreground tracking-tight group-hover:underline underline-offset-4 decoration-foreground/40">
                          {post.title}
                        </h2>
                        {post.summary && (
                          <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                            {post.summary}
                          </p>
                        )}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {pagination.totalPages > 1 && (
              <div className="flex items-center justify-between mt-10 text-sm text-muted-foreground">
                <span>
                  Page {pagination.page} of {pagination.totalPages}
                </span>
                <div className="flex gap-6">
                  {pagination.hasPreviousPage ? (
                    <Link
                      href={`/blog?page=${pagination.page - 1}`}
                      className="hover:text-foreground transition-colors"
                    >
                      ← Previous
                    </Link>
                  ) : (
                    <span className="opacity-40">← Previous</span>
                  )}
                  {pagination.hasNextPage ? (
                    <Link
                      href={`/blog?page=${pagination.page + 1}`}
                      className="hover:text-foreground transition-colors"
                    >
                      Next →
                    </Link>
                  ) : (
                    <span className="opacity-40">Next →</span>
                  )}
                </div>
              </div>
            )}
          </>
        ) : (
          <p className="text-[15px] text-muted-foreground border-t border-border/70 pt-10">
            No posts yet. Check back soon.
          </p>
        )}
      </div>
    </div>
  );
}
