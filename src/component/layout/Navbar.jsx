import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

/**
 * importing components
 */
import DesktopMenu from "../shared/LayoutComponents/Navbar/DesktopMenu";
import MobileMenu from "../shared/LayoutComponents/Navbar/MobileMenu";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar shadow-md p-4xl transition-slow h-auto w-full bg-white flex flex-row flex-wrap justify-between align-center px-6 py-3 fixed">    
      
      <DesktopMenu />
      <button className="mobile-menu-btn hover-opacity" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} >
        {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
      {mobileMenuOpen && (
        <MobileMenu/>
      )}
    
    </nav>
  );
};

export default Navbar;
