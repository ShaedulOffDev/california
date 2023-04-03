import {Laptop, Phone, Tablet, Watch} from '../assets'
import {styles} from '../utils/styles'
import {motion} from 'framer-motion'

const Categories = () => {
  const animationT = {
    hidden: {
      y: 150,
      opacity: 0,
    },
    visible: (custom: number = 0) => ({
      y: 0,
      opacity: 1,
      transition: {delay: custom * 0.2}
    })
  }
  
  return (
    <motion.div custom={2} variants={animationT} initial="hidden" whileInView="visible" className={`${styles.px} mt-16`}>
      <div className={`${styles.flexCenter} flex-col`}>
        <h2 className={styles.title}>Shop our latest offers and categories</h2>
        <p className={`${styles.subtitle} t:max-w-[650px]`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="flex t:flex-row flex-col mt-10">
        <div className="w-full t:w-[50%]">
          <div className="w-full px-4 l:px-12 shadow-xl hover:shadow-2xl transition-all hover:translate-y-[-10px]">
            <img src={Laptop} alt="Laptop" />
            <div className='text-end'>
              <p className='text-[15px]'>Laptops</p>
              <h3 className='text-[22px] l:text-[32px] leading-[35px]'>True Laptop <br /> Solution</h3>
            </div>
          </div>
          <div className={`${styles.flexBetween} mt-3 l:mt-5 w-full px-4 l:px-12 shadow-xl hover:shadow-2xl transition-all hover:translate-y-[-10px]`}>
            <img src={Watch} alt="Watch" className='w-[75%]'/>
            <div className='text-end'>
              <p className='text-[15px]'>Watch</p>
              <h3 className='text-[22px] l:text-[32px] leading-[35px]'>Not just <br /> stylisht</h3>
            </div>
          </div>
        </div>
        <div className={`${styles.flexCenter} w-full t:w-[50%] mt-3 t:mt-0`}>
          <div className={`${styles.flexCenter} flex-col w-[50%] h-full mr-3 mx-0 t:mx-3 l:mx-5 shadow-xl hover:shadow-2xl transition-all hover:translate-y-[-10px] py-10 t:py-0`}>
            <img src={Phone} alt="Phone" className='w-full'/>
            <div className='text-center mt-10'>
              <p className='text-[15px]'>Phones</p>
              <h3 className='text-[22px] l:text-[32px] leading-[35px]'>Your day to day <br /> life</h3>
            </div>
          </div>
          <div className={`${styles.flexCenter} py-4 t:py-0 ml-0 flex-col-reverse w-[50%] h-full shadow-xl hover:shadow-2xl transition-all hover:translate-y-[-10px]`}>
            <img src={Tablet} alt="Phone" className='w-full'/>
            <div className='text-center mb-10'>
              <p className='text-[15px] mt-5'>Tablets</p>
              <h3 className='text-[22px] l:text-[32px] leading-[35px]'>Empower your <br /> work</h3>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Categories