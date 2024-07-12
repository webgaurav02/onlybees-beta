import React from 'react';

//Components
import VideoComponent from './VideoComponent';

const HeroSection = () => {
  return (
    <div className='flex lg:flex-row flex-col items-center min-h-[70svh]'>
      <VideoComponent />
      <div className='flex flex-col md:w-[37rem] mx-auto px-10 md:px-0'>
        <div className="h-fit overflow-y-hidden">
          <h1 className='font-coolvetica md:text-6xl text-[3rem] mt-10 md:mt-0 leading-none animate-riseUp'>
            WE ARE THE DOERS,
          </h1>
        </div>
        <div className="h-fit overflow-y-hidden">
          <h1 className='font-coolvetica md:text-6xl text-[3rem] leading-none animate-riseUp'>
            THINKERS, DREAMERS
          </h1>
        </div>
        <p className='md:w-[37rem] mt-2 md:text-[1.3rem] text-[1.1rem] md:leading-snug leading-tight text-justify font-coolvetica text-[#8B8A8A] opacity-85'>
          THIS IS HOW WE PICTURE IT. A SWARM OF BEES BUILDING A HIVE TO SHARE AN ECOSYSTEM. THERE IS SOMETHING INTRIGUING ABOUT THE &quot;DANCE LANGUAGE&quot; OF BEES. AND OUR TEAM IS DEDICATED TO COMMUNICATE AND BUILD A CREATIVE ECOSYSTEM IN THE MOST EFFECTIVE AND IMPACTFUL WAY.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
