import React from "react";
import { projectScheme } from "../../lib/schems";
import Header from "../Header";
import { BsGithub, BsLink45Deg } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

const Project = ({ proj }: { proj: projectScheme }) => {
  return (
    <div className=" w-4/5 aspect-[5/6] lg:aspect-square  md:w-[40%] lg:w-1/4 relative group overflow-hidden *:rounded-lg drop-shadow-2xl ">
      <Image
        src={proj.ImageLink}
        alt={proj.Name}
        fill
        quality={30}
        sizes="30%"
        className="absolute h-full object-cover w-full  "
      />
      <div className="fixed right-2 top-2 z-10 flex gap-3 md:-translate-y-[150%] md:group-hover:-translate-y-0 transition duration-700 ">
        <Button layout="full" color="blue">
          <a href={proj.githubLink} target="_blank">
            <BsGithub className="size-6" />
          </a>
        </Button>
        <Button layout="full" color="blue">
          <a href={proj.Link} target="_blank">
            <BsLink45Deg className="size-6" />
          </a>
        </Button>
      </div>
      <Link href={`/projects/${proj.Slug}`} className="hover:underline">
        <div className="md:translate-y-full md:group-hover:-translate-y-0 bg-gradient-to-t from-black/[0.6] from-70% absolute size-full  flex flex-col justify-end p-4 gap-4 transition duration-700 ">
          <Header color="white">{proj.Name}</Header>
          <p className=" md:text-xl   ">{proj.Summary}</p>
          <div className="flex flex-wrap gap-2 ">
            {proj.Technologies.map((t) => {
              return (
                <p
                  key={t}
                  className="text-xs bg-main-blue-light text-slate-800 py-1 px-2 rounded-full "
                >
                  {t}
                </p>
              );
            })}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Project;
