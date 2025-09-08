import React, { useState } from 'react'
import { assets } from '../../assets/data'

const AddProperty = () => {
    const [images, setImages] = useState({
        1: null,
        2: null,
        3: null,
        4: null,
    })
    const [inputs, setInputs] = useState({
        title: "",
        description: "",
        city: "",
        country: "",
        address: "",
        area: "",
        propertyType: "",
        priceRent: "",
        priceSale: "",
        bedrooms: "",
        bathrooms: "",
        garages: "",
        amenities: {
            Parking: false,
            Wifi: false,
            Backyard: false,
            Terrace: false,
        }
    })
    const [loading, setLoading] = useState(false)

    return (
        <div className='md:px-8 py-6 xl:py-8 m-1.5 sm:m-3 h-[97vh] overflow-scroll lg:w-11/12 bg-white shadow rounded-lg'>
            <form action="" className='flex flex-col gap-y-3.5 px-2 text-sm xl:max-w-3xl'>

                <div className="w-full">
                    <h5 className="h5">Property Name</h5>
                    <input
                        onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
                        value={inputs.title}
                        type='text'
                        placeholder='Type here...'
                        className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-secondary/5 mt-1 w-full'
                    />
                </div>
                <div className="w-full">
                    <h5 className="h5">Property Description</h5>
                    <textarea
                        onChange={(e) => setInputs({ ...inputs, description: e.target.value })}
                        value={inputs.description}
                        type='text'
                        rows={5}
                        placeholder='Type here...'
                        className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-secondary/5 mt-1 w-full'
                    />
                </div>
                <div className="flex gap-4">
                    <div className="w-full">
                        <h5 className="h5">City</h5>
                        <input
                            onChange={(e) => setInputs({ ...inputs, city: e.target.value })}
                            value={inputs.city}
                            type='text'
                            placeholder='Type here...'
                            className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-secondary/5 mt-1 w-full'
                        />
                    </div>
                    <div className="w-full">
                        <h5 className="h5">Country</h5>
                        <input
                            onChange={(e) => setInputs({ ...inputs, country: e.target.value })}
                            value={inputs.country}
                            type='text'
                            placeholder='Type here...'
                            className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-secondary/5 mt-1 w-full'
                        />
                    </div>
                    <div className="">
                        <h5 className="h5">Property Type</h5>
                        <select
                            onChange={(e) => setInputs({ ...inputs, propertyType: e.target.value })}
                            value={inputs.propertyType}

                            className='w-36 px-3 py-2 ring-1 ring-slate-900/10 rounded-lg bg-secondary/5 mt-1 '
                        >
                            <option value="">Select Type</option>
                            <option value="House">House</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Villa">Villa</option>
                            <option value="Penthouse">Penthouse</option>
                            <option value="Townhouse">Townhouse</option>
                            <option value="Commercial">Commercial</option>
                            <option value="Land Plot">Land Plot</option>
                        </select>
                    </div>
                </div>
                <div className="flex gap-4 flex-wrap w-full">
                    <div className="flex-1">
                        <h5 className="h5">Address</h5>
                        <input
                            onChange={(e) => setInputs({ ...inputs, address: e.target.value })}
                            value={inputs.address}
                            type='text'
                            placeholder='Type here...'
                            className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-secondary/5 mt-1 w-full'
                        />
                    </div>
                    <div className="w-32">
                        <h5 className="h5">Area</h5>
                        <input
                            onChange={(e) => setInputs({ ...inputs, area: e.target.value })}
                            value={inputs.area}
                            type='number'
                            placeholder='Area (sq ft)'
                            className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-secondary/5 mt-1 w-full'
                        />
                    </div>
                </div>
                <div className="flex gap-4 flex-wrap">
                    <div className="">
                        <h5 className="h5">Rent Price <span className="text-xs">/night</span></h5>
                        <input
                            onChange={(e) => setInputs({ ...inputs, priceRent: e.target.value })}
                            value={inputs.priceRent}
                            type='number'
                            placeholder='99'
                            min={99}
                            className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-secondary/5 mt-1 w-28'
                        />
                    </div>
                    <div className="">
                        <h5 className="h5">Sale Price</h5>
                        <input
                            onChange={(e) => setInputs({ ...inputs, priceSale: e.target.value })}
                            value={inputs.priceSale}
                            type='number'
                            placeholder='9999'
                            min={9999}
                            className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-secondary/5 mt-1 w-28'
                        />
                    </div>
                    <div className="">
                        <h5 className="h5">BedRooms</h5>
                        <input
                            onChange={(e) => setInputs({ ...inputs, bathrooms: e.target.value })}
                            value={inputs.bathrooms}
                            type='number'
                            placeholder='1'
                            min={1}
                            className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-secondary/5 mt-1 w-20'
                        />
                    </div>
                    <div className="">
                        <h5 className="h5">BathRooms</h5>
                        <input
                            onChange={(e) => setInputs({ ...inputs, bathrooms: e.target.value })}
                            value={inputs.bathrooms}
                            type='number'
                            placeholder='1'
                            min={1}
                            className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-secondary/5 mt-1 w-20'
                        />
                    </div>
                    <div className="">
                        <h5 className="h5">Garages</h5>
                        <input
                            onChange={(e) => setInputs({ ...inputs, garages: e.target.value })}
                            value={inputs.garages}
                            type='number'
                            placeholder='1'
                            min={1}
                            className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-secondary/5 mt-1 w-20'
                        />
                    </div>
                </div>
                {/* amenities */}
                <div className="">
                    <h5 className="h5">Amenities</h5>
                    <div className="flex gap-3 flex-wrap mt-1">
                        {
                            Object.keys(inputs.amenities).map((amenity, index) => (
                                <div className="flex gap-1" key={index}>
                                    <input
                                        id={`amenities${index + 1}`}
                                        onChange={() => setInputs({ ...inputs, amenities: { ...inputs.amenities, [amenity]: !inputs.amenities[amenity] } })}
                                        checked={inputs.amenities[amenity]}
                                        type="checkbox" />
                                    <label htmlFor={`amenities${index + 1}`}>{amenity}</label>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* images */}
                <div className="flex gap-2 mt-2">
                    {
                        Object.keys(images).map((key)=>(
                            <label className='ring-1 ring-slate-900/10 overflow-hidden rounded-lg' key={key} htmlFor={`propertyImaage${key}`}>
                                <input type="file" accept='image/*' id={`propertyImage${key}`} hidden
                                onChange={(e) => setImages({ ...images, [key]: e.target.files[0] })} 
                                 />
                                 <div className="h-12 w-24 bg-secondary/5 flexCenter">
                                    <img src={images[key]?URL.createObjectURL(images[key]):assets.uploadIcon} alt="" className='overflow-hidden object-contain' />
                                 </div>
                            </label>
                        ))
                    }
                </div>
                <button className="btn-secondary text-black font-semibold mt-3 p-2 max-w-36 sm:w-full rounded-xl" type='submit'>
                {loading ? "Adding":"Add Property"}</button>
            </form>
        </div>
    )
}

export default AddProperty