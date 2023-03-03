import SocialLink from "../components/SocialLink";
import ProfileCard from "../components/ProfileCard";
import HeadTag from "../components/HeadTag";
import Head from "next/head";
const Index = () => {
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
      <div className="min-h-screen flex flex-col items-center">
        <HeadTag />
        <main className="lg:md:sm:w-1/2 py-4">
          <ProfileCard />
          <SocialLink />
        </main>
      </div>
    </>
  );
};
export default Index;
