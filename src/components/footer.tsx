import { Arrow, Icon } from "../assets"
import { footerLinks } from "../utils/constants"
import { styles } from "../utils/styles"
import {motion} from 'framer-motion'

const Footer = () => {
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
    <motion.div initial="hidden" variants={animationT} whileInView="visible" className="bg-lightWhite mt-10">
      <div className={`${styles.px} flex flex-col l:flex-row py-[40px]`}>
        <div className={`${styles.flexCenter} w-full l:w-[25%] l:block flex-col l:mb-0 mb-5`}>
          <a href="https://google.com">
            <img src={Icon} alt="Icon" className="mb-3"/>
          </a>
          <p className="max-w-[350px] text-center l:text-start">Sign up for texts to be notified about our best offers on the perfect gifts.</p>
        </div>
        <ul className="flex flex-wrap list-none justify-around w-full l:w-[75%] p-[10px]">
          {footerLinks.map(link => (
            <li key={link.title} className="w-[100%] mm:w-[50%] t:w-auto mb-5 t:mb-0">
              <h3 className="text-[22px] font-bold mb-2">{link.title}</h3>
              <ul>
                {link.links.map(l => (
                  <li key={l.title} className="mb-3 opacity-75 transition-all hover:opacity-100">
                    <a href={l.link}>{l.title}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-[20px] t:px-[50px]">
        <div className={`items-center justify-between text-center ml:text-start block ml:flex border-t-2 border-secondary px-[20px] pb-[5px] pt-[20px] text-[14px]`}>
          <p className="mb-2 ml:mb-0 flex justify-center">
            Created By: &nbsp;  
            <a href="https://instagram.com/shaedul_off" className="flex">
               Shaedul_Off <img src={Arrow} alt="arrow" className="w-[20px] h-[20px] object-contain" />
            </a>
          </p>
          <p className="flex justify-center">
            Powered by: &nbsp;  
            <a href="https://instagram.com/shaedul_off" className="flex">
               Shaedul_Off <img src={Arrow} alt="arrow" className="w-[20px] h-[20px] object-contain" />
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Footer