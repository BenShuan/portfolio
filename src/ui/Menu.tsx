import React from "react";
import NavItem from "./NavItem";
import { menuScheme } from "@/lib/schems";
import Image from "next/image";
import icon from "@/app/icon.png";
import Link from "next/link";

const Menu = ({ menu }: { menu: menuScheme[] }) => {
  return (
      <ul className="hidden md:flex gap-10 text-center border-2 rounded-full h-20 mx-16 my-4 px-6 overflow-hidden bg-main-brown-default/40  ">
        <Link href={"/"} className="w-1/6">
          <li className=" relative w-16 h-16 m-2 mx-auto">
            <Image
              src={icon}
              alt="Ben Shuan icon"
              width={100}
              height={100}
              priority
            ></Image>
          </li>
        </Link>
        <div className="flex-1 flex justify-end ">
          {menu
            .filter((v, i) => i !== 0)
            .map((item) => {
              return (
                <NavItem
                
                  className="w-1/4 text-slate-800"
                  key={item.link}
                  text={item.text}
                  link={item.link}
                />
              );
            })}
        </div>
      </ul>
  );
};

export default Menu;
