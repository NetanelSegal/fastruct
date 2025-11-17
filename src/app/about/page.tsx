import { getContent } from '@/lib/content';
import HeroAboutSection from '@/sections/about/HeroAboutSection';
import AboutIntroSection from '@/sections/about/AboutIntroSection';
import ImageTextSection from '@/sections/about/ImageTextSection';
import FeaturesGridSection from '@/sections/about/FeaturesGridSection';
import { isPageEnabled } from '@/lib/page-config';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent('about', 'en');
  return {
    title: 'About Us | Fastruct',
    description: content.hero.subtitle,
  };
}

const AboutPage = async () => {
  // Check if page is enabled
  if (!isPageEnabled('/about')) {
    notFound();
  }

  const content = await getContent('about', 'en');

  return (
    <div className='bg-dark'>
      <HeroAboutSection {...content.hero} />
      <AboutIntroSection {...content.about} />
      <ImageTextSection {...content.imageText} />
      <FeaturesGridSection {...content.featuresGrid} />
    </div>
  );
};

export default AboutPage;
