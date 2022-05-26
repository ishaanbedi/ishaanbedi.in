import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import { educationData } from '../components/data';
export default function Education() {
    return (
        <>
            <Head>
                <title>
                    {educationData.title}
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
            </Head>
            <Navbar />
            <div className={styles.container} >

                <section className='mt-7 lg:pl-3 max-w-4xl m-auto w-full'>
                    <h1 className="lg:text-6xl text-3xl font-bold mt-16 bg-gradient-to-r bg-clip-text  text-transparent  from-blue-500 via-purple-500 to-cyan-500 animate-text ">
                        Education
                    </h1>
                    <div className="wrapper">
                        <div className="college-div my-16">
                            <h1 className='font-bold lg:text-3xl text-xl bg-gradient-to-r bg-clip-text  text-transparent  from-blue-500 via-purple-500 to-cyan-500 animate-text '>{educationData.college.name}</h1>
                            <ul className='list-disc mt-4 ml-2'>
                                <li>{educationData.college.degree}</li>
                                <li>{educationData.college.duration}</li>
                            </ul>
                        </div>
                        <div className="school-div my-16">
                            <h1 className='font-bold lg:text-3xl text-xl bg-gradient-to-r bg-clip-text  text-transparent  from-blue-500 via-purple-500 to-cyan-500 animate-text '>{educationData.school.name}</h1>
                            <ul className='list-disc mt-4 ml-2'>
                                <li>{educationData.school.degree}</li>
                                <li>{educationData.school.duration}</li>
                                <li>{educationData.school.grade}</li>

                            </ul>
                        </div>
                        <Link href='/' passHref>
                            <button className="btn btn-primary btn-outline">Home</button>
                        </Link>
                    </div>

                </section>
            </div>
        </>
    )
}