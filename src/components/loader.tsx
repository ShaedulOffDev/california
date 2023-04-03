import { IconC } from "../assets"
import { styles } from "../utils/styles"

const Loader = () => {
  return (
    <div className={`${styles.flexCenter} blurAnim fixed w-full h-full top-0 bottom-0 left-0 right-0 bg-secondary z-[99999999999999]`}>
      <img src={IconC} alt="Icon" className="w-[200px] iconAnimation rotate-animation"/>
    </div>
  )
}

export default Loader