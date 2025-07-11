import React from 'react'
import "../../styles/utilities.css";
import { Link } from "react-router-dom";


const Logo = () => {
  return (
    <Link to="/">
        <h1 className="logo-text text-3xl tracking-wider font-bold text-primary w-full ">TimeCapsule</h1>
    </Link>
  )
}

export default Logo