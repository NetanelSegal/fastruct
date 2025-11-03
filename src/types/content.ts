import { IModule } from './modules';
import { IAboutContent } from './about';
import { IHomeContent } from './home';

export interface IContentMap {
  home: IHomeContent;
  modules: IModule[];
  about: IAboutContent;
  // contact: ContactContent;
  // faq: FAQPageContent;
}

export type ContentKey = keyof IContentMap;

export type Language = 'en';
