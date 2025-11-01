import { Section } from '@/components/Section';
import TestimonialsSection from '@/sections/home/TestimonialsSection';
import HeroSection from '@/sections/home/HeroSection';
import IntroSection from '@/sections/home/IntroSection';
import { FeatureCarousel } from '@/sections/home/FeatureCarousel';
import CTASection from '@/sections/home/CTASection';
import ExploreHomesSection from '@/sections/home/ExploreHomesSection';
import WhyModularPanelizedSection from '@/sections/home/WhyModularPanelizedSection';
import OurProcessSection from '@/sections/home/OurProcessSection';
import FAQSection from '@/sections/home/FAQSection';
import ContactFormSection from '@/sections/home/ContactFormSection';
import ExperienceSection from '@/sections/home/ExperienceSection';
import { getContent, getModules } from '@/lib/content';

const HomePage = async () => {
  const content = await getContent('home', 'en');
  const modulesData = await getModules();

  return (
    <div className={`bg-dark text-cream`}>
      {/* Hero Section */}
      <HeroSection {...content.heroSection} />

      {/* Intro Section */}
      <IntroSection {...content.intro} />

      {/* Feature Carousel Section */}
      <FeatureCarousel features={content.features} />

      {/* Experience Section */}
      <ExperienceSection experienceData={content.experienceMetrics} />

      {/* CTA Section */}
      <CTASection title={content.cta.title} />

      {/* Explore Homes Section */}
      <ExploreHomesSection featuredModules={modulesData} />

      {/* Why Modular & Panelized Section */}
      <WhyModularPanelizedSection {...content.whyModularPanelized} />

      {/* Our Process Section */}
      <OurProcessSection {...content.process} />

      {/* Testimonial Section */}
      <Section bgColor='accent'>
        <TestimonialsSection {...content.testimonial} />
      </Section>

      {/* FAQ Section */}
      <FAQSection {...content.faq} />

      {/* Contact Form Section */}
      <ContactFormSection />
    </div>
  );
};

export default HomePage;
