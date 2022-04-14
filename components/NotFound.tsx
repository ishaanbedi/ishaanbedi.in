import Link from 'next/link'
import Head from 'next/head'

export default function Stack() {
    return (
        <>
            <Head>
                <title>404 | Not Found</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
            </Head>
            <div className='text-center pt-40  align-middle'>
                    <h1 className='text-9xl font-bold'>404!</h1>

                <p className='p-4'>
                    The page you are looking for does not exist!
                    <br />

                </p>
                <Link href="/">
                    <button className="btn btn-outline">Return to home</button>


                </Link>

            </div>
        </>
    );
}
