import { getModules } from '@/lib/modules';
import { Section } from '@/components/Section';
import TestimonialsSection from '@/sections/home/TestimonialsSection';
import HeroSection from '@/sections/home/HeroSection';
import IntroSection from '@/sections/home/IntroSection';
import {
  FeatureCarousel,
  PlaceholderIcon,
  type Feature,
} from '@/sections/home/FeatureCarousel';
import CTASection from '@/sections/home/CTASection';
import ExploreHomesSection from '@/sections/home/ExploreHomesSection';
import WhyModularPanelizedSection from '@/sections/home/WhyModularPanelizedSection';
import OurProcessSection from '@/sections/home/OurProcessSection';
import FAQSection from '@/sections/home/FAQSection';
import ContactFormSection from '@/sections/home/ContactFormSection';

const features: Feature[] = [
  {
    icon: <PlaceholderIcon />,
    title: 'Unmatched Speed',
    subtitle:
      'Our factory-built process dramatically reduces construction time, getting you into your new home faster than ever.',
    imageUrl:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2000',
  },
  {
    icon: <PlaceholderIcon />,
    title: 'Precision Engineering',
    subtitle:
      'Every component is crafted in a climate-controlled environment, ensuring superior quality and structural integrity.',
    imageUrl:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000',
  },
  {
    icon: <PlaceholderIcon />,
    title: 'Sustainable by Design',
    subtitle:
      'Minimized waste and optimized material usage make our homes a smarter, more sustainable choice for the future.',
    imageUrl:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2000',
  },
  {
    icon: <PlaceholderIcon />,
    title: 'Built to Last',
    subtitle:
      'Using high-quality materials and robust engineering, our homes are designed for longevity and peace of mind.',
    imageUrl:
      'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2000',
  },
];

const HomePage = () => {
  const featuredModules = getModules();

  return (
    <div className={`bg-dark text-cream relative`}>
      {/* Hero Section */}
      <HeroSection />

      {/* Intro Section */}
      <IntroSection />

      {/* Feature Carousel Section */}
      <FeatureCarousel features={features} />

      {/* CTA Section */}
      <CTASection />

      {/* Explore Homes Section */}
      <ExploreHomesSection featuredModules={featuredModules} />

      {/* Why Modular & Panelized Section */}
      <WhyModularPanelizedSection />

      {/* Our Process Section */}
      <OurProcessSection />

      {/* Testimonial Section */}
      <Section bgColor='accent'>
        <TestimonialsSection
          quote='Fast Struct crafted our forever home with unrivaled care. Every detail felt luxurious and personal.'
          author='A. & T. Jameson'
        />
      </Section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Form Section */}
      <ContactFormSection />
    </div>
  );
};

export default HomePage;
