import AboutMe from '@/components/AboutMe';
import CardGrid from '@/components/CardGrid';
import Divider from '@/components/Divider';
import Footer from '@/components/Footer';
import { communityExperiences, workExperiences } from '@/constants';

export default function Home() {
  return (
    <div className='flex grow flex-col'>
      <Divider />
      <AboutMe />
      <Divider />
      <CardGrid
        title={'Work'}
        experiences={workExperiences}
      />
      <Divider />

      <CardGrid
        title={'Community'}
        experiences={communityExperiences}
      />
      <Divider />
      <Footer />
      <div className='py-6 flex grow items-center justify-center'>
        <h3 className='text-base text-primary-grey font-semibold font-lexend-deca'>
          {`That's all folks!`}
        </h3>
      </div>
    </div>
  );
}
