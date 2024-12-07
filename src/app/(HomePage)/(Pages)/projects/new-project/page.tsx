import { GetTechnologies } from "@/lib/projects";
import Header from "@/ui/Header";
import InViewContainer from "@/ui/InViewContainer";
import ProjectForm from "@/ui/projects/ProjectForm";
import React from "react";

const NewProjectPage = () => {
  const techno = GetTechnologies();

  return (
    <div>
      <InViewContainer className="h-full pb-3">
        <div className="rounded-3xl bg-main-blue-light h-full w-auto md:w-3/4 md:m-auto mx-8 mt-8 text-center flex flex-col py-3 ">
          <Header className="my-4 " hasShadow={true}>
            Add New Project
          </Header>

          <span className="bg-main-brown-dark h-2 w-10 rounded-lg items-center m-auto"></span>

          <ProjectForm technologies={techno} />
        </div>
      </InViewContainer>
    </div>
  );
};

export default NewProjectPage;
