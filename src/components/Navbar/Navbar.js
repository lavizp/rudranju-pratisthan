import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-600 p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">Rudranju Pratisthan</div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white hover:text-indigo-300">Home</a>
          <a href="#" className="text-white hover:text-indigo-300">Gallery</a>
          <a href="#" className="text-white hover:text-indigo-300">Notices</a>
          <a href="#" className="text-white hover:text-indigo-300">Contact</a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <a href="#" className="block text-white hover:text-indigo-300">Home</a>
          <a href="#" className="block text-white hover:text-indigo-300">Gallery</a>
          <a href="#" className="block text-white hover:text-indigo-300">Notices</a>
          <a href="#" className="block text-white hover:text-indigo-300">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
