import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useState } from "react";

const Projects = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 10, delay: 2.5 }}
    >
      <div className="mt-12">
        <h2 className="text-2xl font-black text-center">Featured Projects</h2>
        <div className="flex flex-col space-y-4 mt-4 lg:mx-0 md:mx-0 mx-2 ">
          {props.projects.map((e, i) => {
            return (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
                whileHover={{ scale: 1.01 }}
                key={Number(i)}
              >
                <article className="ease-in duration-75 p-1 shadow-sm rounded-2xl ">
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
                            className={e.web !== null ? "visible" : "hidden"}
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
