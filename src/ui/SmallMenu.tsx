"use client";
import React, { useRef, useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import MenuButton from "./MenuButton";
import NavItem from "./NavItem";
import useClickOutside from "../utils/useClickOutside";
import { menuScheme } from "../lib/schems";
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
    <div className="h-20 relative md:hidden">
      <motion.div
        className={`fixed bg-main-blue-default rounded-xl z-10 `}
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
          {menu
            .filter((v, i) => i !== 0)
            .map((item) => {
              return (
                <NavItem key={item.link} text={item.text} link={item.link} />
              );
            })}
          <Link href={"/"}>
            <li className=" relative w-12 h-12 m-auto mt-10">
              <Image
                src={icon}
                alt="Ben Shuan icon"
                width={100}
                height={100}
                priority
              ></Image>
            </li>
          </Link>
        </motion.ul>
      </motion.div>
    </div>
  );
}

export default SmallMenu;
