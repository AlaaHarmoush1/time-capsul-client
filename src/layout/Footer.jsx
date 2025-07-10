import { Link } from "react-router-dom";
import "../styles/utilities.css";
import "../styles/Layouts/footer.css";
import { useState } from "react";

/**
 * Components imports
 */
import Socialicons from "../component/reusable/SocialIcons";
import Logo from "../assets/coded-images/Logo";


import { sendEmail } from '../Services/email.service'

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    const { success } = await sendEmail(email);
    
    setStatus(success ? 'success' : 'error');
    if (success) setEmail('');
  };

  return (
    <footer className="p-4xl transition-slow h-auto w-full bg-white flex flex-row flex-wrap justify-between align-center px-6 py-3 gap-4">
      {/* Logo and Social Icons */}
      <div className="flex flex-col justify-between">
        <div className="logo-container">
          <Logo/>
          <Socialicons/>
        </div>
      </div>
      
      {/* Useful Links */}
      <div className="useful-links flex flex-col gap-2">
        <h3 className="text-lg font-bold text-primary">Quick Links</h3>
        <Link to="/Terms-and-conditions" className="text-base hover-text-primary">Terms & Conditions</Link>
        <Link to="/about" className="text-base hover-text-primary">About Us</Link>
        <Link to="/support" className="text-base hover-text-primary">Support Us</Link>
      </div>
      
      {/* Subscription Section */}
      <div className="subscribtion-section">
        <h1 className="text-2xl font-bold text-primary">Subscribe to our newsletter</h1>
        {isSubscribed ? (
          <p className="text-primary mt-3">Thank you for subscribing!</p>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 mt-3">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="bg-white h-9 rounded-lg input border-none w-full px-3"
              required
            />
            <button 
              type="submit"
              className="bg-primary text-white rounded-lg py-2 px-4 hover-bg-blue-700 transition-fast"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </footer>
  );
};

export default Footer;