import React from 'react'

// function HeroSection() {
//   return (
//     <div className='p-4 flex flex-col mx-auto bg-cover lg:min-h-screen h-[300px] opacity-30' style={{ maxHeight: 'calc(100vh - 182px)', filter:'blur(4px)', backgroundImage: 'url("https://res.cloudinary.com/dwj3llorl/image/upload/v1709305845/WhatsApp_Image_2023-09-04_at_21.39.48_wvoaut.jpg")' }}>
//         <div className='mt-5 lg:mt-48 text-center text-[40px] lg:text-[80px] font-bold' >जन सेवा संकल्प</div>
//         <div className='text-center text-[30px] lg:text-[70px] font-medium'>Foundation</div>
//         <button className="mt-4 bg-project-green text-white py-2 px-6 w-fit mx-auto">EXPLORE</button>
//     </div>
//   )
// }

// export default HeroSection


const HeroSection = () => {
  return (
    <div className="relative w-full lg:min-h-screen h-[300px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dwj3llorl/image/upload/v1709305845/WhatsApp_Image_2023-09-04_at_21.39.48_wvoaut.jpg')`, // Replace 'your-image.jpg' with the actual image URL
          filter: 'blur(5px)' // Adjust blur amount as needed
        }}
      ></div>
      <div className="relative z-10 text-center pt-50px">
        {/* Your content goes here */}
        <div className='mt-10 lg:mt-48 text-center text-[40px] lg:text-[90px] font-bold tracking-wider highlight-text text-shadow' >जन सेवा संकल्प</div>
        <div className='text-center text-[30px] lg:text-[70px] font-medium tracking-wide'>Foundation</div>
        <button className="mt-4 bg-project-green text-white py-2 px-6 w-fit mx-auto tracking-wide">EXPLORE</button>
      </div>
    </div>
  );
};

export default HeroSection;
