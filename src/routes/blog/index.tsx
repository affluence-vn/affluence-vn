import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import { BlogArt } from "../../components/BlogArt";
import { FloatingContact } from "../../components/FloatingContact";
import { Footer, Nav } from "../../components/SiteChrome";
import { blogPosts, formatPostDate } from "../../lib/blog";

const PAGE_TITLE = "Blog — Kiến thức học tiếng Anh cho trẻ | Affluence";
const PAGE_DESCRIPTION =
  "Cẩm nang cho phụ huynh: độ tuổi vàng học tiếng Anh, mẹo học qua trò chơi, tiêu chí chọn trung tâm và lộ trình học cho trẻ 4–12 tuổi.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://affluence.vn/blog/" },
      { property: "og:image", content: "https://affluence.vn/og/blog.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://affluence.vn/og/blog.png" },
    ],
    links: [{ rel: "canonical", href: "https://affluence.vn/blog/" }],
  }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="min-h-screen bg-page text-ink">
      <Nav />

      <header className="relative overflow-hidden bg-white pt-16 pb-14 md:pt-24 md:pb-20">
        <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full opacity-30 blur-3xl" style={{ background: "var(--grad-sky)" }} />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full opacity-25 blur-3xl" style={{ background: "var(--grad-sunrise)" }} />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-primary">Blog</p>
          <h1 className="text-[36px] font-extrabold leading-[1.1] tracking-tight md:text-[52px]">
            Kiến thức <span className="text-gradient-brand">học tiếng Anh</span> cho trẻ
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-[1.75] text-ink-soft">
            Cẩm nang dành cho phụ huynh: từ độ tuổi bắt đầu, phương pháp học qua trò chơi đến cách chọn trung tâm và lộ
            trình dài hạn cho con.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        {/* Featured post */}
        <Link
          to="/blog/$slug"
          params={{ slug: featured.slug }}
          className="group grid overflow-hidden rounded-3xl border border-border bg-white transition-all hover:-translate-y-1 hover:shadow-lift md:grid-cols-[1fr_1.2fr]"
        >
          <div
            className="relative min-h-[220px] overflow-hidden md:min-h-[300px]"
            style={{ background: featured.gradient }}
          >
            <BlogArt slug={featured.slug} className="absolute inset-0 h-full w-full" />
            <span className="absolute top-5 left-5 rounded-full bg-white/90 px-3.5 py-1.5 text-[12px] font-bold text-ink">
              {featured.category}
            </span>
          </div>
          <div className="flex flex-col justify-center p-8 md:p-10">
            <div className="flex items-center gap-3 text-[12.5px] font-medium text-ink-mute">
              <span>{formatPostDate(featured.date)}</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {featured.readingTime}
              </span>
            </div>
            <h2 className="mt-3 text-[24px] font-extrabold leading-[1.25] tracking-tight md:text-[28px]">
              {featured.title}
            </h2>
            <p className="mt-3 text-[15px] leading-[1.75] text-ink-soft">{featured.excerpt}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-bold text-primary">
              Đọc bài viết
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>

        {/* Remaining posts */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {rest.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-white transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <div
                className="relative h-40 overflow-hidden"
                style={{ background: post.gradient }}
              >
                <BlogArt slug={post.slug} className="h-full w-full" />
                <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[11.5px] font-bold text-ink">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-center gap-3 text-[12px] font-medium text-ink-mute">
                  <span>{formatPostDate(post.date)}</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readingTime}
                  </span>
                </div>
                <h3 className="mt-2.5 text-[18px] font-bold leading-[1.35] tracking-tight">{post.title}</h3>
                <p className="mt-2 flex-1 text-[14px] leading-[1.7] text-ink-soft">{post.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-bold text-primary">
                  Đọc bài viết
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}
