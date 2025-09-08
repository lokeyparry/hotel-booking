import React from 'react'
import { assets, cities } from '../assets/data'

const Hero = () => {
  return (
    <section className='h-screen w-screen bg-[url(/src/assets/bg.png)] bg-cover bg-center bg-no-repeat'>
      <div className="max-padd-container h-screen w-screen">
        {/* overlay */}
        <div className="absolute inset-0 bg-black/10"/>
        {/* container */}
        <div className="relative flex justify-end mx-auto flex-col gap-4 h-full py-6 sm:pt-12 z-10">
          {/* content */}
          <div className="flex flex-col mt-12 text-white">
            <button className='max-w-80 flex items-center space-x-3 border border-white medium-13 rounded-full px-4 pr-0.5 py-1 cursor-pointer'>
              <span>Explore how we simplify stays & spaces</span>
              <span className='flexCenter size-6 p-1 rounded-full bg-white'>
                <img src={assets.right} alt="" width={20} />
              </span>
            </button>
            <h2 className='h2 capitalize leading-tight mt-3 my-2 text-white'>Explore <span className='bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent'>exceptional properties</span> located in stunning surrounding.</h2>
          </div>
          {/* search booking form */}
          <form action="" className='bg-white text-gray-500 rounded-lg px-6 py-4 flex flex-col lg:flex-row gap-4 lg:gap-x-8 max-w-md lg:max-w-full ring-1 ring-slate-900/10 relative'>
          <div className="flex flex-col w-full">
            <div className="flex items-center gap-2">
              <img src={assets.pin} width={20} alt="" />
              <label htmlFor="destinationInput">Destination</label>
            </div>
            <input list='destinations' id='destinationInput' type="text" className='rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none' placeholder='Type here...' required />
            <datalist id='destinations'>
              {cities.map((city,index)=>(
                <option value={city} key={index}/>
              ))}
            </datalist>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex items-center gap-2">
              <img src={assets.calendar} alt="" width={20} />
              <label htmlFor="checkIn">Check in</label>
            </div>
            <input type="date" id='checkIn' className='rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none' />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex items-center gap-2">
              <img src={assets.calendar} alt="" width={20} />
              <label htmlFor="checkOut">Check out</label>
            </div>
            <input type="date" id='checkOut' className='rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none' />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex items-center gap-2">
              <img src={assets.user} alt="" width={20} />
              <label htmlFor="guests">Guests</label>
            </div>
            <input min={1} max={4}  type="number" id='guests' className='rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none' placeholder='0' />
          </div>
          <button type='submit' className='flex items-center gap-1 justify-center rounded-md bg-black py-3 px-6 text-white my-auto cursor-pointer max-md:w-full max-md:py-1'>
            <img src={assets.search} width={20} className='invert' alt="" />
            <span>Search</span>
          </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Hero