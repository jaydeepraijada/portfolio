# jaydeepraijada.com

Personal site and blog. Built with Next.js, Tailwind, and MDX.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- [content-collections](https://www.content-collections.dev/) + MDX for the blog
- Shiki for syntax highlighting

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Where things live

- `src/data/resume.tsx` — single source of truth for content (bio, work, research, projects, links). Edit this to update the homepage.
- `src/app/page.tsx` — homepage layout.
- `src/app/blog/` — blog index and post route.
- `content/*.mdx` — blog posts.



