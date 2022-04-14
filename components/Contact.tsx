import Link from 'next/Link'
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { contactDetails } from './data';

var email = contactDetails.email;
var github = contactDetails.github;
var linkedin = contactDetails.linkedin;
var twitter = contactDetails.twitter;
var youtube = contactDetails.youtube;
var sugarEmail = `mailto:${email}`;
var sugarGithub = `https://www.github.com/${github}`;
var sugarLinkedin = `https://www.linkedin.com/in/${linkedin}`;
var sugarTwitter = `https://www.twitter.com/${twitter}`;
var sugarYoutube = `https://www.youtube.com/${youtube}`;
var sugarEmail = `mailto:${email}`;
export default function Contact() {
    return (
        <>
            <h1
                className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400  to-blue-600 pt-5 mt-10 xl:text-3xl text-2xl font-bold"
            >
                Contact Me
            </h1>
            <h3
                className="mt-4 text-gray-300"
            >
                Reach me at <Link href={sugarEmail} ><span className='text-gray-100 font-bold link link-hover underline-offset-4 hover:underline text-bold'>{contactDetails.email}</span></Link>

            </h3>
            <div className='mt-6'>
                <Link href={sugarGithub} >
                    <a target={'_blank'} className='tooltip tooltip-bottom' data-tip="Github">
                        <button className="btn btn-circle btn-outline ml-0 m-2 ">

                            <BsGithub />
                        </button>
                    </a>
                </Link>

                <Link href={sugarLinkedin}>
                    <a target={'_blank'} className='tooltip tooltip-bottom' data-tip="Linkedin">

                        <button className="btn btn-circle btn-outline m-2">
                            <BsLinkedin />
                        </button>
                    </a>
                </Link>
                <Link href={sugarYoutube}>
                    <a target={'_blank'} className='tooltip tooltip-bottom' data-tip="YouTube">

                        <button className="btn btn-circle btn-outline m-2">
                            <BsYoutube />

                        </button>
                    </a>
                </Link>
                <Link href={sugarTwitter}>
                    <a target={'_blank'} className='tooltip tooltip-bottom' data-tip="Twitter">

                        <button className="btn btn-circle btn-outline m-2">
                            <BsTwitter />
                        </button>
                    </a>
                </Link>
            </div>

        </>
    )
}