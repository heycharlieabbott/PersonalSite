import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { Typography } from '@material-tailwind/react';
import { useState, useEffect } from 'react';


type navBarText = string[]

type navbarProps = {
  scrollstatus?: string

}


const navbar = ({scrollstatus}: navbarProps) => {

const navBarItems: navBarText = ["Home", "Projects","Articles",'About'];
const navBarItemsHome: navBarText = ["Projects","Articles",'About'];

const {pathname} = useRouter();

const navBarMap = (items) =>{
  return (
  items.map((title, index) => 
  <div>
  <li key={index} className='hover:underline'>
   <Typography>
   <Link href={`/${title === 'Home' ? '/' : title.toLowerCase()}`}>{title}</Link>
    </Typography>
  </li>
  </div>
  )
  )
}



  return (
    
  <nav className={pathname === "/"? `${scrollstatus} top-0 z-10 m-auto bg-brown-300 shadow-md transition-opacity`:'top-0 z-10 m-auto  bg-brown-300 shadow-md'}>
    <ul className='flex flex-row justify-evenly gap-6 pr-4 text-white  '>
      {navBarMap(pathname === "/"? navBarItemsHome : navBarItems)}
     </ul>
    </nav>  
 
   )
}

export default navbar