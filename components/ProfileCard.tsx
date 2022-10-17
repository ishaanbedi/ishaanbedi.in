import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const ProfileCard = (props) => {
  const helloArrays = [
    "Hello",
    "Hola",
    "Bonjour",
    "Hallo",
    "Namaste",
    "Konnichiwa",
  ];
  const [greet, setGreet] = useState(
    helloArrays[Math.floor(Math.random() * helloArrays.length)]
  );
  let myBirthday: any = new Date(2003, 2, 13);
  let age = ~~((Date.now() - myBirthday) / 31557600000);
  return (
    <div>
      <div className="mt-12 lg:grid md:grid grid-flow-col flex flex-col-reverse justify-center items-center gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <motion.h1 className="lg:text-left md:text-left text-center lg:md:text-3xl text-2xl font-black text-[#171717] dark:text-[#E6E6E6]/90">
            {greet}, I am {props.name}.
          </motion.h1>
          <p className="my-4 lg:md:mx-0 mx-2 text-lg text-[#151515] dark:text-[#E6E6E6]/70">
            I am a {age}-year-old student from Delhi, India.
            <br />
            I&apos;m a full-stack web developer and a huge fan of serverless
            technologies, and an admirer and active contributor to open-source
            projects.
            <br /> My passion and interests revolve around various aspects of
            technology, the web, & the internet and I&apos;m looking forward to
            growing in these fields by acquiring experience and learning the
            best, from the best.
            <br /> Also, I&apos;m one of the Apple&apos;s WWDC 2022 Swift Student
            Challenge Winner.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Image
            src={props.image}
            height={200}
            width={200}
            alt="Profile pic"
            className="hover:rotate-1"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileCard;
