import Link from "next/link";
import Head from "next/head";
export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Not Found</title>
      </Head>
      <div className="grid place-content-center">
        <div className="text-center mt-24">
          <strong className="text-9xl font-black dark:text-gray-700">
            404
          </strong>

          <h1 className="text-lg my-4 font-bold tracking-tight text-gray-900 dark:text-[#E6E6E6] sm:text-4xl">
            That page does not exist.
          </h1>
          <div className="flex flex-col">
            <Link passHref href="/">
              <button className="mt-4 bg-gray-900 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-800 text-[#E6E6E6] dark:text-gray-200 px-4 py-2 rounded-md">
                <a>Go Home</a>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
