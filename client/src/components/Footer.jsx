import React from 'react'
import { assets } from '../assets/data'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='pt-16 xl:pt-20 w-full text-gray-500 bg-[#fffbee]'>
            <div className='max-padd-container'>
              <div className=" flex flex-wrap md:gap-6 justify-between">
                <div className='max-w-80'>
                    <div className="flex mb-4">
            <Link to={'/'} className="">
             <img src={assets.logoImg} alt="" className={`h-11`} />
             </Link>
                        </div>
                    <p className='text-sm'>
                       Experience modern leaving through well-presented properties, professionals supprot, and thoughtfully designed spaces. 
                    </p>
                    <div className='flex items-center gap-3 mt-4'>
                      <img src={assets.facebook} alt="" />
                      <img src={assets.twitter} alt="" />
                      <img src={assets.instagram} alt="" />
                      <img src={assets.linkedin} alt="" />
                    </div>
                </div>

                <div>
                    <p className='text-lg text-gray-800'>COMPANY</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Partners</a></li>
                    </ul>
                </div>

                <div>
                    <p className='text-lg text-gray-800'>SUPPORT</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Safety Information</a></li>
                        <li><a href="#">Cancellation Options</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Accessibility</a></li>
                    </ul>
                </div>

                <div className='max-w-80'>
                    <p className='h4 text-black/80'>STAY UPDATED</p>
                    <p className='mt-3 text-sm'>
                        Subscribe to our newsletter for inspiration and special offers.
                    </p>
                    <div className='flex items-center border pl-4 gap-2 bg-white border-gray-500/30 h-[46px] rounded-full overflow-hidden max-w-md mt-6 w-full'>
                        <input type="text" className='w-full h-full outline-none text-sm text-gray-500' placeholder='Your email' />
                        <button className='btn-dark font-medium !py-3.5 py-2 mr-0.5'>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5 mt-8'>
                <p>© {new Date().getFullYear()} <a>Nestorria</a>. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
            </div>
            </div>
        </footer>
  )
}

export default Footer