import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from "../assets";
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import ReactCardCarousel from "react-card-carousel";


const Works = () => {


  return (
    <>
      <motion.div variants={textVariant()} className='text-center'>
        <p className={`${styles.sectionSubText} underline`}>My Projects and Contributions</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
     
      <motion.p variants={fadeIn("","",0.2,1.3)} className={styles.sectionDescText}>
        These are various academic, professional, and personal projects I have worked on and contributed to in the past. 
        Each project has its own brief description, along with links to code repositories, videos, and additional information. 
        These projects reflect my ability to create solutions and showcase my ability to work with various technologies. <br/>
        <span className='font-bold'>To navigate through the projects, click on the next card or use arrow keys.</span>
      </motion.p>

      <div className='mt-30 relative flex flex-1 w-100 h-[600px] justify-center items-center mt-[100px] mb-[60px]'>
        <ReactCardCarousel spread="medium">
          {projects.map((project, index) => (
            <div 
              key={`project-${index}`}
              className='bg-tertiary p-5 rounded-2xl sm:w-[800px] w-full'
            >
              <div className='relative w-full h-full'>
                <img 
                  src={project.image}
                  alt={project.name}
                  className='w-full h-full object-cover rounded 2xl'
                />

                
              </div>

              

              <div className='mt-5'>
                <h3 className='text-white font-bold md:text-[30px] sm:text-[25px] xs:text-[20px] text-[15px] '>{project.name}</h3>
                <h5 className='text-white font-normal md:text-[20px] sm:text-[17px] xs:text-[15px] text-[12px]  '>{project.subname}</h5>
                <p className='mt-2 text-secondary text-[16px] hidden sm:block'>{project.description}</p>
              </div>

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
          ))}
          
        </ReactCardCarousel>
      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects");