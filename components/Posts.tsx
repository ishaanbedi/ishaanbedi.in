import { motion } from "framer-motion";
import Link from "next/link";

const Posts = (props) => {
  return (
    <motion.div
      whileInView="visible"
      viewport={{ once: true }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="mt-12">
        <h2 className="text-2xl font-black text-center">Featured Posts</h2>
        <div className="flex flex-col space-y-4 mt-4 lg:mx-0 md:mx-0 mx-2 ">
          {props.posts.map((e, i) => {
            return (
              <motion.div whileHover={{ scale: 1.01 }} key={Number(i)}>
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Posts;
