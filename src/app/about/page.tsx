import { getContent } from '@/lib/content';
import HeroAboutSection from '@/sections/about/HeroAboutSection';
import AboutIntroSection from '@/sections/about/AboutIntroSection';
import ImageTextSection from '@/sections/about/ImageTextSection';
import FeaturesGridSection from '@/sections/about/FeaturesGridSection';

const AboutPage = async () => {
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
