import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";
const SocialLinks = () => {
  const socialLinks = {
    GitHub: { link: "https://www.github.com/ishaanbedi" },
    LinkedIn: { link: "https://www.linkedin.com/in/ishaanbedi13" },
    Twitter: { link: "https://www.twitter.com/ishnbedi" },
    CodePen: { link: "https://www.codepen.io/ishaanbedi" },
    Posts: { link: "/posts" },
  };
  return (
    <div>
      <div className=" my-4 flex flex-row space-x-4 lg:justify-start md:justify-start justify-center">
        {Object.entries(socialLinks).map((e, i) => {
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              {e[1].link.startsWith("/") ? (
                <Link passHref href={`${e[1].link}`}>
                  <span className="flex hover:underline underline-offset-4 items-center lg:md:sm:text-xl text-lg text-[#151515] dark:text-[#E6E6E6]/70">
                    {e[0]}
                    <FiArrowUpRight className="ml-1 lg:md:sm:block hidden" />
                  </span>
                </Link>
              ) : (
                <Link target={"_blank"} passHref href={`${e[1].link}`}>
                  <span className="flex hover:underline underline-offset-4 items-center lg:md:sm:text-xl text-lg text-[#151515] dark:text-[#E6E6E6]/70">
                    {e[0]}
                    <FiArrowUpRight className="ml-1 lg:md:sm:block hidden" />
                  </span>
                </Link>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
export default SocialLinks;
