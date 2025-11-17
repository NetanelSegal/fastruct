'use client';

import Image from 'next/image';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ITeam } from '@/types/about';
import { Section } from '@/components/Section';
import AnimatedHeading from '@/components/text-animation/AnimatedHeading';

const TeamMemberCard = ({
  name,
  role,
  bio,
  imageUrl,
  index,
}: {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: '0px 0px -100px 0px',
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut',
      }}
      className='group relative overflow-hidden rounded-xl bg-light shadow-lg transition-shadow duration-300 hover:shadow-xl'>
      {/* Image Container */}
      <div className='relative aspect-[3/4] w-full overflow-hidden'>
        <motion.div
          className='relative h-full w-full'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}>
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
            className='object-cover object-center'
          />
          {/* Gradient overlay on hover */}
          <div className='bg-gradient-to-t from-dark/80 via-dark/40 to-transparent absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
        </motion.div>
      </div>

      {/* Content */}
      <div className='bg-light p-6 text-dark'>
        <h3 className='text-h3 font-bebas mb-1 text-dark'>{name}</h3>
        <p className='text-h6 mb-3 text-accent'>{role}</p>
        <p className='text-sm text-dark/80 leading-relaxed'>{bio}</p>
      </div>
    </motion.div>
  );
};

const TeamSection = ({ title, members }: ITeam) => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <Section
      ref={sectionRef}
      bgColor='light'
      textColor='dark'
      className='py-32'>
      <div className='container mx-auto'>
        {/* Title */}
        <div className='mb-16 text-center'>
          <AnimatedHeading
            text={title}
            className='text-h1 font-bebas text-dark md:text-[4rem]'
            revealColor='light'
          />
        </div>

        {/* Team Grid */}
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {members.map((member, index) => (
            <TeamMemberCard key={index} {...member} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default TeamSection;

