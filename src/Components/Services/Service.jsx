import React from 'react'
import './Service.css'
import delevery1 from '../../assets/delivery1.png'
import delevery2 from '../../assets/delivery2-1vMH2tRW.png'
import delevery3 from '../../assets/delivery3-gpGc9IdM.png'
import about from '../../assets/about-rx7AOsOa.png'
const Service = () => {
  return (
    <>
      <div className="service">
        <h1>Why <span>Foodies's</span></h1>
        <div className="boxes">
          <div className="box">
            <img src={delevery1} alt="" />
            <h3>Easy To Order</h3>
          </div>
          <div className="box">
            <img src={delevery2} alt="" />
            <h3>Fastest Delivery</h3>
          </div>
          <div className="box">
            <img src={delevery3} alt="" />
            <h3>Best Quality</h3>
          </div>
        </div>
        <div className="container-s">
          <div>
            <img src={about} alt="" />
          </div>
          <div className="about-text" id='about'>
            <h2>overview</h2>
            <h4>A little information for our guest</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quidem veritatis cum cupiditate suscipit autem nisi fugiat quae amet. At beatae mollitia odio tempore est, laborum aliquid voluptatum accusamus neque?
            </p>
            <div className="count-boxes">
            <div className="count-box">
              <h5>15K+</h5>
              <h3>Happy Customer</h3>
            </div>
            <div className="count-box">
              <h5>10+ </h5>
              <h3>Award Win</h3>
            </div>
            <div className="count-box">
              <h5>30+</h5>
              <h3>Food Menu</h3>
            </div>
          </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Service