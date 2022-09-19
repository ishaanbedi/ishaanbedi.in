import SocialLink from "../components/SocialLink";
import ProfileCard from "../components/ProfileCard";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import HeadTag from "../components/HeadTag";
import Head from "next/head";
const metaDetails = {
  title: "Ishaan Bedi",
  description:
    "Portfolio website of Ishaan Bedi, a developer from New Delhi, India.",
};
const Index = () => {
  let data = {
    github: "https://github.com/ishaanbedi",
    medium: "https://ishaanbedi.medium.com/",
    twitter: "https://twitter.com/ishnbedi",
    linkedin: "https://www.linkedin.com/in/ishaanbedi13/",
    projects: [
      {
        web: "https://supatype.vercel.app/",
        name: "SupaType: Unlimited Online Typing Tests",
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

    image:
      "https://kcldtzblfykiwwltfouv.supabase.co/storage/v1/object/public/profile-image/profile",
  };

  return (
    <div className="min-h-screen lg:mx-80 mx-2 ">
      <Head>
        <meta name="title" content={metaDetails.title} />
        <meta name="description" content={metaDetails.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ishaanbedi.in/" />
        <meta property="og:title" content="Ishaan Bedi" />

        <meta
          property="og:description"
          content="Portfolio website of Ishaan Bedi, a developer from New Delhi, India."
        />
        <meta
          name="google-site-verification"
          content="yEAyX24NQpFNFN9tBd3Isct51jdK8humRcf_OhTCVlg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ishaanbedi.in/" />
        <meta property="twitter:title" content="Ishaan Bedi" />
        <meta
          property="twitter:description"
          content="Portfolio website of Ishaan Bedi, a developer from New Delhi, India."
        />
        <meta
          property="twitter:image"
          content="https://pbs.twimg.com/profile_banners/1048137349811593217/1649585518/1500x500"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan&display=swap"
          rel="stylesheet"
        />
        <script
          async
          defer
          src="https://scripts.simpleanalyticscdn.com/latest.js"
        ></script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://queue.simpleanalyticscdn.com/noscript.gif"
            alt=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </noscript>
      </Head>
      <HeadTag name="Ishaan Bedi" />
      <Header />
      <main>
        <ProfileCard
          name="Ishaan Bedi"
          about={
            "Welcome to my small corner on the web. I'm a 19-year-old student from Delhi, India. I love working with technologies & frameworks to create and design applications for the web and mobile-computers. Reach me at hi@ishaanbedi.in"
          }
          image={data.image}
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
  );
};
export default Index;
