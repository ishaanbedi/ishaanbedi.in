import About from "@/components/About";
import Contact from "@/components/Contact";
import Head from "next/head";
import { getXataClient } from "@/src/xata";
import Posts from "@/components/Posts";
import GithubGraph from "@/components/GithubGraph";
import Footer from "@/components/Footer";
import { NextSeo } from "next-seo";

export default function Home({
  records,
}: {
  records: {
    title: string;
    slug: string;
    views: number;
    date: string;
  };
}) {
  return (
    <>
      <Head>
        <title>ishaanbedi</title>
        <meta name="title" content="Ishaan Bedi | Developer" />
        <meta
          name="description"
          content="Portfolio website of Ishaan Bedi, a developer from Delhi, India."
        />

        <meta property="og:title" content="Ishaan Bedi | Developer" />
        <meta property="og:site_name" content="Ishaan Bedi" />
        <meta property="og:url" content="https://www.ishaanbedi.in" />
        <meta
          property="og:description"
          content="Portfolio website of Ishaan Bedi, a developer from Delhi, India."
        />
        <meta property="og:type" content="" />
        <meta
          property="og:image"
          content="https://www.ishaanbedi.in/meta/images/index.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ishnbedi" />
        <meta name="twitter:title" content="Ishaan Bedi" />
        <meta
          name="twitter:description"
          content="Portfolio website of Ishaan Bedi, a developer from Delhi, India."
        />
        <meta
          name="twitter:image"
          content="https://www.ishaanbedi.in/meta/images/index.png"
        />
      </Head>
      <div className="flex flex-col lg:md:items-center lg:md:justify-center">
        <section className="lg:md:sm:w-1/2 py-4">
          <About />
        </section>
        <section className="lg:md:sm:w-1/2 py-4">
          <Contact />
        </section>
        <section className="lg:md:sm:w-1/2 py-4">
          <Posts records={records} />
        </section>
        <section className="lg:md:sm:w-1/2 lg:md:sm:block hidden pt-6">
          <GithubGraph />
        </section>
        <section className="lg:md:sm:w-1/2 pt-6">
          <Footer />
        </section>
      </div>
    </>
  );
}
export async function getStaticProps() {
  const xata = getXataClient();
  const records = await xata.db.Posts.select([
    "title",
    "slug",
    "date",
    "views",
  ]).getAll();
  return {
    props: {
      records,
    },
    revalidate: 10,
  };
}
