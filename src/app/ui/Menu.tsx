"use client";
import React, { useRef, useState } from "react";
import Button from "./Button";
import { motion, Variants } from "framer-motion";
import MenuButton from "./MenuButton";
import NavItem from "./NavItem";
import {  usePathname } from "next/navigation";
import useClickOutside from "../utils/useClickOutside";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const pathName = usePathname();


  const catMenu = useRef<HTMLDivElement>(null)
  const menu = [
    { text: "Home", link: "/" },
    { text: "Projects", link: "/projects" },
    { text: "About", link: "/about" },
    { text: "Contact", link: "/contact" },
  ];

  useClickOutside(catMenu, () => {
    setIsOpen(false);
  });

  return (
    <motion.div
      className={`fixed bg-main-blue-default rounded-xl z-10`}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={catMenu}
    >
      <Button
        layout={"full"}
        color={"blue"}
        onClick={(e) => setIsOpen((prev) => !prev)}
      >
        <MenuButton isOpen={isOpen} />
      </Button>
      <motion.ul
        className=" text-center "
        variants={{
          open: {
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "2rem 0",
            height: "100dvh",
            width: "clamp(150px,25vw,500px)",
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0.3,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            width: "0",
            height: "0",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
      >
        {menu.map((item) => {
          return <NavItem key={item.link} text={item.text} link={item.link} isCurrent={item.link===pathName} />;
        })}
      </motion.ul>
    </motion.div>
  );
}

export default Menu;
