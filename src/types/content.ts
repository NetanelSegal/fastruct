import { IModule } from './modules';
import { IAboutContent } from './about';
import { IHomeContent } from './home';
import { IProductContent } from './product';
import { IContactContent } from './contact';

export interface IContentMap {
  home: IHomeContent;
  modules: IModule[];
  about: IAboutContent;
  product: IProductContent;
  contact: IContactContent;
}

export type ContentKey = keyof IContentMap;

export type Language = 'en';
