import ExperienceCard from '@/components/ExperienceCard';
import { Section } from '@/components/Section';
import { IExperienceMetric } from '@/types/content';

interface ExperienceSectionProps {
  experienceData: IExperienceMetric[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experienceData,
}) => {
  return (
    <Section title='Our Experience' bgColor='white'>
      <div className='flex flex-col gap-4'>
        {experienceData.map((experience, index) => (
          <ExperienceCard
            key={index}
            title={experience.title}
            description={experience.text}
            hasBorder={index < experienceData.length - 1}
          />
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
