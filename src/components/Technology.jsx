// Libraries
import { useState } from 'react';

// Assets
import vehicle from '../assets/technology/image-launch-vehicle-landscape.jpg';
import spaceport from '../assets/technology/image-spaceport-landscape.jpg';
import capsule from '../assets/technology/image-space-capsule-landscape.jpg';

// Data
import { technology as techData } from '../data/data.json';

const images = {
  0: vehicle,
  1: spaceport,
  2: capsule,
};

const Technology = () => {
  const [tech, setTech] = useState(techData[0]);

  return (
    <section className='mt-8 md:mt-[60px] flex flex-col items-center md:pb-6 xl:flex-row-reverse xl:justify-between'>
      <div className='w-full md:w-[calc(100%+38.5px+38.5px)] flex justify-center xl:w-[515px] xl:h-[527px]'>
        <img src={images[techData.indexOf(tech)]} alt={tech.name} />
      </div>
      <div className='flex flex-col xl:flex-row items-center xl:gap-20 xl:relative'>
        <ul className='flex gap-4 font-belle mt-[34px] md:mt-14 xl:mt-0 xl:flex-col xl:gap-8'>
          {techData.map(({ name }, index) => (
            <li
              key={name}
              className={`grid place-content-center text-center w-[40px] h-[40px] md:w-[60px] md:h-[60px] xl:w-[80px] xl:h-[80px] tracking-[1px] md:tracking-[1.5px] leading-[18px] md:leading-[28px] xl:leading-[37px] text-white rounded-full border border-[rgba(255,255,255,0.25)] md:text-[24px] xl:text-[32px] ${
                techData.indexOf(tech) === index &&
                'text-[#0B0D17] bg-white cursor-pointer'
              }`}
              onClick={() => setTech(techData[index])}
            >
              {index + 1}
            </li>
          ))}
        </ul>
        <div className='mt-[26px] md:mt-11 xl:mt-0 flex flex-col items-center xl:items-start'>
          <span className='uppercase font-barlow text-[14px] md:text-[16px] leading-[17px] md:leading-[19px] tracking-[2.3625px] md:tracking-[2.7px] text-primary text-center xl:text-start'>
            the terminology...
          </span>
          <h3 className='mt-[9px] md:mt-4 xl:mt-[11px] font-belle text-white uppercase text-[24px] md:text-[40px] xl:text-[56px] leading-[28px] md:leading-[46px] xl:leading-[64px] text-center xl:text-start'>
            {tech.name}
          </h3>
          <p className='mt-4 xl:mt-[17px] max-w-[327px] md:max-w-[458px] xl:max-w-[444px] font-brl text-primary text-[15px] md:text-[16px] xl:text-[18px] leading-[25px] md:leading-[28px] xl:leading-[32px] text-center xl:text-start'>
            {tech.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technology;
