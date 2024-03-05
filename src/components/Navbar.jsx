import React, { useState } from 'react';
import logo from "./../Images/logo.png"
import { Link } from 'react-router-dom';

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
            <li><Link to="/" className="block lg:inline-block text-white hover:text-gray-300 px-3 py-2 rounded-md" href="/">WHO ARE WE</Link></li>
            <li><Link to="/vision" className="block lg:inline-block text-white hover:text-gray-300 px-3 py-2 rounded-md">VISION</Link></li>
            <li><Link to="/" className="block lg:inline-block text-white hover:text-gray-300 px-3 py-2 rounded-md" href="#about">OUR WORKS</Link></li>
            <li><Link to="/" className="block lg:inline-block text-white hover:text-gray-300 px-3 py-2 rounded-md" href="#services">ACHIEVEMENTS</Link></li>
            <li><Link to="/" className="block lg:inline-block text-white hover:text-gray-300 px-3 py-2 rounded-md" href="#contact">MAKE A DIFFERENCE</Link></li>
          </ul>
        </div>
      </div>
      <div>
        <ul className={`flex flex-col items-center ${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
          <li>
            <Link to="/" className="block lg:inline-block text-white hover:text-gray-300 px-3 py-2 rounded-md" href="#home">
              WHO ARE WE
            </Link>
            <ul className="absolute hidden bg-white text-gray-800 py-2 rounded-md mt-1">
              <li>
                <Link to="/" className="block px-4 py-2 hover:bg-gray-200" href="#submenu1">Submenu 1</Link>
              </li>
              <li>
                <Link to="/" className="block px-4 py-2 hover:bg-gray-200" href="#submenu2">Submenu 2</Link>
              </li>
            </ul>
          </li>
          <li><Link to="/" className="block lg:inline-block text-white hover:text-gray-300 px-3 py-2 rounded-md" href="#about">OUR WORKS</Link></li>
          <li><Link to="/" className="block lg:inline-block text-white hover:text-gray-300 px-3 py-2 rounded-md" href="#services">ACHIEVEMENTS</Link></li>
          <li><Link to="/" className="block lg:inline-block text-white hover:text-gray-300 px-3 py-2 rounded-md" href="#contact">MAKE A DIFFERENCE</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
