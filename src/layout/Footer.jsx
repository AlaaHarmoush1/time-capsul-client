import { Link } from "react-router-dom";
import "../styles/utilities.css";
import "../styles/Layouts/footer.css";
import { useState } from "react";

/**
 * Components imports
 */
import Socialicons from "../component/reusable/LayoutComponents/SocialIcons";
import Logo from "../assets/coded-images/Logo";
import NavLinks from "../component/reusable/LayoutComponents/NavLinks";
import CapyRights from "./CapyRights";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    
    // For now, just log the email and show success
    console.log("Subscribed with email:", email);
    setIsSubscribed(true);
    
    // TO DO: Implement email sending and database update later
    // sendSubscriptionEmail(email);
    // updateDatabaseSubscription(email);
  };

  return (
    <>
      <footer className="p-4xl transition-slow h-auto w-full bg-white flex flex-row flex-wrap justify-between align-center px-6 py-3 gap-4 bottom-0 right-0 left-0">
        {/* Logo and Social Icons */}
        <div className="flex flex-col justify-between">
          <div className="logo-container">
            <Logo/>
            <Socialicons/>
          </div>
        </div>
        
        {/* Useful Links */}

        <NavLinks title="Legal" 
        path1="/Terms-and-conditions" Link1="Terms & Conditions" 
        path2="/Privacy-Policy" Link2="Privacy Policy"
        path3="/Legal-Notice" Link3="Legal Notice"/>

        <NavLinks title="Quick Links" 
        path1="/about" Link1="About Us" 
        path2="/Careers" Link2="Careers"
        path3="/News" Link3="News"/>

        <NavLinks title="Support" 
        path1="/FAQ" Link1="FAQ" 
        path2="/Contact-Us" Link2="Contact Us"
        path3="/Report" Link3="Report a Problem"/>
        
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
      <CapyRights/>
    </>
  );
};

export default Footer;