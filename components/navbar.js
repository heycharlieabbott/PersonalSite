import React from 'react'
import Link from 'next/link'
import { isTemplateSpan } from 'typescript';


const navbar = () => {

const navBarItems = ["Home", "Projects","Articles",'About'];

const navBarMap = (items) =>{
  return items.map((title, index) => 
  <li key={index} className='hover:underline'>
   <Link href={'/'}>{title}</Link>
  </li>)
}

  return (
      
    <ul className='flex flex-row justify-evenly'>
      {navBarMap(navBarItems)}
     </ul>
   )
}

export default navbar