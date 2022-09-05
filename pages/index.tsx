import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumCircle,
  AiOutlineLink,
} from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import Link from "next/link";
import Head from "next/head";
import { supabase } from "../utils/supabase";
// import Announcement from "../components/announcement";
const Index = (props) => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <>
          <button
            onClick={() => setTheme("light")}
            className="mt-2 text-[#737373] active:animate-ping transition delay-150"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            onClick={() => setTheme("dark")}
            className="mt-2 text-[#737373] active:animate-ping transition delay-150"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </button>
        </>
      );
    }
  };

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <div className=" min-h-screen ">
      {/* <span className={props.announcement.isThere ? "" : "hidden"}>
        <Announcement
          body={props.announcement.announcement}
          link={props.announcement.link}
        />
      </span> */}
      <Head>
        <title>{props.name} | Developer</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width user-scalable=no "
        />
      </Head>
      <div className=" lg:mx-80 mx-2">
        <header>
          <div className="py-4 mx-auto max-w-screen-xl">
            <div className="flex items-center justify-between lg:space-x-10">
              <div className="flex ">
                <Image src={"/logo.png"} height={50} width={50} alt="Logo" />
              </div>

              <div className="justify-end  space-x-4 sm:flex">
                {renderThemeChanger()}
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="mt-12 lg:grid md:grid md:grid-flow-col flex flex-col-reverse justify-center items-center gap-12">
            <div>
              <h1 className=" lg:text-left md:text-left text-center text-3xl font-black text-[#171717] dark:text-[#EDEDED]">
                Hello, I am {props.name}.
              </h1>
              <p className="my-4 text-lg text-[#222831] dark:text-[#EDEDED]/90">
                {props.about}
              </p>
            </div>
            <div>
              <Image
                src={props.image}
                height={150}
                width={150}
                alt="Profile pic"
                className="rounded-full"
              />
            </div>
          </div>
          <div className=" my-4 flex flex-row space-x-4 text-[#171717] dark:text-[#EDEDED]/90 lg:justify-start md:justify-start justify-center">
            <Link passHref href={`${props.github}`}>
              <a
                target={"_blank"}
                className="inline-block p-3 border  dark:border-[#EDEDED]/90 border-[#171717] hover:bg-[#EDEDED]/90 hover:text-[#171717] rounded-full focus:outline-none focus:ring"
              >
                <AiFillGithub />
              </a>
            </Link>
            <Link passHref href={`${props.twitter}`}>
              <a
                target={"_blank"}
                className="inline-block p-3 border  dark:border-[#EDEDED]/90 border-[#171717] hover:bg-[#EDEDED]/90 hover:text-[#171717] rounded-full focus:outline-none focus:ring"
              >
                <BsTwitter />
              </a>
            </Link>
            <Link passHref href={`${props.linkedin}`}>
              <a
                target={"_blank"}
                className="inline-block p-3 border  dark:border-[#EDEDED]/90 border-[#171717] hover:bg-[#EDEDED]/90 hover:text-[#171717]/90 rounded-full focus:outline-none focus:ring"
              >
                <AiFillLinkedin />
              </a>
            </Link>
            <Link passHref href={`${props.medium}`}>
              <a
                target={"_blank"}
                className="inline-block p-3 border  dark:border-[#EDEDED]/90 border-[#171717] hover:bg-[#EDEDED]/90 hover:text-[#171717]/90 rounded-full focus:outline-none focus:ring"
              >
                <AiFillMediumCircle />
              </a>
            </Link>
          </div>
          <div>
            <h3></h3>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-black text-center">
              Featured Projects
            </h2>
            <div className="flex flex-col space-y-4 mt-4 lg:mx-0 md:mx-0 mx-2 ">
              {props.projects.map((e, i) => {
                return (
                  <div key={Number(i)}>
                    <article className="hover:scale-105 ease-in duration-75 p-1 shadow-sm rounded-2xl ">
                      <div className="flex flex-col justify-end h-48 p-6 dark:bg-[#EDEDED]/10 bg-[#444444]/10 sm:p-8 rounded-xl hover:bg-opacity-90">
                        <div className="mt-16">
                          <h5 className="lg:text-left md:text-left text-center mt-2 lg:text-xl md:text-xl text-md font-bold dark:text-white">
                            {e.name}
                          </h5>
                          <div className="flex flex-wrap items-center lg:justify-between md:justify-between justify-center mt-6">
                            <div className="space-x-2 items-center justify-center">
                              <Link passHref href={`${e.github}`}>
                                <a
                                  target={"_blank"}
                                  className="inline-block p-3 border  dark:border-[#EDEDED]/90 border-[#171717] hover:bg-[#EDEDED]/90 hover:text-[#171717] rounded-full focus:outline-none focus:ring"
                                >
                                  <AiFillGithub />
                                </a>
                              </Link>
                              <span
                                className={
                                  e.web !== null ? "visible" : "hidden"
                                }
                              >
                                <Link passHref href={`${e.web}`}>
                                  <a
                                    target={"_blank"}
                                    className="inline-block p-3 border  dark:border-[#EDEDED]/90 border-[#171717] hover:bg-[#EDEDED]/90 hover:text-[#171717] rounded-full focus:outline-none focus:ring"
                                  >
                                    <AiOutlineLink />
                                  </a>
                                </Link>
                              </span>
                            </div>

                            <ul className="lg:flex md:flex hidden space-x-1">
                              {e.tech.map((tech, id) => {
                                return (
                                  <span key={id}>
                                    <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 dark:bg-[#222831] bg-[#222831]/50">
                                      #{tech}
                                    </li>
                                  </span>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-black text-center">Featured Posts</h2>
            <div className="flex flex-col space-y-4 mt-4 lg:mx-0 md:mx-0 mx-2 ">
              {props.posts.map((e, i) => {
                return (
                  <div key={Number(i)}>
                    <article className="ease-in duration-75 p-1 shadow-sm rounded-2xl ">
                      <div className="flex flex-col justify-end h-48 p-6 dark:bg-[#EDEDED]/10 bg-[#444444]/10 sm:p-8 rounded-xl hover:bg-opacity-90">
                        <div className="mt-16">
                          <h5 className="lg:text-left md:text-left text-center mt-2 lg:text-xl md:text-xl text-md font-bold dark:text-white">
                            {e.title}
                          </h5>
                          <div className="flex flex-wrap items-center lg:justify-between md:justify-between justify-center mt-6">
                            <div className="space-x-2 items-center justify-center">
                              <Link passHref href={`${e.link}`}>
                                <a
                                  target={"_blank"}
                                  className="inline-block p-3  hover:bg-[#EDEDED]/90 hover:text-[#171717] rounded-md focus:outline-none focus:ring"
                                >
                                  Read now on{" "}
                                  <span className="underline underline-offset-4">
                                    {e.platform}
                                  </span>
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
        <footer>
          <footer>
            <div className="px-4 py-8 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                <div className="flex justify-center text-gray-500 dark:text-gray-400 sm:justify-start">
                  Built with{"  "}
                  <Link passHref href="https://nextjs.org/">
                    <a
                      target={"_blank"}
                      className=" cursor-pointer mt-1 mx-1 hover:text-[#F05454] "
                    >
                      <TbBrandNextjs />
                    </a>
                  </Link>
                  and
                  <Link passHref href="https://tailwindcss.com/">
                    <a
                      target={"_blank"}
                      className=" cursor-pointer mt-1 ml-1 hover:text-[#F05454]"
                    >
                      <SiTailwindcss />
                    </a>
                  </Link>
                  , shipped with
                  <Link passHref href="https://vercel.com/">
                    <a
                      target={"_blank"}
                      className=" cursor-pointer mt-[2px] mx-1 hover:text-[#F05454]"
                    >
                      <IoLogoVercel />
                    </a>
                  </Link>
                </div>

                <p className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400 lg:text-right lg:mt-0">
                  &copy; {new Date().getFullYear()} {props.name}.
                  <br /> This is an MIT Licensed application.
                </p>
              </div>
            </div>
          </footer>
        </footer>
      </div>
    </div>
  );
};

export default Index;
export async function getServerSideProps(context) {
  const data = await supabase.from("me.ishaanbedi.in").select("*");
  var website_data = data.data[0].website_data;
  const image = await supabase.storage
    .from("profile-image")
    .getPublicUrl("profile");
  website_data["image"] = image.data.publicURL;
  return {
    props: website_data,
  };
}
