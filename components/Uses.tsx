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
      "Next.js": <SiNextdotjs />,
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

    "deployment & backend": {
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
                  var tech: any = e[1];
                  return (
                    <a
                      key={i}
                      className=" transition  group lg:dark:hover:bg-[#E6E6E6]/10 lg:hover:bg-gray-200 text-[#171717] dark:text-[#E6E6E6] mx-1 relative flex flex-col items-center justify-center w-full h-32  rounded-sm border dark:border-zinc-800 border-zinc-400"
                    >
                      <span className=" lg:group-hover:opacity-0 lg:group-hover:absolute text-3xl ">
                        {tech}
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
