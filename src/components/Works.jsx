import React from "react";

import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Works = () => {

  return (
    <>
      <motion.div variants={textVariant()} className='text-center'>
        <p className={`${styles.sectionSubText} underline`}>My Projects and Contributions</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
     
      <motion.p variants={fadeIn("","",0.2,1.3)} className={styles.sectionDescText}>
        These are various academic, professional, and personal projects I have worked on and contributed to. 
        Each project has its own brief description, along with links to code repositories, videos, and additional information. 
        These projects reflect my ability to utilize various technologies to create solutions. <br/>
        <span className='font-bold'>Click and drag to navigate through projects.</span>
      </motion.p>

      <div className='w-full m-auto [mask:_linear-gradient(to_right,_transparent_0%,_black_5%,_black_95%,_transparent_100%)] cursor-grab'>
        <div className="mt-20">
          <Slider 
            infinite={true}
            slidesToShow= {1}
            slidesToScroll= {1}
            speed={500}
            className="center"
            centerMode={true}
            accessibility={true}
            centerPadding="20%"
          >
            {projects.map((project, index) => (
              
              <div 
                key={`project-${index}`}
                className="bg-tertiary p-5 rounded-2xl w-full"
              >
                
                {/* Project Images */}
                <div className='relative m-auto w-full h-full'>
                   <img 
                    src={project.image}
                    alt={project.name}
                    className='w-full h-full object-cover rounded 2xl'
                  />
                </div>

                {/* Project Name & Description */}
                <div className='mt-5'>
                  <p className='text-white font-bold md:text-[30px] sm:text-[25px] xs:text-[20px] text-[15px] '>{project.name}</p>
                  <p className='text-white font-normal md:text-[20px] sm:text-[17px] xs:text-[15px] text-[12px]  '>{project.subname}</p>
                  <ul className="list-disc ml-5 mt-5 mb-8 ">
                  {project.description.map((desc, index) => (
                      <li 
                        key={`desc-${index}`}
                        className="mt-2 text-secondary lg:text-[16px] md:text-[12px] sm:text-[0px] xs:text-[0px] text-[0px]"
                      >
                        {desc}
                      </li>
                    ))}
                  </ul>
                 </div>

                {/* Skills and Tech */}
                <div>
                  <div className='mt-4 text-white md:text-[18px] sm:text-[14px] xs:text-[16px] text-[16px]  '>
                    Skills & Tech Used
                  </div>

                  <div className='mt-1 flex flex-wrap gap-2'>
                    {project.tags.map((tag, index) => (
                      <p key={`tag-${index}`} className={`md:text-[16px] sm:text-[12px] xs:text-[14px] text-[14px] ${tag.color}`}>
                        #{tag.name}
                      </p>
                    ))}
                  </div>
                </div>
                
                {/* Links */}
                <div>
                  <div className='mt-4 text-white md:text-[18px] sm:text-[14px] xs:text-[16px] text-[16px] '>
                    Links
                  </div>

                  <div className='mt-1'>
                    {project.links.map((link, index) => (
                      <a
                        key={`link-${index}`}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600 cursor-pointer z-index-1000 md:text-[16px] sm:text-[12px] xs:text-[14px] text-[14px]'
                      >
                        {link.desc}<br/>
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            ))}
            
          </Slider>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects");