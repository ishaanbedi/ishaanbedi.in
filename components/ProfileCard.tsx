import { motion } from "framer-motion";
import Link from "next/link";
const ProfileCard = () => {
  let myBirthday: any = new Date(2003, 2, 13);
  let age = ~~((Date.now() - myBirthday) / 31557600000);
  return (
    <div>
      <div className="mt-12 text-[#151515] dark:text-[#E6E6E6]/70 lg:grid md:grid grid-flow-col flex flex-col-reverse  items-center gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h1 className="lg:md:text-4xl text-2xl lg:md:mx-0 mx-2 dark:text-[#E6E6E6]">
            Hello, I&apos;m Ishaan
          </h1>
          <p className="mb-4 lg:md:mx-0 mx-2 lg:md:text-xl text-lg">
            <br /> I am a {age} year old student from Delhi, India.
            <br /> My passion and interests revolve around various aspects of
            technology, the web, & the internet and I&apos;m looking forward to
            growing in these fields by acquiring experience and learning the
            best, from the best.
            <br />
            I&apos;m a full-stack web developer and a huge fan of serverless
            technologies, and an admirer and active contributor to open-source
            projects.
            <br /> Also, I&apos;m one of the Apple&apos;s WWDC 2022 Swift
            Student Challenge Winner.
            <br /> Say Hi on Twitter:
            <Link
              href="https://twitter.com/ishnbedi"
              target={"_blank"}
              className="ml-2 hover:underline underline-offset-4"
            >
              @ishnbedi
            </Link>
            <br /> Reach me at
            <Link
              href="mailto:hi@ishaanbedi.in"
              className="ml-2 hover:underline underline-offset-4"
            >
              hi@ishaanbedi.in
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileCard;
