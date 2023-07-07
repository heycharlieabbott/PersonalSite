import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Navbar from '../components/navbar'

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
   <Navbar/>
      <main>
        <ul className='grid grid-cols-1 gap-5 text-center p-2'>
          {allPostsData.map(({ id, date, title }) => (
            <div className='bg-slate-400 rounded-md drop-shadow-md w-1/4 p-4'>
            <li key={id} >
            <Link href={`/posts/${id}` } className='hover:underline' >{title}</Link>
            <br />
            <small>
              <Date dateString={date} />
            </small>    
          </li>
          </div>
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
