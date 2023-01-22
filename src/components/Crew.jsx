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
    <section className='mt-8 flex flex-col items-center'>
      <div className='w-[327px] h-[223px] border-b border-b-[#383B4B] grid place-content-center'>
        <img
          src={images[crewData.indexOf(crew)]}
          alt='Crew member'
          className='w-[177.12px] h-[222px]'
        />
      </div>
      <nav className='mt-[39px]'>
        <ul className='flex flex-row gap-4'>
          {crewData.map(({ name }, index) => (
            <li
              key={name}
              className={`rounded-full w-[10px] h-[10px] bg-white opacity-[0.17] ${
                crewData.indexOf(crew) === index && 'opacity-100'
              }`}
              onClick={() => setCrew(crewData[index])}
            ></li>
          ))}
        </ul>
      </nav>
      <div>
        <div className='flex flex-col text-center mt-8 uppercase text-white font-belle '>
          <span className='leading-[18px] opacity-50'>{crew.role}</span>
          <h2 className='text-[24px] leading-[32px] mt-2'>{crew.name}</h2>
        </div>
        <p className='font-brl text-primary text-[15px] text-center leading-[25px] mt-4 px-6'>
          {crew.bio}
        </p>
      </div>
    </section>
  );
};

export default Crew;
