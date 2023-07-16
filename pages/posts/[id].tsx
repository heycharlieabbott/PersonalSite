import Layout from '../../components/layout';
import Navbar from '../../components/navbar';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import { Typography } from '../../lib/typographyclient';
import { useEffect, useRef } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next'


export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string)
  return {
    props: {
      postData
    }
  }
}

type postProps = {
  title: string,
  id: string,
  date: string,
  contentHtml: string,


}


export default function Post({
  postData
}: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {

  


    return (
      <>
      <Navbar/>
      <Layout>
         <Head>
        <title>{postData.title}</title>
      </Head>
        <br />
        {/* <Typography>{id}</Typography> */}
        <br />
        <Typography>
          {/* <Date dateString={date}/> */}
          </Typography>
        <br/>
        <div className="font-sans antialiased text-base font-light leading-relaxed" dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
     
      </Layout>
      </>
    );
  }
