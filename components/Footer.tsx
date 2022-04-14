import Link from 'next/Link'

export default function Contact() {
    return (
        <>
            <footer className="footer footer-center p-10 bg-base-100 ">
                <div>
                    <p className="mt-2">
                        Built with <span className='link link-hover'><Link href='https://www.nextjs.org/'><a target={"_blank"} > NextJS</a></Link></span> & <span className='link link-hover'><Link href='https://www.tailwindcss.com/'><a target={"_blank"} > Tailwind</a></Link></span> by <span className='link link-hover'><Link href='https://www.ishaanbedi.in/'><a target={"_blank"} > Ishaan Bedi.</a></Link></span> <br />Hosted on <span className='link link-hover'><Link href='https://www.vercel.com/'><a target={"_blank"} >Vercel</a></Link></span>.
                        {/* Built with <span className='link link-hover'><Link href='https://www.nextjs.org/'><a target={"_blank"} > NextJS</a></Link></span> & <span className='link link-hover'><Link href='https://www.tailwindcss.com/'><a target={"_blank"} > Tailwind</a></Link></span> by <span className='link link-hover'><Link href='https://www.ishaanbedi.in/'><a target={"_blank"} > Ishaan Bedi.</a></Link></span> <br />Hosted on <span className='link link-hover'><Link href='https://www.vercel.com/'><a target={"_blank"} >Vercel</a></Link></span>  & open sourced on <span className='link link-hover'><Link href='https://www.github.com/ishaanbedi'><a target={"_blank"} > Github.</a></Link></span> */}
                    </p>
                </div>
            </footer>
        </>
    )
}