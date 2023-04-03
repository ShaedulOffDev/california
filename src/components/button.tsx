const Button = ({button = '', buttonLink = '', styles = '', onClick = function(x: string){}}) => {
  return (
    <button onClick={() => onClick(button)} className={`${styles} transition-all hover:bg-black shadow hover:text-lightWhite border border-black rounded-[30px] px-[15px] mm:px-[30px] ml:px-[50px] py-2 text-[15px] ml:text-[18px]`}>
        {buttonLink ? <a href={buttonLink}>{button}</a> : button}
    </button>
  )
}

export default Button