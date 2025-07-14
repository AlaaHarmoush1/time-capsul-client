import { useState, useEffect } from 'react'
import { getUserIP } from '../Services/getUserIp.js'
import MainSection from '../component/pages/Home/MainSection.jsx'

const Home = () => {
  const [userIP, setUserIP] = useState('')
  

  useEffect(() => {
    const fetchIP = async () => {
      const ip = await getUserIP()
      setUserIP(ip)
    }

    fetchIP()
  }, [])

  console.log('User IP:', userIP)
  

  return (
    <div className='page'>
      <MainSection />
      
    </div>
  )
}

export default Home

      // <button onClick={() => setIsPopupOpen(true)}>Open Popup</button>



// import Popup from '../component/shared/Popup.jsx'


// const [isPopupOpen, setIsPopupOpen] = useState(false);

/* {isPopupOpen && (
        <Popup 
          title="Create Capsule" 
          onClose={() => setIsPopupOpen(false)}
        >
          <p>This is your popup content. You can put anything here.</p>
          <p>Forms, images, text - whatever you need!</p>
        </Popup>
)} */
