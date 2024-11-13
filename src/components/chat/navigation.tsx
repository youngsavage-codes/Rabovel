// Navigation.js
import { Home, MessagesSquare } from 'lucide-react';
import React from 'react';

const Navigation = ({ setActiveTab }: any) => {
  return (
    <div className='w-[90%] mx-auto shadow-lg flex items-center justify-around py-5 rounded-full text-center absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white'>
      <button onClick={() => setActiveTab('Home')} className='text-center'>
        <Home className='mx-auto'/>
        <h4 className='text-xs'>Home</h4>
      </button>
      <button onClick={() => setActiveTab('Chat')} className='text-center'>
        <MessagesSquare className='mx-auto'/>
        <h4 className='text-xs'>Chat</h4>
      </button>
    </div>
  );
};

export default Navigation;
