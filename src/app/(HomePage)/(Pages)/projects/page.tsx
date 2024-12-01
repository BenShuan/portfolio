import { GetProjects } from "@/lib/projects";
import Header from "@/ui/Header";
import Project from "@/ui/Project";

function Projects() {

  const projects = GetProjects()

  return (
    <div className="h-full flex flex-col ">
    <Header className=" text-center mt-6 mb-4 md:text-5xl"  hasShadow={true} > My Projects </Header>
    <div className="flex flex-wrap justify-evenly flex-1 gap-9 overflow-scroll py-4">
      {projects.map((proj) => {
        return  <Project key={proj.Id} proj={proj} />;
      })}
    </div>
    </div>

  );
}

export default Projects;
