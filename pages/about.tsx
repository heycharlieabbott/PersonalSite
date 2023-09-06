import React from 'react'
import Navbar from '../components/navbar'
import { Typography } from '@material-tailwind/react'
import ContactForm from '../components/contactform'


type Props = {}

const about = (props: Props) => {
  return (
    <div className='flex-col h-screen'>
    <Navbar scrollstatus={"Show"}/>
    <div className='flex flex-col gap-20 items-center h-full justify-center'>
        <Typography variant="h1">
            This is a blog by <a className='hover:underline hover:text-blue-500 transition duration-150'href='https://www.heycharlieabbott.com'>Charlie Abbott</a>
        </Typography>
        <div>
        <ContactForm/>
        </div>
    </div>
    
    </div>
  )
}

export default about