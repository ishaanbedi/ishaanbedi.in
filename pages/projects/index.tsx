import Head from "next/head";
import {
  AiFillGithub,
  AiOutlineLink,
} from "react-icons/ai";
import { ImKeyboard } from "react-icons/im";
import { BsPatchQuestion } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { BiChip, BiMoney } from "react-icons/bi";
import { SiConvertio } from "react-icons/si";
import {BsKey} from "react-icons/bs";
import Link from "next/link";

const Projects = () => {
  const projects = {
    web: [
      {
        title: "SupaType",
        description:
          "Typing test application built with Supabase, Next.js and Tailwind CSS.",
        icons: <ImKeyboard />,
        githubLink: "https://github.com/ishaanbedi/supatype",
        webLink: "https://supatype.vercel.app/",
      },
      {
        title: "Quizify",
        description: "Online quiz platform.",
        icons: <BsPatchQuestion />,
        githubLink: "https://github.com/ishaanbedi/quizify",
        webLink: "https://www.quizify.ishaanbedi.in/",
      },
      {
        title: "ishaanbedi.in",
        description: "My Portfolio website built with Next.js.",
        icons: <CgWebsite />,
        githubLink: "https://github.com/ishaanbedi/ishaanbedi.in",
        webLink: "https://www.ishaanbedi.in/",
      },
    ],
    "Swift & SwiftUI": [
      {
        title: "Swiflicense",
        description: "Command line tool for generating a license for a software from CLI, built using Swift & SPM.",
        icons: <BsKey />,
        githubLink: "https://github.com/ishaanbedi/swiflicense",
        webLink: "https://ishaanbedi.github.io/swiflicense/",
      },
      {
        title: "Chipify",
        description: "Walkthrough of the powerful M Series Chips by Apple. A winning submission for WWDC'22 Swift Student Challenge",
        icons: <BiChip />,
        githubLink: "https://github.com/ishaanbedi/Chipify-WWDC22",
        webLink:
          "https://www.wwdcscholars.com/s/ADD233CE-6526-4096-AA8F-C6A6203918CC/2022",
      },
      {
        title: "WeSplit",
        description:
          "A basic app that helps to split-tip among people and shows the amount per person.",
        icons: <BiMoney />,
        githubLink: "https://github.com/ishaanbedi/WeSplit-SwiftUI",
        webLink: null,
      },
      {
        title: "Unit Converter",
        description:
          "A simple Unit Converter iOS app built in the process of learning SwiftUI.",
        icons: <SiConvertio />,
        githubLink: "https://github.com/ishaanbedi/Unit-Converter-SwiftUI",
        webLink: null,
      },
    ],
  };
  return (
    <>
      <Head>
        <title>Projects | Ishaan Bedi</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width user-scalable=no "
        />
        <title>Projects - Ishaan Bedi</title>
        <meta property="og:title" content="Projects - Ishaan Bedi" />
        <meta property="og:site_name" content="Ishaan Bedi" />
        <meta property="og:url" content="https://www.ishaanbedi.in/Projects" />
        <meta property="og:description" content="Projects by Ishaan Bedi." />
        <meta property="og:type" content="" />
        <meta property="og:image" content="https://og.ishaanbedi.in/api/home" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ishnbedi" />
        <meta name="twitter:title" content="Projects - Ishaan Bedi" />
        <meta name="twitter:description" content="" />
        <meta
          name="twitter:image"
          content="https://og.ishaanbedi.in/api/home"
        />
      </Head>
      <div className="min-h-screen lg:mx-80 mx-2 ">
        <div>
          <h1 className="text-4xl font-black text-center">Projects</h1>
        </div>
        <div className="py-3 px-4">
          {Object.entries(projects).map((project, index) => {
            const subDetails: any = project[1];
            return (
              <div key={index} className="my-12">
                <div>
                  <h1 className="text-lg font-light py-2">
                    {project[0].toUpperCase()}
                  </h1>
                  <div className="grid lg:grid-cols-2 md:sm:grid-cols-2 gap-4 space-y-3 items-center">
                    {subDetails.map((project, index) => {
                      return (
                        <div key={index}>
                          <div className="flex items-center space-x-4 text-stone-600 dark:text-stone-300">
                            <span className="text-3xl">{project.icons}</span>
                            <span>
                              <h2 className="text-xl">{project.title}</h2>
                              <h4 className="text-sm">{project.description}</h4>
                              <span className="flex space-x-3">
                                <Link
                                  target={"_blank"}
                                  href={project.githubLink}
                                >
                                  <h4 className="text-lg dark:hover:text-stone-100 hover:text-stone-700 py-2 cursor-pointer">
                                    <AiFillGithub />
                                  </h4>
                                </Link>

                                {project.webLink && (
                                  <Link
                                    target={"_blank"}
                                    href={project.webLink}
                                  >
                                    <h4 className="text-lg dark:hover:text-stone-100 hover:text-stone-700 py-2 cursor-pointer">
                                      <AiOutlineLink />
                                    </h4>
                                  </Link>
                                )}
                              </span>
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
