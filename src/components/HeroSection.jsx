import React from 'react'

function HeroSection() {
  return (
    <div className='container p-4 flex flex-col lg:flex-row justify-between mx-auto'>
        <div>
            <p>INSPIRING CHANGE</p>
            <p>Empowering Futures Through Education</p>
            <p>Join Jan Seva Sankalp Foundation in fostering personal growth, women’s empowerment, and community welfare for a brighter future.</p>
            <button>Get Involved</button>
            <div className='border-t-2 flex flex-row'>
                <div className='boarder-r-2 border-black'>
                    <p>100+</p>
                    <p>Student Involved</p>
                </div>
                <div className='boarder-r-2'>
                    <p>100+</p>
                    <p>Volenteer</p>
                </div>
                <div>
                    <p>100+</p>
                    <p>Google Rating Involved</p>
                </div>
            </div>
        </div>
        <div>image</div>
    </div>
  )
}

export default HeroSection