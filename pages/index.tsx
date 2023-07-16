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
import card from '@material-tailwind/react/theme/components/card'


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
        <ul className='grid grid-cols-1 gap-5 text-center p-2 justify-items-center w-screen'>
          {allPostsData.map(({ id, date, title }) => (    
        <Card className="mt-6 hover:drop-shadow-lg transition ease-in duration-120 bg-blue-gray-50 w-1/2" ref={cardRef}>
        <CardBody>
        <Link href={`/posts/${id}` } >
          <Typography variant="h5" className="mb-2 hover:underline">
            {title}
          </Typography>
          </Link>
          <Typography>
          <Date dateString={date} />
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">   
      </CardFooter>
    </Card>
          
          ))}
        </ul>
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
