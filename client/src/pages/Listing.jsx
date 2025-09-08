
import React from 'react'
import { useAppContext } from '../context/AppContext';
import Item from '../components/Item';
import { Link } from 'react-router';

const Listing = () => {
  const {properties}=useAppContext()
  const sortOptions = ["Relevant","Low to High","High to Low"];
  const propertyTypes=[
    "House",
    "Apartment",
    "Villa",
    "Penthouse",
    "TownHouse",
    "Commercial",
    "Land Plot"
  ]
  const priceRange =[
    "o to 10000",
    "10000 to 20000",
    "20000 to 40000",
    "40000 to 80000"
  ]
  return (
    <div className="bg-gradient-to-r from-[#fffbee] to-white py-16 pt-28">
      <div className="max-padd-container flex flex-col lg:flex-row gap-8 mb-16">
        {/* left side filters */}
        <div className="bg-secondary/10 ring-1 ring-slate-900/5 p-4 sm:min-w-60 sm:h-[600px] rounded-xl">
          {/* sort */}
          <div className="py-3 mt-4">
            <h5 className="h5 mb-3">Sort By</h5>
            <select className='bg-secondary/10 border border-slate-900/10 outline-none text-gray-30 medium-14 h-8 w-full rounded px-2'>
              {sortOptions.map((sort,index)=>(
                <option value="sort" key={index} >{sort}</option>
              ))}
            </select>
          </div>
          {/* property type */}
          <div className="py-3 mt-4">
            <h5 className="h5 mb-4">Property Types</h5>
            {propertyTypes.map((type)=>(
              <label htmlFor="" key={type} className='flex gap-2 medium-14'>
                <input type="checkbox" name="" id="" />
                {type}
              </label>
            ))}
          </div>
          {/* price range */}
          <div className="py-3 mt-2">
            <h5 className="h5 mb-4">Price Range</h5>
            {priceRange.map((price)=>(
              <label htmlFor="" key={price} className='flex gap-2 medium-14'>
                <input type="checkbox" name="" id="" />
                ${price}
              </label>
            ))}
          </div>
        </div>
        {/* right side properties */}
        <div className="min-h-[97vh] overflow-y-scroll rounded-xl">
          {properties.length>0?(
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {properties.map((property)=>(
                // <Link to={`/listing/${listingId`}}></Link>
                <Item key={property._id} property={property} />
              ))}
            </div>
          ):(
            <div className="text-center text-gray-500 mt-20">No matches found!</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Listing