import Header from "../components/Header";
import Link from "next/link";
import Head from "next/head";
import supabase from "../utils/supabaseClient";
const PostsPage = ({ data }) => {
  return (
    <div className="min-h-screen lg:mx-80 mx-2 ">
      <Head>
        <title>Posts | Ishaan Bedi</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width user-scalable=no "
        />
      </Head>
      <Header />
      <main className="mb-24 mt-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-black text-center">Posts</h1>
        </div>
        <h1 className="lg:text-xl md:text-xl text-md text-center font-semibold my-4">
          I&apos;ve written {data.length} posts in total, revolving around
          programming, tech, and life.
        </h1>
        {data.map((data) => (
          <div key={data.slug}>
            <Link passHref href={`/post/${data.slug}`}>
              <article className="ease-in duration-150 hover:scale-105 cursor-pointer p-1 shadow-sm rounded-2xl ">
                <div className="flex flex-col justify-end lg:h-48 md:lg:h-48 h-44 p-6 dark:bg-zinc-800 bg-[#444444]/10 sm:p-8 rounded-xl hover:bg-opacity-90">
                  <div className="mt-16">
                    <p className="text-left lg:hidden md:hidden flex  mt-2 lg:text-sm md:text-sm text-xs text-gray-500 dark:text-gray-400">
                      {new Date().getMonth() - data.date.slice(5, 7)} months ago
                    </p>
                    <h5 className="text-left mt-2 lg:text-xl md:text-xl text-md font-bold dark:text-[#E6E6E6]">
                      {data.title}
                    </h5>
                    <p className="text-left lg:flex md:flex hidden  mt-2 lg:text-sm md:text-sm text-xs text-gray-500 dark:text-gray-400">
                      {data.metaDesc}
                    </p>

                    <div className="flex flex-wrap items-center lg:justify-between md:justify-between justify-center mt-6">
                      <ul className="flex  space-x-1">
                        {data.tags.map((item, id) => {
                          return (
                            <span key={id}>
                              <li className="inline-block rounded-full text-[#E6E6E6] text-xs font-medium px-3 py-1.5 dark:bg-[#151515] bg-[#151515]/50">
                                #{item}
                              </li>
                            </span>
                          );
                        })}
                      </ul>

                      <p className="text-left lg:flex md:flex hidden  mt-2 lg:text-sm md:text-sm text-xs text-gray-500 dark:text-gray-400">
                        {new Date().getMonth() - data.date.slice(5, 7)} months
                        ago
                        {" • "}
                        {data.views
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        {" "}Views
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
};
export default PostsPage;
export async function getStaticProps() {
  const data = await supabase
    .from("blog.ishaanbedi.in")
    .select("*")
    .order("id");
  return {
    props: {
      data: data.data.sort(
        (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
      ),
    },
    revalidate: 30,
  };
}
