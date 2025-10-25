import type { Module } from './types';
import modules from '../../public/content/modules.json';

export function getModules(): Module[] {
  return modules;
}

export function getModule(slug: string): Module | undefined {
  return modules.find((module) => module.slug === slug);
}

export function getModulesBySlugs(slugs: string[]): Module[] {
  const selectedModules = slugs
    .map((slug) => getModule(slug))
    .filter((module): module is Module => module !== undefined);

  return selectedModules;
}
