
export interface ISpecs {
  areaSqft: number;
  bedrooms: number;
  bathrooms: number;
  modulesCount: number;
}

export interface ICTA {
  primaryLabel: string;
  secondaryLabel: string;
}

export interface IModule {
  slug: string;
  title: string;
  summary: string;
  specs: ISpecs;
  mainImage: string;
  images: string[];
  sketchPlans: string[];
  tags: string[];
  highlights: string[];
  cta: ICTA;
}
