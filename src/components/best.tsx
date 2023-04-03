import { styles } from "../utils/styles"
import { bestItems } from '../utils/constants'
import Button from "./button"
import {motion} from 'framer-motion'

const Best = () => {
  const animationT = {
    hidden: {
      y: 150,
      opacity: 0,
    },
    visible: (custom: number = 1) => ({
      y: 0,
      opacity: 1,
      transition: {delay: custom * 0.2}
    })
  }
  return (
    <motion.div initial="hidden" whileInView='visible' className={`${styles.px} mt-5`}>
      <div className={`${styles.flexCenter} flex-col`}>
        <h2 className={styles.title}>See the best around here</h2>
        <p className={styles.subtitle}>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
      </div>
      <div className={`flex l:flex-nowrap flex-wrap mt-16`}>
        {bestItems.map(item => (
          <motion.div variants={animationT} custom={item.id} key={item.id} className="l:w-[31.7%] t:w-[47%] w-full mx-0 t:mx-[10px] bg-lightWhite pt-10 shadow-md rounded-[15px] mb-5 transition-all hover:scale-[1.002] hover:translate-y-[-5px] hover:shadow-xl">
            <div className={`${styles.flexCenter} flex-col flex-1 mb-5`}>
              <p className="text-[13px]">{item.subtitle}</p>
              <h3 className="text-[28px]">{item.title}</h3>
              <Button button={item.button} buttonLink={item.buttonLink} styles="mt-5"/>
            </div>
            <img src={item.img} alt={item.title} className="mx-auto"/>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Best