const privacyData = [
  {
    title: "1. Information We Collect",
    text: (
      <>
        We only collect essential personal data:
        <ul className="list-disc pl-5 mt-2">
          <li>Your name</li>
          <li>Email address</li>
        </ul>
      </>
    )
  },
  {
    title: "2. How We Use Your Data",
    text: "We use your information solely to: create your account, provide our services, and communicate with you about your time capsules."
  },
  {
    title: "3. Data Security",
    text: "We protect your data using industry-standard encryption. No unauthorized third parties have access to your personal information."
  },
  {
    title: "4. Your Rights",
    text: (
      <>
        You can:
        <ul className="list-disc pl-5 mt-2">
          <li>Access, edit, or delete your data anytime via your profile</li>
          <li>Request a copy of your data (GDPR right to portability)</li>
          <li>Withdraw consent by deleting your account</li>
        </ul>
      </>
    )
  },
  {
    title: "5. Data Sharing",
    text: "We do not share your personal data with any third parties. Your time capsules remain private unless you choose to share them."
  },
  {
    title: "6. International Transfers",
    text: "While our servers are located in Lebanon, we protect all data according to international privacy standards regardless of where you access the service."
  },
  {
    title: "7. Policy Changes",
    text: "We'll notify you of significant changes via email or in-app notifications. Continued use after changes constitutes acceptance."
  },
  {
    title: "8. Contact Us",
    text: (
      <>
        For privacy concerns:  <br />
        <a href='mailto:privacy@timecapsul-lb.com' className='text-primary underline hover:text-primary-dark ml-1'>
          privacy@timecapsul-lb.com
        </a>
      </>
    )
  }
];

export default privacyData