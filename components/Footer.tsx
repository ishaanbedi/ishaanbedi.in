import Link from "next/link";
import Clock from "react-live-clock";
import { FiArrowUpRight } from "react-icons/fi";
import { useEffect, useState } from "react";

const Footer = () => {
  const socialLinks = {
    GitHub: { link: "https://www.github.com/ishaanbedi" },
    LinkedIn: { link: "https://www.linkedin.com/in/ishaanbedi13" },
    Twitter: { link: "https://www.twitter.com/ishnbedi" },
    CodePen: { link: "https://www.codepen.io/ishaanbedi" },
  };
  return (
    <footer>
      <div>
        <div className="px-4 py-8 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center space-x-4 sm:justify-start">
              {Object.entries(socialLinks).map((e, i) => {
                return (
                  <div key={i}>
                    <Link target={"_blank"} passHref href={`${e[1].link}`}>
                      <span className="flex hover:underline underline-offset-4 items-center lg:md:text-lg text-md text-[#151515] dark:text-[#E6E6E6]/70">
                        {e[0]}
                        <FiArrowUpRight className="ml-1 lg:md:block hidden" />
                      </span>
                    </Link>
                  </div>
                );
              })}
            </div>
            <p className="mt-4 text-sm text-center text-[#151515] dark:text-[#E6E6E6]/70 lg:text-right lg:md:text-md lg:mt-0">
              Ishaan Bedi | {new Date().getFullYear()}
              <br />
              New Delhi {" • "}
              <Clock
                format={"hh:mm A"}
                ticking={true}
                timezone={"Asia/Kolkata"}
              />
              <br />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
