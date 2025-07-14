import { useRef, useState } from 'react'
import { sendMessageEmail } from '../../../Services/emailService'
import { toast } from 'react-toastify';

const Form = () => {
  const formRef = useRef(null)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await sendMessageEmail(message, name, email, )
      setIsSubmitted(true)
      formRef.current.reset()
      setEmail('')
      setMessage('')
      setName('')
      toast.success('Email well recived Thank you')
    } catch (error) {
      toast.error('Email Not sent, please try again later or report a bug')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full flex justify-center py-16 px-4 ">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="  rounded-2xl p-8 flex flex-col gap-6 w-full max-w-xl"
      >
        
          <>
            <p className=" text-center mb-4">We're here to help!</p>

            <div className="flex flex-col">
              <label htmlFor="username" className="text-md font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="border border-gray-300 rounded-lg p-xs "
                required
                disabled={isLoading}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="user_email" className="text-md font-medium ">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="border border-gray-300 rounded-lg p-xs "
                required
                disabled={isLoading}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-md font-medium">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help you?"
                className="border border-gray-300 rounded-lg p-xs h-40 resize-none"
                required
                disabled={isLoading}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-primary text-white font-medium rounded-lg p-sm hover:bg-blue-700 transition-fast disabled:opacity-70 flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </>
      </form>
    </div>
  )
}

export default Form