'use client';

import { ModuleCard } from '@/sections/home/components/ModuleCard';
import { IModule } from '@/types/modules';
import { motion, Variants } from 'motion/react';

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
  return (
    <motion.div
      className='grid gap-8 md:grid-cols-2'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}>
      {modules.map((module) => (
        <ModuleCard
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
      ))}
    </motion.div>
  );
};

export default ModuleList;
