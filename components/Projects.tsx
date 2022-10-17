import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import Link from "next/link";
import { motion } from "framer-motion";

const Projects = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className="mt-12">
        <h2 className="text-2xl font-black text-center dark:text-[#E6E6E6] my-4">
          Featured Projects
        </h2>
        <div>
          {props.projects.map((project, index) => (
            <div
              key={index}
              className="dark:bg-[#232323]/80 hover:dark:bg-[#232323] bg-[#c8c8c8] rounded-sm shadow-sm py-6 my-1"
            >
              <h3 className="ml-3 text-xl">{project.name}</h3>
              <div className="flex flex-row space-x-3 mt-3 ml-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row dark:text-[#E6E6E6] text-[#232323] hover:underline"
                >
                  <AiFillGithub className=" text-xl" />
                </a>
                <a
                  href={project.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row dark:text-[#E6E6E6] text-[#232323] hover:underline"
                >
                  <AiOutlineLink className=" text-xl" />
                </a>
              </div>
            </div>
          ))}
          <Link href="https://www.github.com/ishaanbedi" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <p className="flex justify-center text-lg my-4 dark:text-[#E6E6E6]/50">
                Check out more on GitHub
                <BiLinkExternal className="ml-1 mt-0.5" />
              </p>
            </a>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
