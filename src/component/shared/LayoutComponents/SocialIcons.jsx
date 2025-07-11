import React from 'react'
import '../../../styles/utilities.css'

import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Socialicons = () => {
  return (
    <div className='flex flex-row gap-6 text-2xl text-primary mt-5xl cursor-pointer'>
        <a href="https://www.facebook.com" target="_blank"><FaFacebook/></a>
        <a href="https://www.instagram.com" target="_blank"><FaInstagram/></a>
        <a href="https://www.x.com" target="_blank"><FaTwitter/></a>
        <a href="https://www.github.com" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default Socialicons