
import React, { useState } from 'react'

const PropertyImages = ({property}) => {
    const [hoveredIndex, setHoveredIndex] = useState(0);
        const ImagesCaption = [
    {
        heading:"Front View",
        description: "A beautiful front view of the property showcasing its architecture and landscaping."
    },
    {
        heading:"Living Room",
        description:"Spacious living room with modern furniture and large windows for natural light."
    },
    {
        heading:"Kitchen",
        description : "Fully equipped kitchen with state-of-the-art appliances and ample counter space."
    },
    {
        heading:"Bedroom",
        description:"Cozy bedroom with a comfortable bed, wardrobe, and serene decor."
    }
    
]
  return (
    <div className='flex max-sm:gap-1 max-md:gap-3 gap-5 h-[400px] w-full'>
        {
            property.images.map((pImg,index)=>{
                const caption=ImagesCaption[index];
                const isHovered=hoveredIndex===index;
                return(
                    <div key={index} className={`relative group transition-all duration-500 h-[400px] overflow-hidden rounded-2xl ${isHovered ? "flex-grow w-full":"max-sm:w-10 max-md:w-20 w-56"}`}
                    onMouseEnter={()=>setHoveredIndex(index)}
                    onMouseLeave={()=>setHoveredIndex(0)}
                    >
                        <img src={pImg} alt="" className='h-full w-full object-cover object-center rounded-2xl' />
                        <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl">
                            <h3 className="h3">{caption.heading}</h3>
                            <p className='text-white/90'>{caption.description}</p>
                        </div>
                    </div>
                );
            })
        }
    </div>
  )
}

export default PropertyImages