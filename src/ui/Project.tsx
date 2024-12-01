import React from "react";
import { projectScheme } from "../lib/schems";
import Header from "./Header";
import { BsGithub, BsGlobe, BsLink45Deg } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const Project = ({ proj }: { proj: projectScheme }) => {
  return (
    <div
      className=" w-4/5 aspect-[5/6] lg:aspect-square  md:w-[40%] lg:w-1/4 relative group overflow-hidden *:rounded-lg drop-shadow-2xl "
    >
      <Image
        src={proj.ImageLink}
        alt={proj.Name}
        fill
        sizes="50%"
        className="absolute h-full object-cover w-full  "
      />
      <div className="md:translate-y-full md:group-hover:-translate-y-0 bg-gradient-to-t from-black/[0.6] from-70% absolute size-full  flex flex-col justify-end p-4 gap-4 transition duration-700">
        <div className="fixed right-4 top-4 z-10 flex gap-3 ">
          <a
            href={proj.githubLink}
            target="_blank"
          >
            <BsGithub
              className="bg-main-green-dark hover:invert  p-1 rounded-md"
              size={"36px"}
            />
          </a>
          <a
            href={proj.githubLink}
            target="_blank"
          >
            <BsGlobe
              className="bg-main-green-dark hover:invert  p-1 rounded-md"
              size={"36px"}
            />
          </a>
        </div>
        <Link href={proj.Link} className="hover:underline">
          <Header color="white">
            {proj.Name}
            <BsLink45Deg className="inline ml-2" />
          </Header>
        </Link>
        <p className=" md:text-xl">{proj.Description}</p>
        <div className="flex flex-wrap gap-2 ">
          {proj.Technologies.map((t) => {
            return (
              <p
                key={t}
                className="text-xs bg-main-blue-light text-slate-800 py-1 px-2 rounded-full "
              >
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
