import React, { useState } from "react"
import { FiSettings } from "react-icons/fi"
import { Link } from "react-router-dom"

const AuthButton = (props) => {
  const [menu, setMenu] = useState(false)
  const isLoggedIn = true

  const handleMenu = () => {
    setMenu((prev) => !prev)
  }

  if(props.device == "desktop"){
    return (
    <div className="relative inline-block sm-hidden">
      {!isLoggedIn ? (
        <button className="bg-primary text-white px-6 py-2 text-base font-bold rounded-lg hover:scale-105 transition">
          Login
        </button>
      ) : (
        <div>
          <button
            onClick={handleMenu}
            className="flex items-center gap-2 px-4 py-2 rounded-lg transition cursor-pointer"
          >
            <FiSettings className="text-xl text-primary" />
          </button>

          {menu && (
            <div className="absolute right-0 mt-sm w-40 bg-white border rounded-lg shadow-lg z-10 ">
              <Link
                to="/profile"
                className="nav-link w-full text-center bg-transparent text-primary"
              >
                Profile
              </Link>
              <button
                onClick={() => console.log("logout")}
                className="w-full text-left p-xl text-sm text-primary transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
  }else {
    return (
    <div className="">
      {!isLoggedIn ? (
        <button className="bg-primary text-white px-6 py-2 text-base font-bold rounded-lg hover:scale-105 transition">
          Login
        </button>
      ) : (
        <div>

          
        <div className="text-xl">
            <Link
            to="/profile"
            className="block p-xl text-primary transition"
            >
            Profile
            </Link>
            <button
            onClick={() => console.log("logout")}
            className="w-full text-left p-xl  text-primary transition"
            >
            Logout
            </button>
        </div>

        </div>
      )}
    </div>
  )
  }
}

export default AuthButton
