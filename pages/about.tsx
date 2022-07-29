import Image from 'next/image';
import Head from 'next/head';

export default function Hero() {
    return (
        <>
            <Head>
                <title>
                    Ishaan Bedi : About
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
            </Head>
            <div className='flex flex-col items-center mt-8 '>
                <div className="avatar">
                    <div className="fshadow-lg w-24 rounded-full ring ring-gray-500 hover:ring-white transition delay-150 duration-200 ease-in-out ring-offset-base-100 ring-offset-2">
                        <Image alt='Profile Image' width={100} height={100} src="/profile.jpeg" />
                    </div>
                </div>
                <h1
                    className="pt-5 xl:text-5xl text-4xl font-bold"
                >
                    Ishaan Bedi
                </h1>

                <h3
                    className="text-base-content my-16 lg:mx-64 md:mx-32 mx-4 line leading-relaxed"
                >
                    Hi, I am Ishaan, a 19-year-old student from New Delhi, India.<br />I develop apps for the <span className='text-info-content'>Apple Ecosystem</span> in Swift & SwiftUI.<br />Also, I like working with web-technologies and developing web applications.<br /> I am pursuing undergraduate engineering from <span className='text-info-content'>MAIT, Delhi.</span><br /> I am also the winner of <span className='text-info-content'>Apple&apos;s WWDC Swift Student Challenge 2022.</span>
                </h3>
            </div>
            <footer className="footer footer-center fixed p-4 bottom-0 text-sm inset-x-0 text-neutral-content">
                <div>
                    <p className="mt-2">
                        Built with <span className='link link-hover text-info-content'><a href='https://www.nextjs.org/'>NextJS</a></span> & <span className='link link-hover text-info-content'><a href='https://www.tailwindcss.com/'>Tailwind</a></span> <br />Shipped with <span className='link link-hover text-info-content'><a href='https://www.vercel.com/'>Vercel</a></span>.
                    </p>
                </div>
            </footer>
        </>
    )
}


