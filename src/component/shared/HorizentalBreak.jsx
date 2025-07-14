import React from 'react'

const HorizentalBreak = (props) => {
  return (
    <div className="my-xs text-xl font-bold text-center text-white hr">
        {props.text || "OR"}
    </div>
  )
}

export default HorizentalBreak