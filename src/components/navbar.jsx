import { useState } from "react"
import { navLinks } from "../utils/constants"
import { styles } from "../utils/styles"
import { Cart, Icon, Menu, Search } from "../assets"

const Navbar = () => {
  const [nav, setNav] = useState(false)

  return (
    <div className={`${styles.flexBetween} py-7 ${styles.px}`}>
      <a href="./">
        <img src={Icon} alt="Icon" />
      </a>
      <ul className="list-none items-center uppercase l:flex hidden">
        {navLinks.map(link => (
          <li key={link.id} className="mx-4 transition-all hover:text-primary">
            <a href={link.link}>{link.title}</a>
          </li>
        ))}
      </ul>
      <div className="flex text-[22px]">
        <button className="mr-3">
          <img src={Search} alt="Search" />
        </button>
        <button className="mr-3">
          <img src={Cart} alt="Cart" />
        </button>
        <button onClick={() => setNav(true)} className="l:hidden block">
          <img src={Menu} alt="Menu" />
        </button>
      </div>
      <div onClick={() => setNav(false)} className={`${nav ? 'flex' : 'hidden'} fixed top-0 bottom-0 right-0 left-0 z-[98] bg-[#00000090]`}></div>
      <div className={`${nav ? 'flex nav-open' : 'hidden'} z-[99] fixed h-full top-0 bottom-0 right-0 w-full ml:w-[350px] bg-secondary uppercase justify-center items-center list-none flex-col l:hidden`}>
        <div className={`${styles.flexBetween} absolute w-full top-[20px] left-0 px-5 border-b border-black`}>
          <a href="./">
            <img src={Icon} alt="Icon" />
          </a>
          <button onClick={() => setNav(false)} className="px-3 text-[45px] leading-[50px]">
            &times;
          </button>
        </div>
        {navLinks.map((link, idx) => (
          <li key={link.id} className={idx === navLinks.length - 1 ? '' : 'mb-6'}>
            <a href={link.link}>{link.title}</a>
          </li>
        ))}
      </div>
    </div>
  )
}

export default Navbar