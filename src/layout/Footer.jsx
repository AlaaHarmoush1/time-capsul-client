import { Link } from "react-router-dom";
import "../styles/utilities.css";
import "../styles/Layouts/footer.css";

/**
 * Components imports
 */
import Socialicons from "../component/reusable/Socialicons";
import Logo from "../assets/coded-images/Logo";



const Footer = () => {
  return (
    <footer className="footer w-full h-25 bg-gradient flex flex-row align-center p-4xl justify-between">
      <div className=" flex flex-col justify-between ">
        <div className="logo-container">
          <Logo/>
          <Socialicons/>
        </div>
      </div>
      <div className="pages-section flex flex-col justify-between top-0 ">
        <h1 className="text-2xl font-bold text-white">Usefull Pages</h1>
        <ul>
          <Link to="/Support"><li className="text-lg text-white">Support</li></Link>
          <Link to="/About"><li className="text-lg text-white">About</li></Link>
          <Link to="/Terms-and-conditions"><li className="text-lg text-white">Terms and conditions</li></Link>  
        </ul>
      </div>
      <div className="subscribtion-section  ">
        <h1 className="text-2xl font-bold text-white top-0 ">Subscribe to our newsletter </h1>
        <input type="email" name="" id="" className="bg-white h-9 rounded-lg input border-none w-full"/>
      </div>
    </footer>
  );
};

export default Footer;
