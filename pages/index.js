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

export default function Home({ allPostsData }) {
  console.log(allPostsData)

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
   <Navbar/>
      <main>
        <ul className='grid grid-cols-1 gap-5 text-center p-2'>
          {allPostsData.map(({ id, date, title }) => (
        <Card className="mt-6 w-96 hover:drop-shadow-lg transition ease-in duration-120 bg-blue-gray-50">
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
    </>
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
