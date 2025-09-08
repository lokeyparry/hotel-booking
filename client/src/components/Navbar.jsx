import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({setMenuOpened,containerStyles}) => {
  const navLinks = [
    {path:"/",title:"Home"},
    {path:"/listing",title:"Listing"},
    {path:"/blog",title:"Blog"},
    {path:"/contact",title:"Contact"},
  ];
  return (
    <nav className={`${containerStyles}`}>
      {
        navLinks.map((link)=>(
          <NavLink 
            key={link.title}
            to={link.path}
            className={({isActive})=> `${isActive ? "active-link" : ""}  px-3 py-1 uppercase text-sm font-bold rounded-full`}
            onClick={()=>{
              setMenuOpened(false);
              scrollTo(0,0);
            }}
          >
            {link.title}
          </NavLink>
        ))
      }
    </nav>
  )
}

export default Navbar