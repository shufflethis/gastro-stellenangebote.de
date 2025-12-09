export interface JobListing {
  id: string;
  title: string;
  employer: string;
  location: string;
  type: 'Vollzeit' | 'Teilzeit' | 'Aushilfe' | 'Ausbildung';
  salaryRange?: string;
  description: string;
  postedDate: string;
  category: JobCategory;
}

export enum JobCategory {
  KITCHEN = 'Küche',
  SERVICE = 'Service',
  MANAGEMENT = 'Management',
  BAR = 'Bar',
  HOTEL = 'Hotellerie',
  OTHER = 'Sonstiges'
}

export interface ContentSectionData {
  id: string;
  title: string;
  subtitle?: string;
  content: string[]; // Array of paragraphs
  image?: string;
  imageAlt?: string;
  bullets?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CareerPath {
  title: string;
  level: 'Einstieg' | 'Fortgeschritten' | 'Experte' | 'Management';
  description: string;
  requirements: string[];
}

export interface AiAdviceResponse {
  suggestion: string;
  matchedRoles: string[];
  reasoning: string;
}