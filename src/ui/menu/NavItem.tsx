"use client"
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  link: string;
  text: string;
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

const NavItem = ({ link, text,className,children }: NavItemProps) => {

  const path = usePathname();

  return (
    <motion.li
      variants={itemVariants}
      whileHover={"hover"}
      whileTap={{scale: 0.95}}
      className= {`relative font-extrabold flex justify-center  items-center ${className}` }
    >
      
    <motion.span
    className="bg-slate-700 md:bg-slate-200 absolute w-0 h-full top-1/2 left-0 "
    variants={backgroundVaianbt}
    whileHover={"hover"}
      animate={path.startsWith(link) ?"hover":""}
    >
    </motion.span>
      <Link className="relative text-2xl " href={link}>{children}{text}</Link>
    </motion.li>
  );
};

export default NavItem;
