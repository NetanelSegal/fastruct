import { Section } from '@/components/Section';
import { IModule } from '@/types/modules';
import AnimatedHeading from '@/components/text-animation/AnimatedHeading';
import FadeInParagraph from '@/components/text-animation/FadeInParagraph';
import ModuleList from './components/ModuleList';
import { IExplore } from '@/types/product';

interface IExploreHomesSectionProps {
  featuredModules: IModule[];
  exploreContent?: IExplore;
}

const ExploreHomesSection = ({
  featuredModules,
  exploreContent,
}: IExploreHomesSectionProps) => {
  const title = exploreContent?.title || 'Explore Our Homes';
  const subtitle =
    exploreContent?.subtitle ||
    'Explore our range of models, each designed for flexibility and comfort';

  return (
    <Section bgColor='dark' textColor='light'>
      <div className='flex flex-col gap-8'>
        <div className='text-center'>
          <AnimatedHeading
            text={title}
            className='text-h2 font-bebas text-light'
            revealColor='dark'
          />

          <FadeInParagraph className='text-h6 text-light/80 mx-auto max-w-2xl'>
            {subtitle}
          </FadeInParagraph>
        </div>
        <ModuleList modules={featuredModules} />
      </div>
    </Section>
  );
};

export default ExploreHomesSection;
