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
   <Navbar></Navbar>
      <main className="">
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} >
            <Link href={`/posts/${id}` } className='hover:underline' >{title}</Link>
            <br />
            <small>
              <Date dateString={date} />
            </small>
          </li>
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
