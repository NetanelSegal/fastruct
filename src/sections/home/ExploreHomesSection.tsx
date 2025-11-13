import { Section } from '@/components/Section';
import { IModule } from '@/types/modules';
import AnimatedHeading from '@/components/text-animation/AnimatedHeading';
import FadeInParagraph from '@/components/text-animation/FadeInParagraph';
import ModuleList from './components/ModuleList';

interface IExploreHomesSectionProps {
  featuredModules: IModule[];
}

const ExploreHomesSection = ({
  featuredModules,
}: IExploreHomesSectionProps) => {
  return (
    <Section>
      <div className='flex flex-col gap-8'>
        <div className='text-center'>
          <AnimatedHeading
            text='Explore Our Homes'
            className='text-h2 font-bebas text-light'
          />

          <FadeInParagraph className='text-h6 text-light/80 mx-auto max-w-2xl'>
            Explore our range of models, each designed for flexibility and
            comfort
          </FadeInParagraph>
        </div>
        <ModuleList modules={featuredModules} />
      </div>
    </Section>
  );
};

export default ExploreHomesSection;
