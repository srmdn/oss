export interface Contribution {
  date: string;
  project: string;
  repo: string;
  pr: number;
  title: string;
  description: string;
  language: "Go" | "TypeScript" | "JavaScript" | "Rust" | "Python" | "Other";
  type: "feature" | "bugfix" | "triage";
  status: "open" | "merged" | "closed";
  url: string;
  branch: string;
}

export const contributions: Contribution[] = [
  {
    date: "2026-06-17",
    project: "Day.js",
    repo: "iamkun/dayjs",
    pr: 3140,
    title: "Triage: id locale time separator is correct",
    description:
      "Triaged a bug report claiming the Indonesian locale time separator was incorrect. Confirmed the dot separator (pukul 14.30) matches official EYD V government spelling standards, closing the non-bug with authoritative citation.",
    language: "JavaScript",
    type: "triage",
    status: "open",
    url: "https://github.com/iamkun/dayjs/issues/3140#issuecomment-4731963256",
    branch: "",
  },
  {
    date: "2026-06-17",
    project: "go-units",
    repo: "docker/go-units",
    pr: 45,
    title: "Triage: suggested simpler fix for HumanSizeWithPrecision bug",
    description:
      "Reviewed a stalled 2.5-year-old PR fixing scientific notation in HumanSizeWithPrecision (1e+03MB instead of 1GB). Suggested a simpler 4-line output-detection approach instead of the original's math-heavy refactor.",
    language: "Go",
    type: "triage",
    status: "open",
    url: "https://github.com/docker/go-units/pull/45#issuecomment-4737600471",
    branch: "",
  },
  {
    date: "2026-06-17",
    project: "Quran.com",
    repo: "quran/quran.com-frontend-next",
    pr: 3305,
    title: "fix: improve Indonesian locale quality",
    description:
      "Fixed 30+ machine translation artifacts and terminology inconsistencies across 4 Indonesian locale files. Corrected 'comedy spin' to 'carousel', mismatched theme names, and verb form issues.",
    language: "TypeScript",
    type: "bugfix",
    status: "open",
    url: "https://github.com/quran/quran.com-frontend-next/pull/3305",
    branch: "fix/id-locale-quality",
  },
  {
    date: "2026-06-17",
    project: "VitePress",
    repo: "vuejs/vitepress",
    pr: 5218,
    title: "docs: add Indonesian (Bahasa Indonesia) translation",
    description:
      "Added complete Indonesian translation of VitePress documentation. Covers 36 files across home page, guide, and reference sections.",
    language: "TypeScript",
    type: "feature",
    status: "open",
    url: "https://github.com/vuejs/vitepress/pull/5218",
    branch: "main",
  },
  {
    date: "2026-06-15",
    project: "BillionMail",
    repo: "Billionmail/BillionMail",
    pr: 354,
    title: "Exclude /pmta tracking links from safepath check",
    description:
      "Fixed 404 errors on click/open tracking links when safepath is enabled. Recipients in incognito or forwarded emails could not open tracking links.",
    language: "Go",
    type: "bugfix",
    status: "open",
    url: "https://github.com/Billionmail/BillionMail/pull/354",
    branch: "fix/safepath-track-links",
  },
  {
    date: "2026-06-15",
    project: "Paseo",
    repo: "getpaseo/paseo",
    pr: 1551,
    title: "Add agent unarchive command",
    description:
      "Added paseo agent unarchive as the inverse of the existing archive command. Uses the same refresh_agent_request RPC the app's Unarchive button calls.",
    language: "TypeScript",
    type: "feature",
    status: "open",
    url: "https://github.com/getpaseo/paseo/pull/1551",
    branch: "feat/cli-agent-unarchive",
  },
  {
    date: "2026-06-15",
    project: "Syncthing",
    repo: "syncthing/syncthing",
    pr: 10749,
    title: "Preserve config values when PATCHing folder",
    description:
      "Fixed PATCH /rest/config/folders/:id resetting unspecified fields to defaults. Closed: maintainer does not accept AI-mediated PR discussions.",
    language: "Go",
    type: "bugfix",
    status: "closed",
    url: "https://github.com/syncthing/syncthing/pull/10749",
    branch: "fix/patch-folder-resets-defaults",
  },
];

export function getStats() {
  const open = contributions.filter((c) => c.status === "open").length;
  const merged = contributions.filter((c) => c.status === "merged").length;
  const projects = [...new Set(contributions.map((c) => c.project))].length;
  return { open, merged, total: contributions.length, projects };
}
