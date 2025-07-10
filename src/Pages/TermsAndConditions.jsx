import React from 'react'

const TermsAndConditions = () => {
return (
    <div className='page max-w-4xl mx-auto p-6 text-gray-800'>
      <h1 className='text-3xl font-bold mb-6 text-primary'>Terms & Conditions</h1>

      <p className='mb-4'>Last updated: July 10, 2025</p>

      <section className='mb-6'>
        <h2 className='text-xl font-semibold mb-2'>1. Acceptance of Terms</h2>
        <p>
          By accessing or using <strong>TimeCapsul</strong>, you agree to be bound by these Terms and Conditions.
          If you do not agree with any part of the terms, you may not access the platform.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-xl font-semibold mb-2'>2. Eligibility</h2>
        <p>
          TimeCapsul is available to users of all ages, including those under 18, with appropriate supervision where required by local law.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-xl font-semibold mb-2'>3. Personal Data</h2>
        <p>
          We collect personal information such as your name, email, location, and uploaded media. By using the app, you consent to this data being collected, stored, and processed in accordance with our privacy practices.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-xl font-semibold mb-2'>4. User Content</h2>
        <p>
          You may upload content including text, images, and audio. All content you submit remains fully owned by you. TimeCapsul does not claim any rights over your data.
          However, your content may be visible to others based on your sharing settings.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-xl font-semibold mb-2'>5. Prohibited Conduct</h2>
        <p>
          Users may not post or share content that includes hate speech, harassment, illegal content, or any material that violates the rights of others or applicable laws.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-xl font-semibold mb-2'>6. Fees and Access</h2>
        <p>
          TimeCapsul is free to use. We may offer optional premium features or subscriptions in the future, which will be clearly explained before any charges apply.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-xl font-semibold mb-2'>7. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of Lebanon, without regard to its conflict of law principles.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-xl font-semibold mb-2'>8. Contact</h2>
        <p>
          If you have any questions or concerns about these Terms, please contact us at: <a href='mailto:info@timecapsul-lb.com' className='text-primary underline'>info@timecapsul-lb.com</a>
        </p>
      </section>
    </div>
  )
}

export default TermsAndConditions