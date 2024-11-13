// HomeContent.js
import React from 'react';
import Skeleton from './skeleton';  // Assuming skeleton is another component or content.

const HomeContent = () => {
  return (
    <div className="text-center w-full">
      {/* You can replace the Skeleton component with any other home-related content */}
      <Skeleton />
    </div>
  );
};

export default HomeContent;
