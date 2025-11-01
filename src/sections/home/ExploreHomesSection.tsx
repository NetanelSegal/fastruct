import { Section } from '@/components/Section';
import { ProductCard } from '@/components/ProductCard';
import { IModule } from '@/types/modules';

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
          <h2 className='text-h2 font-bebas text-light'>Explore Our Homes</h2>
          <h6 className='text-h6 text-light/80 mx-auto max-w-2xl'>
            Explore our range of models, each designed for flexibility and
            comfort
          </h6>
        </div>
        <div className='grid gap-8 md:grid-cols-2'>
          {featuredModules.slice(0, 4).map((module) => (
            <ProductCard
              key={module.slug}
              imageUrl='https://picsum.photos/400/300'
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
