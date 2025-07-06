import React from 'react';

const Header = () => (
  <header>
   <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium">
            Track your expenses so you can save more and spend less
          </span>
        </div>
        <div className="flex items-center space-x-6 text-sm">
          <span>Download</span>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-white rounded"></div>
            <span>BBC Sounds</span>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header; 