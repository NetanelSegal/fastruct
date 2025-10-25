export type Module = {
  slug: string;
  title: string;
  short: string;
  specs: Record<string, string | number | boolean>;
  images: string[];
  body: string;
};
