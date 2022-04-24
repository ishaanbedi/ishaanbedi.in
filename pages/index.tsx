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
