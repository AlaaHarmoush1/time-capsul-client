import React, { useContext } from "react";
import { CapsuleContext } from "./CreateCapsule";

const CapsulePreview = () => {
  const { title } = "hello";
  // const { message } = useContext(CapsuleContext);

  const todaysDate = new Date().toISOString().split("T")[0];

  return (
    <div class="lg:col-span-1">
      <div class="bg-white rounded-lg shadow overflow-hidden">
        <div class="px-xl py-sm border-b border-gray-200">
          <h3 class="text-lg font-medium text-gray-900">Capsule Preview</h3>
        </div>
        <div class="px-xl py-sm">
          <div class="capsule-card rounded-lg p-xl mb-4 bg-primary opacity-75 flex flex-col">
            <div class="flex justify-between items-start mb-4">
              {/* Capsule Title and Date Section */}
              <div>
                <div class="text-3xl mb-1">😊</div>
                <h4 class="text-lg font-semibold">{title}</h4>
                <p class="text-sm text-white">Created: {todaysDate}</p>
              </div>
              {/* Days Section  */}
              <div class="text-right">
                <div class="text-xs font-medium text-white">REVEALS IN</div>
                <div class="text-xl font-bold text-white">365 days</div>
              </div>
            </div>
            {/* Capsule Message Section */}
            <div class="bg-white bg-opacity-70 rounded-lg p-2xl mb-4">
              <p class="text-gray-800">
                This is a preview of how your message will look. Write something
                meaningful to your future self!
              </p>
            </div>
            <div class="flex justify-between items-center">
              <div class="flex gap-1">
                <span class="text-sm px-xs py-xs rounded">future</span>
                <span class="text-sm px-xs py-xs rounded">goals</span>
              </div>
              <div class="text-xs text-black">Private</div>
            </div>
          </div>
          <div class="text-center">
            <p class="text-sm text-gray-500">
              This is just a preview. Your actual capsule will include all the
              attachments and customization you've added.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapsulePreview;
