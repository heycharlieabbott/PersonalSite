import Layout from '../../components/layout';
import Navbar from '../../components/navbar';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import { Typography } from '../../lib/typographyclient';
import { useEffect, useRef } from 'react';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

type postProps = {
  title: string,
  id: string,
  date: string,
  contentHtml: string,


}


export default function Post(postData : postProps) {


    return (
      <>
      <Navbar/>
      <Layout>
         <Head>
        <title>{postData.title}</title>
      </Head>
        <br />
        <Typography>{postData.id}</Typography>
        <br />
        <Typography><Date dateString={postData.date}/></Typography>
        <br/>
        <div className="font-sans antialiased text-base font-light leading-relaxed" dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
     
      </Layout>
      </>
    );
  }
