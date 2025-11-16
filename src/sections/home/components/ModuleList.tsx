'use client';

import { ModuleCard } from '@/sections/home/components/ModuleCard';
import { IModule } from '@/types/modules';
import { motion, Variants } from 'motion/react';
import { Fragment } from 'react/jsx-runtime';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ModuleList = ({ modules }: { modules: IModule[] }) => {
  const modulesInGrid = modules.slice(0, modules.length - (modules.length % 2));
  const remainingModules = modulesInGrid.slice(
    modules.length - (modules.length % 2) - 1
  );
  return (
    <>
      <motion.div
        className='grid gap-8 md:auto-rows-auto md:grid-cols-2 md:justify-items-center'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}>
        {modulesInGrid.map((module, index) => {
          return (
            <ModuleCard
              index={index}
              key={module.slug}
              slug={module.slug}
              imageUrl={module.mainImage}
              title={module.title}
              specs={[
                `${module.specs.areaSqft} sqft`,
                `${module.specs.bedrooms} Bedroom`,
                `${module.specs.bathrooms} Bathroom`,
              ]}
              variants={itemVariants}
            />
          );
        })}
      </motion.div>
      {remainingModules.length > 0 && (
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          className='flex flex-col items-center justify-center gap-8 md:flex-row md:justify-items-center'>
          {remainingModules.map((module, index) => {
            return (
              <ModuleCard
                index={index}
                key={module.slug}
                slug={module.slug}
                imageUrl={module.mainImage}
                title={module.title}
                specs={[
                  `${module.specs.areaSqft} sqft`,
                  `${module.specs.bedrooms} Bedroom`,
                  `${module.specs.bathrooms} Bathroom`,
                ]}
                variants={itemVariants}
              />
            );
          })}
        </motion.div>
      )}
    </>
  );
};

export default ModuleList;
