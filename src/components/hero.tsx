import { ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className='py-24 sm:py-32'>
      <div className='overflow-hidden border-b border-muted'>
        <div className='px-6 lg:px-8'>
          <div className='mx-auto flex max-w-5xl flex-col items-center'>
            <div className='z-10 items-center text-center'>
              <h1 className='mb-8 text-pretty text-4xl font-medium lg:text-8xl'>
                Education for Transformation
              </h1>
              <p className='mx-auto max-w-screen-md text-muted-foreground lg:text-xl'>
                Prof. Achyuta Samanta founded KIIT in 1992 as a modest
                vocational training center. But as the institution grew, it
                became a university in 2004. Today, KIIT is one of the most
                prestigious universities in India.
              </p>
              <div className='mt-12 flex w-full flex-col justify-center gap-2 sm:flex-row'>
                <Button>
                  Know more
                  <ChevronRight className='ml-2 h-4' />
                </Button>
              </div>
            </div>
          </div>
          <img
            src='/assets/Achyuta-Samanta-KIIT-University-1200x661.jpg'
            alt='placeholder'
            className='mx-auto mt-24 max-h-[700px] w-full max-w-7xl rounded-t-lg object-cover shadow-lg'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
