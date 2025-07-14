import PageHeader from '../../component/shared/QuickLinks/PageHeader'
import Form from "../../component/shared/QuickLinks/Form";

const ContactUs = () => {
  return (
    <div className='page min-h-screen flex flex-col items-center justify-center TAC  w-full transparent'>
      <PageHeader title="Contanct us" showDate={false}/>
      <Form />
    </div>
  )
}

export default ContactUs 