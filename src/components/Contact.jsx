import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn, textVariant, fadeIn } from '../utils/motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-regular-svg-icons';




const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_qv01yp7', 
      'template_oafnic9',
      {
        from_name: form.name,
        to_name: 'Suyesh Shrestha',
        from_email: form.email,
        to_email: 'swish.shrestha@gmail.com',
        message: form.message,

      },
      '93rW1HbcmfCl86Oe2'
    )
    .then(() => {
      setLoading(false);
      alert('Thank you for your message! I will get back to you as soon as possible');
      setForm({
        name: '',
        email: '',
        message: '',
      })

    }, (error) => {
      setLoading(false)
      console.log(error);
      alert('Something went wrong. You can also reach me at swish.shrestha@gmail.com')
    })
  }

  return (
    <>

      <motion.div variants={textVariant()} className='text-center'>
        <p className={`${styles.sectionSubText} underline`}>get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact</h2>
      </motion.div>

      
        <motion.p variants={fadeIn("","",0.2,1.3)} className={styles.sectionDescText}>
          Feel free to connect with me, view my resume, or send me a message! 
        </motion.p>
      

      <div className="flex flex-row flex-wrap justify-center gap-16 mt-8 mb-8">
        {/* linkedin */}
        <a href="https://www.linkedin.com/in/suyesh-shrestha-939b55241/" target="_blank" rel="noopener noreferrer" aria-label='linkedin'>
          <FontAwesomeIcon icon={faLinkedin} className='h-[50px] w-[50px] object-contain [color:#aaa6c3] hover:[color:#ffffff]'/>
        </a>

        {/* github */}
        <a href="https://github.com/suy3sh" target="_blank" rel="noopener noreferrer" aria-label='github'>
          <FontAwesomeIcon icon={faSquareGithub} className='h-[50px] w-[50px] object-contain [color:#aaa6c3] hover:[color:#ffffff]'/>
        </a>

        {/* instagram */}
        <a href="https://www.instagram.com/suyesh.shres/" target="_blank" rel="noopener noreferrer" aria-label='instagram'>
          <FontAwesomeIcon icon={faSquareInstagram} className='h-[50px] w-[50px] object-contain [color:#aaa6c3] hover:[color:#ffffff]'/>
        </a>

        {/* email */}
        <a href="mailto:swish.shrestha@gmail.com" target="_blank" rel="noopener noreferrer" aria-label='email'>
          <FontAwesomeIcon icon={faEnvelope} className='h-[50px] w-[50px] object-contain [color:#aaa6c3] hover:[color:#ffffff]'/>
        </a>
      </div>

      <div className='flex flex-row flex-wrap justify-center gap-16 mt-8'>
        <a 
          href="/Suyesh_RESUME_2025.pdf" target="_blank" rel="noopener noreferrer" 
          className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-lg mb-20'
          aria-label='resume' 
        >
          Download my Resume
        </a>
      </div>
      <div className='xl:mt-8 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        <motion.div
          variants={slideIn('left', "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className='font-bold sm:text-[20px] text-[15px] text-white tracking-wider mt-0 leading-[36px]'>
            Feel free to send me a message! I will reply as soon as I can.
          </p>
          

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Message</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='Awaiting Transmission . . .'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>

            <button
              type="submit"
              className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
            >
              {loading ? 'Sending . . .' : "Send"}

            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn('right', "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-{550px] h-[350px]'
        >
          <EarthCanvas/>
        </motion.div>
      </div>
    </>
  )
}

export default SectionWrapper(Contact, 'contact');