import {
  AiFillGithub as GithubIcon,
  AiFillLinkedin as LinkedinIcon,
  AiFillMediumCircle as MediumIcon,
  AiOutlineTwitter as TwitterIcon,
} from "react-icons/ai";
import { motion } from "framer-motion";
import Link from "next/link";
const SocialLinks = (props) => {
  const handles = {
    Github: { link: props.github, icon: <GithubIcon key={1} /> },
    Linkedin: { link: props.linkedin, icon: <LinkedinIcon key={1} /> },
    Twitter: { link: props.twitter, icon: <TwitterIcon key={1} /> },
    Medium: { link: props.medium, icon: <MediumIcon key={1} /> },
  };
  console.log(Object.entries(handles));
  return (
    <div>
      <div className=" my-4 flex flex-row space-x-4 text-[#171717] dark:text-[#EDEDED]/90 lg:justify-start md:justify-start justify-center">
        {Object.entries(handles).map((e, i) => {
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.01 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
                delay: i / 10 + 1.4,
              }}
            >
              <Link passHref href={`${e[1].link}`}>
                <a
                  target={"_blank"}
                  className="inline-block p-3 border  dark:border-[#EDEDED]/90 border-[#171717] hover:bg-[#EDEDED]/90 hover:text-[#171717] rounded-full focus:outline-none focus:ring"
                >
                  {e[1].icon}
                </a>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;
