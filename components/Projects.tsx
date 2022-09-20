import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";

const Projects = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className="mt-12">
        <h2 className="text-2xl font-black text-center text-[#E6E6E6]">
          Featured Projects
        </h2>
        <div className="grid lg:md:grid-cols-2 grid-cols-1 mt-4 lg:mx-0 md:mx-0 mx-2 ">
          {props.projects.map((e, i) => {
            return (
              <motion.div whileHover={{ scale: 1.01 }} key={Number(i)}>
                <article className="ease-in duration-75 p-1 shadow-sm rounded-2xl">
                  <div className="flex flex-col justify-end  dark:bg-zinc-800 bg-[#444444]/10 sm:p-8 rounded-xl hover:bg-opacity-90 py-12">
                    <div className="my-auto">
                      <h5 className="lg:text-left md:text-left text-center lg:text-xl md:text-xl text-md font-bold dark:text-[#E6E6E6]">
                        {e.name}
                      </h5>
                      <div className="flex flex-wrap items-center lg:justify-between md:justify-between justify-center ">
                        <div className="space-x-2 items-center justify-center mt-8">
                          <Link passHref href={`${e.github}`}>
                            <a
                              target={"_blank"}
                              className="inline-block p-3 border  dark:border-[#E6E6E6]/90 border-[#171717] hover:bg-[#E6E6E6]/90 hover:text-[#171717] rounded-full focus:outline-none focus:ring"
                            >
                              <AiFillGithub />
                            </a>
                          </Link>
                          <span
                            className={e.web !== null ? "visible" : "hidden"}
                          >
                            <Link passHref href={`${e.web}`}>
                              <a
                                target={"_blank"}
                                className="inline-block p-3 border  dark:border-[#E6E6E6]/90 border-[#171717] hover:bg-[#E6E6E6]/90 hover:text-[#171717] rounded-full focus:outline-none focus:ring"
                              >
                                <AiOutlineLink />
                              </a>
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
