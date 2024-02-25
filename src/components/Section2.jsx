import React from 'react'

function Section2() {
  return (
    <div className='h-[50vh] flex flex-col lg:flex-row justify-between p-10'>
        <div className='flex flex-col lg:flex-col justify-between px-5'>
            <img src="https://jansevasankalp.org/wp-content/uploads/2024/02/Banner.jpg" alt="Description" className='w-fit'/>
            <div>
                <p>Women Empowerment</p>
                <p>Jan Seva Sankalp is committed to empowering women and advocating for gender equality. This category includes programs and projects focused on women’s rights, skill development, leadership training, and economic empowerment, with the aim of enabling women to achieve their full potential and contribute to society.</p>
            </div>
        </div>
        <div className='flex flex-col lg:flex-col justify-between'>
            <img src="https://jansevasankalp.org/wp-content/uploads/2024/02/Banner.jpg" alt="Description" className='w-fit'/>
            <div>
                <p>Education</p>
                <p>Jan Seva Sankalp is dedicated to promoting education and raising awareness about its importance. This category encompasses initiatives such as workshops, awareness programs, and advocacy efforts aimed at providing access to quality education for all individuals.</p>
            </div>
        </div>
        <div className='flex flex-col lg:flex-col justify-between px-5'>
            <img src="https://jansevasankalp.org/wp-content/uploads/2024/02/Banner.jpg" alt="Description" className='w-fit'/>
            <div>
                <p>Environmental Conservation</p>
                <p>Jan Seva Sankalp recognizes the urgent need to protect and preserve the environment for future generations. This category involves activities such as awareness campaigns, tree planting drives, waste management initiatives, and sustainable development projects aimed at promoting environmental stewardship and sustainability.</p>
            </div>
        </div>
    </div>
  )
}

export default Section2