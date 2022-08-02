import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { BsGithub, BsTwitter, BsPencil, BsLinkedin } from 'react-icons/bs';
import Link from 'next/link';


export default function Home() {
    return (
        <>
            <Head>
                <title>
                    Ishaan Bedi
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
            </Head>

            <div className={styles.container}>
                <section className='flex flex-col my-7 items-center'>
                    <div>
                        <div className='flex flex-col'>
                            <div className="avatar md:my-auto">
                                <div className="cursor-pointer fshadow-lg w-24 rounded-full ring ring-gray-500 hover:ring-info-content transition delay-150 duration-200 ease-in-out ring-offset-base-100 ring-offset-2">
                                    <Image alt='Profile Image' width={100} height={100} src="/profile.jpeg" />
                                </div>
                            </div>
                            <h1
                                className="pt-5 xl:text-4xl md:text-4xl text-3xl font-bold text-white hover:text-info-content"
                            >
                                Ishaan Bedi
                            </h1>

                            <h3
                                className="text-base-content my-3 lg:text-lg line leading-relaxed"
                            >
                                Hi, I am Ishaan, a 19-year-old student from New Delhi, India.<br />I develop apps for the <span className='text-info-content hover:underline underline-offset-4'>Apple Ecosystem</span> in Swift & SwiftUI.<br />Also, I like working with web-technologies and developing web applications.<br /> I am pursuing undergraduate engineering from <span className='text-info-content hover:underline underline-offset-4'>MAIT, Delhi.</span><br /> I am the winner of <Link passHref href='https://twitter.com/ishnbedi/status/1529122492475838464'><a target={'_blank'}><span className='text-info-content hover:underline underline-offset-4 cursor-ne-resize'>Apple&apos;s WWDC Swift Student Challenge 2022.</span></a></Link>
                            </h3>
                            <div className="links flex flex-row  mx-2 lg:my-12 md:my-8 my-4  justify-center ">
                                <Link href='https://github.com/ishaanbedi' passHref>
                                    <a target={'_blank'} className="lg:rounded-md rounded-full justify-around fill-secondary-content hover:fill-primary-content btn gap-2 mx-2 my-2">
                                        <BsGithub />
                                        <p className='lg:flex md:flex hidden'>github</p>
                                    </a>
                                </Link>
                                <Link href='https://www.linkedin.com/in/ishaanbedi13/' passHref>
                                    <a target={'_blank'} className="lg:rounded-md rounded-full justify-around fill-secondary-content hover:fill-primary-content btn gap-2 mx-2 my-2">
                                        <BsLinkedin />
                                        <p className='lg:flex md:flex hidden'>linkedin</p>
                                    </a>
                                </Link>
                                <Link href='https://twitter.com/ishnbedi' passHref>
                                    <a target={'_blank'} className="lg:rounded-md rounded-full justify-around fill-secondary-content hover:fill-primary-content btn gap-2 mx-2 my-2">
                                        <BsTwitter />
                                        <p className='lg:flex md:flex hidden'>twitter</p>
                                    </a>
                                </Link>
                                <Link href='/posts' passHref>
                                    <button className="lg:rounded-md rounded-full justify-around fill-secondary-content hover:fill-primary-content btn gap-2 mx-2 my-2">
                                        <BsPencil />
                                        <p className='lg:flex md:flex hidden'>posts</p>
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}