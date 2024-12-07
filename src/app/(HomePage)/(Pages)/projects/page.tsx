import Header from "@/ui/Header";
import Projects from "@/ui/projects/Projects";
import ProjectsSkelaton from "@/ui/projects/ProjectsSkelaton";
import { Suspense } from "react";

function ProjectsPage() {
  return (
    <div className="h-full flex flex-col ">
      <Header className=" text-center mt-6 mb-4 md:text-5xl" hasShadow={true}>
        My Projects
      </Header>
      <Suspense fallback={<ProjectsSkelaton />}>
        <Projects />
      </Suspense>
    </div>
  );
}

export default ProjectsPage;
