import React from 'react'
import Navbar from './Navbar'
import Herosection from './HeroSection'
import Footer from './Footer'
const Vision = () => {
    return (
        <><Navbar />
            <Herosection />
            <div className='container flex flex-row gap-10 pl-60 pr-60 pt-16 justify-between'>
                <div className="data-1">
                    <img className='' src="https://jansevasankalp.org/wp-content/uploads/2024/02/Service-1-min.jpg" alt="img-1" />
                    <h4 className='text-xl text-center font-bold'>Women Empowerment</h4>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque maiores, numquam molestiae voluptate reprehenderit necessitatibus iste unde ex iusto sit!</p>
                </div>
                <div className="data-2">
                    <img className='' src="https://jansevasankalp.org/wp-content/uploads/2024/02/Service-1-min.jpg" alt="img-1" />
                    <h4 className='text-xl text-center font-bold'>Education</h4>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque maiores, numquam molestiae voluptate reprehenderit necessitatibus iste unde ex iusto sit!</p>
                </div>

                <div className="data-3">
                    <img className='' src="https://jansevasankalp.org/wp-content/uploads/2024/02/Service-1-min.jpg" alt="img-1" />
                    <h4 className='text-xl text-center font-bold'>Environmental Conservation</h4>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque maiores, numquam molestiae voluptate reprehenderit necessitatibus iste unde ex iusto sit!</p>
                </div>
            </div>
            <div className='vision_container p-14 pl-80 mx-auto'>
                <div className="flex flex-row max-w-4xl bg-gray-300">
                    <div className='flex p-5'>
                        <img src="https://jansevasankalp.org/wp-content/uploads/2024/02/Our-Mission-min.jpg" alt="" />
                    </div>
                    <div className='flex flex-row pt-8 p-1 max-w-30'>
                        <p className=' '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore molestias quasi, praesentium, distinctio voluptates quisquam enim numquam laboriosam repudiandae eligendi officia ea consequatur explicabo quibusdam perferendis iure, fugit voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, maiores beatae. Enim, ea quos! Dolorum, fugit accusamus. Sed, earum minus!</p>
                    </div>
                </div>
            </div>

            <div className='vision_container p-14 pl-80 mx-auto'>
                <div className="flex flex-row max-w-4xl bg-gray-300">

                    <div className='flex flex-row pt-8 p-4 max-w-30'>
                        <p className=' '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore molestias quasi, praesentium, distinctio voluptates quisquam enim numquam laboriosam repudiandae eligendi officia ea consequatur explicabo quibusdam perferendis iure, fugit voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, maiores beatae. Enim, ea quos! Dolorum, fugit accusamus. Sed, earum minus!</p>
                    </div>
                    <div className='flex p-5'>
                        <img src="https://jansevasankalp.org/wp-content/uploads/2024/02/Our-Mission-min.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div className="banner-container text-center h-80 p-10 mb-5 text-white" style={{
                backgroundImage: "url('https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg?w=1380&t=st=1709090761~exp=1709091361~hmac=252b9caedbc476e0a0a081e4a12ff3d450bb239c5b8a6170c67bc7e483ba08ce')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <h2 className="text-4xl font-bold mb-4">DONATE</h2>
                <p className="text-lg mb-6 text-balance">Your generous contributions enable us to continue our vital work and make a difference in the lives of individuals and communities. Every donation, no matter how small, helps us further our mission and create positive change. We are grateful for your support.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">CONTRIBUTE NOW</button>
            </div>

            <div className="banner-container text-center h-80 p-10 mb-5 text-white" style={{
                backgroundImage: "url('https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg?w=1380&t=st=1709090761~exp=1709091361~hmac=252b9caedbc476e0a0a081e4a12ff3d450bb239c5b8a6170c67bc7e483ba08ce')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <h2 className="text-4xl font-bold mb-4">GET INVOLVED</h2>
                <p className="text-lg mb-6 text-balance text-center ">We welcome individuals and organizations to join us in our efforts to create a positive impact. Whether you are interested in volunteering, making a donation, or collaborating on projects, there are many ways to get involved with Jan Seva Sankalp. Your support will help us expand our reach and make a greater difference in the lives of those we serve.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">GET IN TOUCH</button>
            </div>

            <Footer />

        </>
    )
}


export default Vision;