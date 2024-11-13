// Chat.js
'use client'
import { Minus, ArrowLeft } from 'lucide-react';
import React, { useState } from 'react';
import Skeleton from '../chat/skeleton';
import Navigation from '../chat/navigation';

const Chat = () => {
  const [activeTab, setActiveTab] = useState('Home'); // Track active tab
  const [isOpen, setIsOpen] = useState(false); // Track if chat is open or closed

  // Toggle the chat open and closed
  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  if (!isOpen) {
    return (
      <div className="fixed right-10 bottom-10 z-50">
        {/* Button to open chat */}
        <button
          onClick={toggleChat}
          className=""
        >
          <img src="/images/how3.png" alt="" className="w-24 lg:w-28 lg:h-28 object-contain" />
        </button>
      </div>
    );
  }

  return (
    <div className='fixed h-[700px] w-[90%] mx-5 lg:m-0 lg:w-[400px] bg-white lg:right-10 bottom-10 rounded-lg z-50 shadow-lg'>
      {/* Header section */}
      <div className={`p-5 rounded-t-lg ${activeTab === 'Home' ? 'bg-gradient-to-b from-[#745CEC] to-transparent h-[50vh]' : 'bg-white h-auto'}`}>
        <div className='flex items-center justify-between'>
          {/* Back icon to return to Home */}
          {activeTab !== 'Home' && (
            <ArrowLeft onClick={() => setActiveTab('Home')} className='cursor-pointer' />
          )}
          {/* Minus button to close chat */}
          <Minus onClick={toggleChat} className='cursor-pointer' />
        </div>

        {/* Chat content */}
        <div className="p-5 overflow-y-auto">
            <h2 className={`font-semibold text-[40px] ${activeTab === 'Home' ? 'mt-24' : 'mt-0'}`}>
                {activeTab === 'Home' ? 'Live Chat' : ''}
              </h2>
          
          {/* Display different content based on active tab */}
          {activeTab === 'Home' ? (
            <Skeleton />  // Home content (skeleton loader or other components)
          ) : (
            <div className="text-gray-600 p-4">
                
              <p>This is the chat content area where users can send and receive messages.</p>
              {/* Additional chat content can be added here */}
            </div>
          )}
        </div>
      </div>

      {/* Conditional rendering of Navigation based on activeTab */}
      {activeTab === 'Home' && <Navigation setActiveTab={setActiveTab} />}
    </div>
  );
};

export default Chat;
