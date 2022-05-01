import Link from 'next/link'
import Head from 'next/head'
import { notFound } from './data';
export default function Stack() {
    return (
        <>
            <Head>
                <title>{notFound.title}</title>

            </Head>
            <div className='text-center pt-40  align-middle'>
                <h1 className='text-9xl font-bold'>{notFound.bigText}</h1>

                <p className='p-4'>
                    {notFound.subText}
                    <br />

                </p>
                <Link passHref href="/">
                    <button className="btn btn-outline mt-8">Return to home</button>


                </Link>

            </div>
        </>
    );
}
