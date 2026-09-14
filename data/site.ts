export const site = {
  name: "GDG Cloud Pune",
  url: "https://gdgcloudpune.in",
  description:
    "GDG Cloud Pune is a local Google Developer Group where 4,000+ developers, students and cloud practitioners meet to learn Google Cloud and AI — together, in person and online.",
  email: "gdgcloudpune@gmail.com",
  bevyUrl: "https://gdg.community.dev/gdg-cloud-pune/",
  upcomingEventsUrl: "https://gdg.community.dev/gdg-cloud-pune/#upcoming-events",
  ccdUrl: "https://ccd.gdgcloudpune.in",
  gdgProgramUrl: "https://developers.google.com/community/gdg",
  buildWithAiUrl: "https://developers.google.com/community/build-with-ai",
  videoId: "V6s5kjSoqzw",
} as const;

export type NavLink = { href: string; label: string };

export const navLinks: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#focus", label: "Focus" },
  { href: "#events", label: "Events" },
  { href: "#team", label: "Organizers" },
  { href: "#contact", label: "Contact" },
];

export type FocusArea = {
  tag: string;
  title: string;
  description: string;
  className: string;
};

export const focusAreas: FocusArea[] = [
  {
    tag: "GOOGLE CLOUD",
    title: "Cloud & infrastructure",
    description: "GKE, Cloud Run, serverless, networking and cost-aware architecture on Google Cloud.",
    className: "bg-cyan-pale",
  },
  {
    tag: "AI / GEN AI",
    title: "Build with AI",
    description: "Gemini, Vertex AI and agent frameworks — from prompt to production in hands-on labs.",
    className: "bg-green-pale",
  },
  {
    tag: "DATA",
    title: "Data & analytics",
    description: "BigQuery, pipelines and ML workflows for teams that live in data.",
    className: "bg-yellow-pale",
  },
  {
    tag: "COMMUNITY",
    title: "Career & connections",
    description: "Lightning talks, study jams and hallway conversations with practitioners across Pune.",
    className: "bg-red-pale",
  },
];

export type ChapterEvent = {
  date: string;
  kind: string;
  kindClassName: string;
  title: string;
  host: string;
  url: string;
};

export const events: ChapterEvent[] = [
  {
    date: "17 MAY 2026",
    kind: "HACKATHON",
    kindClassName: "bg-tag-yellow",
    title: "Agentic Premier League — Build with AI",
    host: "Hosted by GDG Cloud Pune",
    url: "https://gdg.community.dev/events/details/google-gdg-cloud-pune-presents-agentic-premier-league-build-with-ai/",
  },
  {
    date: "28 MAR 2026",
    kind: "WORKSHOP",
    kindClassName: "bg-tag-green",
    title: "Build with AI: March Edition",
    host: "Hosted by GDG Cloud Pune",
    url: "https://gdg.community.dev/events/details/google-gdg-cloud-pune-presents-build-with-ai-march-edition/",
  },
  {
    date: "28 FEB 2026",
    kind: "WORKSHOP",
    kindClassName: "bg-cyan",
    title: "Build with AI: GDG Cloud Pune",
    host: "Hosted by GDG Cloud Pune",
    url: "https://gdg.community.dev/events/details/google-gdg-cloud-pune-presents-build-with-ai-gdg-cloud-pune-1/",
  },
  {
    date: "24 JAN 2026",
    kind: "HACKATHON",
    kindClassName: "bg-tag-pink",
    title: "Build and Grow AI Hackathon 2.0 (Mumbai & Pune)",
    host: "Co-hosted with GDG Cloud Mumbai",
    url: "https://gdg.community.dev/events/details/google-gdg-cloud-mumbai-presents-build-and-grow-ai-hackathon-20-mumbai-amp-pune/cohost-gdg-cloud-pune",
  },
];

export type Organizer = { name: string; role: string; image: string; url: string };

export const organizers: Organizer[] = [
  {
    name: "Antrixsh Gupta",
    role: "GDG ORGANIZER",
    image:
      "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/antrixsh_gupta.jfif",
    url: "https://gdg.community.dev/u/antrixsh/",
  },
  {
    name: "Pratik Kale",
    role: "GDG ORGANIZER",
    image:
      "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/pratik_kale_JE4xYmT.jpeg",
    url: "https://gdg.community.dev/u/mzbvvx/",
  },
];

export type SocialIconName = "linkedin" | "x" | "instagram" | "youtube" | "email";

export type SocialLink = { label: string; href: string; icon: SocialIconName };

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/gdg-cloud-pune/", icon: "linkedin" },
  { label: "X (Twitter)", href: "https://www.twitter.com/gdgcloudpune", icon: "x" },
  { label: "Instagram", href: "https://www.instagram.com/gdgcloudpune", icon: "instagram" },
  { label: "YouTube", href: "https://www.youtube.com/@gdgcloudpune", icon: "youtube" },
  { label: `Email ${site.email}`, href: `mailto:${site.email}`, icon: "email" },
];

export const footerChapterLinks: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#focus", label: "Focus areas" },
  { href: "#events", label: "Events" },
  { href: "#team", label: "Organizers" },
];

export const footerProgramLinks: NavLink[] = [
  { href: "https://developers.google.com/community/gdg", label: "About GDG" },
  { href: "https://developers.google.com/community-guidelines", label: "Code of Conduct" },
  { href: "https://gdg.community.dev/participation-terms/", label: "Participation Terms" },
  { href: "https://gdg.community.dev/chapters/", label: "Find other chapters" },
];
