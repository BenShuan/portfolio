"use client";
import React, { useRef, useState } from "react";
import Button from "../Button";
import { motion } from "framer-motion";
import MenuButton from "./MenuButton";
import NavItem from "./NavItem";
import useClickOutside from "../../utils/useClickOutside";
import { menuScheme } from "../../lib/schems";
import Link from "next/link";
import Image from "next/image";
import icon from "@/app/icon.png";

function SmallMenu({ menu }: { menu: menuScheme[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const catMenu = useRef<HTMLDivElement>(null);

  useClickOutside(catMenu, () => {
    setIsOpen(false);
  });

  return (
    <div className="h-20 relative md:hidden ">
      <Link href={"/"} className="absolute right-2 top-2 h-16 w-16  ">
        <Image src={icon} alt="Ben Shuan icon" priority fill></Image>
      </Link>
      <motion.div
        className={`fixed bg-main-blue-default rounded-xl z-10   `}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={catMenu}
      >
        <Button
          layout={"full"}
          color={"blue"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <MenuButton isOpen={isOpen} />
        </Button>
        <motion.ul
          className=" text-center  "
          variants={{
            open: {
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              padding: "1rem 0",
              height: "calc( 100lvh - 4rem)",
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
              padding: "0",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
        >
          {menu
            .filter((v, i) => i !== 0)
            .map((item) => {
              return (
                <NavItem key={item.link} text={item.text} link={item.link} onClick={()=>setIsOpen(false)} />
              );
            })}
        </motion.ul>
      </motion.div>
    </div>
  );
}

export default SmallMenu;
