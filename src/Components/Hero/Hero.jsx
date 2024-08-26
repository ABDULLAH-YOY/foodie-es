import hero from '../../assets/hero.png'
import './Hero.css'
const Hero = () => {
  return (
    <>
    <div className="hero">
        <div className="hero-text">
            <h1>
            The taste of traditions's with a modern twist
            </h1>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptas? Voluptate veniam sapiente harum, a qui veritatis obcaecati nostrum quidem quis expedita unde amet ducimus!
            </p>
            <div className="btns">
                <button className='fff'>Get Start</button>
                <button className='red'>See our menu</button>
            </div>
        </div>
        <img src={hero} alt="" />
    </div>
    </>
  )
}

export default Hero