import Link from 'next/link'
import { Typography } from '@material-tailwind/react'

const name = 'Charlie Abbott'
export const siteTitle = 'Charlie Abbott`s Site'

type layoutProps = {
  children: React.ReactNode,
  home?: React.ReactNode,
}

export default function Layout({ children, home }: layoutProps) {
  return (
    <div className='w-1/2 m-auto'>
      <Typography variant='h6'>
        <header>Title </header>
      </Typography>
      <main >
       
        {children}
        
        </main>
        
      {!home && (
        <div>
          <Typography  color="blue" textGradient>
          <Link href="/">← Back to home</Link>
          </Typography>
        </div>
      )}
    </div>
  )
}
