import Link from "next/link"

export default function Custom404() {
    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className='text-3xl mt-24'>
                    Page under construction! Check back soon.
                </h1>
                <Link href='/' passHref>
                    <div className="btn btn-outline my-16">Home</div>
                </Link>
            </div>
        </>
    )
}