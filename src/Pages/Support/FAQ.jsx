import FAQData from "../../data/QuickLinks/FAQ"
import PageHeader from "../../component/shared/QuickLinks/PageHeader"
import InfoCardList from '../../component/shared/QuickLinks/InfoCardList.jsx'

const FAQ = () => {
  return (
    <div className='page min-h-screen flex flex-col items-center justify-center TAC  w-full transparent text-gray-800'>
        <PageHeader showDate={false} title="FAQ's"/>

        <InfoCardList items={FAQData} />
    </div>
  )
}

export default FAQ