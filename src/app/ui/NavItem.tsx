import { motion, Variants } from "framer-motion";
import Link from "next/link";
import React from "react";

interface NavItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  link: string;
  text: string;
  isCurrent:boolean
}

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    height: "2rem",
    transition: { type: "spring", stiffness: 500, damping: 24 },
  },
  closed: { height: '0rem', opacity: 0, y: 20, transition: { duration: 0.2 } },
  hover:{
    scale: 1.1
  }
};

const backgroundVaianbt : Variants={
  hover:{
    clipPath:'circle(120% at 0% 10%)',
    width:'100%',
    translateY:"-50%",
    scale:1.1
  }
}

const NavItem = ({ link, text,isCurrent, ...rest }: NavItemProps) => {
  return (
    <motion.li
      variants={itemVariants}
      whileHover={"hover"}
      whileTap={{scale: 0.95}}
      className="relative font-extrabold" 
    >
      
    <motion.span
    className="bg-slate-700 absolute w-0 h-full top-1/2 left-0 "
    variants={backgroundVaianbt}
      animate={isCurrent?"hover":""}
    >
    </motion.span>
      <Link className="relative text-2xl" href={link}>{text}</Link>
    </motion.li>
  );
};

export default NavItem;
