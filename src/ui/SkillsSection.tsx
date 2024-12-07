
import React from "react";
import { Skill } from "./Skill";
import Header from "./Header";
import { GetMySkills } from "@/lib/DataFunctions";


export const SkillsSection =async () => {
 
  const skills = await GetMySkills()

  return (

    <section
      className={
        "w-full flex gap-4 flex-wrap justify-center bg-main-blue-light bg-opacity-50 p-4 my-4"
      }
    >
      <Header className=" w-full text-center " color="white" hasShadow={true} >
        Skills
      </Header>
      {skills.map((s) => {
        return <Skill key={s} name={s} />;
      })}
    </section>

  );
};
