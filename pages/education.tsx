import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Navbar from './Navbar';
export default function Education() {
    return (
        <>
            <Head>
                <title>
                    Education - Ishaan Bedi
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
            </Head>
            <div className={styles.container} >
                <Navbar />
                <section className='mt-7 lg:pl-3 max-w-4xl m-auto w-full'>
                    <div className="wrapper">
                        <div className="college-div my-16">
                            <h1 className='font-bold lg:text-3xl text-transparent bg-clip-text bg-gradient-to-br from-primary  to-secondary'>Maharaja Agrasen Institute of Technology, Delhi</h1>
                            <ul className='list-disc mt-4 ml-2'>
                                <li>Electronics and Communications Engineering</li>
                                <li>December 2021 - 2025</li>
                            </ul>
                        </div>
                        <div className="school-div my-16">
                            <h1 className='font-bold lg:text-3xl text-transparent bg-clip-text bg-gradient-to-br from-primary  to-secondary'>S.T. Xavier’s School, Rohini, Delhi</h1>
                            <ul className='list-disc mt-4 ml-2'>
                                <li>High School : Computer Science</li>
                                <li>April 2011 - July 2021</li>
                                <li>92% in CBSE Class XII & 94.8% in CBSE Class X </li>
                            </ul>
                        </div>
                        <Link href='/'>
                            <button className="btn btn-primary btn-outline">Home</button>
                        </Link>
                    </div>
                </section>
            </div>
        </>
    )
}