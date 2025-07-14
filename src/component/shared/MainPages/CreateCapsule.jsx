import { useState, useEffect, createContext } from "react"
import Popup from "../Popup"
import AttachmentsSection from "./AttachmentsSection";
import MainSection from "../../pages/Home/MainSection";

export const CapsuleContext = createContext();

const CreateCapsule = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  


  return (
    <div class="capsule-section lg:col-span-2 bg-white rounded-lg shadow overflow-hidden">
      <div class="px-xl py-sm border-b border-gray-200">
        <h3 class="text-lg font-bold text-gray-900">Create New Time Capsule</h3>
      </div>
      <div class="px-xl py-sm">

        <div className="mb-lg">
          <label for="title" class="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input 
          type="text" 
          class="shadow-s block w-full text-sm border-gray-300 rounded-md p-2 border" 
          placeholder="Give your capsule a title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          >
          </input>
        </div>

        <div class="mb-lg">
          <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message to Your Future Self</label>
          <textarea 
          rows="4" 
          class="shadow-s block w-full text-sm border-gray-300 rounded-md p-2 border resize-none" 
          placeholder="Write your thoughts, hopes, dreams..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          >
          </textarea>

        </div>

      </div>

      
      
    </div>
  )
}

export default CreateCapsule