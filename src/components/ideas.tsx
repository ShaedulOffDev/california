import { Book } from "../assets"
import { styles } from "../utils/styles"
import {motion} from 'framer-motion'

const Ideas = () => {
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
    <motion.div initial="hidden" variants={animationT} whileInView="visible" className={`${styles.px} mt-16`}>
      <div className={`${styles.flexCenter} flex-col`}>
        <h2 className="text-center text-[32px] ml:text-[42px]">Ideas have a place here</h2>
        <p className="text-center text-[13px]">Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
      </div>
      <div className="flex flex-col t:flex-row mt-10"> 
        <div className="w-full t:w-[50%]">
          <img src={Book} alt="Book"  className="w-full"/>
        </div>
        <div className="w-full t:w-[50%] text-[20px] l:text-[24px] p-0 mt-4 ml:mt-0 ml:p-5">
          <p className="mb-4">We Make It Easy To Find The Great Design Talent, Easier...</p>
          <p className="mb-4">Road Design Handbook For The International Road...</p>
          <p className="mb-4">The Best Kept Secrets About Creative People</p>
          <p className="mb-4">We Make It Easy To Find The Great Design Talent, Easier...</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Ideas