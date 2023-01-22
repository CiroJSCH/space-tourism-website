// Libraries
import { useState, useEffect } from 'react';

// Assets
import moon from '../assets/destination/image-moon.png';
import mars from '../assets/destination/image-mars.png';
import europa from '../assets/destination/image-europa.png';
import titan from '../assets/destination/image-titan.png';

// Data
import { destinations } from '../data/data.json';

const images = {
  0: moon,
  1: mars,
  2: europa,
  3: titan,
}

const Destination = () => {

  const [destination, setDestination] = useState(destinations[0]);

  return (
    <section className='flex flex-col xl:flex-row items-center mt-8 xl:mt-16 pb-5 md:pb-8 xl:pb-0 xl:max-w-[1110px] xl:justify-between m-auto'>
      <img src={images[destinations.indexOf(destination)]} alt={destination.name} className='w-[170px] h-[170px] md:w-[300px] md:h-[300px] xl:w-[445px] xl:h-[445px] xl:mt-9' />
      <div className='flex flex-col items-center xl:items-start'>
        <nav className='font-barlow text-primary text-[14px] md:text-base leading-[17px] md:leading-[19px] mt-[26px] xl:mt-0 tracking-[2.3625px] md:tracking-[2.7px]'>
          <ul className='flex gap-[26px]'>
            {destinations.map(({ name }, index) => (
              <li key={index} className={`cursor-pointer uppercase pb-2 ${destinations.indexOf(destination) === index && "text-white border-b-[3px] border-white"}`} onClick={() => setDestination(destinations[index])}>{name}</li>
            ))}
          </ul>
        </nav>
        <div className='pb-8 md:pb-[49px] xl:pb-[54px] border-b border-b-[#383B4B] xl:mt-[17px]'>
          <h2 className='text-[56px] md:text-[80px] font-belle leading-[64px] md:leading-[92px] text-center xl:text-start text-white uppercase mt-5 xl:text-[100px] xl:leading-[115px]'>{destination.name}</h2>
          <p className='font-brl text-primary text-[15px] md:text-base leading-[25px] md:leading-[28px] text-center max-w-[327px] md:max-w-[573px] xl:max-w-[444px] xl:text-[18px] xl:text-start xl:leading-[32px] font-normal'>{destination.description}</p>
        </div>
        <div className='flex flex-col uppercase mt-8 md:mt-[28px] md:flex-row items-center xl:justify-start md:justify-around md:px-[65px] w-full xl:px-0'>
          <h3 className='font-barlow text-primary text-center xl:text-start text-[14px] leading-[17px] tracking-[2.3625px] '>
            <p className='mb-3'>avg. distance</p>
            <span className='text-white text-[28px] leading-[32px]'>{destination.distance}</span>
          </h3>
          <h3 className='mt-8 md:mt-0 font-barlow text-primary xl:text-start text-center text-[14px] leading-[17px] tracking-[2.3625px] xl:ml-[79px]'>
            <p className='mb-3'>est. travel time</p>
            <span className='text-white text-[28px] leading-[32px]'>{destination.travel}</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Destination;
