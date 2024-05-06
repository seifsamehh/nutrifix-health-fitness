export interface SitemapEntry {
  url: string;
  lastModified?: string | Date;
  changeFrequency?:
    | "yearly"
    | "monthly"
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "never";
  priority?: number;
}
