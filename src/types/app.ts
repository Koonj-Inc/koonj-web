export type LocaleCode = "en" | "fa";

export type LocaleOption = {
  code: LocaleCode;
  label: string;
  dir: "ltr" | "rtl";
};

export type FeatureCard = {
  title: string;
  body: string;
  detail: string;
};

export type RewardCard = {
  title: string;
  bullets: string[];
  description: string;
};

export type HubCard = {
  title: string;
  fantasy: string;
  games: string;
  steps: string;
  why: string;
};

export type SystemCard = {
  title: string;
  body: string;
};

export type OrgInfo = {
  login: string;
  description: string | null;
  blog: string | null;
  twitter_username: string | null;
  location: string | null;
  public_repos: number;
  followers: number;
  created_at: string;
};

export type TimeSegment = {
  label: string;
  value: number;
};
