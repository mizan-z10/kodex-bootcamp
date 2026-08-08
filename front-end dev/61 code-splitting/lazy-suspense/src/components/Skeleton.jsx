import React from 'react';

const Skeleton = () => {
  return (
    <div className="max-w-sm p-4 border border-gray-200 rounded-lg shadow animate-pulse space-y-4">
      {/* Image Skeleton */}
      <div className="h-48 bg-gray-300 rounded-md"></div>

      {/* Title Skeleton */}
      <div className="h-6 bg-gray-300 rounded w-3/4"></div>

      {/* Content Lines */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      </div>

      {/* Button / Footer Skeleton */}
      <div className="h-10 bg-gray-300 rounded-md w-1/3"></div>
    </div>
  );
};

export default Skeleton;