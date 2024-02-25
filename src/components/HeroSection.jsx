import React from 'react'

function HeroSection() {
  return (
    <div className='p-4 flex flex-col mx-auto bg-cover lg:min-h-screen h-[300px]' style={{ maxHeight: 'calc(100vh - 82px)', backgroundImage: 'url("https://jansevasankalp.org/wp-content/uploads/2024/02/Banner.jpg")' }}>
        <div className='mt-5 lg:mt-48 text-center text-[40px] lg:text-[80px] font-bold'>जन सेवा संकल्प</div>
        <div className='text-center text-[30px] lg:text-[70px] font-medium'>Foundation</div>
        <button className="mt-4 bg-project-green text-white py-2 px-6 w-fit mx-auto">EXPLORE</button>
    </div>
  )
}

export default HeroSection