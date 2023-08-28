import React from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'
import { useRef } from 'react';



type Props = {
    id: string, 
    date: string, 
    title: string,
    tags?: string
}

const customcard = ({ id, date, title, tags }: Props) => {

    const cardRef = useRef<HTMLDivElement>(null!);


  return (

    <Card className="flex justify-between mt-6 bg-blue-gray-50 w-1/2 h-[75vh] snap-always snap-start hover:drop-shadow-lg transition ease-in duration-120 overflow-auto" ref={cardRef}>
    <CardBody >
    <Link href={`/posts/${id}` } >
      <Typography variant="h5" className="mb-2 hover:underline">
        {title}
      </Typography>
      </Link>
      <Typography>
      <Date dateString={date} />
      </Typography>
      <div className='flex flex-row w-full h-full pt-10 gap-10'>
      <div className='w-full relative hidden md:inline-block'>
      <Image src={'/images/prof.jpeg'} alt='card' width={200} height={200} className='rounded-xl text-left '/>
      </div>
      <div className='text-left overflow-hidden'>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis assumenda minima et dignissimos modi illo pariatur quam odit. Ipsam beatae aut explicabo totam perferendis est eos dignissimos, tempora obcaecati nemo, hic eveniet. Necessitatibus iure earum consectetur sit, blanditiis dolorum eaque distinctio quam laboriosam commodi soluta facere voluptate molestias eligendi at.
      </Typography>
      </div>
      </div>
    </CardBody>

    <CardFooter className="flex align-bottom">

    <Link href={'/projects'} className='hover:underline'>
   <Typography variant="small">tag1</Typography> 
   </Link>  

  </CardFooter>
</Card>

  )
}

export default customcard