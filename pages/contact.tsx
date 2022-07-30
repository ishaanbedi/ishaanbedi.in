
import Head from 'next/head';
import { useState } from 'react';


export default function Contact() {
    const [show, setShow] = useState(false);
    return (
        <>
            <Head>
                <title>
                    Ishaan Bedi : Contact Me
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
            </Head>
            <div className="p-6 flex flex-col items-center">
                <h1
                    className="my-8 xl:text-5xl text-4xl font-bold"
                >
                    Contact Me
                </h1>
                <form onSubmit={(e) => console.log(e)} action="https://send.pageclip.co/rzs5STGhZyDcxzJPmH9q57rZo36OIgRo/Next-Website-Form" className="pageclip-form" method="post">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="Name">Name</label>
                            <input type="text" id="Name" name="Name" className="form-input px-3 py-2 rounded-md text-primary" required />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" className="form-input px-3 py-2 rounded-md text-primary " required />
                        </div>

                        <div className="flex flex-col col-span-2">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" className="form-input px-3 py-2 rounded-md text-primary" required />
                        </div>
                        <div className="flex flex-col col-span-2">
                            <label htmlFor="subject">
                                <div className="flex align-items">
                                    Message
                                </div>
                            </label>
                            <textarea maxLength={1000} rows={4} id="subject" name="subject" className="form-input px-3 py-2 rounded-md text-primary" required />
                        </div>
                    </div>
                    <label htmlFor="my-modal">
                        <div className="flex justify-end py-4">
                            <button type="submit" className="pageclip-form__submit bg-primary text-white font-bold py-2 px-4 rounded focus:ring focus:ring-white hover:bg-info-content">
                                Submit
                            </button>
                        </div>
                    </label>
                </form>
            </div>
            <footer className="footer footer-center fixed p-4 bottom-0 text-sm inset-x-0 text-neutral-content">
                <div>
                    <p className="mt-2">
                        Built with <span className='link link-hover text-info-content'><a href='https://www.nextjs.org/'>NextJS</a></span> & <span className='link link-hover text-info-content'><a href='https://www.tailwindcss.com/'>Tailwind</a></span> <br />Shipped with <span className='link link-hover text-info-content'><a href='https://www.vercel.com/'>Vercel</a></span>.
                    </p>
                </div>
            </footer>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">Youve been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </>
    )
}


