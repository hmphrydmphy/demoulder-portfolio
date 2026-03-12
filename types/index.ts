// ─────────────────────────────────────────────────────────────────────────────
// Core TypeScript types for the Humps portfolio
// ─────────────────────────────────────────────────────────────────────────────

// Project — used in lib/projects.ts and all project-related pages
export interface Project {
  id: string;
  slug: string;
  title: string;
  context: string;     // Anonymized e.g. "US Client — Tech Startup"
  tags: string[];
  summary: string;     // 1–2 sentence overview for project cards
  featured: boolean;   // true = full case study page, false = lighter summary card

  // Deep case study fields — only populate when featured: true
  problem?: string;
  role?: string;
  process?: string[];  // Ordered list of steps taken
  outcome?: string;
  metrics?: string[];  // e.g. "2 businesses systematized", "Saved 10+ hours/week"
  tools?: string[];
  coverImage?: string; // Path relative to /public/images/
}

// Service — used in lib/services.ts and the /services page
export interface Service {
  id: string;
  title: string;
  description: string;
  for: string;           // Short "who this is for" sentence
  deliverables: string[];
}

// Asset — used in lib/assets.ts and the /assets page
export interface Asset {
  id: string;
  title: string;
  type: "SOP" | "Checklist" | "Template" | "Dashboard" | "Report" | "Diagram";
  description: string;
  // Controls which UI treatment the asset card gets:
  //   download → direct PDF download button
  //   preview  → shows a preview image, no download
  //   request  → "Request Access" button links to /contact
  visibility: "download" | "preview" | "request";
  fileUrl?: string;      // For download: path to PDF. For preview: path to file.
  previewImage?: string; // For preview type: path to a preview screenshot
}

// Testimonial — used in lib/testimonials.ts and the Testimonials section
export interface Testimonial {
  id: string;
  quote: string;
  name: string;    // First name or initial only e.g. "James B." or "Ryan"
  context: string; // Country + industry context e.g. "US Client" — no employer names
}

// Contact form submission — used in the API route and stored in Supabase
export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Standard API response shape
export interface ApiResponse {
  success: boolean;
  message: string;
}
