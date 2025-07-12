import React from 'react'

const PageHeader = (props) => {
  return (
    <div className='text-center mb-10'>
        <h1 className='text-4xl font-bold mb-3 text-primary'>{props.title}</h1>
        <p className='text-gray-500'>Last updated: {props.Updatedate}</p>
    </div>
  )
}

export default PageHeader