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
    <section className='mt-8 md:mt-[60px] flex flex-col items-center md:pb-6'>
      <div className='w-full md:w-[calc(100%+38.5px+38.5px)] flex justify-center'>
        <img src={images[techData.indexOf(tech)]} alt={tech.name} />
      </div>
      <ul className='flex gap-4 font-belle mt-[34px] md:mt-14'>
        {techData.map(({ name }, index) => (
          <li
            key={name}
            className={`grid place-content-center text-center w-[40px] h-[40px] md:w-[60px] md:h-[60px] tracking-[1px] md:tracking-[1.5px] leading-[18px] md:leading-[28px] text-white rounded-full border border-[rgba(255,255,255,0.25)] md:text-[24px] ${
              techData.indexOf(tech) === index && 'text-[#0B0D17] bg-white'
            }`}
            onClick={() => setTech(techData[index])}
          >
            {index + 1}
          </li>
        ))}
      </ul>
      <div className='mt-[26px] md:mt-11 flex flex-col items-center'>
        <span className='uppercase font-barlow text-[14px] md:text-[16px] leading-[17px] md:leading-[19px] tracking-[2.3625px] md:tracking-[2.7px] text-primary text-center'>
          the terminology...
        </span>
        <h3 className='mt-[9px] md:mt-4 font-belle text-white uppercase text-[24px] md:text-[40px] leading-[28px] md:leading-[46px] text-center'>
          {tech.name}
        </h3>
        <p className='mt-4 max-w-[327px] md:max-w-[458px] font-brl text-primary text-[15px] md:text-[16px] leading-[25px] md:leading-[28px] text-center'>
          {tech.description}
        </p>
      </div>
    </section>
  );
};

export default Technology;
