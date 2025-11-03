import { Section } from '@/components/Section';
import { ModuleCard } from '@/components/ModuleCard';
import { IModule } from '@/types/modules';
import AnimatedHeading from '@/components/text-animation/AnimatedHeading';
import FadeInParagraph from '@/components/text-animation/FadeInParagraph';

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
        <div className='grid gap-8 md:grid-cols-2'>
          {featuredModules.map((module) => (
            <ModuleCard
              key={module.slug}
              slug={module.slug}
              imageUrl={module.mainImage}
              title={module.title}
              specs={[
                `${module.specs.areaSqft} sqft`,
                `${module.specs.bedrooms} Bedroom`,
                `${module.specs.bathrooms} Bathroom`,
              ]}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ExploreHomesSection;
