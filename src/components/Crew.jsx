// Libraries
import { useState } from 'react';

// Assets
import douglas from '../assets/crew/image-douglas-hurley.png';
import mark from '../assets/crew/image-mark-shuttleworth.png';
import victor from '../assets/crew/image-victor-glover.png';
import anousheh from '../assets/crew/image-anousheh-ansari.png';

// Data
import { crew as crewData } from '../data/data.json';

const images = {
  0: douglas,
  1: mark,
  2: victor,
  3: anousheh,
};

const Crew = () => {
  const [crew, setCrew] = useState(crewData[0]);

  return (
    <section className='mt-8 md:mt-[60px] flex flex-col md:flex-col-reverse items-center xl:flex-row-reverse xl:justify-between relative xl:mt-0'>
      <div className='w-[327px] h-[223px] md:h-full md:w-full border-b md:border-b-0 border-b-[#383B4B] flex justify-center relative xl:justify-end'>
        <img
          src={images[crewData.indexOf(crew)]}
          alt='Crew member'
          className='w-[177.12px] h-[222px] md:w-[433px] md:h-[572px] xl:w-[569px] xl:h-[712px] bottom-0 xl:relative xl:pt-0'
        />
      </div>
      <nav className='mt-[39px] md:mt-10 md:mb-10 xl:absolute bottom-0 left-0'>
        <ul className='flex flex-row gap-4'>
          {crewData.map(({ name }, index) => (
            <li
              key={name}
              className={`rounded-full w-[10px] h-[10px] xl:w-[15px] xl:h-[15px] bg-white opacity-[0.17] cursor-pointer ${
                crewData.indexOf(crew) === index && 'opacity-100'
              }`}
              onClick={() => setCrew(crewData[index])}
            ></li>
          ))}
        </ul>
      </nav>
      <div className='w-full text-center xl:text-start grid place-content-center xl:place-content-start'>
        <div className='flex flex-col text-center mt-8 md:mt-0 uppercase text-white font-belle xl:text-start'>
          <span className='leading-[18px] md:leading-[28px] opacity-50 md:text-[24px] xl:text-[32px] xl:leading-[37px]'>{crew.role}</span>
          <h2 className='text-[24px] md:text-[40px] leading-[32px] md:leading-[46px] mt-2 xl:mt-[15px] xl:text-[56px] xl:leading-[64px]'>{crew.name}</h2>
        </div>
        <p className='font-brl text-primary text-[15px] md:text-base text-center leading-[25px] md:leading-[28px] mt-4 xl:mt-[27px] px-6 max-w-[458px] md:px-0 xl:max-w-[444px] xl:leading-[32px] xl:text-start'>
          {crew.bio}
        </p>
      </div>
    </section>
  );
};

export default Crew;
