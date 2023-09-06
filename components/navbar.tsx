import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { Typography } from '@material-tailwind/react';
import { useState, useEffect } from 'react';
import path from 'path';


type navBarText = string[]

type navbarProps = {
  scrollstatus?: string
  homeclick?: Function
  homeclickVal?:number

}


const navbar = ({scrollstatus, homeclick, homeclickVal}: navbarProps) => {

const navBarItems: navBarText = ["Home", "Projects","Articles",'About'];
const navBarItemsHome: navBarText = ["Projects","Articles",'About'];

const {pathname} = useRouter();

const [curPath, setCurPath] = useState(pathname.replace('/',''))

const handleHome = (currentpath) =>{
  pathname === '/' && currentpath === 'home'?homeclick(1):null
}


const navBarMap = (items) =>{
  return (
  items.map((title, index) => 
  <div>
  <li key={index} tabIndex={index} className={curPath === title.toLowerCase()?`underline`:'hover:underline'} onClick={() =>handleHome(title.toLowerCase())}>
   <Typography >
   <Link href={`/${title === 'Home' ? '/' : title.toLowerCase()}`}>{title}</Link>
    </Typography>
  </li>
  </div>
  )
  )
}



  return (
    
  <nav className={pathname === "/"? `${scrollstatus} flex justify-center items-center h-10 top-0 z-10 m-auto bg-blue-600 shadow-md transition-opacity`:
  'flex justify-center items-center h-10 top-0 z-10 m-auto  bg-blue-600 shadow-md'}>
    <ul className=' w-full flex flex-row justify-evenly items-center gap-6 pr-4 text-white focus:ring '>
      {navBarMap(navBarItems)}
     </ul>
    </nav>  
 
   )
}

export default navbar