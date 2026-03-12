import type { Testimonial } from "@/types";

// Testimonials use first name or initial only.
// No employer names, company names, or identifying private details.
// Format: name (first name or initial + last initial), context (country + industry)

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Humps built out our entire project management system across both of my businesses — and the difference was immediate. We went from managing everything in our heads to having a real operating structure. I'm still surprised how much time it's freed up each week. Genuinely one of the best operational investments I've made.",
    name: "James B.",
    context: "US Client — Multiple Businesses",
  },
  {
    id: "2",
    quote:
      "I handed Humps a complete mess — scattered files, no naming conventions, no real system — and got back something clean and actually usable. He understood exactly what we needed without a lot of back and forth. Our agency finally runs the way I always wanted it to.",
    name: "Ryan",
    context: "AU Client — Design Agency",
  },
  {
    id: "3",
    quote:
      "Humps managed our customer operations end to end — quickly, professionally, and with real attention to detail. Our processes became noticeably more consistent, and I stopped worrying about things falling through the cracks. Reliable from day one.",
    name: "Rebecca",
    context: "UK Client — E-commerce Brand",
  },
  {
    id: "4",
    quote:
      "Working with Humps was one of the better operational decisions we made. He managed multiple executives, handled project bookings, kept things moving — all without needing to be managed himself. When we needed to transition to an in-person team member due to a company relocation, it had nothing to do with his performance. I'd recommend him without hesitation.",
    name: "William",
    context: "UK Client — Cybersecurity",
  },
];
