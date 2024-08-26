import Navlogout from "./Components/Navbar/Navlogout"
import Hero from './Components/Hero/Hero'
import Service from './Components/Services/Service'
import Trending from './Components/Trending/Trending'
import Top from './Components/Top/Top'
const MainPage = () => {
  return (
    <div>
        <Navlogout/>
        <Hero/>
        <Service/>
        <Trending/>
        <Top/>

    </div>
  )
}

export default MainPage