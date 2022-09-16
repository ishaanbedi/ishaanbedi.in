import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsCommand } from "react-icons/bs";

const navLinks = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Posts",
    link: "/posts",
  },
  {
    label: "Uses",
    link: "/uses",
  },
];

const Header = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setOpenNav(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);
  useEffect(() => {
    const handleCommandK = (e) => {
      if (e.key === "k" && e.metaKey) {
        setOpenNav(!openNav);
      }
    };
    window.addEventListener("keydown", handleCommandK);
    return () => window.removeEventListener("keydown", handleCommandK);
  }, [openNav]);

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <>
          <motion.button
            onClick={() => setTheme("light")}
            className=" text-[#737373]"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                className=""
              />
            </svg>
          </motion.button>
        </>
      );
    } else {
      return (
        <>
          <motion.button
            onClick={() => setTheme("dark")}
            className="text-[#737373]"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </motion.button>
        </>
      );
    }
  };

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <header
      className="overscroll-none"
      onClick={() => {
        if (openNav) {
          setOpenNav(false);
        }
      }}
    >
      <div className="py-4 mx-auto max-w-screen-xl">
        <div className="flex items-center justify-between lg:space-x-10">
          <Link href="/" passHref>
            <motion.div className="flex " whileHover={{ scale: 1.1 }}>
              <Image src={"/logo.png"} height={50} width={50} alt="Logo" />
            </motion.div>
          </Link>

          <div className="justify-end  space-x-4 sm:flex">
            {renderThemeChanger()}
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={() => {
                setOpenNav(true);
              }}
              className="text-[#737373]"
            >
              <BsCommand />
            </motion.button>
          </div>
        </div>
      </div>
      <>
        {openNav ? (
          <>
            <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className=" w-72 border-0 rounded-lg relative flex flex-col shadow-2xl bg-zinc-700 outline-none focus:outline-none">
                  <nav className="flex flex-col space-y-1">
                    {navLinks.map((link) => (
                      <Link href={link.link} key={link.label} passHref>
                        <a
                          className={
                            router.pathname.slice(1).toLowerCase() !==
                            link.label.toLowerCase()
                              ? "flex items-center px-4 py-2 text-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                              : "flex items-center px-4 py-2 rounded-lg bg-gray-100 text-gray-700"
                          }
                        >
                          <span className="ml-3 text-lg font-medium">
                            {link.label}
                          </span>
                        </a>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    </header>
  );
};

export default Header;
