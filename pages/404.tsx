import Link from 'next/link'
import Head from 'next/head'

export default function Custom404() {
    return (
        <>
            <Head>
                <title>404 - Not Found</title>
            </Head>
            <div className='text-center pt-40  align-middle'>
                <h1 className='text-9xl font-bold'>404!</h1>
                <p className='p-4'>
                    The page you are looking for does not exist!
                    <br />
                </p>
                <Link passHref href="/">
                    <button className="btn btn-outline mt-8">Return to home</button>
                </Link>

            </div>
        </>
    );
}