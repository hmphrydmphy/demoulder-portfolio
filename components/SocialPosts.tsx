import Image from "next/image";

const posts = [
  {
    id: 1,
    platform: "Instagram",
    handle: "@humps.creates",
    platformColor: "#E1306C",
    bg: "#fff",
    textColor: "#111",
    image: "https://picsum.photos/seed/insta-content/400/400",
    caption:
      "5 signs your brand needs a content strategist 📱\n\nIf your posts get likes but zero leads — this thread is for you. Save this.",
    stat1: "♥ 3,247 likes",
    stat2: "View 143 comments",
    label: "Instagram · Tips Post",
    format: "square",
  },
  {
    id: 2,
    platform: "LinkedIn",
    handle: "Demoulder Humphrey Pimentel",
    handleSub: "Content Strategist · QA Engineer · PM · 3h · 🌐",
    platformColor: "#0077B5",
    bg: "#f3f2ef",
    textColor: "#1a1a1a",
    caption:
      "I spent 2 years doing QA for a digital marketing agency.\n\nHere's what I learned: most campaigns fail not because of bad creatives — but bad process.\n\nStrategy without structure is just noise.\n\n🧵 Read the full thread ↓",
    stat1: "👍 ❤️ 🔥  1,203 reactions",
    stat2: "47 comments · 89 reposts",
    label: "LinkedIn · Thought Leadership",
    format: "text",
  },
  {
    id: 3,
    platform: "TikTok",
    handle: "@humps.creates",
    platformColor: "#69C9D0",
    bg: "#010101",
    textColor: "#fff",
    image: "https://picsum.photos/seed/tiktok-content/400/600",
    caption: "HOW I HELPED A BRAND GO FROM 0 TO 10K IN 30 DAYS 🚀",
    stat1: "48.2K views",
    stat2: "♥ 3.1K  💬 241",
    label: "TikTok · Growth Story",
    format: "vertical",
  },
  {
    id: 4,
    platform: "Twitter / X",
    handle: "@humpscreates",
    handleSub: "· 4h",
    platformColor: "#e7e9ea",
    bg: "#16202A",
    textColor: "#e7e9ea",
    caption:
      "Most brands are posting content wrong.\n\nHere's what actually moves the needle in 2025:\n\n🧵 Thread (1/8)\n\n↓",
    stat1: "🔁 847",
    stat2: "❤  3.2K",
    label: "X · Viral Thread",
    format: "text-dark",
  },
  {
    id: 5,
    platform: "Facebook",
    handle: "Humps Creates",
    platformColor: "#1877F2",
    bg: "#fff",
    textColor: "#1c1e21",
    image: "https://picsum.photos/seed/fb-content/600/314",
    caption:
      "Struggling to see ROI from your content? 👋\n\nI build content systems that work — not just look good. Let's talk strategy.",
    stat1: "Sponsored",
    stat2: "LEARN MORE →",
    label: "Facebook · Sponsored Ad",
    format: "ad",
  },
  {
    id: 6,
    platform: "YouTube",
    handle: "Humps Creates · 47K views · 2 weeks ago",
    platformColor: "#FF0000",
    bg: "#1A1A1A",
    textColor: "#fff",
    image: "https://picsum.photos/seed/yt-content/600/338",
    caption: "THE CONTENT STRATEGY THAT CHANGED EVERYTHING",
    stat1: "▶ 47,341 views",
    stat2: "👍 2.8K",
    label: "YouTube · Tutorial",
    format: "thumbnail",
  },
];

function PostCard({ post }: { post: (typeof posts)[0] }) {
  const isLight = post.bg === "#fff" || post.bg === "#f3f2ef";

  return (
    <div
      className="post-card relative rounded-xl overflow-hidden"
      style={{
        background: post.bg,
        border: `1px solid ${isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.06)"}`,
      }}
    >
      {/* Overlay on hover */}
      <div className="post-overlay rounded-xl z-20">
        <span className="font-label text-cream text-center px-4">{post.label}</span>
      </div>

      {/* Instagram */}
      {post.format === "square" && (
        <div>
          <div className="flex items-center gap-2 p-3" style={{ color: post.textColor }}>
            <div
              className="w-8 h-8 rounded-full p-0.5"
              style={{ background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}
            >
              <div className="w-full h-full rounded-full bg-gray-300" />
            </div>
            <div>
              <p className="font-semibold text-xs">{post.handle}</p>
            </div>
            <span className="ml-auto text-[10px] font-bold" style={{ color: post.platformColor }}>
              Follow
            </span>
          </div>
          <div className="relative aspect-square">
            <Image src={post.image!} alt="Post" fill className="object-cover" sizes="400px" />
          </div>
          <div className="p-3" style={{ color: post.textColor }}>
            <div className="flex gap-3 text-lg mb-1">
              <span>♥</span><span>💬</span><span>↗</span><span className="ml-auto">🔖</span>
            </div>
            <p className="font-semibold text-xs mb-1">{post.stat1}</p>
            <p className="text-xs leading-relaxed opacity-80 line-clamp-2">
              <span className="font-bold">humps.creates</span> {post.caption}
            </p>
          </div>
        </div>
      )}

      {/* LinkedIn */}
      {post.format === "text" && (
        <div className="p-4" style={{ color: post.textColor }}>
          <div className="flex gap-2 mb-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm shrink-0"
              style={{ background: post.platformColor }}
            >
              H
            </div>
            <div>
              <p className="font-semibold text-xs">{post.handle}</p>
              <p className="text-[10px] opacity-60">{post.handleSub}</p>
            </div>
            <span
              className="ml-auto font-bold text-xs"
              style={{ color: post.platformColor }}
            >
              + Follow
            </span>
          </div>
          <p className="text-xs leading-relaxed whitespace-pre-line opacity-90 mb-3">
            {post.caption}
          </p>
          <div
            className="pt-2 flex justify-between text-[10px] opacity-60"
            style={{ borderTop: `1px solid rgba(0,0,0,0.1)` }}
          >
            <span>{post.stat1}</span>
            <span>{post.stat2}</span>
          </div>
        </div>
      )}

      {/* TikTok */}
      {post.format === "vertical" && (
        <div className="relative" style={{ aspectRatio: "9/14" }}>
          <Image src={post.image!} alt="Post" fill className="object-cover" sizes="400px" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          {/* Right sidebar icons */}
          <div className="absolute right-3 bottom-16 flex flex-col items-center gap-4 text-white">
            <div className="text-center">
              <div className="text-2xl">♥</div>
              <div className="text-[9px]">3.1K</div>
            </div>
            <div className="text-center">
              <div className="text-xl">💬</div>
              <div className="text-[9px]">241</div>
            </div>
            <div className="text-center">
              <div className="text-xl">↗</div>
              <div className="text-[9px]">Share</div>
            </div>
          </div>
          {/* Bottom text */}
          <div className="absolute bottom-4 left-3 right-10">
            <p className="font-label text-white text-[10px] mb-1">{post.handle}</p>
            <p
              className="font-display text-white leading-tight"
              style={{ fontSize: "1.1rem" }}
            >
              {post.caption}
            </p>
            <div className="flex items-center gap-1 mt-2">
              <span className="text-[9px] text-white/70">{post.stat1}</span>
            </div>
          </div>
          <div className="absolute top-3 left-3">
            <span
              className="font-label text-white text-[9px] px-2 py-0.5"
              style={{ background: post.platformColor }}
            >
              TIKTOK
            </span>
          </div>
        </div>
      )}

      {/* Twitter/X */}
      {post.format === "text-dark" && (
        <div className="p-4" style={{ color: post.textColor }}>
          <div className="flex gap-2 mb-3 items-start">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0"
              style={{ background: "#2d4a6b", color: "#e7e9ea" }}
            >
              H
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1 flex-wrap">
                <p className="font-bold text-xs text-white">Humps</p>
                <p className="text-[10px] opacity-50">{post.handle} {post.handleSub}</p>
                <span className="ml-auto font-bold text-white text-sm">✕</span>
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed whitespace-pre-line mb-3">{post.caption}</p>
          <div
            className="pt-2 flex gap-6 text-[11px] opacity-50"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <span>{post.stat1}</span>
            <span>{post.stat2}</span>
          </div>
        </div>
      )}

      {/* Facebook Ad */}
      {post.format === "ad" && (
        <div style={{ color: post.textColor }}>
          <div className="flex items-center gap-2 p-3">
            <div
              className="w-9 h-9 rounded-sm flex items-center justify-center font-bold text-white text-sm"
              style={{ background: post.platformColor }}
            >
              H
            </div>
            <div>
              <p className="font-semibold text-xs">{post.handle}</p>
              <p className="text-[10px] opacity-50">{post.stat1}</p>
            </div>
          </div>
          <p className="text-xs px-3 pb-3 opacity-80 line-clamp-2">{post.caption}</p>
          <div className="relative h-32 overflow-hidden">
            <Image src={post.image!} alt="Ad" fill className="object-cover" sizes="600px" />
          </div>
          <div className="p-3 flex items-center justify-between" style={{ background: "#e8e8e8" }}>
            <div>
              <p className="font-bold text-xs">humps.creates</p>
              <p className="text-[10px] opacity-60">Content Strategy Services</p>
            </div>
            <button
              className="font-label text-[10px] px-3 py-1.5 rounded text-white"
              style={{ background: post.platformColor }}
            >
              {post.stat2}
            </button>
          </div>
        </div>
      )}

      {/* YouTube */}
      {post.format === "thumbnail" && (
        <div>
          <div className="relative" style={{ aspectRatio: "16/9" }}>
            <Image src={post.image!} alt="Thumbnail" fill className="object-cover" sizes="600px" />
            <div className="absolute inset-0 bg-black/40" />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: post.platformColor }}
              >
                <span className="text-white text-lg ml-1">▶</span>
              </div>
            </div>
            {/* Bold text overlay */}
            <div className="absolute bottom-2 left-2 right-2">
              <p
                className="font-display text-white leading-tight"
                style={{ fontSize: "1.2rem", textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
              >
                {post.caption}
              </p>
            </div>
            {/* Duration badge */}
            <span className="absolute bottom-2 right-2 font-label text-white text-[9px] px-1 py-0.5 bg-black/80 rounded">
              12:47
            </span>
          </div>
          <div className="p-3 flex gap-2" style={{ color: "rgba(245,240,232,0.7)" }}>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-xs shrink-0"
              style={{ background: post.platformColor }}
            >
              H
            </div>
            <div>
              <p className="text-[11px] font-semibold text-cream line-clamp-1">{post.caption}</p>
              <p className="text-[10px] mt-0.5">{post.handle}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SocialPosts() {
  return (
    <section id="content" className="py-24" style={{ background: "#111" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 reveal">
          <div>
            <span className="font-label text-grey block mb-3">CONTENT SAMPLES</span>
            <h2 className="font-display text-cream" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              THE CONTENT<br />I CREATE.
            </h2>
          </div>
          <p
            className="text-grey max-w-sm text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Sample posts across 6 platforms — built around strategy, not just aesthetics. Each post type represents a different format I produce for clients.
          </p>
        </div>

        {/* 3×2 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post, i) => (
            <div
              key={post.id}
              className="reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
