import React, { useState } from 'react';
import logo from "./../Images/logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
      

        <div className="flex flex-row items-center text-white font-bold text-xl">
        <img src={logo} alt="Logo" className="h-[50px] p-2" /> {/* Add your logo here */}
        जन सेवा संकल्प फौंडेशन
        </div>
        <div className="lg:hidden">
          <button 
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg 
              className="h-6 w-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h16m-7 6h7" 
              />
            </svg>
          </button>
        </div>
        <div className={`lg:flex lg:items-center lg:w-auto hidden`}>
          <ul className="lg:flex items-center justify-between">
            <li><a className="block lg:inline-block text-white hover:text-gray-300 px-3 py-2 rounded-md" href="#home">Home</a></li>
            <li><a className="block lg:inline-block text-white hover:text-gray-300 px-3 py-2 rounded-md" href="#about">About</a></li>
            <li><a className="block lg:inline-block text-white hover:text-gray-300 px-3 py-2 rounded-md" href="#services">Services</a></li>
            <li><a className="block lg:inline-block text-white hover:text-gray-300 px-3 py-2 rounded-md" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div>
      <ul className={`flex flex-col items-center ${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
            <li><a className="block lg:inline-block text-white hover:text-gray-300 px-3 py-2 rounded-md" href="#home">Home</a></li>
            <li><a className="block lg:inline-block text-white hover:text-gray-300 px-3 py-2 rounded-md" href="#about">About</a></li>
            <li><a className="block lg:inline-block text-white hover:text-gray-300 px-3 py-2 rounded-md" href="#services">Services</a></li>
            <li><a className="block lg:inline-block text-white hover:text-gray-300 px-3 py-2 rounded-md" href="#contact">Contact</a></li>
          </ul>
      </div>
    </nav>
  );
};

export default Navbar;
