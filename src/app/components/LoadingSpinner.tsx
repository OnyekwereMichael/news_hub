// components/LoadingSpinner.tsx
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="tw:flex tw:items-center tw:justify-center tw:h-full bg-black">
      <div className="tw:w-8 tw:h-8 tw:border-4 tw:border-blue-500 tw:border-t-transparent tw:rounded-full tw:animate-spin" />
    </div>
  );
};

export default LoadingSpinner;
