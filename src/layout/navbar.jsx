import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/utilities.css';
import '../styles/Layouts/navbar.css';
import { FiMenu, FiX } from 'react-icons/fi';

/**
 * importing components
 */

import Button from '../component/reusable/Button';
import Logo from "../assets/coded-images/Logo";



const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLoggedIn = localStorage.getItem('isLoggedIn')

  useEffect(() => {
    
  })

  

  return (
    <nav className='navbar shadow-md p-4xl transition-slow h-auto w-full bg-gradient flex flex-row flex-wrap justify-between align-center px-6 py-3 fixed'>
      <div className='logo-container'>
        <Logo/>
      </div>
      
      <div className='nav-links flex flex-row gap-2'>
        <Link to="/"><button className='nav-link bg-transparent'>Home</button></Link>
        <Link to="/My Capsules"><button className='nav-link bg-transparent'>My Capsules</button></Link>
        <Link to="/Public-wall"><button className='nav-link bg-transparent'>Public Wall</button></Link>
        {!isLoggedIn && (
          <Button 
            text="Login" 
            style="button text-purple border-none bg-white h-50 px-6 p-xs text-bold rounded-lg hover-scale transition"
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
        <div className='mobile-menu active flex flex-col align-center'>
          <Link to="/"><button className='nav-link w-full text-center bg-transparent'>Home</button></Link>
          <Link to="/my-capsules"><button className='nav-link w-full text-center bg-transparent'>My Capsules</button></Link>
          <Link to="/Public-wall"><button className='nav-link w-full text-center bg-transparent'>Public Wall</button></Link>
          <Button 
            text="Login" 
            style="button text-purple border-none bg-primary w-full py-3 text-bold rounded-lg hover-scale transition"
          />
        </div>
      )}
    </nav>
  )
}

export default Navbar;