import React from 'react'
import Card from '../../component/reusable/TermsAndConditionsComponents/Card'

const TermsAndConditions = () => {
  return (
    <div className='page max-w-4xl mx-auto px-4 py-8 md:px-6 lg:px-8 text-gray-800'>
      <div className='text-center mb-10'>
        <h1 className='text-4xl font-bold mb-3 text-primary'>Terms & Conditions</h1>
        <p className='text-gray-500'>Last updated: July 10, 2025</p>
      </div>

      <div className='flex flex-col items-center'>
        <Card 
          title="1. Acceptance of Terms"
          text="By accessing or using TimeCapsul, you agree to be bound by these Terms and Conditions. If you do not agree with any part of the terms, you may not access the platform."
        />

        <Card 
          title="2. Eligibility"
          text="TimeCapsul is available to users of all ages, including those under 18, with appropriate supervision where required by local law."
        />

        <Card 
          title="3. Personal Data"
          text="We collect personal information such as your name, email, location, and uploaded media. By using the app, you consent to this data being collected, stored, and processed in accordance with our privacy practices."
        />

        <Card 
          title="4. User Content"
          text="You may upload content including text, images, and audio. All content you submit remains fully owned by you. TimeCapsul does not claim any rights over your data. However, your content may be visible to others based on your sharing settings."
        />

        <Card 
          title="5. Prohibited Conduct"
          text="Users may not post or share content that includes hate speech, harassment, illegal content, or any material that violates the rights of others or applicable laws."
        />

        <Card 
          title="6. Fees and Access"
          text="TimeCapsul is free to use. We may offer optional premium features or subscriptions in the future, which will be clearly explained before any charges apply."
        />

        <Card 
          title="7. Governing Law"
          text="These Terms shall be governed and construed in accordance with the laws of Lebanon, without regard to its conflict of law principles."
        />

        <Card 
          title="8. Contact"
          text={
            <>
              If you have any questions or concerns about these Terms, please contact us at: 
              <a href='mailto:info@timecapsul-lb.com' className='text-primary underline hover:text-primary-dark ml-1'>
                info@timecapsul-lb.com
              </a>
            </>
          }
        />
      </div>
    </div>
  )
}

export default TermsAndConditions