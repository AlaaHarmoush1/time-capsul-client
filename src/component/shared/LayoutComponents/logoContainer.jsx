import React from 'react'
import Logo from '../../../assets/coded-images/Logo'
import Socialicons from './Footer/SocialIcons'

const LogoContainer = (props) => {
  return (
    <div className="logo-container ">
        <Logo />
        {props.Layout === 'Footer' && (<Socialicons />)}
    </div>
  )
}

export default LogoContainer