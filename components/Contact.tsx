
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsMedium } from 'react-icons/bs';
import { contactDetails } from './data';

var email = contactDetails.email;
var github = contactDetails.github;
var linkedin = contactDetails.linkedin;
var twitter = contactDetails.twitter;
var youtube = contactDetails.youtube;
var medium = contactDetails.medium;
var sugarEmail = `mailto:${email}`;
export default function Contact() {
    return (
        <>
            <h1
                className="bg-gradient-to-r bg-clip-text  text-transparent 
                from-primary via-accent to-secondarypt-5 mt-10 xl:text-3xl text-2xl font-bold"
            >
                Contact Me
            </h1>
            <h3
                className="mt-4 text-slate-400"
            >
                Reach me at <a href={sugarEmail} ><span className='text-base-content font-bold link link-hover underline-offset-4 hover:underline text-bold'>{contactDetails.email}</span></a>
            </h3>
            <div className='mt-6'>

                <a href={`https://www.github.com/${github}`} target={'_blank'} rel="noreferrer" className='tooltip tooltip-bottom' data-tip="Github">
                    <button aria-label="github" className="btn btn-circle text-slate-400 btn-outline ml-0 m-2 ">

                        <BsGithub />
                    </button>
                </a>

                <a href={`https://www.linkedin.com/in/${linkedin}`} target={'_blank'} rel="noreferrer" className='tooltip tooltip-bottom' data-tip="Linkedin">
                    <button aria-label="linkedin" className="btn btn-circle text-slate-400 btn-outline ml-0 m-2 ">

                        <BsLinkedin />
                    </button>
                </a>


                <a href={`https://www.youtube.com/${youtube}`} target={'_blank'} rel="noreferrer" className='tooltip tooltip-bottom' data-tip="YouTube">
                    <button aria-label="youtube" className="btn btn-circle text-slate-400 btn-outline ml-0 m-2 ">

                        <BsYoutube />
                    </button>
                </a>


                <a href={`https://www.twitter.com/${twitter}`} target={'_blank'} rel="noreferrer" className='tooltip tooltip-bottom' data-tip="Twitter">
                    <button aria-label="twitter" className="btn btn-circle text-slate-400 btn-outline ml-0 m-2 ">

                        <BsTwitter />
                    </button>
                </a>
                <a href={`https://${medium}.medium.com`} target={'_blank'} rel="noreferrer" className='tooltip tooltip-bottom' data-tip="Medium">
                    <button aria-label="medium" className="btn btn-circle text-slate-400 btn-outline ml-0 m-2 ">

                        <BsMedium />
                    </button>
                </a>





            </div>

        </>
    )
}