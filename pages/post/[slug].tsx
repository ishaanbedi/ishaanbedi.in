import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Head from "next/head";
import Header from "../../components/Header";
import { BsTwitter } from "react-icons/bs";

const BlogPage = ({ frontmatter, content, slug }) => {
  function readingTime(content) {
    const text = content;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    return time;
  }
  return (
    <div className="min-h-screen lg:mx-80 mx-2 ">
      <Head>
        <title>{frontmatter.title} | Ishaan Bedi</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width user-scalable=no "
        />
      </Head>
      <Header />
      <h1 className="lg:text-5xl text-xl lg:my-12 md:my-8 my-6 font-black">
        {frontmatter.title}
      </h1>
      <p className="lg:text-xl text-sm">
        {new Date(frontmatter.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        {" • "} {readingTime(content)} minutes read.
      </p>

      <p className="mt-8">{frontmatter.excerpt}</p>
      <article
        className="prose lg:prose-xl dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: md().render(content) }}
      ></article>
      <p className="my-12 flex space-x-3">
        <a
          href={`https://twitter.com/intent/tweet?text=Check out ${frontmatter.title} by @ishnbedi at &url=https://www.ishaanbedi.in/post/${slug}`}
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
          href={`mailto:?subject=Check out ${frontmatter.title} by Ishaan Bedi&body=Here's the article: ${frontmatter.title}(https://www.ishaanbedi.in/post/${slug}) written by Ishaan Bedi. I thought you might like it. `}
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-2 dark:hover:text-yellow-400 hover:text-yellow-600"
        >
          <span className="ml-2 mt-1">Share via Email</span>
        </a>
      </p>
    </div>
  );
};

export default BlogPage;
export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params: { slug } }) => {
  const readFile = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(readFile);
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
};
