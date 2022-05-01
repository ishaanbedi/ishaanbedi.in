import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import Stack from '../components/Stack';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import { details } from '../components/data';
import { metaDetails } from '../components/data';
export default function Home() {
  return (
    <>
      <Head>
        <title>
          {metaDetails.title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      <Navbar />
      <div className={styles.container} >
        <section className='mt-7 lg:pl-3 max-w-4xl m-auto w-full'>
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