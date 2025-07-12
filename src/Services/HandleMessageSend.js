// import { toast } from "react-toastify";

// const HandleMessageSend = () => {

//     const sendMessage = async (e) => {
//     e.preventDefault();
    
//     if (!email) {
//       toast.error("Please enter your email");
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const response = await sendSubscriptionEmail(email);
      
//       if (response.success) {
//         setEmail("");
//         if (formRef.current) formRef.current.reset();
//         toast.success("Subscription successful!");
//         localStorage.setItem('isSubscribed', true)
//       } else {
//         toast.error(response.message || "Subscription failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Subscription error:", error);
//       toast.error("An unexpected error occurred. Please try again later.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//   )
// }

// export default HandleMessageSend