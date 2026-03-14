export const site = {
  name: "The Moral AI Project",
  tagline: "Alignment through formation, not constraint.",
  description:
    "The Moral AI Project develops lightweight moral formation files for agents that need durable identity, virtue coherence, and relational consistency beyond behavioral guardrails."
};

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export const navigation = [
  { href: `${base}/about/`, label: "About" },
  { href: `${base}/download/`, label: "Download" },
  { href: `${base}/research/`, label: "Research" },
  { href: `${base}/blog/`, label: "Blog" },
  { href: `${base}/support/`, label: "Support" },
  { href: `${base}/contact/`, label: "Contact" },
];

export const homeHref = `${base}/`;
