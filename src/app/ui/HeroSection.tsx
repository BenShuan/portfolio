"use client";
import { motion, MotionConfig, Variants } from "framer-motion";
import Header from "./Header";
import Image from "next/image";

function HeroSection() {

  const containerVariants: Variants = {
    hidden: {
      translateX: "100vw",
    },
    show: {
      translateX: "0",
      transition: {
        delayChildren: 1,
        staggerChildren: 0.5,
      },
    },
  };
  const textVariants: Variants = {
    hidden: {
      translateX: "100vw",
    },
    show: {
      translateX: "0",
    },
  };

  return (
    <div className="min-h-fit h-3/4 flex flex-col md:flex-row p-10 pt-20 text-pretty overflow-hidden gap-5">
      <MotionConfig
        transition={{
          ease: "backOut",
          type: "spring",
          duration: 3,
        }}
      >

        <motion.div
          initial={{
            translateX: "-100vw",
          }}
          animate={{
            translateX: 0,
          }}
        >
          <Image
          width={10000}
          height={10000}
          alt="profile picture"
            src="/images/Profile image.jpg"
            className="w-60 h-60 p-1 rounded-full ring-2 ring-gray-300 object-cover object-top dark:ring-gray-500 
        transition-all drop-shadow-2xl "
          ></Image>
        </motion.div>
        <motion.div
          className="flex flex-col gap-1 rounded-xl p-3 m-3 text-black "
          variants={containerVariants}
          initial="hidden"
          animate="show"
          style={{textShadow:'1px 1px 2px white, 0 0 1em white, 0 0 0.2em blue'}}
        >
          <motion.div variants={textVariants}>
            <Header>Hi, I`&apos;`m Ben Shuan</Header>
          </motion.div>

          <motion.p variants={textVariants} className="text-3xl font-bold ">
            An enthusiasts developer
          </motion.p>
          <motion.p
            variants={textVariants}
            className="text-2xl drop-shadow-3xl shadow-white"
          >
            I`&apos;`m a Junior Full-stack developer <br />
            riding the waves of both code and surf
          </motion.p>
        </motion.div>

      </MotionConfig>
    </div>
  );
}

export default HeroSection;
