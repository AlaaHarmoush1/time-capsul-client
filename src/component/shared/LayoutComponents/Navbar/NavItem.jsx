import React from 'react'
import { Link } from "react-router-dom";


const NavItem = ({location, text, device}) => {

    const desktopStyle = "nav-link bg-transparent text-primary text-600"
    const mobileStyle = "nav-link w-full text-center bg-transparent text-primary"

    const finalClass = `${device == 'desktop' ? desktopStyle : mobileStyle}`

  return (
    <Link to={location}>
        <button className={finalClass}>
            {text}
        </button>
    </Link>
  )
}

export default NavItem