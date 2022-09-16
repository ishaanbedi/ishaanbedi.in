import Image from "next/image";
import { motion } from "framer-motion";

const ProfileCard = (props) => {
  return (
    <div>
      <div className="mt-12 lg:grid md:grid grid-flow-col flex flex-col-reverse justify-center items-center gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10, delay: 1 }}
        >
          <motion.h1 className=" lg:text-left md:text-left text-center text-3xl font-black text-[#171717] dark:text-[#EDEDED]">
            Hello, I am {props.name}.
          </motion.h1>
          <p className="my-4 text-lg text-[#222831] dark:text-[#EDEDED]/90">
            {props.about}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
            delay: 1.2,
          }}
        >
          <Image
            src={props.image}
            height={150}
            width={150}
            alt="Profile pic"
            className="rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileCard;
