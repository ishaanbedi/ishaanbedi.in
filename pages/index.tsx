import Head from "next/head";
import Image from "next/image";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import Announcement from "../components/Announcement";
import axios from "axios";
export const getStaticProps = async () => {
  var data;
  await axios
    .get("https://63048372761a3bce77e93ebf.mockapi.io/ishaanbedi")
    .then((e) => {
      data = e.data[0];
    });
  return {
    props: { userData: data },
  };
};
function Home({ userData }) {
  return (
    <>
      <Head>
        <title>{userData.name} | Portfolio</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <Announcement />
      <section className="flex min-h-screen  items-center">
        <div className="m-auto">
          <div className="flex flex-col mx-2">
            <div className="avatar md:my-auto">
              <div className="fshadow-lg w-24 rounded-full ring ring-gray-500 hover:ring-info-content transition delay-150 duration-200 ease-in-out ring-offset-base-100 ring-offset-2">
                <Image
                  alt="Profile Image"
                  width={100}
                  height={100}
                  src={userData.avatarURL}
                />
              </div>
            </div>
            <h1 className="mt-8 xl:text-4xl md:text-4xl text-3xl font-bold text-white hover:text-info-content">
              {userData.name}
            </h1>
            <Link
              href={`https://www.github.com/${userData.githubUsername}`}
              passHref
            >
              <h2 className="mt-1">
                <a target={"_blank"}>
                  <span className="cursor-pointer text-primary-content hover:text-primary-content/90">
                    @{userData.githubUsername}
                  </span>
                </a>
              </h2>
            </Link>
            <h3 className="text-base-content my-6 lg:text-lg line leading-relaxed">
              Hi, I am{" "}
              {userData.name.substring(0, userData.name.indexOf(" ")) ||
                userData.name}
              , a 19-year-old student from {userData.userLocation}.
              <br />I develop apps for the{" "}
              <span className="text-info-content hover:underline underline-offset-4">
                Apple Ecosystem
              </span>{" "}
              in Swift & SwiftUI.
              <br />
              Also, I like working with web-technologies and developing web
              applications.
              <br /> I am pursuing undergraduate engineering from{" "}
              <span className="text-info-content hover:underline underline-offset-4">
                MAIT, Delhi.
              </span>
              <br /> I am the winner of{" "}
              <Link
                passHref
                href="https://twitter.com/ishnbedi/status/1529122492475838464"
              >
                <a target={"_blank"}>
                  <span className="text-info-content hover:underline underline-offset-4 cursor-ne-resize">
                    Apple&apos;s WWDC Swift Student Challenge 2022.
                  </span>
                </a>
              </Link>
              <br /> Reach me at{" "}
              <Link passHref href={`mailto:${userData.email}`}>
                <span className="text-info-content hover:underline underline-offset-4 cursor-ne-resize">
                  {userData.email}
                </span>
              </Link>
            </h3>
            <div className="links flex flex-row  lg:my-12 md:my-8 my-4  justify-center ">
              <Link
                href={`https://www.github.com/${userData.githubUsername}`}
                passHref
              >
                <a
                  target={"_blank"}
                  className="lg:rounded-md rounded-full cursor-ne-resize	 justify-around fill-secondary-content hover:fill-primary-content btn mx-2 gap-2 my-2"
                >
                  <BsGithub />
                  <p className="lg:flex md:flex hidden">github</p>
                </a>
              </Link>
              <Link
                href={`https://www.linkedin.com/in/${userData.linkedinUsername}/`}
                passHref
              >
                <a
                  target={"_blank"}
                  className="lg:rounded-md rounded-full cursor-ne-resize	 justify-around fill-secondary-content hover:fill-primary-content btn mx-2 gap-2 my-2"
                >
                  <BsLinkedin />
                  <p className="lg:flex md:flex hidden">linkedin</p>
                </a>
              </Link>
              <Link
                href={`https://www.twitter.com/${userData.twitterUsername}/`}
                passHref
              >
                <a
                  target={"_blank"}
                  className="lg:rounded-md rounded-full cursor-ne-resize	 justify-around fill-secondary-content hover:fill-primary-content btn mx-2 gap-2 my-2"
                >
                  <BsTwitter />
                  <p className="lg:flex md:flex hidden">twitter</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
