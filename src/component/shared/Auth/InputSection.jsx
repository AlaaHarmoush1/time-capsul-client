const InputSection = (props) => {
  if(props.page == "login") {
    return (
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="email" className='flex text-white font-bold text-lg'>Email</label>
          <input type="email" placeholder="enter your email" className="input-field w-full text-white" />
        </div>
        <div>
          <label htmlFor="email" className='flex text-white font-bold text-lg'>Password</label>
          <input type="password" placeholder="enter your Password" className="input-field w-full text-white" />
        </div>
      </div>
    )
  }else if(props.page == "signup") {
    return (
      <div className="flex flex-col gap-4">
        <input type="text" placeholder="Full Name" className="input-field" />
        <input type="email" placeholder="Email" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
      </div>
    )
  }
}

export default InputSection