import Link from "next/link";
import Head from "next/head";
import supabase from "../utils/supabaseClient";
import Header from "../components/Header";
import Footer from "../components/Footer";
const PostsPage = ({ data }) => {
  function timeSince(date) {
    const now: any = new Date();
    const timeDifference = now - date;
    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor(timeDifference / (1000 * 60));
    const seconds = Math.floor(timeDifference / 1000);
    if (years > 0) {
      if (years === 1) {
        return years + " year ago";
      }
      return years + " years ago";
    } else if (months > 0) {
      return months + " months ago";
    } else if (days > 0) {
      if (days === 1) {
        return days + " day ago";
      }
      return days + " days ago";
    } else if (hours > 0) {
      return hours + " hours ago";
    } else if (minutes > 0) {
      return minutes + " minutes ago";
    } else {
      return seconds + " seconds ago";
    }
  }
  return (
    <div className="min-h-screen lg:mx-80 mx-2 ">
      <Head>
        <title>Posts | Ishaan Bedi</title>
      </Head>
      <section className="mt-4">
        <Header />
      </section>
      <main className="mb-24 mt-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-black text-center">Posts</h1>
        </div>
        <h1 className="lg:text-xl md:text-xl text-md text-center font-semibold my-4">
          I&apos;ve written {data.length} articles in total, revolving around
          programming tutorials, tech, and life.
        </h1>
        {data.map((data) => (
          <div key={data.slug}>
            <Link passHref href={`/post/${data.slug}`}>
              <article className="ease-in duration-150 cursor-pointer p-1 shadow-sm rounded-md">
                <div className="flex flex-col justify-end p-6 dark:bg-[#232323]/80 hover:dark:bg-[#232323] bg-[#c8c8c8] sm:px-6 rounded-md hover:bg-opacity-90">
                  <p className="text-left lg:hidden md:hidden flex  mt-2 lg:text-sm md:text-sm text-xs text-gray-500 dark:text-gray-400">
                    {timeSince(new Date(data.date))}
                    {" • "}
                    {data.views
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    Views
                  </p>
                  <h5 className="text-left mt-2 lg:text-xl md:text-xl text-md font-bold dark:text-[#E6E6E6]">
                    {data.title}
                  </h5>
                  <p className="text-left lg:flex md:flex hidden  mt-2 lg:text-sm md:text-sm text-xs text-gray-500 dark:text-gray-400">
                    {data.metaDesc}
                  </p>
                  <div className="flex flex-wrap items-center lg:justify-between md:justify-between justify-center mt-6">
                    <p className="text-left lg:flex md:flex hidden  mt-2 lg:text-sm md:text-sm text-xs text-gray-500 dark:text-gray-400">
                      {timeSince(new Date(data.date))}
                      {" • "}
                      {data.views
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      Views
                    </p>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};
export default PostsPage;
export async function getStaticProps() {
  const { data } = await supabase
    .from("blog.ishaanbedi.in")
    .select("*")
    .order("id");
  return {
    props: {
      data: { data }.data.sort(
        (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
      ),
    },
    revalidate: 30,
  };
}
