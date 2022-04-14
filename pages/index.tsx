import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Stack from '../components/Stack'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import { ST } from 'next/dist/shared/lib/utils'


export default function Home() {
  return (
    <>
      <Head>
        <title>Ishaan Bedi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
        <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
        <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerPolicy="no-referrer-when-downgrade" /></noscript>
      </Head>
      <div className={styles.container} >
        <section className='mt-7 lg:pl-3 max-w-4xl m-auto w-full'>
          {/* <Navbar /> */}
          <Hero />
          <About />
          <Stack />
          <Contact />
          <Footer />
        </section>
      </div>
    </>
  )
}
