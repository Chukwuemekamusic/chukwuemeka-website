import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Music } from '@/components/sections/Music';
import { Events } from '@/components/sections/Events';
import { Media } from '@/components/sections/Media';
import { Connect } from '@/components/sections/Connect';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Music />
      <Events />
      <Media />
      <Connect />
    </>
  );
}
