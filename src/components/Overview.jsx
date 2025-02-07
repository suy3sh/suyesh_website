import React, { useState } from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { hobbies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { FlipTilt } from 'react-flip-tilt';

import { SectionWrapper } from '../hoc';
import { suyesh } from '../assets';

const ServiceCard = ({index, title, icon}) => {

  return (
    <div className="xs:w-[200px] w-full">
      <motion.div
        variants = {fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card '
      >
        <div
          options={{
            max:45,
            scale:1,
            speed:450,
          }}
          className=' bg-tertiary rounded-[30px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col' 
        >
          <img src={icon} alt={title} className='w-[90px] h-[90px] object-contain'/>
          <h3 className='text-white text-[20px] font-extralight text-center tracking-wider'>{title}</h3>

        </div>
      </motion.div>
    </div>
  )
}

const ServiceCardBack = ({index, title, icon, desc}) => {
  return (
    <div className="xs:w-[200px] w-full">
      <motion.div
        variants = {fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        
        <div
          className='bg-tertiary rounded-[30px] py-2 px-4 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-[40px] h-[40px] object-cover'/>
          <p className='font-light text-[16px] text-center py-2'>{desc}</p>
          <img src={icon} alt={title} className='w-[40px] h-[40px] object-cover'/>

        </div>
      </motion.div>
    </div>
  )
}

const HobbyCard = ({index, title, icon}) => {
  return (
    <div className="xs:w-[200px] w-full">
      <motion.div
        variants = {fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full orange-yellow-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max:45,
            scale:1,
            speed:450,
          }}
          className='bg-tertiary rounded-[30px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-[90px] h-[90px] object-cover'/>
          <h3 className='text-white text-[20px] font-extralight text-center tracking-wider'>{title}</h3>

        </div>
      </motion.div>
    </div>
  )
}

const HobbyCardBack = ({index, title, icon, desc}) => {
  return (
    <div className="xs:w-[200px] w-full">
      <motion.div
        variants = {fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full orange-yellow-gradient p-[1px] rounded-[20px] shadow-card'
      >
        
        <div
          className='bg-tertiary rounded-[30px] py-2 px-4 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-[40px] h-[40px] object-cover'/>
          <p className='font-light text-[16px] text-center py-2'>{desc}</p>
          <img src={icon} alt={title} className='w-[40px] h-[40px] object-cover'/>

        </div>
      </motion.div>
    </div>
  )
}

const Overview = () => {

  
  return (
    <>
      <motion.div variants={textVariant()} className='text-center'>
        <p className={`${styles.sectionSubText} underline`}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
        <div className='bg-transparent h-[200px] w-full flex items-center justify-center mb-8 mt-5'>
          <img className="h-[200px] w-[200px] object-cover rounded-full border-4" src={suyesh} alt='Suyesh Shrestha Headshot'></img>       
        </div>
      </motion.div>

      <motion.p variants={fadeIn("","",0.2,1.3)} className={styles.sectionDescText}>
      I am a recent graduate with a Bachelor of Science in Computer Science from the University of Texas at Dallas. 
      I am passionate about software engineering, data science, and web development, and I am seeking roles in these areas. 
      I have experience with technologies and programming languages, including Java, Python, C++, JavaScript, HTML, CSS, and SQL, and I plan to continue expanding this list. <br/>
      <span className='font-bold'>Hover over cards to learn more about me.</span>
      </motion.p>


      <p className={`${styles.sectionSubText} mt-20 text-white text-center`}> - technical areas of interest and experience - </p>

      <div className=' mt-10 flex flex-wrap gap-[40px] justify-center'>
        {services.map((service, index) => (
          <FlipTilt
            key={`service-${index}`} 
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            shadowEnable={true} 
            spotGlareEnable={false} 
            lineGlareEnable={false} 
            shadow='0 0 2rem rgba(53, 73, 228, 0.8)'
            borderRadius='30px'
            borderWidth="0px" 
            front={<ServiceCard key={service.title} index={index} {...service} />} 
            back={<ServiceCardBack key={service.title} index={index} {...service} />}
          />
          
        ))}
      </div>

      <p className={`${styles.sectionSubText} mt-16 text-white text-center`}> - general interests and hobbies  - </p>
      <div className=' mt-10 flex flex-wrap gap-[40px] justify-center'>
        {hobbies.map((hobby, index) => (
          <FlipTilt
            key={`hobby-${index}`}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            shadowEnable={true} 
            spotGlareEnable={false} 
            lineGlareEnable={false} 
            shadow='0 0 2rem rgba(245, 153, 39, 0.5)'
            borderRadius='30px'
            borderWidth="0px" 
            front={<HobbyCard key={hobby.title} index={index} {...hobby} />} 
            back={<HobbyCardBack key={hobby.title} index={index} {...hobby} />}
          />
          
        ))}
      </div>

      


    </>
    
  )
}

export default SectionWrapper(Overview, "overview");
