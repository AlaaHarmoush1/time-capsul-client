import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";

const FormSocial = () => {
  return (
    <div className="mb-sm flex justify-around gap-5">
      <button className="social-button flex justify-center text-white"><FaGoogle/></button>
      <button className="social-button flex justify-center text-white"><FaFacebookF/></button>
      <button className="social-button flex justify-center text-white"><FaApple/></button>
    </div>
  )
}

export default FormSocial