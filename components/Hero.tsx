import { details } from './data';
import Image from 'next/image';
import { BsGithub, BsTwitter, BsPencilSquare, BsLinkedin } from 'react-icons/bs';
import Link from 'next/link';




export default function Hero() {
    return (
        <>
            <div className='flex flex-col items-center'>
                <div className="avatar">
                    <div className="fshadow-lg w-24 rounded-full ring ring-gray-500 hover:ring-white transition delay-150 duration-200 ease-in-out ring-offset-base-100 ring-offset-2">
                        <Image alt='Profile Image' width={100} height={100} src="/profile.jpeg" />
                    </div>
                </div>
                <h1
                    className="pt-5 xl:text-5xl text-4xl font-bold"
                >
                    Hi! I am Ishaan.
                </h1>

                <h3
                    className="text-base-content mt-4"
                >
                    Developer from New Delhi, India.
                </h3>
                <div className="links flex lg:flex-row md:flex-row flex-col mx-2 my-8  justify-center ">

                    <Link href='https://github.com/ishaanbedi' passHref>
                        <button className="justify-around fill-secondary-content hover:fill-primary-content btn gap-2 mx-2 my-2">
                            <BsGithub />
                            github
                        </button>
                    </Link>


                    <Link href='https://www.linkedin.com/in/ishaanbedi13/' passHref>

                        <button className="justify-around fill-secondary-content hover:fill-primary-content btn gap-2 mx-2 my-2">
                            <BsLinkedin />
                            linkedin
                        </button>
                    </Link>
                    <Link href='https://twitter.com/ishnbedi' passHref>
                        <button className="justify-around fill-secondary-content hover:fill-primary-content btn gap-2 mx-2 my-2">
                            <BsTwitter />
                            twitter
                        </button>

                    </Link>
                </div>
                <h2
                    className="pt-5 xl:text-3xl text-2xl font-bold"
                >
                    Recent Posts
                </h2>
            </div>
        </>
    )
}