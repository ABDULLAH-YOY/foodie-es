import { useState } from 'react'
import logo from '../../assets/logo-tCGWTeGX.png'
import id from '../../assets/id.svg'
import menu from '../../assets/menu.svg'

import cross from '../../assets/cross.svg'

import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {

    const [showdrop, setshowdrop] = useState(false)
    const [show, setshow] = useState(false)
    const hanldeClick = () => {
        setshow(!show)
    }
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul id='nav-bar' className={show ? 'open' : ''}>
                <li><Link to={'/'}>Home</Link></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#recipe">Menus</a></li>
                <li><a href="#focility">Focility</a></li>
            </ul>
            <ul className='menu-right-side'>
                <li>
               <button onClick={()=>setshowdrop(!showdrop)}><img src={id} alt="" /></button>
               </li>
               <div className={`dropdown ${showdrop ? 'showdrop' : ''}`}>
                <Link style={{textDecoration:'none',color:'#fff'}} to='/login'><li>Login</li></Link>
                <Link style={{textDecoration:'none',color:'#fff'}} to='/sign'><li>Sign in</li></Link>
               </div>

                <li>
                    {
                        show ? <img className='menu' onClick={hanldeClick} src={cross} alt="" /> :
                            <img className='menu' onClick={hanldeClick} src={menu} alt="" />
                    }
                </li>
            </ul>
        </nav>
    )
}

export default Navbar