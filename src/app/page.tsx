import { getModules } from '@/lib/modules';
import { Section } from '@/components/Section';
import TestimonialsSection from '@/sections/home/TestimonialsSection';
import HeroSection from '@/sections/home/HeroSection';
import IntroSection from '@/sections/home/IntroSection';
import { FeatureCarousel, type Feature } from '@/sections/home/FeatureCarousel';
import CTASection from '@/sections/home/CTASection';
import ExploreHomesSection from '@/sections/home/ExploreHomesSection';
import WhyModularPanelizedSection from '@/sections/home/WhyModularPanelizedSection';
import OurProcessSection from '@/sections/home/OurProcessSection';
import FAQSection from '@/sections/home/FAQSection';
import ContactFormSection from '@/sections/home/ContactFormSection';

const features: Feature[] = [
  {
    icon: <i className='fas fa-bolt text-[2rem]' />,
    title: 'Speed',
    subtitle: 'Your project ready in months, not years.',
    imageUrl: '/assets/features-image-1.jpg',
  },
  {
    icon: <i className='fas fa-award text-[2rem]' />,
    title: 'Quality',
    subtitle: 'Premium materials, rigorous inspections.',
    imageUrl: '/assets/features-image-2.jpg',
  },
  {
    icon: <i className='fas fa-infinity text-[2rem]' />,
    title: 'End to end',
    subtitle: 'Permits, design, construction, and handover.',
    imageUrl: '/assets/features-image-3.jpg',
  },
  {
    icon: <i className='fas fa-palette text-[2rem]' />,
    title: 'Customization',
    subtitle: 'Tailored to your lifestyle, taste, and budget..',
    imageUrl: '/assets/features-image-4.jpg',
  },
];

const HomePage = () => {
  const featuredModules = getModules();

  return (
    <div className={`bg-dark text-cream snap-y snap-mandatory`}>
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
