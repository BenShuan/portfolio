"use client";
import React from "react";
import InViewContainer from "./InViewContainer";
import Header from "./Header";
import { menu } from "../(HomePage)/layout";
import Link from "next/link";

const BoardsSection = () => {
  return (
    <InViewContainer>
      <div className="h-full bg-main-brown-default bg-opacity-80 p-4 flex justify-center flex-wrap gap-5 content-between md:content-center py-4">
        {menu.filter(l=>l.text!="Home").map((item) => {
          return (
            <div key={item.link} className="hover:scale-125 md:w-1/5 w-3/4 md:h-3/4 h-[30%] min-h-56 p-4 bg-surfboard bg-center bg-contain bg-no-repeat flex flex-col justify-center  transition-all  ">
              <Link href={item.link}>
                <Header
                  style={{
                    textShadow:
                      "1px 1px 2px white, 0 0 1em white",
                  }}
                  className="text-center text-black md:text-3xl text-lg  "
                >
                  {item.text}
                </Header>
              </Link>
            </div>
          );
        })}
      </div>
    </InViewContainer>
  );
};

export default BoardsSection;
