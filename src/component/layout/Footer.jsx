import { useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * Components imports
 */
import CapyRights from "./CapyRights";
import LogoContainer from "../shared/LayoutComponents/logoContainer";
import UsefullLinks from "../shared/LayoutComponents/Footer/UsefullLinks";

/**
 * Services Imports
 */
import { sendSubscriptionEmail } from "../../Services/emailService";

/**
 * CSS Imports
 */
import "../../styles/Layouts/footer.css";

const Footer = () => {
  const formRef = useRef(null);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setIsLoading(true);

    try {
      const response = await sendSubscriptionEmail(email);
      
      if (response.success) {
        setIsSubscribed(true);
        setEmail("");
        if (formRef.current) formRef.current.reset();
        toast.success("Subscription successful!");
      } else {
        toast.error(response.message || "Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <footer className="p-4xl transition-slow h-auto w-full bg-white flex flex-row flex-wrap justify-between align-center px-6 py-3 gap-4 bottom-0 right-0 left-0 mt-lg">

        <LogoContainer Layout='Footer' className="flex flex-col justify-between"/>
        <UsefullLinks/>

        <div className="subscribtion-section">
          <h1 className="text-2xl font-bold text-primary">
            Subscribe to our newsletter
          </h1>
          {isSubscribed ? (
            <p className="text-primary mt-3">Thank you for subscribing!</p>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubscribe}
              className="flex flex-col gap-2 mt-3"
            >
              <input
                type="email"
                value={email}
                name="user_email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-white h-9 rounded-lg input border-none w-full p-xs"
                required
                disabled={isLoading}
              />
              <button
                type="submit"
                className="bg-primary text-white rounded-lg py-2 px-4 hover:bg-blue-700 transition-fast disabled:opacity-50"
                disabled={isLoading}
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          )}
        </div>
        
      </footer>

      <CapyRights />
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Footer;