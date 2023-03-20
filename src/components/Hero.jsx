import { motion } from 'framer-motion'; 
import { styles } from '../styles';
import {SagiCanvas} from './canvas'


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto xl:px-20">
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <div className={`${styles.paddingX} xl:mt-[200px] max-w-7xl mx-auto flex flex-row xl:flex-1 items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#3D9970]'/>
          <div className='w-1 sm:h-80 h-40 green-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#3D9970]'>Carlos</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm an enthusiastic Software Developer, 
            currently finishing my studies at the 
            Technological University of Panama. </p>
        </div>
        </div>

        <div className='xl:mt-[100px] xl:flex-1 xl:h-auto md:h-[550px] h-[550px]'><SagiCanvas/></div>
      
      </div>
      <div className=' xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 '>
            <motion.div animate={{y:[0,24,0]}} transition={{duration:1.5, repeat:Infinity, repeatType:'loop'}} className='w-3 h-3 rounded-full bg-secondary mb-1'/>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero