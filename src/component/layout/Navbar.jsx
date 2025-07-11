import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Layouts/navbar.css";
import { FiMenu, FiX, FiSettings } from "react-icons/fi";


/**
 * importing components
 */

import Button from "../../component/shared/Button";
import Logo from "../../assets/coded-images/Logo";
import NavItem from "../shared/LayoutComponents/Navbar/NavItem";
import AuthButton from "../shared/LayoutComponents/Navbar/AuthButton";
import LogoContainer from "../shared/LayoutComponents/Navbar/logoContainer";
import NavLinks from "../shared/LayoutComponents/Navbar/NavLinks";

/**
 * importing data
 */
import navItems from "../../data/layout/navbarData";



const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <nav className="navbar shadow-md p-4xl transition-slow h-auto w-full bg-white flex flex-row flex-wrap justify-between align-center px-6 py-3 fixed">    
      
      <LogoContainer />
      <NavLinks />
      <AuthButton device={"desktop"}/>


      <button className="mobile-menu-btn hover-opacity" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} >
        {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {mobileMenuOpen && (
        <div className="mobile-menu active flex flex-col align-center text-primary bg-white">
          {navItems.map((item, index) => (
            <NavItem key={index} location={item.to} text={item.label}/>
          ))}

           <AuthButton device={"Mobole"}/>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
