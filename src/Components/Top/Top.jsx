import './Top.css'
import top1 from '../../assets/collection1-Nz0-ENyM.png'
import top2 from '../../assets/collection2-afD8tjUL.png'
const Top = () => {
  return (
    <>
    <div className="top">
        <div className="top-head">
            <h1><span>Top</span> Collections</h1>
            <h4>All our meals in one delicious snap</h4>
        </div>
        <div className="top-slider" id='focility'>
          <div className="slider">
            <img src={top1} alt="" />
          </div>
          <div className="slider">
            <img src={top2} alt="" />
          </div>
          <div className="slider">
            <img src={top1} alt="" />
          </div>
        </div>
    </div>
    </>
  )
}

export default Top