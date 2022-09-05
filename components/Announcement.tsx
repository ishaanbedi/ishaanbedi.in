import Link from "next/link";
import { useState } from "react";
const Announcement = (props) => {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  return (
    <div className={showAnnouncement ? "visible" : "hidden"}>
      <div className="relative px-4 py-3 text-center text-white bg-[#F05454] pr-14">
        <p className="text-sm font-medium">
          {props.body}{" "}
          <Link href={`${props.link}`}>
            <a target={"_blank"} className="underline">
              Check it out &rarr;{" "}
            </a>
          </Link>
        </p>

        <button
          onClick={() => {
            setShowAnnouncement(false);
          }}
          aria-label="Close"
          className="absolute p-1 rounded-lg transition -translate-y-1/2 top-1/2 right-4 bg-black/10 hover:bg-black/20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Announcement;
