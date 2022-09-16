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
  return (
    <div>
      <div className=" my-4 flex flex-row space-x-4 text-[#171717] dark:text-[#E6E6E6]/90 lg:justify-start md:justify-start justify-center">
        {Object.entries(handles).map((e, i) => {
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.01 }}
            >
              <Link passHref href={`${e[1].link}`}>
                <a
                  target={"_blank"}
                  className="inline-block p-3 border  dark:border-[#E6E6E6]/90 border-[#171717] hover:bg-[#E6E6E6]/90 hover:text-[#171717] rounded-full focus:outline-none focus:ring"
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
