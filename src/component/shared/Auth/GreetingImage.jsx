import LoginImage from '../../../assets/images/login.png';

const GreetingImage = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-primary md-hidden'>
        <h1 className='text-3xl font-bold text-white mb-4'>Welcome Back!</h1>
        <p className='text-gray-300 my-xs'>Join our community and discover amazing features.</p>
        <img src={LoginImage} alt="Login" className="w-forth-fifths " />
    </div>
  )
}

export default GreetingImage