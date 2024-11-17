import React from "react";
import { projectScheme } from "../Data/schems";
import Header from "./Header";
import { BsGithub, BsLink45Deg } from "react-icons/bs";

const Project = ({ proj }: { proj: projectScheme }) => {
  return (
    <div
      key={proj.Id}
      className=" w-4/5 aspect-[3/4] md:aspect-square  md:w-1/3 relative group overflow-hidden *:rounded-lg drop-shadow-2xl "
    >
      
      <img
        src={proj.ImageLink}
        alt={proj.Name}
        className="absolute h-full object-cover w-full  "
      />
      <div className="md:translate-y-full md:group-hover:-translate-y-0 bg-gradient-to-t from-black/[0.6] from-50% absolute size-full  flex flex-col justify-end p-4 gap-4 transition duration-700">
      <a href={proj.githubLink} target="_blank" className="fixed right-4 top-4 w-8 z-10">
            <BsGithub
              className="bg-black hover:invert  p-1 rounded-md"
              size={"36px"}
            />
          </a>
         <a href={proj.Link} className="hover:underline">
        <Header>
          {proj.Name}
          <BsLink45Deg className="inline ml-2" />
        </Header>
          </a> 
        <p className=" md:text-xl">{proj.Description}</p>
        <div className="flex flex-wrap gap-2 ">
          {proj.Technologies.map((t) => {
            return (
              <p key={t} className="text-xs bg-main-blue-light text-slate-800 py-1 px-2 rounded-full ">
                {t}{" "}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
