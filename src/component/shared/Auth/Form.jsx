import FormHeader from "./FormHeader"
import FormSocial from "./FormSocial"
import HorizentalBreak from "../HorizentalBreak"
import InputSection from "./InputSection"
import { Link } from "react-router-dom";

const Form = (props) => {
  if(props.page == "login") {
    return (
    <div className=" loginCard w-auto min-w-one-third rounded-lg h-auto min-h-three-quarters">
      <FormHeader title="Welcome Back" />
      <FormSocial/>
      <HorizentalBreak text="OR" />
      <InputSection page="login" />
      <Link to='/forgot-password'>
        <p className="flex flex-row-reverse text-white">Forgot Password</p>
      </Link>
      <div>
        <button className="btn-primary w-full text-white text-lg font-bold rounded-2xl login">Login</button>
      </div>
      <Link to='/signup'>
        <p className="text-white">Dont have an acount? <span className="underline">signup</span></p>
      </Link>

    </div>
  )
  }else {
    return (
      <div className=" loginCard w-auto min-w-one-third rounded-lg h-auto min-h-three-quarters">
        <FormHeader title="Create an Account" />
        <FormSocial/>
        <HorizentalBreak text="OR" />
        <InputSection page="signup" />
        <div>
          <button className="btn-primary w-full text-white text-lg font-bold rounded-2xl login">Signup</button>
        </div>
        <Link to='/login'>
          <p className="text-white">Already have an account? <span className="underline">Login</span></p>
        </Link>
      </div>
    )
  }
}

export default Form