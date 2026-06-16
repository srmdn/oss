export interface Achievement {
  name: string;
  description: string;
  earned: boolean;
}

export const achievements: Achievement[] = [
  {
    name: "Sponsor",
    description: "Sponsored an open source contributor via GitHub Sponsors",
    earned: true,
  },
  {
    name: "Pull Shark",
    description: "Opened a pull request that has been merged",
    earned: true,
  },
  {
    name: "Quickdraw",
    description: "Closed an issue or pull request within 5 minutes of opening",
    earned: true,
  },
  {
    name: "Galaxy Brain",
    description: "Answered 2 discussions",
    earned: true,
  },
  {
    name: "YOLO",
    description: "Merged a pull request without a review (needs second account)",
    earned: false,
  },
];

export function getAchievementStats() {
  const earned = achievements.filter((a) => a.earned).length;
  return { earned, total: achievements.length };
}
