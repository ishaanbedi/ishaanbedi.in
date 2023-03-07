import { motion } from "framer-motion";
import Link from "next/link";

const ProfileCard = () => {
  return (
    <div className="text-[#151515] dark:text-[#E6E6E6]/70 lg:grid md:grid grid-flow-col flex flex-col-reverse  items-center gap-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <h1 className="lg:md:text-4xl text-2xl lg:md:mx-0 mx-2 dark:text-[#E6E6E6]">
          Ishaan Bedi
        </h1>
        <p className="mb-4 lg:md:mx-0 mx-2 lg:md:text-xl text-lg">
          I&apos;m a student from Delhi, India.
          <br /> I work with technologies revolving around Web & iOS
          development.
          <br />I am a WWDC 2022 Scholar.
          <br />
          I&apos;m open to opportunities, mainly in the field of iOS and Web
          Development.
          <br />
          Reach me at:{" "}
          <Link
            className="text-[#151515] dark:text-[#E6E6E6] hover:underline underline-offset-4"
            href="mailto:hi@ishaanbedi.in"
          >
            hi@ishaanbedi.in
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default ProfileCard;
