import type { Asset } from "@/types";

// Each asset has a visibility setting that controls how it appears in the UI:
//   'download' → visitor sees a Download button and gets the file directly
//   'preview'  → visitor sees a preview image; no download available
//   'request'  → visitor sees a "Request Access" button that links to /contact

export const assets: Asset[] = [
  {
    id: "1",
    title: "Project Kickoff Checklist",
    type: "Checklist",
    description:
      "A structured checklist I use at the start of every project to align stakeholders, define scope, and set the team up for smooth delivery.",
    visibility: "download",
    fileUrl: "/assets/downloads/project-kickoff-checklist.pdf",
  },
  {
    id: "2",
    title: "SOP Template — Team Onboarding",
    type: "SOP",
    description:
      "A clean, reusable SOP format for documenting team onboarding processes. Includes sections for roles, responsibilities, and first-week milestones.",
    visibility: "preview",
    previewImage: "/assets/previews/sop-template-preview.png",
  },
  {
    id: "3",
    title: "QA Bug Report Template",
    type: "Template",
    description:
      "A structured bug report template for web and operations teams. Includes severity levels, reproduction steps, and resolution tracking.",
    visibility: "request",
  },
  {
    id: "4",
    title: "Operations Dashboard Sample",
    type: "Dashboard",
    description:
      "A sample operations dashboard layout showing task ownership, project status, and delivery milestones across multiple workstreams.",
    visibility: "preview",
    previewImage: "/assets/previews/dashboard-sample-preview.png",
  },
  {
    id: "5",
    title: "Workflow Process Diagram — Sample",
    type: "Diagram",
    description:
      "A sample workflow diagram documenting a recurring operational process, including decision points and handoff rules.",
    visibility: "request",
  },
];
