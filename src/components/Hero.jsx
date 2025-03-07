import { NicolausCanvas } from './canvas';
import { styles } from '../styles';
import { arrow } from '../assets';



const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      
      

      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-x-7xl mx-auto flex flex-row items-start gap-5`}>
      
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hello! I'm <span className='text-[#915eff]'>Suyesh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 z-index-60`}>
            Welcome to my personal website and portfolio <br/>
            
          </p>
        </div>
        
      </div>
      
      <NicolausCanvas/>
      
      

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-evenly items-center flex-col ">
        <p className="text-center text-[13px] w-[400px] mb-12 text-secondary">
          The statue depicts Nicolaus Copernicus, a Renaissance astronomer dubbed as the "father of modern astronomy".
        </p>
        <a href="#overview">
          <img src={arrow} className="w-10 h-10" alt="arrow"></img>
        </a>

      </div>
    </section>
  )
}

export default Hero