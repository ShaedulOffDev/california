import { useState } from "react"
import { slides } from "../utils/constants"
import { styles } from "../utils/styles"
import Button from "./button"

const Home = (): JSX.Element => {
  const [active, setActive] = useState(1)
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const mouseDown = (x: number) => {
    setCurrentIndex(x)
  }
  const mouseUp = (x: number) => {
    if(currentIndex > x + 50){
      if(active !== slides.length){
        setActive(prev => prev += 1)
      }
    }
    if(currentIndex < x - 50){
      if(active > 1){
        setActive(prev => prev -= 1)
      }
    }
  }
  return (
    <div className="relative w-full overflow-hidden">
      <div style={{width: `${slides.length}00%`,transform: `translateX(-${(100 / slides.length) * (active - 1)}%)`}} className={`transition-all flex relative`}>
        {slides.map(slide => (
          <div key={slide.id} 
          className={`${styles.pxo} w-[100%] slider ml:py-5 select-none`}>
            <div className={`${styles.flexBetween} flex-col-reverse t:flex-row t:h-[400px] l:h-[550px] bg-secondary t:rounded-[32px] cursor-pointer overflow-hidden`} onTouchEnd={(e) => mouseUp(e.changedTouches[0].screenX)} onTouchStart={(e) => mouseDown(e.changedTouches[0].screenX)} onMouseDown={(e) => mouseDown(e.clientX)}
          onMouseUp={(e) => mouseUp(e.clientX)}>
              <div className="w-full t:w-[50%] t:pl-16 t:p-0 p-[30px] pb-[50px] t:pb-0 pt-0">
                <h2 className="text-[32px] l:text-[40px] ll:text-[50px] font-bold">{slide.title}</h2>
                <p>{slide.description}</p>
                {slide.button && <Button styles="mt-7" button={slide.button} buttonLink={slide.buttonLink}/>}
              </div>
              <div className={`w-full t:w-[50%] ${styles.flexCenter} pt-5`}>
                <img src={slide.img} alt={slide.img} className="w-[400px] h-[400px] t:w-auto min-w-[50%] t:h-full object-contain pointer-events-none" />
              </div>
            </div>
        </div>
        ))}
      </div>
      <div className={`${styles.flexCenter} hidden t:flex w-full absolute bottom-[30px] t:bottom-[50px] py-1`}>
        {slides.map((slide, idx) => (
          <div onClick={() => (setActive(slide.id))} key={slide.id}  className={`${slide.id === active ? "bg-primary" : 'bg-black'} w-[30px] t:w-[200px] h-[2px] hover:h-[3px] cursor-pointer transition-all ${idx !== slides.length - 1 && "mr-5"}`}></div>
        ))}
      </div>
      <button onClick={() => (active !== slides.length && setActive(prev => prev += 1))}   className="hover:text-primary transition-all absolute top-[50%] translate-y-[-50%] t:right-[65px] right-[20px] l:right-[75px] text-[30px] py-3 l:px-5 px-0 opacity-[50%] hover:opacity-[100%]">
        <i className="fa fa-chevron-right"></i>
      </button>
      <button onClick={() => (active > 1 && setActive(prev => prev -= 1))} className="hover:text-primary transition-all absolute top-[50%] translate-y-[-50%] left-[20px] l:left-[75px] t:left-[65px] text-[30px] py-3 px-0 l:px-5 opacity-[50%] hover:opacity-[100%]">
        <i className="fa fa-chevron-left"></i>
      </button>
    </div>
  )
}

export default Home