import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const name = 'Charlie Abbott'
export const siteTitle = 'Charlie Abbott`s Site'

export default function Layout({ children, home }) {
  return (
    <div>
      <header>
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  )
}
