import privacyData from "../../data/Legal/PrivacyPolicy"
import InfoCardList from '../../component/shared/QuickLinks/InfoCardList.jsx'
import PageHeader from '../../component/shared/QuickLinks/PageHeader.jsx'

const PrivacyPolicy = () => {



  return (
    <div className='page min-h-screen flex flex-col items-center justify-center TAC  w-full transparent text-gray-800'>
      <PageHeader title='Privacy Policy' />
      <InfoCardList items={privacyData}/>
    </div>
  )
}

export default PrivacyPolicy