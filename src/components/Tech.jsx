import React, { useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from '../styles';


const Tech = () => {

  const [hoveredTech, setHoveredTech] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event, technology) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
    setHoveredTech(technology);
  };

  const handleMouseLeave = () => {
    setHoveredTech(null);
  };

  return (
    <>
      <p className={`${styles.sectionSubText} mb-10 text-white text-center`}> - my tech stack - </p>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        
        {technologies.map((technology) => (
          <div 
            className="group w-28 h-28" 
            key ={technology.name}
            onMouseMove={(e) => handleMouseMove(e, technology)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              onClick ={() => window.open(technology.info, '_blank_')}
              className='bg-tertiary w-5 h-5 rounded-full flex justify-center items-center cursor-pointer text-secondary text-[15px]'
            >
              i
            </div>
            <BallCanvas icon={technology.icon}/>

          </div>
        ))}
      </div>
       {/* Floating technology name */}
       {hoveredTech && (
        <div
          className="fixed pointer-events-none text-[17px] text-white bg-[#1d1836] px-2 py-1 rounded"
          style={{
            top: `${cursorPosition.y + 10}px`,
            left: `${cursorPosition.x + 10}px`,
          }}
        >
          {hoveredTech.name}
        </div>
      )}
    </>
  )
}

export default SectionWrapper(Tech, "");