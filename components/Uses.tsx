import Head from "next/head";
import { FaSwift } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiSketch,
  SiVercel,
  SiSwift,
  SiSupabase,
  SiGithub,
  SiReact,
  SiGit,
  SiVisualstudio,
  SiIterm2,
  SiXcode,
  SiNotion,
} from "react-icons/si";
const Uses = () => {
  const skills = {
    languages: {
      TypeScript: <SiTypescript />,
      Swift: <SiSwift />,
    },
    "Frameworks & Libraries": {
      React: <SiReact />,
      Nextjs: <SiNextdotjs />,
      TailwindCSS: <SiTailwindcss />,
      SwiftUI: <FaSwift />,
    },
    databases: { MongoDB: <SiMongodb />, PostgreSQL: <SiPostgresql /> },
    tools: {
      Git: <SiGit />,
      GitHub: <SiGithub />,
      Postman: <SiPostman />,
      Notion: <SiNotion />,
    },
    design: {
      Sketch: <SiSketch />,
    },
    development: {
      VSCode: <SiVisualstudio />,
      Iterm2: <SiIterm2 />,
      XCode: <SiXcode />,
    },

    "deployment & hosting": {
      Vercel: <SiVercel />,
      Supabase: <SiSupabase />,
    },
  };
  return (
    <div className="flex flex-col">
      <Head>
        <title>Uses | Ishaan Bedi</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width user-scalable=no "
        />
      </Head>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center mt-10">Uses</h1>
        <p className="text-center text-gray-500 dark:text-gray-400 mt-2">
          Tools and technologies I use on a daily basis.
        </p>
      </div>
      <div className="mb-48 text-center">
        {Object.keys(skills).map((skill, i) => {
          return (
            <div key={i} className="my-4">
              <h2 className="text-2xl font-black mt-12 mb-3">
                {skill[0].toUpperCase() + skill.slice(1)}
              </h2>
              <div className="flex">
                {Object.entries(skills[skill]).map((e, i) => {
                  return (
                    <a
                      key={i}
                      className=" transition  group dark:hover:bg-[#EDEDED]/10 hover:bg-gray-200 text-[#171717] dark:text-[#EDEDED] mx-1 relative flex flex-col items-center justify-center w-full h-32  rounded-sm border dark:border-gray-200 border-gray-800"
                    >
                      <span className=" lg:group-hover:opacity-0 lg:group-hover:absolute text-3xl ">
                        {e[1]}
                      </span>
                      <div className="absolute p-8 opacity-0 lg:group-hover:relative lg:group-hover:opacity-100">
                        <p className="mt-1 text-lg">{e[0]}</p>
                      </div>
                    </a>
                  );
                })}
                <p></p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Uses;
