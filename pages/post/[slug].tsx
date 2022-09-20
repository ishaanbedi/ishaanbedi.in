import matter from "gray-matter";
import md from "markdown-it";
import Head from "next/head";
import Header from "../../components/Header";
import { BsTwitter } from "react-icons/bs";
import supabase from "../../utils/supabaseClient";
import { useEffect } from "react";

const BlogPage = ({ content, slug, post }) => {
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
  var ogImage = `https://og-image.vercel.app/**_${
    post.data.title
  }_** <br/> ${new Date(post.data.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })} | ${post.data.views
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Views | ${readingTime(
    post.data.data
  )} min read..png?theme=dark&md=1&fontSize=50px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg&widths=0&heights=0`;
  return (
    <div className="min-h-screen lg:mx-80 mx-2 ">
      <Head>
        <title>{post.data.title} | Ishaan Bedi</title>
        <meta name="title" content={post.data.title} />
        <meta name="description" content={post.data.metaDesc} />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https:/www.ishaanbedi.in/post/${slug}`}
        />
        <meta
          property="og:title"
          content={post.data.title + " | Ishaan Bedi"}
        />
        <meta property="og:description" content={post.data.metaDesc} />
        <meta property="og:image" content={ogImage} />

        <meta property="twitter:card" content={post.data.metaDesc} />
        <meta
          property="twitter:url"
          content={`https:/www.ishaanbedi.in/post/${slug}`}
        />
        <meta
          property="twitter:title"
          content={post.data.title + " | Ishaan Bedi"}
        />
        <meta property="twitter:description" content={post.data.metaDesc} />
        <meta property="twitter:image" content={ogImage} />

        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width user-scalable=no "
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

export const getServerSideProps = async ({ params: { slug } }) => {
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
  };
};
