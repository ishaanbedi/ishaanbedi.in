import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const socialLinks = () => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  };
  useEffect(() => {
    socialLinks();
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className=" mt-16">
        <h2 className="text-2xl font-black text-center text-[#151515] dark:text-white my-4">
          Featured Projects
        </h2>
        <div>
          {projects.map((project, index) => (
            <div
              key={index}
              className="dark:bg-[#232323]/80 hover:dark:bg-[#232323] bg-[#c8c8c8] rounded-sm shadow-sm py-6 my-1"
            >
              <h3 className="ml-3 text-xl text-[#151515] dark:text-[#E6E6E6]/70">
                {project.name}
              </h3>
              <div className="flex flex-row space-x-3 mt-3 ml-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row  dark:text-[#E6E6E6]/70 hover:dark:text-[#E6E6E6] text-[#232323] hover:underline"
                >
                  <AiFillGithub className=" text-xl" />
                </a>
                <a
                  href={project.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row  dark:text-[#E6E6E6]/70 hover:dark:text-[#E6E6E6] text-[#232323] hover:underline"
                >
                  <AiOutlineLink className=" text-xl" />
                </a>
              </div>
            </div>
          ))}
          <Link
            target={"_blank"}
            href="https://www.github.com/ishaanbedi"
            passHref
          >
            <p className="flex justify-center text-lg my-4 dark:text-[#E6E6E6]/70 hover:dark:text-[#E6E6E6] text-[#232323] dark:text-[#E6E6E6]/70/50">
              Check out more on GitHub
              <FiArrowUpRight className="ml-1 mt-0.5" />
            </p>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
