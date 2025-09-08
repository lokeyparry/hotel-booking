import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { assets, cities } from '../assets/data'

const AgencyReg = () => {
    const{setShowAgencyReg}=useAppContext()
    // const {setShowAgencyReg, axios,getToken, setIsOwner}=useAppContext()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
  return (
    <div onClick={()=>setShowAgencyReg(true)} className='fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-black/80'>
        <form onClick={(e)=>e.stopPropagation()} className="flexCenter bg-white rounded-xl max-w-4xl max-md:mx-2 relative">
            <img onClick={()=>setShowAgencyReg(false)} src={assets.createPrp} alt="" className='w-1/2 rounded-l-xl hidden md:block' />
            <div className="flex flex-col md:w-1/2 p-8 md:p-10">
            <img  src={assets.close} alt="" className='absolute top-4 right-4 h-6 w-6 p-1 cursor-pointer bg-secondary/50 rounded-full shadow-md' />
            <h3 className="h3 mb-6 text-secondary underline">Register Agency</h3>
            <div className="flex gap-2 xl:gap-3">
                <div className="">
                    <label htmlFor="name" className='medium-14'>Agency Name</label>
                    <input id='name' value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Type here...' className='regular-14 border border-slate-900/10 bg-secondary/10 rounded-lg w-full px-3 py-1.5 mt-1 outline-none' required />
                </div>
                <div className="">
                    <label htmlFor="contact" className='medium-14'>Contact</label>
                    <input id='contact' value={contact} onChange={(e)=>setContact(e.target.value)} type="number" placeholder='Type here...' className='regular-14 border border-slate-900/10 bg-secondary/10 rounded-lg w-full px-3 py-1.5 mt-1 outline-none' required />
                </div>
            </div>
            <div className="w-full mt-4">
                    <label htmlFor="email" className='medium-14'>Email</label>
                    <input id='email' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Type here...' className='regular-14 border border-slate-900/10 bg-secondary/10 rounded-lg w-full px-3 py-1.5 mt-1 outline-none' required />
                </div>
                <div className="">
                    <label htmlFor="address" className='medium-14'>Address</label>
                    <input id='address' value={address} onChange={(e)=>setAddress(e.target.value)} type="text" placeholder='Type here...' className='regular-14 border border-slate-900/10 bg-secondary/10 rounded-lg w-full px-3 py-1.5 mt-1 outline-none' required />
                </div>
                <div className="">
                    <label htmlFor="city" className='medium-14'>City</label>
                    <select id='city' value={city} onChange={(e)=>setCity(e.target.value)} className='regular-14 border border-slate-900/10 bg-secondary/10 rounded-lg w-full px-3 py-1.5 mt-1 outline-none' required >
                        <option value="">Select City</option>
                        {cities.map((city)=>(
                            <option value={city} key={city}>{city}</option>
                        ))}
                    </select>
                </div>
                <button className='btn-dark py-2 rounded-lg w-32 mt-6'>Register</button>
            </div>
        </form>
    </div>
  )
}

export default AgencyReg