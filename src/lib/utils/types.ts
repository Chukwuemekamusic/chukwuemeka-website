export interface Album {
  id: string;
  title: string;
  year: number;
  description: string;
  coverImage: string;
  tracks: Track[];
  streamingLinks: StreamingLinks;
  featured: boolean;
  type: 'album' | 'single';
}

export interface Track {
  id: string;
  title: string;
  duration?: string;
  featuredArtists?: string[];
}

export interface StreamingLinks {
  spotify?: string;
  appleMusic?: string;
  youtubeMusic?: string;
  amazon?: string;
  youtube?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  venue?: string;
  description: string;
  ticketLink?: string;
  type: 'concert' | 'worship' | 'festival' | 'private';
  time?: string;
}

export interface SocialLink {
  platform: string;
  handle: string;
  url: string;
  icon: string;
}

export interface PressItem {
  id: string;
  title: string;
  publication: string;
  date: string;
  url?: string;
  excerpt: string;
  image?: string;
}