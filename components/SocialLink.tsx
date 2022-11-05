import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
const SocialLinks = () => {
  const [socials, setSocials] = useState([]);
  const socialLinks = () => {
    fetch("/api/socials")
      .then((res) => res.json())
      .then((data) => {
        setSocials(data);
      });
  };
  useEffect(() => {
    socialLinks();
  }, []);
  return (
    <div>
      <div className=" my-4 flex flex-row space-x-4 lg:justify-start md:justify-start justify-center">
        {Object.entries(socials).map((e, i) => {
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              {e[1].link.startsWith("/") ? (
                <Link passHref href={`${e[1].link}`}>
                  <span className="flex hover:underline underline-offset-4 items-center lg:md:text-xl text-lg text-[#151515] dark:text-[#E6E6E6]/70">
                    {e[0]}
                    <FiArrowUpRight className="ml-1 lg:md:block hidden" />
                  </span>
                </Link>
              ) : (
                <Link target={"_blank"} passHref href={`${e[1].link}`}>
                  <span className="flex hover:underline underline-offset-4 items-center lg:md:text-xl text-lg text-[#151515] dark:text-[#E6E6E6]/70">
                    {e[0]}
                    <FiArrowUpRight className="ml-1 lg:md:block hidden" />
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