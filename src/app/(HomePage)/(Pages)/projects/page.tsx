import { projects } from "@/app/Data/DataFunctions";
import Project from "@/app/ui/Project";



function Projects() {
  return (
    <div className="flex flex-wrap justify-center h-full overflow-scroll py-14 gap-9 ">
      {projects.map((proj) => {
        return (
         <Project key={proj.Id}  proj={proj}/>
        );
      })}
    </div>
  );
}

export default Projects;
