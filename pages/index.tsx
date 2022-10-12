import SocialLink from "../components/SocialLink";
import ProfileCard from "../components/ProfileCard";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import HeadTag from "../components/HeadTag";
import Head from "next/head";
import { NextSeo } from "next-seo";
const Index = () => {
  let data = {
    github: "https://github.com/ishaanbedi",
    medium: "https://ishaanbedi.medium.com/",
    twitter: "https://twitter.com/ishnbedi",
    linkedin: "https://www.linkedin.com/in/ishaanbedi13/",
    projects: [
      {
        web: "https://supatype.vercel.app/",
        name: "SupaType: Unlimited Typing Tests",
        tech: ["Next.js", "TailwindCSS", "Supabase", "Web"],
        github: "https://github.com/ishaanbedi/supatype",
      },
      {
        web: "https://quizify.ishaanbedi.in/",
        name: "Quizify: Online quiz platform.",
        tech: ["Next.js", "TailwindCSS", "Axios", "Web"],
        github: "https://github.com/ishaanbedi/quizify",
      },
      {
        web: null,
        name: "👑 Chipify: Exploring M Series Chips",
        tech: ["Swift", "SwiftUI", "iOS/iPadOS/MacOS"],
        github: "https://github.com/ishaanbedi/Chipify-WWDC22",
      },
      {
        web: "https://www.ishaanbedi.in/",
        name: "ishaanbedi.in: Portfolio Website",
        tech: ["Next.js", "TailwindCSS", "Typescript", "Web"],
        github: "https://github.com/ishaanbedi/ishaanbedi.in",
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Ishaan Bedi | Developer</title>
        <meta property="og:title" content="Ishaan Bedi | Developer" />
        <meta property="og:site_name" content="Ishaan Bedi" />
        <meta property="og:url" content="https://www.ishaanbedi.in" />
        <meta
          property="og:description"
          content="Portfolio website of Ishaan Bedi, a developer from Delhi, India."
        />
        <meta property="og:type" content="" />
        <meta property="og:image" content="https://og.ishaanbedi.in/api/home" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ishnbedi" />
        <meta name="twitter:title" content="Ishaan Bedi" />
        <meta name="twitter:description" content="" />
        <meta
          name="twitter:image"
          content="https://og.ishaanbedi.in/api/home"
        />
      </Head>

      <div className="min-h-screen lg:mx-80 mx-2 ">
        <HeadTag name="Ishaan Bedi" />
        <Header />
        <main>
          <ProfileCard
            name="Ishaan Bedi"
            about={
              "Welcome to my small corner on the web. I'm a 19-year-old student from Delhi, India. I love working with technologies & frameworks to create and design applications for the web and mobile-computers. Reach me at hi@ishaanbedi.in"
            }
            image="/profile.jpeg"
          />
          <SocialLink
            github={data.github}
            linkedin={data.linkedin}
            twitter={data.twitter}
            medium={data.medium}
          />
          <Projects projects={data.projects} />
        </main>
        <Footer name="Ishaan Bedi" />
      </div>
    </>
  );
};
export default Index;
