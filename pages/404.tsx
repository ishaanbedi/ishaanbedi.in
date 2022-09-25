import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Not Found</title>
      </Head>

      <div className="flex flex-col items-center justify-center text-center min-h-screen py-2">
        <Image
          src="/404.gif"
          alt="404 - Page Not Found"
          width={598}
          height={416}
          className="rounded-lg shadow-2xl mx-2"
        />

        <h1 className="lg:md:text-6xl text-3xl font-bold py-3">
          404! Not found.
        </h1>
        <p className="lg:md:text-2xl text-lg font-medium pb-4">
          The page you are looking for does not exist.
        </p>

        <Link href="/">
          <a className="relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-stone-600 rounded group active:bg-stone-500 focus:outline-none focus:ring">
            <span className="absolute right-0 transition-transform translate-x-full group-hover:-translate-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </span>

            <span className="text-sm font-medium transition-all group-hover:mr-4">
              Back to home
            </span>
          </a>
        </Link>
      </div>
    </>
  );
}
