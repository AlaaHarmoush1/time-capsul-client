import termsData from '../../data/Legal/termsAndConditions.jsx'
import InfoCardList from '../../component/shared/QuickLinks/InfoCardList.jsx'
import PageHeader from '../../component/shared/QuickLinks/PageHeader.jsx'

const TermsAndConditions = () => {
  return (
    <div className='page min-h-screen flex flex-col items-center justify-center TAC  w-full transparent text-gray-800'>
      <PageHeader title="Terms & Conditions" />
      <InfoCardList items={termsData}/>
    </div>
  )
}

export default TermsAndConditions