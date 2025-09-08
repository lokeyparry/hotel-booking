import React from 'react'
import Title from '../components/Title'
import {assets } from '../assets/data'

const About = () => {
  return (
    <section className='max-padd-container py-16 xl:py-28'>
      {/* container */}
      <div className="flex items-center flex-col lg:flex-row gap-12">
        {/* info-left side */}
        <div className="flex-1">
          <Title 
          title1={"Your Trusted Real Estate Partner"}
          title2={"Helping Your Every Step of The Way"}
          para={"Trust, Clarity, and simplicity are at the core of everything we do to make your property journey easy."
          }
          titleStyles={'mb-10'}
           />
           {/* */}
           <div className="flex flex-col gap-6 mt-5">
            <div className="flex gap-3">
              <img src={assets.calendarSecondary} alt="" width={20} />
              <p>In-app scheduling for property viewings</p>
            </div>
            <div className="flex gap-3">
              <img src={assets.graph} alt="" width={20} />
              <p>Real-time market price update</p>
            </div>
            <div className="flex gap-3">
              <img src={assets.map} alt="" width={20} />
              <p>In-app scheduling for property viewings</p>
            </div>
            <div className="flex gap-3">
              <img src={assets.pound} alt="" width={20} />
              <p>Access to off-market properties</p>
            </div>
           </div>
           {/* rating */}
           <div className="flex items-center divide-x divide-gray-300 mt-11">
                <div className="flex -space-x-3 pr-3">
                <img src={assets.client1}  alt="image" className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition z-1"/>
                <img src={assets.client2}  alt="image" className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition z-[2]"/>
               <img src={assets.client3}  alt="image" className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition z-[3]"/>
              <img src={assets.client4}  alt="image" className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition z-[4]"/>
          </div>
        <div className="pl-3">
        <div className="flex items-center">
          <img src={assets.star} alt="" width={17} />
          <img src={assets.star} alt="" width={17} />
          <img src={assets.star} alt="" width={17} />
          <img src={assets.star} alt="" width={17} />
          <img src={assets.star} alt="" width={17} />
          <p className='text-gray-600 medium-16 ml-2'>5.0</p>
        </div>
        <p className="text-sm text-gray-500">Trusted by <span className="font-medium text-gray-800">100,000+</span> users</p>
          </div>
         </div>
        </div>
        {/* imgae right side */}
        <div className="flex-1">
          <div className="relative flex justify-end">
            <img src={assets.about} alt="" className='rounded-3xl' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About