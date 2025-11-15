import { getModules } from '@/lib/content';
import { notFound } from 'next/navigation';
import HeroProductSection from '@/sections/product/HeroProductSection';
import SpecificationsSection from '@/sections/product/SpecificationsSection';
import ProductDescriptionSection from '@/sections/product/ProductDescriptionSection';
import StackedImagesSection from '@/sections/product/StackedImagesSection';
import ExploreHomesSection from '@/sections/home/ExploreHomesSection';

interface ModulePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const modules = await getModules();
  return modules.map((module) => ({
    slug: module.slug,
  }));
}

export async function generateMetadata({ params }: ModulePageProps) {
  const { slug } = await params;
  const modules = await getModules();
  const module = modules.find((m) => m.slug === slug);

  if (!module) {
    return {
      title: 'Module Not Found',
    };
  }

  return {
    title: `${module.title} | Fastruct`,
    description: module.summary,
  };
}

const ModulePage = async ({ params }: ModulePageProps) => {
  const { slug } = await params;
  const modules = await getModules();
  const module = modules.find((m) => m.slug === slug);

  if (!module) {
    notFound();
  }

  // Transform module data to match section props
  const heroData = {
    title: module.title,
    subtitle: module.summary,
    backgroundImage: module.mainImage,
  };

  const specificationsData = {
    floorPlanImage: module.sketchPlans[0] || module.mainImage,
    floorPlanLabel: 'FLOOR PLAN',
    area: `${module.specs.areaSqft} sq.ft.`,
    specs: [
      { label: 'SIZE (sqft)', value: module.specs.areaSqft },
      { label: 'BEDROOM', value: module.specs.bedrooms },
      { label: 'BATHROOMS', value: module.specs.bathrooms },
      { label: 'MODULES', value: module.specs.modulesCount },
    ],
  };

  const descriptionData = {
    image: module.images[0] || module.mainImage,
    paragraph: module.marketingDescription,
  };

  const stackedImagesData = {
    images: module.images.map((url, index) => ({
      url,
      alt: `${module.title} - Image ${index + 1}`,
    })),
  };

  const exploreData = {
    title: 'EXPLORE OUR HOMES',
    subtitle:
      'Explore our range of models, each designed for flexibility and comfort.',
  };

  const otherModules = modules.filter((m) => m.slug !== slug);

  return (
    <div className='bg-dark'>
      <HeroProductSection {...heroData} />
      <SpecificationsSection {...specificationsData} />
      <ProductDescriptionSection {...descriptionData} />
      <StackedImagesSection {...stackedImagesData} />
      <ExploreHomesSection
        featuredModules={otherModules}
        exploreContent={exploreData}
      />
    </div>
  );
};

export default ModulePage;
