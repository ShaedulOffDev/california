import {useState} from 'react'
import { searchButtons } from "../utils/constants"
import { styles } from "../utils/styles"
import Button from "./button"
import { Arrow } from '../assets'
import {motion} from 'framer-motion'

const Search = () => {
  const [value, setValue] = useState('')
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
  const btnHandler = (val: string) => {
    if(val !== '')setValue(val)
  }
  return (
    <motion.div initial="hidden" variants={animationT} whileInView="visible" className={`mt-16 ${styles.px}`}>
      <a href="https://google.com" className="text-[24px] flex justify-center">
        See All
        <img src={Arrow} alt="Arrow" />
      </a>
      <div className="mt-10">
        <h2 className={styles.title}>Looking for anything else?</h2>
        <div>
          <form action="https://google.com" className={styles.flexCenter}>
            <label className="w-full t:w-[700px] relative">
              <input value={value} onChange={(e) => setValue(e.target.value)} type="text" className="bg-[#F8F9FA] w-full rounded-[30px] border-secondary border text-[18px] py-3 px-4 pl-[50px]" placeholder="Search keyword"/>
              <i className="fa fa-search absolute top-[50%] left-[17px] text-[22px] translate-y-[-50%]"></i>
            </label>
          </form>
          <div className={`${styles.flexCenter} flex-wrap w-full t:w-[75%] mx-auto mt-5`}>
            {searchButtons.map(btn => (
              <Button onClick={btnHandler} key={btn.id} button={btn.title} styles="border-secondary m-2"/>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Search