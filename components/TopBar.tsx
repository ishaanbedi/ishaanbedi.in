import Image from "next/image";
import Link from "next/link";
import { AiOutlineTwitter } from "react-icons/ai";
const TopBar = () => {
  return (
    <div className="flex items-center lg:md:justify-between justify-between">
      <Link href="/">
        <div className="flex">
          <Image
            src="/images/profile.svg"
            alt="Ishaan Bedi"
            className="rounded-full w-12 h-12"
            width={12}
            height={12}
          />
          <span className="pl-3">
            <h1 className="font-bold text-stone-100 hover:text-stone-50/90">
              Ishaan Bedi
            </h1>
            <p className="font-light text-stone-200">
              I work with web technologies
            </p>
          </span>
        </div>
      </Link>
      <div className="lg:md:block hidden">
        <Link target={"_blank"} href="https://www.twitter.com/ishnbedi">
          <button className="flex items-center justify-between bg-blue-500 hover:bg-blue-500/90 text-white px-4 py-2 rounded-sm">
            <AiOutlineTwitter className="" />
            <span className="pl-1">ishnbedi</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
