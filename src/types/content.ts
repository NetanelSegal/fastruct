export interface IHeroSection {
  title: string;
  animatedWords: string[];
  subtitle: string;
}

export interface IIntro {
  text: string;
}

export interface IFeatureItem {
  title: string;
  text: string;
  iconClass: string;
  imageUrl: string;
}

export interface IConstructionCategory {
  title: string;
  items: string[];
}

export interface IWhyModularPanelized {
  modular: IConstructionCategory;
  panelized: IConstructionCategory;
  combinedApproach: IConstructionCategory;
}

export interface IProcessStep {
  title: string;
  text: string;
}

export interface IProcess {
  title: string;
  steps: IProcessStep[];
}

export interface IExperienceMetric {
  title: string;
  text: string;
}

export interface IFAQItem {
  question: string;
  answer: string;
}

export interface IFAQ {
  title: string;
  items: IFAQItem[];
}

export interface ITestimonial {
  quote: string;
  author: string;
}

export interface ICTA {
  title: string;
}

export interface IHomeContent {
  heroSection: IHeroSection;
  intro: IIntro;
  features: IFeatureItem[];
  whyModularPanelized: IWhyModularPanelized;
  process: IProcess;
  experienceMetrics: IExperienceMetric[];
  faq: IFAQ;
  cta: ICTA;
  testimonial: ITestimonial;
}

import { IModule } from './modules';

export interface IContentMap {
  home: IHomeContent;
  modules: IModule[];
  // about: AboutContent;
  // contact: ContactContent;
  // faq: FAQPageContent;
}

export type ContentKey = keyof IContentMap;

export type Language = 'en';
