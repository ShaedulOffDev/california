import { popularItems } from "../utils/constants"
import { styles } from "../utils/styles"
import {motion} from 'framer-motion'

const Popular = () => {
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
    <motion.div initial="hidden" whileInView="visible" className={`mt-14 ${styles.px}`}>
      <div className={`${styles.flexCenter} flex-col`}>
        <h2 className={styles.title}>Save on our most selled items.</h2>
        <p className={styles.subtitle}>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
      </div>
      <div className="flex mt-5 flex-wrap">
      {popularItems.map(item => (
        <motion.div variants={animationT} custom={item.id} key={item.id} className={`${styles.flexCenter} w-full ml:w-[50%] l:w-[25%] p-4 flex-col transition-all hover:bg-lightWhite bg-white hover:scale-95`}>
          <img src={item.img} alt={item.title}/>
          <div className="mt-4">
            <h3 className="text-[22px]">{item.title}</h3>
            <p className="text-[14px] mt-2">{item.description}</p>
            <p className="text-[18px] mt-3">{item.cost}</p>
          </div>
        </motion.div>
      ))}
      </div>
    </motion.div>
  )
}

export default Popular