import Image from "next/image";

const posts = [
  {
    id: 1,
    platform: "Instagram",
    accent: "#E1306C",
    image: "https://picsum.photos/seed/insta-content/600/600",
    caption: "5 signs your brand needs a content strategist. Save this.",
    stat: "3,247 likes · 143 comments",
    tag: "Tips · Carousel",
  },
  {
    id: 2,
    platform: "LinkedIn",
    accent: "#0077B5",
    image: null,
    caption:
      "I spent 2 years doing QA for a digital marketing agency.\n\nHere's what I learned: most campaigns fail not because of bad creatives — but bad process.",
    stat: "1,203 reactions · 47 comments",
    tag: "Thought Leadership",
  },
  {
    id: 3,
    platform: "TikTok",
    accent: "#69C9D0",
    image: "https://picsum.photos/seed/tiktok-content/400/600",
    caption: "How I helped a brand go from 0 to 10K followers in 30 days.",
    stat: "48.2K views · 3.1K likes",
    tag: "Growth Story · Video",
  },
  {
    id: 4,
    platform: "Twitter / X",
    accent: "#e7e9ea",
    image: null,
    caption:
      "Most brands are posting content wrong.\n\nHere's what actually moves the needle in 2025 — thread.",
    stat: "847 reposts · 3.2K likes",
    tag: "Viral Thread",
  },
  {
    id: 5,
    platform: "Facebook",
    accent: "#1877F2",
    image: "https://picsum.photos/seed/fb-content/600/400",
    caption:
      "Struggling to see ROI from your content? I build systems that work — not just look good.",
    stat: "Sponsored · 2.4K reach",
    tag: "Paid Ad",
  },
  {
    id: 6,
    platform: "YouTube",
    accent: "#FF0000",
    image: "https://picsum.photos/seed/yt-content/600/338",
    caption: "The content strategy that changed everything. Full breakdown.",
    stat: "47K views · 2.8K likes",
    tag: "Tutorial · Long-form",
  },
];

export default function SocialPosts() {
  return (
    <section id="content" className="section" style={{ background: "#111111" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 reveal">
          <div>
            <span className="font-label text-dim block mb-5">Content Samples</span>
            <h2
              className="font-display text-cream"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
            >
              THE CONTENT<br />I CREATE.
            </h2>
          </div>
          <p className="text-dim max-w-xs leading-relaxed" style={{ fontSize: "0.95rem" }}>
            Platform-specific content built around strategy, not just aesthetics.
            Each format represents real work delivered to clients.
          </p>
        </div>

        {/* 3×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px" style={{ background: "var(--border)" }}>
          {posts.map((post, i) => (
            <div
              key={post.id}
              className="post-card relative reveal"
              style={{
                background: "#111111",
                transitionDelay: `${i * 70}ms`,
              }}
            >
              {/* Hover overlay */}
              <div className="post-overlay z-10">
                <span className="font-label text-cream text-center px-6" style={{ fontSize: "0.65rem" }}>
                  {post.tag}
                </span>
              </div>

              {/* Platform accent bar */}
              <div style={{ height: "2px", background: post.accent }} />

              {/* Image (if applicable) */}
              {post.image && (
                <div className="relative overflow-hidden" style={{ height: "200px" }}>
                  <Image
                    src={post.image}
                    alt={post.platform}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(17,17,17,0.15)" }} />
                </div>
              )}

              {/* Content */}
              <div className="p-7">
                <span
                  className="font-label block mb-4"
                  style={{ color: post.accent, fontSize: "0.65rem" }}
                >
                  {post.platform}
                </span>
                <p
                  className="text-cream leading-relaxed mb-5 whitespace-pre-line"
                  style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.95rem" }}
                >
                  {post.caption}
                </p>
                <span className="font-label text-dim" style={{ fontSize: "0.62rem" }}>
                  {post.stat}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
