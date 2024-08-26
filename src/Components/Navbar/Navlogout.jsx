import { useState } from 'react'
import logo from '../../assets/logo-tCGWTeGX.png'
import menu from '../../assets/menu.svg'
import toast from 'react-hot-toast'
import out from '../../assets/logout.svg'
import cross from '../../assets/cross.svg'
import { useAuth } from '../AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
const Navlogout = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
  
    const handleLogout = async () => {
        try {
            await logout()
            toast.success('Successfully Sign out!')
        navigate('/')
      } catch (error) {
        console.error('Error logging out', error);
        toast.error(error)

      }
    };



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
                <li style={{display:'flex',alignItems:'center',margin:'2px'}}>
                <span className='xl' style={{color:'#fff'}}>Welcome, {user?.email}</span>
                <span className='md' style={{color:'#fff'}}>Welcome, {user?.email.slice(0,10)}</span>
                <span className='sm' style={{color:'#fff'}}>{user?.email.slice(0,10)}</span>
               <button onClick={handleLogout}>
                <img src={out} />
                </button>
               </li>

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

export default Navlogout