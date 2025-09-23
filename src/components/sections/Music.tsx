"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import albumsData from "@/lib/data/albums.json";
import {
  SiSpotify,
  SiApplemusic,
  SiYoutubemusic,
  SiAmazonmusic,
  SiYoutube,
} from "react-icons/si";

export function Music() {
  const { albums, singles } = albumsData;
  const featuredAlbum = albums.find((album) => album.featured);

  const handleStreamingClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="music" className="py-24 bg-white">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-stone-900 mb-6 font-serif">
              Music
            </h2>
            <p className="text-lg text-stone-600 font-light max-w-2xl mx-auto">
              Simple, deep, and spirit-filled music reflecting on life&apos;s
              fullness
            </p>
          </div>

          {/* Featured Album - Hero Style */}
          {featuredAlbum && (
            <div className="mb-24">
              <div className="text-center mb-12">
                <p className="text-sm uppercase tracking-widest text-stone-500 mb-4">
                  Latest Album
                </p>
                <h3 className="text-3xl font-light text-stone-900 font-serif">
                  {featuredAlbum.title} ({featuredAlbum.year})
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Album Artwork */}
                <div className="order-2 lg:order-1">
                  <div className="relative w-full max-w-md mx-auto">
                    <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src="/images/HisYokeMyRestAlbumArt.png"
                        alt={featuredAlbum.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Spotify Player */}
                <div className="order-1 lg:order-2">
                  <div className="w-full max-w-md mx-auto lg:mx-0">
                    <p className="text-sm uppercase tracking-wide text-stone-500 mb-6 text-center lg:text-left">
                      Listen Now
                    </p>
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <iframe
                        src="https://open.spotify.com/embed/album/3kwzRw4ZjobMerzgx9XUed?utm_source=generator&theme=0"
                        width="100%"
                        height="400"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className="rounded-2xl border-0"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Streaming Platform Links */}
              <div className="mt-16 text-center">
                <p className="text-sm uppercase tracking-wide text-stone-500 mb-6">
                  Available On All Platforms
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
                  <button
                    onClick={() =>
                      handleStreamingClick(
                        featuredAlbum.streamingLinks.spotify!
                      )
                    }
                    className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-md text-sm sm:text-base"
                  >
                    <SiSpotify className="w-5 h-5" />
                    <span className="font-medium">Spotify</span>
                  </button>
                  <button
                    onClick={() =>
                      handleStreamingClick(
                        featuredAlbum.streamingLinks.appleMusic!
                      )
                    }
                    className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors shadow-md text-sm sm:text-base"
                  >
                    <SiApplemusic className="w-5 h-5" />
                    <span className="font-medium">Apple Music</span>
                  </button>
                  <button
                    onClick={() =>
                      handleStreamingClick(
                        featuredAlbum.streamingLinks.youtubeMusic!
                      )
                    }
                    className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-md text-sm sm:text-base"
                  >
                    <SiYoutubemusic className="w-5 h-5" />
                    <span className="font-medium">YouTube Music</span>
                  </button>
                  <button
                    onClick={() =>
                      handleStreamingClick(featuredAlbum.streamingLinks.amazon!)
                    }
                    className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-md text-sm sm:text-base"
                  >
                    <SiAmazonmusic className="w-5 h-5" />
                    <span className="font-medium">Amazon Music</span>
                  </button>
                </div>

                {/* Review Quote */}
                <div className="mt-8 pt-6 border-t border-stone-200">
                  <p className="text-stone-600 italic text-sm max-w-md mx-auto">
                    &quot;Listening to this album felt like a soul-deep
                    inhale...&quot;
                  </p>
                  <p className="text-xs text-stone-500 mt-1">— Medium Review</p>
                </div>
              </div>
            </div>
          )}

          {/* Other Albums */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Keep Hope Alive */}
            {albums
              .filter((album) => !album.featured)
              .map((album) => (
                <div key={album.id} className="text-center">
                  <div className="relative w-full max-w-sm mx-auto mb-6">
                    <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src="/images/KeepHopeAliveAlbumArt.jpg"
                        alt={album.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-2xl font-light text-stone-900 font-serif">
                        {album.title}
                      </h4>
                      <p className="text-stone-500">{album.year}</p>
                    </div>

                    <p className="text-stone-600 text-sm leading-relaxed max-w-md mx-auto">
                      {album.description}
                    </p>

                    <div className="flex flex-wrap gap-3 justify-center">
                      <button
                        onClick={() =>
                          handleStreamingClick(album.streamingLinks.spotify!)
                        }
                        className="flex items-center gap-2 px-3 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-colors"
                      >
                        <SiSpotify className="w-4 h-4" />
                        <span className="text-sm">Spotify</span>
                      </button>
                      <button
                        onClick={() =>
                          handleStreamingClick(album.streamingLinks.appleMusic!)
                        }
                        className="flex items-center gap-2 px-3 py-2 border border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
                      >
                        <SiApplemusic className="w-4 h-4" />
                        <span className="text-sm">Apple</span>
                      </button>
                      <button
                        onClick={() =>
                          handleStreamingClick(
                            album.streamingLinks.youtubeMusic!
                          )
                        }
                        className="flex items-center gap-2 px-3 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors"
                      >
                        <SiYoutubemusic className="w-4 h-4" />
                        <span className="text-sm">YouTube</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}

            {/* Single */}
            {singles &&
              singles.map((single) => (
                <div key={single.id} className="text-center">
                  <div className="relative w-full max-w-sm mx-auto mb-6">
                    <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg">
                      <iframe
                        src="https://open.spotify.com/embed/track/5rrarInl2EQMjuGLdhA4mW?utm_source=generator"
                        width="100%"
                        height="100%"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className="absolute inset-0 w-full h-full border-0"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-2xl font-light text-stone-900 font-serif">
                        {single.title}
                      </h4>
                      <p className="text-stone-500">{single.year}</p>
                    </div>

                    <p className="text-stone-600 text-sm leading-relaxed max-w-md mx-auto">
                      {single.description}
                    </p>

                    <div className="flex flex-wrap gap-3 justify-center">
                      <button
                        onClick={() =>
                          handleStreamingClick(single.streamingLinks.spotify!)
                        }
                        className="flex items-center gap-2 px-3 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-colors"
                      >
                        <SiSpotify className="w-4 h-4" />
                        <span className="text-sm">Spotify</span>
                      </button>
                      {single.streamingLinks.appleMusic && (
                        <button
                          onClick={() =>
                            handleStreamingClick(
                              single.streamingLinks.appleMusic
                            )
                          }
                          className="flex items-center gap-2 px-3 py-2 border border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
                        >
                          <SiApplemusic className="w-4 h-4" />
                          <span className="text-sm">Apple</span>
                        </button>
                      )}
                      {single.streamingLinks.youtube && (
                        <button
                          onClick={() =>
                            handleStreamingClick(single.streamingLinks.youtube)
                          }
                          className="flex items-center gap-2 px-3 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors"
                        >
                          <SiYoutube className="w-4 h-4" />
                          <span className="text-sm">YouTube</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Music Videos */}
          <div className="mt-24">
            <div className="space-y-16">
              <div className="max-w-6xl mx-auto">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/2i8mR5muokI?si=_WrpxGW5pof4xHjm"
                    title="Chukwuemeka - Hold On (Official Music Video)"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="border-0"
                  />
                </div>
              </div>

              <div className="max-w-6xl mx-auto">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/bIWh0NEvcVU?si=Yq5kn2iPC7A7r_Xs"
                    title="Chukwuemeka - Love Fills Me (Official Music Video)"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="border-0"
                  />
                </div>
              </div>

              <div className="max-w-6xl mx-auto">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/pLX2IooDty0?si=lkSxM5LCgPY103sZ"
                    title="Chukwuemeka - Broken (Live at St. Mary's Cathedral, Aberdeen)"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="border-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
