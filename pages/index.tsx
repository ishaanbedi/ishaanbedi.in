import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import Stack from '../components/Stack';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';
import { metaDetails } from '../components/data';
import Link from 'next/link';
import Navbar from '../components/Navbar';
export default function Home() {
  return (
    <>
      <Head>
        <title>
          {metaDetails.title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>

      {/* NAVBAR */}
      <Navbar />

      <div className={styles.container} >
        <section className='flex flex-col  items-center mt-7'>
          <Hero/>
        </section>
      </div>
    </>
  )
}