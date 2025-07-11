import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/utilities.css';
import '../../styles/Layouts/navbar.css';
import { FiMenu, FiX } from 'react-icons/fi';

/**
 * importing components
 */

import Button from '../../component/shared/Button';
import Logo from "../../assets/coded-images/Logo";



const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLoggedIn = localStorage.getItem('isLoggedIn')

  useEffect(() => {
    
  })

  

  return (
    <nav className='navbar shadow-md p-4xl transition-slow h-auto w-full bg-white flex flex-row flex-wrap justify-between align-center px-6 py-3 fixed'>
      <div className='logo-container'>
        <Logo/>
      </div>
      
      <div className='nav-links flex flex-row gap-2'>
        <Link to="/"><button className='nav-link bg-transparent text-primary text-600'>Home</button></Link>
        <Link to="/My Capsules"><button className='nav-link bg-transparent text-primary text-600'>My Capsules</button></Link>
        <Link to="/Public-wall"><button className='nav-link bg-transparent text-primary text-600'>Public Wall</button></Link>
        {!isLoggedIn && (
          <Button 
            text="Login" 
            style="button text-white border-none bg-white h-50 px-6 p-xs text-base font-bold rounded-lg hover-scale transition bg-primary"
          />
        )},
        {isLoggedIn && (
          <Button
          text="Profile"
          style="button text-white border-none bg-white h-50 px-6 p-xs text-base font-bold rounded-lg hover-scale transition bg-primary"
          />
        )}
      </div>
      
      <button 
        className='mobile-menu-btn hover-opacity' 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
      
      {mobileMenuOpen && (
        <div className='mobile-menu active flex flex-col align-center text-primary bg-white'>
          <Link to="/"><button className='nav-link w-full text-center bg-transparent text-primary'>Home</button></Link>
          <Link to="/my-capsules"><button className='nav-link w-full text-center bg-transparent text-primary'>My Capsules</button></Link>
          <Link to="/Public-wall"><button className='nav-link w-full text-center bg-transparent text-primary'>Public Wall</button></Link>
          {!isLoggedIn && (
          <Button 
            text="Login" 
            style="utton text-white border-none bg-primary w-25 py-3 text-bold rounded-lg hover-scale transition"
          />
        )},
        
        {isLoggedIn && (
          <Button
          text="Profile"
          style="utton text-white border-none bg-primary w-25 py-3 text-bold rounded-lg hover-scale transition"
          />
        )}
        </div>
      )}
    </nav>
  )
}

export default Navbar;