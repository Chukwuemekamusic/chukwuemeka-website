# Chukwuemeka Website Development Plan

## Overview
Building a modern, simple, and artistic website for Christian musician Chukwuemeka using Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack
- **Frontend**: Next.js 14 + TypeScript + Tailwind CSS
- **Content**: JSON files + MDX for rich content
- **Deployment**: Vercel
- **Music Integration**: Spotify/YouTube embeds + direct streaming links
- **Analytics**: Vercel Analytics
- **Forms**: Vercel Forms for contact

## Phase 1: Foundation Setup

### 1. Project Initialization
- [x] Set up Next.js 14 with TypeScript
- [x] Configure Tailwind CSS
- [x] Install essential dependencies
- [x] Set up project folder structure
- [x] Initialize Git repository

### 2. Data Architecture
- [ ] Create `lib/data/albums.json` with complete discography
- [ ] Create `lib/data/events.json` for October events
- [ ] Create `lib/data/social-links.json` for all platforms
- [ ] Set up MDX configuration for About content
- [ ] Create asset structure for professional photos

## Phase 2: Core Components

### 3. Layout & Design System
- [ ] Create main layout component (`app/layout.tsx`)
- [ ] Build navigation header component
- [ ] Design footer with social links
- [ ] Implement color palette (blues, golds, earth tones)
- [ ] Set up typography system for peaceful, artistic feel
- [ ] Create responsive grid system

### 4. Main Sections

#### Hero Section
- [ ] Latest album showcase ("His Yoke My Rest" 2025)
- [ ] Artist name and tagline prominence
- [ ] Streaming platform CTAs
- [ ] Professional hero image integration

#### About Section
- [ ] Artist story MDX content
- [ ] Musical philosophy and calling as psalmist
- [ ] Nigerian roots + Aberdeen base
- [ ] Cross-audience appeal messaging

#### Music Section
- [ ] Album cards for "His Yoke My Rest" (2025) and "Keep Hope Alive" (2017)
- [ ] Single showcase "I Will Live By Faith" (2020)
- [ ] Complete track listings with featured artists
- [ ] Streaming platform integration (Spotify, Apple Music, YouTube, Amazon)
- [ ] Embedded music players

#### Events Section
- [ ] October 2025 upcoming events display
- [ ] Event booking contact information
- [ ] Past performance highlights (when available)

#### Media Section
- [ ] Professional photo gallery
- [ ] Press coverage section (including "One Man in the Middle" review)
- [ ] Music video embeds from YouTube
- [ ] Audio samples/previews

#### Connect Section
- [ ] Social media links (Instagram, TikTok, Facebook: @chukwuemekamusic)
- [ ] Contact form for bookings and inquiries
- [ ] Newsletter signup
- [ ] Direct streaming platform artist pages

## Phase 3: Integrations & Polish

### 5. Music Platform Integration
- [ ] Spotify Web Playback SDK or embed widgets
- [ ] YouTube video player components
- [ ] Apple Music embed widgets
- [ ] Smart streaming links that detect user's platform
- [ ] Audio preview functionality

### 6. Performance & SEO
- [ ] Image optimization for professional photos
- [ ] Next.js Image component implementation
- [ ] Metadata and Open Graph tags for social sharing
- [ ] SEO optimization (artist name, genre keywords)
- [ ] Mobile responsiveness testing
- [ ] Performance auditing (Core Web Vitals)

### 7. Deployment & Launch
- [ ] Vercel deployment setup
- [ ] Custom domain configuration (if applicable)
- [ ] Vercel Analytics integration
- [ ] Environment variables setup
- [ ] SSL certificate configuration
- [ ] Final testing across devices and browsers

## Project Structure

```
chukwuemeka-website/
├── app/
│   ├── page.tsx                 # Main page with all sections
│   ├── layout.tsx              # Root layout
│   ├── globals.css             # Global styles
│   └── favicon.ico
├── components/
│   ├── ui/                     # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Container.tsx
│   ├── sections/               # Main page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Music/
│   │   │   ├── Music.tsx
│   │   │   ├── AlbumCard.tsx
│   │   │   └── StreamingLinks.tsx
│   │   ├── Events.tsx
│   │   ├── Media.tsx
│   │   └── Connect.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   └── music/
│       ├── SpotifyPlayer.tsx
│       ├── YouTubeEmbed.tsx
│       └── AudioPreview.tsx
├── lib/
│   ├── data/
│   │   ├── albums.json         # Complete discography
│   │   ├── events.json         # Upcoming events
│   │   ├── social-links.json   # All social media links
│   │   └── press.json          # Press coverage and reviews
│   ├── content/                # MDX files
│   │   ├── about.mdx          # Artist story and philosophy
│   │   └── press/             # Individual press articles
│   └── utils/
│       ├── constants.ts        # Site constants
│       └── types.ts           # TypeScript types
├── public/
│   ├── images/
│   │   ├── hero/              # Hero section images
│   │   ├── about/             # About section photos
│   │   ├── gallery/           # Professional photos
│   │   └── press/             # Press photos
│   ├── album-covers/          # Album artwork
│   │   ├── his-yoke-my-rest.jpg
│   │   ├── keep-hope-alive.jpg
│   │   └── i-will-live-by-faith.jpg
│   └── favicon/               # Favicon files
├── styles/
│   └── globals.css            # Additional global styles
├── tailwind.config.js         # Tailwind configuration
├── next.config.js             # Next.js configuration
├── package.json
├── tsconfig.json
└── README.md
```

## Content Data Structure

### Albums JSON Structure
```json
{
  "albums": [
    {
      "id": "his-yoke-my-rest",
      "title": "His Yoke My Rest",
      "year": 2025,
      "description": "Inspired by Matthew 11:28-30...",
      "coverImage": "/album-covers/his-yoke-my-rest.jpg",
      "tracks": [...],
      "streamingLinks": {...},
      "featured": true
    }
  ]
}
```

### Events JSON Structure
```json
{
  "events": [
    {
      "id": "october-event-1",
      "title": "Event Name",
      "date": "2025-10-XX",
      "location": "Venue Name, City",
      "description": "Event description",
      "ticketLink": "https://...",
      "type": "concert"
    }
  ]
}
```

## Key Design Principles
- **Peaceful Aesthetic**: Deep blues, warm grays, soft golds
- **Cross-Audience Appeal**: Welcoming to both churched and unchurched
- **Professional Quality**: High-quality imagery and typography
- **Mobile-First**: Responsive design prioritizing mobile experience
- **Performance**: Fast loading times for media-rich content
- **Accessibility**: WCAG 2.1 AA compliance

## Success Metrics
- Page load speed < 3 seconds
- Mobile-friendly design
- SEO score > 90
- All streaming platform integrations working
- Contact form functionality
- Social media integration
- Professional image optimization

## Notes
- Professional photos available for use across website
- October events to be included
- No e-commerce/merchandise initially
- Focus on music discovery and artist connection
- Appeal to both Christian and secular audiences