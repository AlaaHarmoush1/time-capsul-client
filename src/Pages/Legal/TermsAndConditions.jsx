import React from 'react'
import Card from '../../component/reusable/PagesComponents/Legal/TermsAndConditionsComponents/Card'
import '../../styles/utilities.css'

import termsData from '../../data/termsAndConditions.jsx'

const TermsAndConditions = () => {
  return (
    <div className='page min-h-screen flex flex-col items-center justify-center TAC  w-full transparent px-4 py-8 md:px-6 lg:px-8 text-gray-800'>
      <div className='text-center mb-10'>
        <h1 className='text-4xl font-bold mb-3 text-primary'>Terms & Conditions</h1>
        <p className='text-gray-500'>Last updated: July 10, 2025</p>
      </div>

      <div className='flex flex-col items-center sm:w-[75%]'>
        {termsData.map((term, index) => (
          <Card key={index} title={term.title} text={term.text} />
        ))}
      </div>
    </div>
  )
}

export default TermsAndConditions