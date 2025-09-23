"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import albumsData from "@/lib/data/albums.json";

export function Hero() {
  const featuredAlbum = albumsData.albums.find((album) => album.featured);

  if (!featuredAlbum) {
    return null;
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero_3.jpg"
          alt="Chukwuemeka"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 text-center text-white px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Title */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 font-serif tracking-wide">
              Chukwuemeka
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl font-light opacity-90 max-w-2xl mx-auto">
              Illuminating hearts through music
            </p>
          </div>

          {/* Latest Album */}
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-widest opacity-75">
              Latest Album
            </p>
            <h2 className="text-3xl lg:text-4xl font-light">
              {featuredAlbum.title}
            </h2>
          </div>

          {/* Call to Action */}
          <div className="pt-8">
            <Button
              onClick={() =>
                window.open(featuredAlbum.streamingLinks.spotify, "_blank")
              }
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 px-12 py-4 text-lg font-light transition-all duration-300"
            >
              Listen Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
