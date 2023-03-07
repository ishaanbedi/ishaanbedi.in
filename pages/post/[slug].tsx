import matter from "gray-matter";
import md from "markdown-it";
import Head from "next/head";
import supabase from "../../utils/supabaseClient";
import { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
function readingTime(content) {
  const text = content;
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
}
const BlogPage = ({ content, slug, post, blogId }) => {
  useEffect(() => {
    async function updateViews() {
      await supabase
        .from("blog.ishaanbedi.in")
        .update({ views: post.data.views + 1 })
        .match({ slug: slug });
    }
    updateViews();
  }, [post.data.views, slug]);
  return (
    <div className="min-h-screen lg:mx-80 mx-2 ">
      <Head>
        <title>{post.data.title} | Ishaan Bedi</title>
      </Head>
      <section className="mt-4">
        <Header />
      </section>
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
      </div>
      <section className="my-12">
        <Footer />
      </section>
    </div>
  );
};

export default BlogPage;
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
    const blogId = post.data.id;
    const { data: frontmatter, content } = matter(post.data.data);
    return {
      props: {
        post,
        content,
        slug,
        blogId,
      },
      revalidate: 10,
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}
