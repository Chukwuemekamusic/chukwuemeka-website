import { Container } from "@/components/ui/Container";
import {
  SiInstagram,
  SiTiktok,
  SiFacebook,
  SiSpotify,
  SiApplemusic,
  SiAmazonmusic,
} from "react-icons/si";
import socialLinksData from "@/lib/data/social-links.json";

export function Footer() {
  const { socialLinks, streamingPlatforms } = socialLinksData;

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "instagram":
        return <SiInstagram className="w-5 h-5" />;
      case "tiktok":
        return <SiTiktok className="w-5 h-5" />;
      case "facebook":
        return <SiFacebook className="w-5 h-5" />;
      default:
        return <div className="w-5 h-5 bg-stone-400 rounded" />;
    }
  };

  const getStreamingIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "spotify":
        return <SiSpotify className="w-5 h-5" />;
      case "apple music":
        return <SiApplemusic className="w-5 h-5" />;
      case "amazon music":
        return <SiAmazonmusic className="w-5 h-5" />;
      default:
        return <div className="w-5 h-5 bg-stone-400 rounded" />;
    }
  };

  return (
    <footer className="bg-stone-900 text-stone-100">
      <Container>
        <div className="py-16">
          <div className="text-center space-y-8">
            {/* Artist Name */}
            <div>
              <h3 className="text-3xl font-light font-serif text-stone-100 mb-4">
                Chukwuemeka
              </h3>
              <p className="text-stone-300 font-light max-w-lg mx-auto">
                Illuminating hearts through music that reflects on life&apos;s
                fullness
              </p>
            </div>

            {/* Social & Streaming Icons */}
            <div className="flex justify-center items-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-stone-800 rounded-xl flex items-center justify-center hover:bg-stone-700 transition-colors"
                  title={`Follow on ${link.platform}`}
                >
                  {getSocialIcon(link.platform)}
                </a>
              ))}
              <div className="w-px h-6 bg-stone-700 mx-2" />
              {streamingPlatforms.map((platform) => (
                <a
                  key={platform.platform}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-stone-800 rounded-xl flex items-center justify-center hover:bg-stone-700 transition-colors"
                  title={`Listen on ${platform.platform}`}
                >
                  {getStreamingIcon(platform.platform)}
                </a>
              ))}
            </div>

            {/* Location */}
            {/* <div className="text-stone-400 text-sm">
              Aberdeen, Scotland
            </div> */}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-stone-800 py-6 text-center">
          <p className="text-stone-400 text-sm">
            © {new Date().getFullYear()} Chukwuemeka. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
