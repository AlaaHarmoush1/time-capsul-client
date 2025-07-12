import { FaGoogle, FaFacebookF } from "react-icons/fa";

const From = () => {
  return (
    <div className='w-auto h-50 flex flex-col align-center bg-primary-lg rounded-lg '>
      <h1 className='text-2xl font-bold text-white'>Login</h1>
      <form action="">
        <div className="email-section flex flex-row justify-center align-center items-center gap-0 m-sm text-white h-50">
          <p>login with</p>
        </div>
        

        <div className="email-section flex flex-row justify-center align-center items-center gap-5 m-sm  text-primary h-50">
          <FaGoogle  className=' text-primary text-2xl w-75 bg-white rounded-lg'/>
          <FaFacebookF  className=' text-primary text-2xl w-75 bg-white rounded-lg '/>
        </div>

        <div className="email-section flex flex-row justify-center align-center items-center gap-0 m-sm text-white h-50">
          <p>or login with </p>
        </div>

        <div className="email-section flex flex-row justify-center align-center items-center gap-0 m-5xl">
          <label htmlFor="email" className='text-white'>Email:</label>
          <input type="text" name="email" id="" className='border border-gray-500 rounded-lg m-sm w-75 text-white' placeholder="example@example.com" />
        </div>

        <div className="email-section flex flex-row justify-center align-center items-center gap-0 m-5xl">
          <label htmlFor="email" className='text-white'>Pass:</label>
          <input type="text" name="email" id="" className='border border-gray-500 rounded-xl ml-sm w- text-white ' placeholder="Password"/>
        </div>

        <div className="email-section flex flex-row justify-center align-center items-center gap-0 m-xs">
          <button className="w-75 bg-primary rounded-lg">Login</button>
        </div>
      </form>
    </div>
  )
}

export default From