'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import type { Album } from '@/lib/utils/types';

interface AlbumCardProps {
  album: Album;
}

export function AlbumCard({ album }: AlbumCardProps) {
  const handleStreamingClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="h-full transition-all duration-200 hover:shadow-lg">
      <CardHeader>
        {/* Album Cover Placeholder */}
        <div className="aspect-square bg-gradient-to-br from-blue-200 to-amber-200 rounded-lg mb-4 flex items-center justify-center">
          <div className="text-center text-blue-800">
            <div className="text-4xl mb-2">♪</div>
            <p className="text-xs opacity-75">Album Art</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{album.title}</h3>
          <p className="text-gray-600 text-sm mb-2">{album.year} • {album.type}</p>
          {album.featured && (
            <span className="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full font-medium">
              Latest Release
            </span>
          )}
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-gray-700 text-sm leading-relaxed mb-6">
          {album.description}
        </p>

        {/* Track List (showing first 5 tracks) */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Featured Tracks</h4>
          <div className="space-y-1">
            {album.tracks.slice(0, 5).map((track, index) => (
              <div key={track.id} className="flex items-center text-xs text-gray-600">
                <span className="mr-2 text-gray-400">{index + 1}.</span>
                <span className="flex-1">{track.title}</span>
                {track.featuredArtists && track.featuredArtists.length > 0 && (
                  <span className="text-gray-500 ml-2">
                    ft. {track.featuredArtists.join(', ')}
                  </span>
                )}
              </div>
            ))}
            {album.tracks.length > 5 && (
              <div className="text-xs text-gray-500 italic">
                +{album.tracks.length - 5} more tracks
              </div>
            )}
          </div>
        </div>

        {/* Streaming Links */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Listen Now</h4>
          <div className="grid grid-cols-2 gap-2">
            {album.streamingLinks.spotify && (
              <Button
                size="sm"
                onClick={() => handleStreamingClick(album.streamingLinks.spotify!)}
                className="text-xs bg-green-600 hover:bg-green-700"
              >
                Spotify
              </Button>
            )}
            {album.streamingLinks.appleMusic && (
              <Button
                size="sm"
                onClick={() => handleStreamingClick(album.streamingLinks.appleMusic!)}
                className="text-xs bg-black hover:bg-gray-800"
              >
                Apple Music
              </Button>
            )}
            {album.streamingLinks.youtubeMusic && (
              <Button
                size="sm"
                onClick={() => handleStreamingClick(album.streamingLinks.youtubeMusic!)}
                className="text-xs bg-red-600 hover:bg-red-700"
              >
                YouTube Music
              </Button>
            )}
            {album.streamingLinks.amazon && (
              <Button
                size="sm"
                onClick={() => handleStreamingClick(album.streamingLinks.amazon!)}
                className="text-xs bg-orange-500 hover:bg-orange-600"
              >
                Amazon Music
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}