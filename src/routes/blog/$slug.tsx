import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Clock } from "lucide-react";
import { BlogArt } from "../../components/BlogArt";
import { FloatingContact } from "../../components/FloatingContact";
import { Footer, Nav } from "../../components/SiteChrome";
import { blogPosts, formatPostDate, getPostBySlug } from "../../lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { post } = loaderData;
    const url = `https://affluence.vn/blog/${post.slug}`;
    const ogImage = `https://affluence.vn/og/${post.slug}.png`;
    return {
      meta: [
        { title: `${post.title} | Affluence Blog` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: ogImage },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: ogImage },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            inLanguage: "vi-VN",
            author: { "@type": "Organization", name: "Affluence" },
            publisher: { "@type": "Organization", name: "Affluence", url: "https://affluence.vn" },
            mainEntityOfPage: url,
          }),
        },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-page text-ink">
      <Nav />

      <header className="relative overflow-hidden bg-white pt-14 pb-12 md:pt-20 md:pb-16">
        <div
          className="pointer-events-none absolute -top-28 -right-28 h-80 w-80 rounded-full opacity-25 blur-3xl"
          style={{ background: post.gradient }}
        />
        <div className="relative mx-auto max-w-3xl px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink-soft transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Tất cả bài viết
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span
              className="rounded-full px-3.5 py-1.5 text-[12px] font-bold text-white"
              style={{ background: post.gradient }}
            >
              {post.category}
            </span>
            <span className="text-[13px] font-medium text-ink-mute">{formatPostDate(post.date)}</span>
            <span className="inline-flex items-center gap-1 text-[13px] font-medium text-ink-mute">
              <Clock className="h-3.5 w-3.5" />
              {post.readingTime}
            </span>
          </div>
          <h1 className="mt-5 text-[30px] font-extrabold leading-[1.2] tracking-tight md:text-[42px]">{post.title}</h1>
          <p className="mt-5 text-[16.5px] leading-[1.75] text-ink-soft">{post.excerpt}</p>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <div
          className="mb-8 h-48 overflow-hidden rounded-3xl shadow-lift md:h-64"
          style={{ background: post.gradient }}
        >
          <BlogArt slug={post.slug} className="h-full w-full" />
        </div>
        <article className="rounded-3xl border border-border bg-white p-7 md:p-12">
          {post.sections.map((section, i) => (
            <section key={i} className={i === 0 ? "" : "mt-9"}>
              {section.heading && (
                <h2 className="text-[21px] font-bold leading-[1.3] tracking-tight md:text-[24px]">{section.heading}</h2>
              )}
              {section.paragraphs?.map((p, j) => (
                <p key={j} className="mt-4 text-[15.5px] leading-[1.85] text-ink-soft">
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="mt-4 grid gap-3">
                  {section.list.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100">
                        <Check className="h-3 w-3 text-emerald-600" strokeWidth={3.5} />
                      </span>
                      <span className="text-[15px] leading-[1.75] text-ink-soft">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>

        {/* CTA */}
        <div className="relative mt-10 overflow-hidden rounded-3xl bg-grad-brand p-8 shadow-glow md:p-10">
          <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
          <div className="relative">
            <h2 className="text-[22px] font-extrabold leading-[1.25] tracking-tight text-white md:text-[26px]">
              {post.cta?.heading ?? "Bạn là trường học hoặc trung tâm tiếng Anh?"}
            </h2>
            <p className="mt-3 max-w-xl text-[14.5px] leading-[1.7] text-white/85">
              {post.cta?.body ??
                "Affluence giúp bạn tuyển sinh hiệu quả qua mạng lưới publisher khắp Việt Nam — chỉ trả phí khi có học viên thật."}
            </p>
            <a
              href={post.cta?.href ?? "/#lien-he"}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-bold text-primary shadow-lift transition-transform hover:-translate-y-0.5"
            >
              {post.cta?.label ?? "Nhận tư vấn miễn phí"}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="text-[22px] font-bold tracking-tight">Bài viết liên quan</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="h-28 overflow-hidden" style={{ background: p.gradient }}>
                    <BlogArt slug={p.slug} className="h-full w-full" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-[12px] font-bold text-primary">{p.category}</span>
                    <h3 className="mt-1.5 text-[15.5px] font-bold leading-[1.4] tracking-tight">{p.title}</h3>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-bold text-primary">
                      Đọc bài viết
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}
