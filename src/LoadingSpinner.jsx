import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-16 w-16"></div>
    </div>
  );
};

export default LoadingSpinner;
