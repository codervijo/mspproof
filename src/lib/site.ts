// src/lib/site.ts
//
// Single source of site identity. Faceless for now (PRD v2.A): pages and
// Organization JSON-LD read from here, so credibility layers can be added
// later by filling a field instead of rewriting pages.
//
// Optional fields stay null until the operator supplies real values. Never
// fill them with placeholder or invented data; null renders nothing.

export interface TeamMember {
  name: string;
  role: string;
  url?: string;
}

export interface Site {
  name: string;
  url: string; // no trailing slash
  tagline: string;
  /** How people reach the site. Faceless: a form, not a person. */
  contact: { label: string; href: string };
  // Credibility layers, unset until real.
  legalName: string | null;
  about: string | null; // path to an About page once it exists
  team: TeamMember[] | null;
  credentials: string[] | null; // e.g. RPO listing, certifications
}

export const site: Site = {
  name: "MSP Proof",
  url: "https://mspproof.com",
  tagline: "Microsoft 365 evidence collection for CMMC",
  contact: { label: "Contact form", href: "/privacy/#contact" },
  legalName: null,
  about: null,
  team: null,
  credentials: null,
};

export const orgId = `${site.url}/#organization`;

/** Organization node for JSON-LD; only emits fields that are set. */
export function organizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": orgId,
    name: site.name,
    url: `${site.url}/`,
    ...(site.legalName && { legalName: site.legalName }),
  };
}
