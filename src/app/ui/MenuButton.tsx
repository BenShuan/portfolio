import { motion, MotionConfig } from "framer-motion";
import React from "react";

function MenuButton({ isOpen }: { isOpen: Boolean }) {
  const lineStyle = "bg-white absolute w-7 h-1 rounded-lg left-1/2 ";

  return (
    <MotionConfig 
    transition={{  duration: 0.7, bounce: 0.8 }}>
      <motion.div
        animate={isOpen ? "open" : "closed"}
        className={"relative w-8 h-8 "}
    
      >
        <motion.span
          initial={{
            top:'20%',rotate:"0deg"
          }}
          style={{ x: "-50%", y: "50%" }}
          className={lineStyle + "top-[20%] "}
          variants={{
            open: {
              top: ["15%", "35%", "35%"],
              rotate: ["0deg", "0deg", "45deg"],
            },
            closed: {
              top: ["35%", "35%", "15%"],

              rotate: ["45deg", "0deg", "0deg"],
            },
          }}
        />
        <motion.span
        initial={{scale:1}}
          style={{ x: "-50%", y: "50%" }}
          variants={{
            open: {
              scale: 0,
            },
            closed: {
              scale: 1,
            },
          }}
          className={lineStyle + "top-[40%]"}
        />
        <motion.span
        initial={{
          top:'60%',rotate:"0deg"
        }}
          style={{ x: "-50%", y: "50%" }}
          variants={{
            open: {
              top: ["60%", "35%", "35%"],
              rotate: ["0deg", "0deg", "-45deg"],
            },
            closed: {
              top: ["35%", "35%", "65%"],

              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
          className={lineStyle + " top-[75%]"}
        />
      </motion.div>
    </MotionConfig>
  );
}

export default MenuButton;
