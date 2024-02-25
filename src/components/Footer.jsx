import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 ">
        <div className='container flex flex-col lg:flex-row item-center justify-between mx-auto'>
            <div className='px-2 items-center text-center lg:text-start'>
                <p className='font-bold'>About us</p>
                <p className='text-sm'>Empowering communities through innovative programs and opportunities for personal growth.</p>
            </div>
            <div className='px-2 items-center text-center lg:text-start'>
                <p className='font-bold'>Programs</p>
                <p className='text-sm'>Education</p>
            </div>
            <div className='px-2 items-center text-center lg:text-start'>
                <p className='font-bold'>Contact</p>
                <p className='text-sm'>Address : Jan Seva Sankalp, Infront of Surya Mandir, Fulchur, Gondia - 441601</p>
                <p className='text-sm'>Phone : 8830993824</p>
                <p className='text-sm'>Email : help@jansevasankalp.org</p>
            </div>
        </div>
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2024 Jan Seva Sankalp Foundation All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
