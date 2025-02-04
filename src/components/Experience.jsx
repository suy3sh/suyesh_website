import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion";

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from "../constants";
import { educations } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (

  <VerticalTimelineElement
    contentStyle={{background: '#1d1836', color: '#fff'}}
    contentArrowStyle={{borderRight: '7px solid #232631'}}
    date = {experience.date}
    iconStyle={{background: experience.iconBg}}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src= {experience.icon}
          alt= {experience.company_name}
          className="w-[60px] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">
        {experience.title}
      </h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point,index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[15px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>

    
  </VerticalTimelineElement>
)

const EducationCard = ({ education }) => (

  <VerticalTimelineElement
    contentStyle={{background: '#1d1836', color: '#fff'}}
    contentArrowStyle={{borderRight: '7px solid #232631'}}
    date = {education.date}
    iconStyle={{background: education.iconBg}}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src= {education.icon}
          alt= {education.school}
          className="w-[60px] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">
        {education.school}
      </h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
        {education.degree}
      </p>
    </div>

    <ul className="mt-5 list-none ml-0 space-y-2 font-bold text-white-100 text-[15px] pl-1 tracking-wider">
      <li><span className="underline">GPA</span><br/><span className="font-normal">{education.gpa}</span></li>
      <li><span className="underline">Relevant Courses</span><br/><span className="font-normal">{education.courses}</span></li>
      <li><span className="underline">Honors</span><br/><span className="font-normal">{education.honors}</span></li>
    </ul>

  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText} underline`}>My technical experience</p>
        <h2 className={styles.sectionHeadText}>Professional Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
      <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>

      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} mt-20 text-center`}>Academic Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
      <VerticalTimeline>
          {educations.map((education, index) => (
            <EducationCard
              key={`education-${index}`}
              education={education}
            />
          ))} 
        </VerticalTimeline>
      </div>

    </>
  )
}

export default SectionWrapper(Experience, 'work')