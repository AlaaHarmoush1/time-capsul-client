import { FaUser } from "react-icons/fa";

const FormHeader = (props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-sm">
        <FaUser className="Usericon text-4xl text-white border rounded-2xl"/>
        <h1 className='text-2xl font-bold text-white'>{props.title}</h1>
        <p className='text-gray-200 text-base'>Please enter your details</p>
    </div>
        
    
  )
}

export default FormHeader