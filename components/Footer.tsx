import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss, SiSupabase } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";

import Link from "next/link";
import { motion } from "framer-motion";

const Footer = (props) => {
  return (
    <footer>
      <motion.div whileHover={{ scale: 1.01 }}>
        <div className="px-4 py-8 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-gray-500 dark:text-gray-400 sm:justify-start">
              Built with{"  "}
              <Link passHref href="https://nextjs.org/">
                <a
                  target={"_blank"}
                  className=" cursor-pointer mt-[2px] mx-1 hover:text-[#F05454] "
                >
                  <TbBrandNextjs />
                </a>
              </Link>
              and
              <Link passHref href="https://tailwindcss.com/">
                <a
                  target={"_blank"}
                  className=" cursor-pointer mt-[2px] ml-1 hover:text-[#F05454]"
                >
                  <SiTailwindcss />
                </a>
              </Link>
              , shipped with
              <Link passHref href="https://vercel.com/">
                <a
                  target={"_blank"}
                  className=" cursor-pointer mt-[2px] mx-1 hover:text-[#F05454]"
                >
                  <IoLogoVercel />
                </a>
              </Link>
              &amp;{" "}
              <Link passHref href="https://www.supabase.com/">
                <a
                  target={"_blank"}
                  className=" cursor-pointer mt-[2px] mx-1 hover:text-[#F05454]"
                >
                  <SiSupabase />
                </a>
              </Link>
            </div>

            <p className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400 lg:text-right lg:mt-0">
              &copy; {new Date().getFullYear()} {props.name}.
              <br /> This is an MIT Licensed application.
              <br />
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
