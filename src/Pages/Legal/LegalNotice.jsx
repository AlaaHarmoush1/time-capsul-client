import InfoCardList from '../../component/shared/QuickLinks/InfoCardList.jsx'
import PageHeader from '../../component/shared/QuickLinks/PageHeader.jsx'
import legalNoticeData from '../../data/Legal/LegalNotice'

const LegalNotice = () => {

  console.log(legalNoticeData)

  return (
    <div className='page min-h-screen flex flex-col items-center justify-center TAC  w-full transparent text-gray-800'>
      <PageHeader title='Legal Notice' Updatedate="July 10, 2025"/>
      <InfoCardList items={legalNoticeData}/>
    </div>
  )
}

export default LegalNotice