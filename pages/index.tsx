import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Navbar from '../components/navbar'
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'


type homeProps = {
  allPostsData: {
    id: string,
    date: any,
    title: string, 
  }[]
}



export default function Home({ allPostsData }: homeProps) {
  console.log(allPostsData)

  const cardRef = useRef<HTMLDivElement>(null!);

  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
   <Navbar/>
      <main>
        <div className='scroll-pt-10 grid grid-cols-1 gap-5 text-center justify-items-center w-screen h-screen snap-y snap-mandatory overflow-scroll'>
          {allPostsData.map(({ id, date, title }) => (    
        <Card className="mt-6 bg-blue-gray-50 w-1/2 h-[75vh] snap-always snap-start hover:drop-shadow-lg transition ease-in duration-120" ref={cardRef}>
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
            Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text 
          </Typography>
          </div>
          </div>
        </CardBody>
        <CardFooter className="pt-0">   
      </CardFooter>
    </Card>
          
          ))}
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
 
  return {
    props: {
      allPostsData
    }
  }
}
