import React from 'react'
import Navbar from '../components/navbar'
import { Typography } from '@material-tailwind/react'


type Props = {}

const about = (props: Props) => {
  return (
    <div className='flex-col h-screen'>
    <Navbar/>
    <div className='flex items-center h-full justify-center'>
        <Typography variant="h1">
            This is a blog by <a className='hover:underline hover:text-light-blue-300 transition duration-150'href='https://www.heycharlieabbott.com'>Charlie Abbott</a>
        </Typography>
    </div>
    </div>
  )
}

export default about