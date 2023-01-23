// Libraries
import { useState } from "react";

// Assets
import vehicle from "../assets/technology/image-launch-vehicle-landscape.jpg";
import spaceport from "../assets/technology/image-spaceport-landscape.jpg";
import capsule from "../assets/technology/image-space-capsule-landscape.jpg";

// Data
import { technology as techData } from "../data/data.json";

const images = {
  0: vehicle,
  1: spaceport,
  2: capsule,
}

const Technology = () => {

  const [tech, setTech] = useState(techData[0]);

  return (
    <section className="mt-8 flex flex-col items-center">
      <div className="w-full flex items-center">
        <img src={images[techData.indexOf(tech)]} alt="" />
      </div>
      <ul className="flex gap-4 font-belle mt-[34px]">
        {
          techData.map(({name}, index) => (
            <li key={name} className={`grid place-content-center text-center w-[40px] h-[40px] tracking-[1px] leading-[18px] text-white rounded-full border border-[rgba(255,255,255,0.25)] ${techData.indexOf(tech) === index && "text-[#0B0D17] bg-white"}`} onClick={() => setTech(techData[index])}>{index + 1}</li>
          ))
        }
      </ul>
      <div className="mt-[26px] flex flex-col items-center">
        <span className="uppercase font-barlow text-[14px] leading-[17px] tracking-[2.3625px] text-primary text-center">the terminology...</span>
        <h3 className="mt-[9px] font-belle text-white uppercase text-[24px] leading-[28px] text-center">{tech.name}</h3>
        <p className="mt-4 max-w-[327px] font-brl text-primary text-[15px] leading-[25px] text-center">
          {tech.description}
        </p>
      </div>
    </section>
  )
}

export default Technology