import { GetProjects } from "@/lib/projects";
import React from "react";
import Project from "./Project";

const Projects =async () => {

  const projects = await GetProjects();


  return (
    <div className="flex flex-wrap justify-evenly items-start flex-1 gap-9 overflow-scroll py-4">
      {projects.map((proj) => {
        return <Project key={proj.Slug} proj={proj} />;
      })}
    </div>
  );
};

export default Projects;
