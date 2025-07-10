import React from 'react'
import "../../styles/utilities.css";
import { Link } from "react-router-dom";


const Logo = () => {
  return (
    <Link to="/">
        <h1 className="text-white logo-text text-3xl tracking-wider font-bold">TimeCapsule</h1>
    </Link>
  )
}

export default Logo