import SocialLink from "../components/SocialLink";
import ProfileCard from "../components/ProfileCard";
import HeadTag from "../components/HeadTag";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Index = () => {
  return (
    <>
      <Head>
        <title>Ishaan Bedi | Developer</title>
      </Head>
      <div className="min-h-screen lg:mx-80 mx-2 ">
        <HeadTag name="Ishaan Bedi" />
        <main>
          <section className="mt-4">
            <Header />
          </section>
          <section className="lg:md:sm:py-48 py-36">
            <ProfileCard />
            <SocialLink />
          </section>
          <Footer />
        </main>
      </div>
    </>
  );
};
export default Index;
