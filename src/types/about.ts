export interface IHeroAbout {
  title: string;
  subtitle: string;
  backgroundImage: string;
  bigTextLine1: string;
}

export interface IAbout {
  bigTextLine2: string;
  paragraph: string;
}

export interface IImageText {
  image: string;
  paragraph: string;
}

export interface IFeatureItem {
  title: string;
  text: string;
  imageUrl: string;
}

export interface IFeaturesGrid {
  items: IFeatureItem[];
}

export interface IAboutContent {
  hero: IHeroAbout;
  about: IAbout;
  imageText: IImageText;
  featuresGrid: IFeaturesGrid;
}
