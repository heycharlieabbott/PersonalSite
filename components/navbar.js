import React from 'react'
import Link from 'next/link'
import { isTemplateSpan } from 'typescript';
import { useRouter } from 'next/router';


const navbar = () => {

const navBarItems = ["Home", "Projects","Articles",'About'];
const navBarItemsHome = ["Projects","Articles",'About'];

const {pathname} = useRouter();

const navBarMap = (items) =>{
  return (
  
  items.map((title, index) => 
  <div>
  <li key={index} className='hover:underline'>
   <Link href={`/${title === 'Home' ? '/' : title.toLowerCase()}`}>{title}</Link>
  </li>
  </div>
  )
  
  )
  
}

  return (
    
  <nav className='sticky top-0 z-10'>
    <ul className='flex flex-row justify-end mb-8 bg-slate-900 bg-opacity-50 text-white gap-6 pr-4'>
      {navBarMap(pathname === "/"? navBarItemsHome : navBarItems)}
     </ul>
    </nav>
   )
}

export default navbar