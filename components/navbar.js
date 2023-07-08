import React from 'react'
import Link from 'next/link'
import { isTemplateSpan } from 'typescript';
import { useRouter } from 'next/router';
import { Typography } from '@material-tailwind/react';


const navbar = () => {

const navBarItems = ["Home", "Projects","Articles",'About'];
const navBarItemsHome = ["Projects","Articles",'About'];

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
 
  <nav className='sticky top-0 z-10 w-1/4 m-auto'>
    
    <ul className='flex flex-row justify-evenly mb-8 gap-6 pr-4 rounded-sm'>
      {navBarMap(pathname === "/"? navBarItemsHome : navBarItems)}
     </ul>
   
    </nav>
    
   )
}

export default navbar