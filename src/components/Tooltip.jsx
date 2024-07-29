import React from 'react';

const Tooltip = ({ children, text }) => (
  <div className="relative group flex items-center">
    {children}
    <div className="absolute bottom-full mb-2 hidden flex-col items-center group-hover:flex">
      <span className="relative z-10 px-3 py-2 text-sm leading-none text-gray-900 bg-white border border-gray-300 rounded-lg shadow-lg whitespace-nowrap">
        {text}
      </span>
      <div className="w-3 h-3 -mt-2 rotate-45 bg-white border-l border-t border-gray-300 shadow-lg"></div>
    </div>
  </div>
);

export default Tooltip;
