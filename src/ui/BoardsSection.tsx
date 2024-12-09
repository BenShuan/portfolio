import Image from "next/image";
import Link from "next/link";
import React from "react";

import Header from "./Header";
import { menu } from "../lib/DataFunctions";

import Surfboard from "@/assets/surfboard.png";
import InViewContainer from "./InViewContainer";

const BoardsSection = () => {
  return (
    <section className="h-full  bg-gradient-to-t from-50% from-main-brown-default to-transparent bg-opacity-80 p-4 flex justify-evenly flex-wrap gap-5 content-between md:content-center py-8">
      {/* <div className=" w-20 aspect-square  absolute right-4 bg-inherit -top-20 rounded-t-3xl md:hidden" >
        <MdOutlineKeyboardDoubleArrowDown className="animate-bounce text-slate-800 text-5xl text-center mt-5 w-full"/>
        </div> */}
      {menu
        .filter((l) => l.text != "Home")
        .map((item,i) => {
          return (
            <InViewContainer key={item.link}  className="min-h-56 md:w-1/4 w-3/4 md:h-3/4 h-[30%] p-4" >
              <Link
                href={item.link}
                className={
                  `flex flex-col justify-center transition-all relative 
                md:hover:scale-125 `
                  // bg-surfboard bg-center bg-contain bg-no-repeat
                }
              >
                <Image
                  src={Surfboard}
                  quality={75}
                  alt="surfboard"
                  className="absolute right-0 drop-shadow-2xl "
                />
                <Header
                  style={{
                    textShadow: "1px 1px 2px white, 0 0 1em white",
                  }}
                  className="text-center text-black text-2xl z-10 after:block  "
                >
                  {item.text}
                </Header>
              </Link>
            </InViewContainer>
          );
        })}
    </section>
  );
};

export default BoardsSection;
