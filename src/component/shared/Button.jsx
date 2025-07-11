import { Children } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.function}>
        {props.text}
        {Children}
    </button>
  )
}

export default Button