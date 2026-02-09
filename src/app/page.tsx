import { Hero } from '@/components/sections/Hero';
import { VerticalFeatures } from '@/components/sections/VerticalFeatures';
import { Features } from '@/components/sections/Features';
import { Trust } from '@/components/sections/Trust';
import { CTA } from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <VerticalFeatures />
      <Features />
      <Trust />
      <CTA />
    </>
  );
}
