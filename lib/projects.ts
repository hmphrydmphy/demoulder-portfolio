import type { Project } from "@/types";

export const projects: Project[] = [
  // ── CS1 — Featured Case Study ─────────────────────────────────────────────
  {
    id: "1",
    slug: "operational-structure-multi-business-founder",
    title: "Building Operational Structure for a Multi-Business Founder",
    context: "US Client — Multiple Businesses",
    tags: ["Operations", "Project Management", "Systems", "SOPs", "Delegation"],
    summary:
      "Designed and implemented a structured operating system across two businesses, replacing scattered task tracking with clear workflows, ownership, and accountability.",
    featured: true,
    problem:
      "A founder running two businesses was managing priorities, tasks, and delegation largely in their head. As both businesses grew, the lack of a shared system created bottlenecks, unclear ownership, and no reliable way to oversee daily operations.",
    role:
      "Project Manager / Systems Builder — led end-to-end: from workflow audit and structure design through SOP documentation and operational handover.",
    process: [
      "Conducted a workflow audit across both businesses to identify friction points, gaps, and duplicated effort",
      "Mapped recurring project types, defined task categories, and established clear ownership and accountability rules",
      "Built a centralized PM workspace with views for active projects, recurring tasks, and team workload",
      "Wrote SOPs for each core process so the team could operate independently without needing to ask the founder",
      "Delivered a full operational handover with onboarding documentation and a live walkthrough session",
    ],
    outcome:
      "The founder moved from ad-hoc task management to a structured, reliable operating system across both businesses. Operations became clearer, delegation improved, and the business gained a stronger foundation for growth.",
    metrics: [
      "2 businesses systematized under one operational framework",
      "Clear task ownership established across all recurring processes",
      "Founder freed from managing day-to-day task tracking",
      "SOPs created for every core operational workflow",
    ],
    tools: [
      "Project management platform",
      "SOP documentation",
      "Workflow mapping",
      "Task ownership design",
      "Team onboarding",
    ],
  },

  // ── CS2 — Scalable Workflow for DFY Service Team ──────────────────────────
  {
    id: "2",
    slug: "scalable-workflow-dfy-service-team",
    title: "Designing a More Scalable Workflow for a DFY Service Team",
    context: "Agency Client — Done-For-You Services",
    tags: ["Workflow Design", "SOPs", "Handoffs", "Asset Management", "Process"],
    summary:
      "Redesigned an internal workflow for a done-for-you service team, reducing friction around asset handling, handoffs, and team coordination.",
    featured: false,
    problem:
      "A DFY service team managing multiple client projects had no clear internal process. Tasks, revisions, approvals, file handling, and role handoffs were creating confusion and slowing execution.",
    role:
      "Technical Project Manager — led workflow analysis, SOP documentation, and process redesign to improve visibility and team coordination.",
    process: [
      "Documented the existing workflow to identify pain points across tasks, comments, notifications, and handoffs",
      "Created SOPs for the team dashboard structure and role-based responsibilities",
      "Improved asset and attachment handling to reduce clutter and confusion",
      "Designed cleaner team handoff processes between roles",
      "Identified and resolved friction in the feedback, approval, and revision flow",
    ],
    outcome:
      "The team gained a cleaner, more practical workflow with better role clarity, improved asset management, and a scalable internal process that was easier to follow and maintain.",
    metrics: [
      "Full SOP documentation created for all core workflows",
      "Improved visibility across tasks, assets, and role handoffs",
      "Reduced coordination friction between team members",
    ],
    tools: [
      "SOP documentation",
      "Workflow design",
      "Asset management",
      "Process mapping",
    ],
  },

  // ── CS3 — Executive Support, Cybersecurity Firm ──────────────────────────
  {
    id: "3",
    slug: "executive-operations-cybersecurity-firm",
    title: "Executive and Project Operations Support for a Cybersecurity Firm",
    context: "UK Client — Cybersecurity",
    tags: ["Executive Support", "Project Booking", "SOPs", "Admin Operations"],
    summary:
      "Provided end-to-end operational and executive support for a cybersecurity company — managing schedules, project bookings, travel, and documentation for multiple executives.",
    featured: false,
    problem:
      "A fast-growing cybersecurity firm needed dependable operational support to keep multiple executives organized, maintain internal coordination, and manage project-related administrative work consistently.",
    role:
      "Executive Assistant / Operations Specialist — responsible for calendar management, project booking, documentation, and day-to-day executive coordination.",
    process: [
      "Managed calendars and meeting coordination for multiple executives",
      "Handled project booking for penetration testing services",
      "Created and maintained SOPs for executive and operational processes",
      "Prepared meeting notes and follow-up documentation",
      "Booked flights, coordinated travel logistics, and managed scheduling conflicts",
      "Responded to emails and prioritized tasks on behalf of executives",
      "Maintained structure within ClickUp and internal operational systems",
    ],
    outcome:
      "Operational consistency improved across executive schedules, coordination workflows, and project admin. The engagement ended when the company required an in-person team member following a relocation — not due to any performance issue.",
    metrics: [
      "Multiple executives supported simultaneously",
      "Penetration testing bookings coordinated and tracked",
      "SOPs created for key admin and operational processes",
    ],
    tools: ["ClickUp", "SOP documentation", "Calendar management", "Email management"],
  },

  // ── CS4 — Web Delivery & QA Across Client Projects ───────────────────────
  {
    id: "4",
    slug: "web-delivery-qa-multiple-projects",
    title: "Managing Web Delivery and QA Across Multiple Client Projects",
    context: "Digital Marketing Agency — Multiple Clients",
    tags: ["Agile", "QA", "Project Management", "Stakeholders", "Delivery"],
    summary:
      "Led project management and QA across multiple simultaneous web and digital projects in a fast-paced agency environment, improving delivery flow and release readiness.",
    featured: false,
    problem:
      "An agency running multiple active client projects needed stronger coordination between developers, QA, and stakeholders — while managing shifting priorities and maintaining delivery standards.",
    role:
      "Technical Project Manager / QA Engineer — managed delivery timelines, coordinated cross-functional teams, and led QA efforts across all active projects.",
    process: [
      "Managed multiple active web and digital projects simultaneously",
      "Coordinated developers, QA, and stakeholders across projects",
      "Defined delivery flow and helped set clear execution priorities",
      "Tracked blockers, surfaced risks, and kept projects moving",
      "Supported manual and automated QA efforts across the project pipeline",
      "Identified issues before release and ensured proper handoff",
      "Contributed to Agile delivery practices and documentation",
    ],
    outcome:
      "Projects moved with stronger coordination, better QA oversight, and clearer stakeholder communication. Delivery flow improved and release readiness became more consistent across the team.",
    metrics: [
      "15+ web and digital projects managed",
      "QA coverage improved across the full project pipeline",
      "Reduced critical bugs at release through structured QA checkpoints",
    ],
    tools: ["Jira", "Agile / Scrum", "Manual QA", "Test planning", "Stakeholder reporting"],
  },

  // ── CS5 — Asset Organization for Growing Agency ───────────────────────────
  {
    id: "5",
    slug: "agency-asset-organization",
    title: "Organizing Assets and Systems for a Growing Agency",
    context: "AU Client — Design Agency",
    tags: ["Operations", "Asset Management", "Workflow Cleanup", "Systems"],
    summary:
      "Centralized and organized a disorganized asset library for a design agency, creating a consistent structure that reduced operational friction and improved day-to-day execution.",
    featured: false,
    problem:
      "A growing design agency was dealing with scattered files, inconsistent naming, and no reliable internal system. Finding assets and managing information was slowing the team down.",
    role:
      "Operations / Systems Support — responsible for asset centralization, structure design, and workflow cleanup.",
    process: [
      "Audited existing asset and file structure to identify gaps and inconsistencies",
      "Centralized all assets into a logical, easy-to-navigate structure",
      "Created consistent naming conventions and folder organization",
      "Reduced clutter by removing duplicates and outdated files",
      "Documented the new system so the team could maintain it independently",
    ],
    outcome:
      "The agency gained a clean, organized internal environment. The team could find what they needed faster, spend less time searching, and focus more on delivery.",
    metrics: [
      "Full asset library centralized and reorganized",
      "Naming conventions and folder structure standardized",
      "Team able to operate independently with the new system",
    ],
    tools: ["File management", "Asset organization", "Documentation"],
  },

  // ── CS6 — E-commerce Operations ─────────────────────────────────────────
  {
    id: "6",
    slug: "ecommerce-operations-support",
    title: "Supporting End-to-End E-commerce Operations",
    context: "UK Client — E-commerce Brand",
    tags: ["Operations", "Customer Experience", "Order Management", "CX"],
    summary:
      "Managed customer-facing operations and order processes for an e-commerce brand, maintaining consistency, responsiveness, and smooth day-to-day execution.",
    featured: false,
    problem:
      "An e-commerce brand needed reliable, consistent support across customer communication, order handling, and internal operational coordination — especially as volume increased.",
    role:
      "Operations and Customer Support — responsible for customer communication, order processes, and maintaining internal operational flow.",
    process: [
      "Managed customer communication across all touchpoints",
      "Handled order-related processes and escalations",
      "Maintained smooth operational flow during high-volume periods",
      "Assisted with internal organization and process consistency",
      "Ensured follow-through on customer issues and internal coordination",
    ],
    outcome:
      "Customer operations became more consistent, professional, and reliable. Internal processes were better organized, and the brand experienced fewer execution gaps in its day-to-day operations.",
    metrics: [
      "Customer operations managed end-to-end",
      "Order handling processes maintained with consistency",
      "Improved follow-through on customer issues and internal tasks",
    ],
    tools: ["Customer support tools", "Order management", "Internal coordination"],
  },

  // ── CS7 — MVP Planning ────────────────────────────────────────────────────
  {
    id: "7",
    slug: "mvp-planning-early-stage",
    title: "Turning Early-Stage Ideas Into Clear MVP Plans",
    context: "Startup & Founder Clients",
    tags: ["MVP Planning", "Workflow Design", "Execution Structure", "Documentation"],
    summary:
      "Helped early-stage founders translate ideas into structured MVP plans — defining scope, mapping workflows, and organizing execution phases before development begins.",
    featured: false,
    problem:
      "Several projects had strong ideas but lacked the structure needed to move toward execution. Without a clear plan, scope was undefined, workflows were undefined, and teams couldn't move forward with confidence.",
    role:
      "Technical PM / Systems Planner — responsible for MVP scoping, workflow mapping, documentation, and execution structure design.",
    process: [
      "Organized MVP scope and identified core priorities for early delivery",
      "Mapped workflows and defined responsibilities across the team",
      "Structured documentation to make the project build-ready",
      "Identified execution phases from planning through QA and launch",
      "Helped founders understand the practical path from idea to implementation",
    ],
    outcome:
      "Projects became easier to scope, communicate, and plan. Ideas were translated into structured systems — giving teams a clear roadmap and reducing confusion at the start of development.",
    metrics: [
      "MVP scope defined and prioritized for multiple projects",
      "Execution phases mapped from planning to QA",
      "Documentation structured for build-ready handoff",
    ],
    tools: ["Workflow mapping", "MVP documentation", "Scope planning", "Execution phase design"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProject(): Project | undefined {
  return projects.find((p) => p.featured);
}

export function getProjectSummaries(): Project[] {
  return projects.filter((p) => !p.featured);
}

export function getAllProjects(): Project[] {
  return projects;
}
