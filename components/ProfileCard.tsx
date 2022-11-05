import { motion } from "framer-motion";

const ProfileCard = () => {
  let myBirthday: any = new Date(2003, 2, 13);
  let age = ~~((Date.now() - myBirthday) / 31557600000);
  return (
    <div>
      <div className="mt-24 text-[#151515] dark:text-[#E6E6E6]/70 lg:grid md:grid grid-flow-col flex flex-col-reverse justify-center items-center gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h1 className="lg:md:text-6xl text-4xl lg:md:mx-0 mx-2 dark:text-[#E6E6E6]">
            Hello, I&apos;m Ishaan 👋
          </h1>
          <p className="mb-4 lg:md:mx-0 mx-2 lg:md:text-3xl text-xl">
            <br />I am a {age}-year-old student from Delhi, India.
            <br />I am a developer and a huge fan of serverless technologies,
            and an admirer and active contributor to open-source projects.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileCard;
