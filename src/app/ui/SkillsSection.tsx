"use client";

import React from "react";
import { Skill } from "./Skill";
import Header from "./Header";
import InViewContainer from "./InViewContainer";

const skills = ["HTML", "CSS", "JS", "C#", ".NET CORE"];

export const SkillsSection = () => {
 

  return (
    <InViewContainer>

    <div
      className={
        "w-full flex gap-4 flex-wrap justify-center bg-main-blue-light bg-opacity-50 p-4 my-4"
      }
    >
      <Header className=" w-full text-center " style={{textShadow:'1px 1px 2px black, 0 0 1em black, 0 0 0.2em blue'}}>
        Skills
      </Header>
      {skills.map((s) => {
        return <Skill key={s} name={s} />;
      })}
    </div>
    </InViewContainer>

  );
};
