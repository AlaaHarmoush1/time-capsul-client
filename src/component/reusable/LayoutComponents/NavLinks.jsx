import React from 'react'
import { Link } from "react-router-dom";
import '../../../styles/utilities.css'
import '../../../styles/Layouts/footer.css'


const NavLinks = (props) => {
  return (
    <div className="useful-links flex flex-col gap-2">
        <h3 className="text-lg font-bold text-primary">{props.title}</h3>
        <Link to={props.path1} className="text-base hover-text-primary">{props.Link1}</Link>
        <Link to={props.path2} className="text-base hover-text-primary">{props.Link2}</Link>
        <Link to={props.path3} className="text-base hover-text-primary">{props.Link3}</Link>
    </div>
  )
}

export default NavLinks