export type Category = 'UX/UI' | 'LXD' | 'Graphic Design' | 'Digital Art' | 'AI' | 'All';

export type HighlightColor = 'pink' | 'yellow' | 'blue';

export interface ProjectDetailContent {
  challenge?: string;
  process?: string;
  results?: string;
  galleryImages?: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  thumbnail: string;
  categories: Category[];
  highlightColor: HighlightColor;
  tags: string[];
  client?: string;
  details?: ProjectDetailContent;
}
