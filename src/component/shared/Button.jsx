import React from 'react'
import '../../styles/utilities.css'

const Button = (props) => {
  return (
    <button className={props.style}>
        {props.text}
    </button>
  )
}

export default Button