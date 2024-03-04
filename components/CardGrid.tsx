import Link from 'next/link';
import { Experience } from '@/types';
import Image from 'next/image';

interface ExperienceGridProps {
  experiences: Experience[];
  title: string;
}

export default function ExperienceGrid({
  experiences,
  title,
}: ExperienceGridProps) {
  return (
    <div className='grid gap-6 section'>
      <div>
        <h2 className='text-xl text-primary-grey font-semibold font-lexend-deca'>
          {title}
        </h2>
      </div>
      <div className='w-full grid md:grid-cols-2 gap-10 '>
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.slug}
            experience={experience}
          />
        ))}
      </div>
    </div>
  );
}

interface ExperienceCardProps {
  experience: Experience;
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Link
      href='/'
      className='relative grid gap-3 group'
    >
      <Image
        src={experience.image}
        alt={experience.company}
        width={720}
        height={320}
      />
      <h3 className='text-base text-primary-blue font-bold font-lexend-deca group-hover:underline group-hover:decoration-wavy underline-offset-4'>
        {experience.company}
      </h3>
      <p className='text-sm text-primary-grey font-medium '>
        {experience.description}
      </p>
    </Link>
  );
}
