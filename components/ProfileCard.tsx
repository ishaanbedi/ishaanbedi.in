import Link from "next/link";
import { AiFillApple } from "react-icons/ai";
const ProfileCard = () => {
  return (
    <div className="mt-12 text-gray-800 dark:text-gray-400">
      <h1 className="text-2xl md:text-4xl font-bold dark:text-gray-300">
        Ishaan Bedi
      </h1>
      <p className="flex">
        Developer /<AiFillApple className="mx-0.5 mt-[0.100rem]" /> WWDC 22
        Scholar / Swift and Web
      </p>
      <ul className="list-disc list-inside my-3 text-lg">
        <li>
          Reach me:{" "}
          <Link href="mailto:hi@ishaanbedi.in" className="underline hover:text-gray-300">
            hi@ishaanbedi.in
          </Link>
        </li>
        <li>
          Say hi on Twitter:{" "}
          <Link
            href="https://twitter.com/ishnbedi"
            target="_blank"
            className="underline hover:text-gray-300"
          >
            @ishnbedi
          </Link>
        </li>
        <li>
          See my projects:{" "}
          <Link
            href="https://www.github.com/ishaanbedi"
            target="_blank"
            className="underline hover:text-gray-300"
          >
            github/ishaanbedi
          </Link>
        </li>
        <li>
          Connect with me:{" "}
          <Link
            href="https://www.linkedin.com/in/ishaanbedi13"
            target="_blank"
            className="underline hover:text-gray-300"
          >
            linkedin/ishaanbedi13
          </Link>
        </li>
        <li>
          Check out my posts:{" "}
          <Link href="/posts" className="underline hover:text-gray-300">
            /posts
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileCard;
