import { motion } from "framer-motion";
import Link from "next/link";
const ProfileCard = () => {
  return (
    <div>
      <div className="mt-12 text-[#151515] dark:text-[#E6E6E6]/70 lg:grid md:grid grid-flow-col flex flex-col-reverse  items-center gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h1 className="lg:md:text-4xl text-2xl lg:md:mx-0 mx-2 dark:text-[#E6E6E6]">
            Ishaan Bedi
          </h1>
          <p className="mb-4 lg:md:mx-0 mx-2 lg:md:text-xl text-lg">
A student with full-stack development skills, interested in technology, web and internet.<br/>Actively contributing to open-source projects and passionate about web and mobile technologies.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileCard;
