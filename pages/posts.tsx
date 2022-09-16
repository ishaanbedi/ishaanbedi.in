import Header from "../components/Header";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";

const IndexPage = ({ posts }) => {
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
        <h1 className="lg:text-xl md:text-xl text-md text-center font-bold my-4">
          I&apos;ve written {posts.length} posts in total, revolving around
          programming, tech, and life.
        </h1>

        {posts.map((post) => (
          <div key={post.slug}>
            <Link passHref href={`/post/${post.slug}`}>
              <article className="ease-in duration-150 hover:scale-105 cursor-pointer p-1 shadow-sm rounded-2xl ">
                <div className="flex flex-col justify-end lg:h-48 md:lg:h-48 h-44 p-6 dark:bg-[#EDEDED]/10 bg-[#444444]/10 sm:p-8 rounded-xl hover:bg-opacity-90">
                  <div className="mt-16">
                    <p className="text-left lg:hidden md:hidden flex  mt-2 lg:text-sm md:text-sm text-xs text-gray-500 dark:text-gray-400">
                      {new Date().getMonth() -
                        post.frontmatter.date.slice(5, 7)}{" "}
                      months ago
                    </p>
                    <h5 className="text-left mt-2 lg:text-xl md:text-xl text-md font-bold dark:text-white">
                      {post.frontmatter.title}
                    </h5>
                    <p className="text-left lg:flex md:flex hidden  mt-2 lg:text-sm md:text-sm text-xs text-gray-500 dark:text-gray-400">
                      {post.frontmatter.metaDesc}
                    </p>

                    <div className="flex flex-wrap items-center lg:justify-between md:justify-between justify-center mt-6">
                      <ul className="flex  space-x-1">
                        {post.frontmatter.tags.map((item, id) => {
                          return (
                            <span key={id}>
                              <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 dark:bg-[#222831] bg-[#222831]/50">
                                #{item}
                              </li>
                            </span>
                          );
                        })}
                      </ul>

                      <p className="text-left lg:flex md:flex hidden  mt-2 lg:text-sm md:text-sm text-xs text-gray-500 dark:text-gray-400">
                        {new Date().getMonth() -
                          post.frontmatter.date.slice(5, 7)}{" "}
                        months ago
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

export default IndexPage;
export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${filename}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(
        (e1, e2) =>
          new Date(e2.frontmatter.date) - new Date(e1.frontmatter.date)
      ),
    },
  };
};
