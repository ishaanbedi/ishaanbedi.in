import { getXataClient } from "@/src/xata";
import matter from "gray-matter";
import md from "markdown-it";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
const Post = ({
  post,
  views,
  id,
}: {
  post: string;
  views: number;
  id: string;
}) => {
  const title = matter(post).data.title;
  const date = matter(post).data.date;
  const metaDesc = matter(post).data.metaDesc;
  const metaTitle = matter(post).data.metaTitle;
  const tags = matter(post).data.tags;
  const content = matter(post).content;
  function readingTime(content: string) {
    const text = content;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    return time;
  }
  function formatDate(date: String) {
    if (date.includes("-")) {
      const day = date.substr(8, 2);
      const month = date.substr(5, 2);
      const year = date.substr(0, 4);
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return `${months[parseInt(month) - 1]} ${day}, ${year}`;
    }
  }
  useEffect(() => {
    fetch(`/api/updateViews?id=${id}&views=${views}`);
  }, []);
  return (
    <section className="bg-stone-900 text-stone-50 pb-12">
      <Head>
        <title>{metaTitle}</title>
      </Head>
      <div className="min-h-screen lg:mx-80 mx-2">
        <div className="mx-2">
          <div className="">
            <h1 className="lg:text-4xl text-xl pt-12 pb-4 font-bold">
              {title}
            </h1>
          </div>
          <p className="pb-4">
            {formatDate(date)}
            {" • "} {readingTime(md().render(content))} min read
          </p>
          <article
            className="prose dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: md().render(content) }}
          ></article>
          <hr className="border-stone-200 my-8" />
          <div className="py-4 text-center">
            <Link className="text-stone-50 hover:text-stone-50/80" href="/">
              See other posts <AiOutlineArrowRight className="inline" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Post;
export async function getStaticPaths() {
  const xata = getXataClient();
  const data = await xata.db.Posts.select(["slug"]).getAll();
  const paths = data.map((post) => ({
    params: { id: post.slug },
  }));
  return { paths, fallback: false };
}
export async function getStaticProps(context: { params: { id: string } }) {
  try {
    const xata = getXataClient();
    const post = await xata.db.Posts.filter("slug", context.params.id)
      .select(["data", "views", "id"])
      .getAll();
    return {
      props: {
        post: post[0].data,
        views: post[0].views,
        id: post[0].id,
      },
      revalidate: 10,
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}
