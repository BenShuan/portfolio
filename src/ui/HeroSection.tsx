"use client";
import { motion, MotionConfig, Variants } from "framer-motion";
import Header from "./Header";
import Image from "next/image";
import ProfileImage from "@/assets/Profile image.jpg"


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
      translateX: "40vw",
      opacity:0
    },
    show: {
      translateX: "0",
      opacity:1
    },
  };

  return (
    <section className=" flex flex-col h-full md:h-fit lg:flex-row p-10 pt-20 text-pretty overflow-hidden gap-5">
      <MotionConfig
        transition={{
          ease: "backOut",
          type: "spring",
          duration: 2,
        }}
      >

        <motion.div
          initial={{
            translateX: "-50vw",
            opacity:0
          }}
          animate={{
            translateX: 0,
            opacity:1
          }}
        >
          <Image
          priority
          alt="profile picture"
            src={ProfileImage}
            className="w-60 h-60 p-1 rounded-full object-cover object-right-top
        transition-all drop-shadow-2xl m-auto lg:m-0"
          />
        </motion.div>
        <motion.div
          className="flex flex-col gap-1 rounded-xl flex-1 p-3 m-3 text-black justify-evenly text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          style={{textShadow:'1px 1px 2px white, 0 0 1em white, 0 0 0.2em blue'}}
        >
          <motion.div variants={textVariants}>
            <Header>Hi, I&apos;m Ben Shuan</Header>
          </motion.div>

          <motion.p variants={textVariants} className="text-3xl font-bold ">
            An enthusiasts developer
          </motion.p>
          <motion.p
            variants={textVariants}
            className="text-2xl drop-shadow-3xl shadow-white"
          >
            I&apos;m a Junior Full-stack developer <br />
            riding the waves of both code and surf
          </motion.p>
        </motion.div>
         

      </MotionConfig>
    </section>
  );
}

export default HeroSection;
