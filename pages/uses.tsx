import Head from "next/head";
import Uses from "../components/Uses";

const Index = () => {
  return (
    <div className="min-h-screen lg:mx-80 mx-2 ">
      <Head>
        <title>Uses - Ishaan Bedi</title>
        <meta property="og:title" content="Uses - Ishaan Bedi" />
        <meta property="og:site_name" content="Ishaan Bedi" />
        <meta property="og:url" content="https://www.ishaanbedi.in/uses" />
        <meta
          property="og:description"
          content="Tools and technologies used by Ishaan on a daily basis."
        />
        <meta property="og:type" content="" />
        <meta property="og:image" content="https://og.ishaanbedi.in/api/home" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ishnbedi" />
        <meta name="twitter:title" content="Uses - Ishaan Bedi" />
        <meta name="twitter:description" content="" />
        <meta
          name="twitter:image"
          content="https://og.ishaanbedi.in/api/home"
        />
      </Head>
      <main>
        <Uses />
      </main>
    </div>
  );
};
export default Index;
