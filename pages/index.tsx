import SocialLink from "../components/SocialLink";
import ProfileCard from "../components/ProfileCard";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import HeadTag from "../components/HeadTag";
import Head from "next/head";
import SubscribeForm from "../components/SubscribeForm";

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
        web: "https://www.wwdcscholars.com/s/ADD233CE-6526-4096-AA8F-C6A6203918CC/2022",
        name: "Chipify: Exploring M Series Chips",
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
        <main>
          <ProfileCard name="Ishaan Bedi" image="/images/profile-memoji.png" />
          <SocialLink
            github={data.github}
            linkedin={data.linkedin}
            twitter={data.twitter}
            medium={data.medium}
          />
          <Projects projects={data.projects} />
          <SubscribeForm />
        </main>
      </div>
    </>
  );
};
export default Index;
