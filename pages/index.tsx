import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Navbar from '../components/navbar'

import { useRef, useState, useEffect, useCallback } from 'react'
import { DefaultPagination } from '../components/pagination'
import CustomCard from '../components/customcard'

type homeProps = {
  allPostsData: {
    id: string,
    date: any,
    title: string, 
    tags?: string
  }[]
}

export default function Home({ allPostsData }: homeProps) {
  console.log(allPostsData)
 
 const [page, setActive] = useState(1)
 const windowPage = 3;
 const [totalPages, setTotalPages] = useState(Array(Math.ceil(3)).fill(0))

 
 const [scrollY, setScrollY] = useState(0);
 const [status, setStatus] = useState('sticky')

 function logit() {
  if (window.scrollY > scrollY){
    setStatus('opacity-0')
  } else{
    setStatus('sticky opacity-100')
  }
   setScrollY(window.scrollY);
   
 }

 useEffect(() => {
   function watchScroll() {
     window.addEventListener("scroll", logit);
   }
   watchScroll();
   return () => {
     window.removeEventListener("scroll", logit);
   };
 });

 
 
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
   <Navbar scrollstatus={status}/>
      <main>
        <div className='scroll-pt-10 grid grid-cols-1 gap-5 text-center justify-items-center w-screen h-screen'>
          {allPostsData.slice((page - 1)*windowPage,(page-1)*windowPage+windowPage).map(({ id, date, title }) => (    
          <CustomCard id={id} date={date} title={title}/>
          ))}
        <DefaultPagination active={page} setActive={setActive} totalPages={totalPages}/>
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
