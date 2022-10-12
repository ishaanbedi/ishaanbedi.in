import matter from "gray-matter";
import md from "markdown-it";
import Head from "next/head";
import Header from "../../components/Header";
import { BsTwitter } from "react-icons/bs";
import supabase from "../../utils/supabaseClient";
import { useEffect, useState } from "react";
const BlogPage = ({ content, slug, post }) => {
  const [ogImage, setOgImage] = useState("");
  function readingTime(content) {
    const text = content;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    return time;
  }
  useEffect(() => {
    async function updateViews() {
      const { data, error } = await supabase
        .from("blog.ishaanbedi.in")
        .update({ views: post.data.views + 1 })
        .match({ slug: slug });
    }
    updateViews();
  }, []);

  return (
    <div className="min-h-screen lg:mx-80 mx-2 ">
      <Head>
        <title>{post.data.title} | Ishaan Bedi</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width user-scalable=no "
        />
        <meta
          property="og:image"
          content={`https://og.ishaanbedi.in/api/og?title=www.ishaanbedi.in/posts`}
        />
      </Head>
      <Header />
      <div className=" mx-2">
        <h1 className="lg:text-5xl text-xl lg:my-12 md:my-8 my-6 font-black">
          {post.data.title}
        </h1>
        <p className="lg:text-xl text-sm">
          {new Date(post.data.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          {" • "} {readingTime(post.data.data)} min read.
        </p>
        <article
          className="prose lg:prose-xl dark:prose-invert mt-4"
          dangerouslySetInnerHTML={{ __html: md().render(content) }}
        ></article>
        <p className="my-12 flex space-x-3">
          <a
            href={`https://twitter.com/intent/tweet?text=Check out ${post.data.title} by @ishnbedi at &url=https://www.ishaanbedi.in/post/${post.data.slug}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 hover:text-blue-400"
          >
            <>
              <BsTwitter className="text-xl" />
            </>
            <span className="ml-2 mt-1">Share on Twitter</span>
          </a>
          <a
            href={`mailto:?subject=Check out ${post.data.title} by Ishaan Bedi&body=Here's the article: ${post.data.title}(https://www.ishaanbedi.in/post/${slug}) written by Ishaan Bedi. I thought you might like it. `}
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 dark:hover:text-yellow-400 hover:text-yellow-600"
          >
            <span className="ml-2 mt-1">Share via Email</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default BlogPage;
// static path
export async function getStaticPaths() {
  const { data, error } = await supabase.from("blog.ishaanbedi.in").select();
  const paths = data.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}
export async function getStaticProps({ params: { slug } }) {
  try {
    const post = await supabase
      .from("blog.ishaanbedi.in")
      .select("*")
      .eq("slug", slug)
      .single();
    const { data: frontmatter, content } = matter(post.data.data);

    return {
      props: {
        post,
        content,
        slug,
      },
      revalidate: 10,
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}
