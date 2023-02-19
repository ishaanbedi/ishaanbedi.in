import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <h3 className="font-semibold">
        <Link target={"_blank"} href="/">
          ishaanbedi.in
        </Link>
      </h3>
      <p className="font-light text-stone-200">
        <Link
          className="hover:text-stone-300"
          target={"_blank"}
          href="https://www.github.com/ishaanbedi/ishaanbedi.in"
        >
          Open sourced on GitHub.
        </Link>
      </p>
    </div>
  );
};

export default Footer;
