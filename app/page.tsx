import AboutMe from '@/components/AboutMe';
import CardGrid from '@/components/CardGrid';
import Footer from '@/components/Footer';
import { communityExperiences, workExperiences } from '@/constants';

export default function Home() {
  return (
    <div className='flex grow flex-col'>
      <div className='w-full h-[40px]'></div>
      <AboutMe />
      <div className='w-full h-[40px]'></div>
      <CardGrid
        title={'Work'}
        experiences={workExperiences}
      />
      <div className='w-full h-[40px]'></div>
      <CardGrid
        title={'Community'}
        experiences={communityExperiences}
      />
      <div className='w-full h-[40px]'></div>
      <Footer />
      <div className='py-6 flex grow items-center justify-center'>
        <h3 className='text-lg text-primary-grey font-semibold font-lexend-deca'>
          {` That's all folks!`}
        </h3>
      </div>
    </div>
  );
}
