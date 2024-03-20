export interface WebsiteData {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo: string;
  favicon: string;
  address: {
    "@type": string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint: {
    "@type": string;
    telephone: string;
    email: string;
  };
  description?: string;
  foundingDate?: string;
  founders?: string[];
  employees?: number;
  industry?: string;
  socialMedia?: {
    github?: string;
    linkedin?: string;
  };
}
