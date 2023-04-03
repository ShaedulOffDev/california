import { Lp3 } from "../assets"
import { styles } from "../utils/styles"
import {motion} from 'framer-motion'

const Form = () => {
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
    <motion.div initial="hidden" variants={animationT} whileInView="visible" className={`${styles.flexCenter} mt-16`}>
      <form action="https://github.com/shaeduloffdev" target="_blank" className={`${styles.flexCenter} shadow-lg flex-col bg-secondary t:rounded-[30px] py-[50px] w-full t:w-[70%]`}>
        <h2 className="text-center text-[32px] t:text-[42px]">Never miss a thing</h2> 
        <p className="text-center px-5">Sign up for texts to be notified about our best offers on the perfect gifts.</p>
        <img src={Lp3} alt="Laptop" className="w-[250px] mt-5" />
        <div className="flex mt-5 px-3">
          <input type="email" className="border-black border-2 rounded-ss-[30px] rounded-bl-[30px] px-5 w-auto t:w-[300px]" placeholder="Your email" />
          <button className="rounded-se-[30px] rounded-br-[30px] bg-black text-lightWhite px-6 py-3">Sign up</button>
        </div>
      </form>
    </motion.div>
  )
}

export default Form