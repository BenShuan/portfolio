import { GetProjectBySlug } from "@/lib/projects";
import Button from "@/ui/Button";
import Header from "@/ui/Header";
import InViewContainer from "@/ui/InViewContainer";
import { Skill } from "@/ui/Skill";
import Image from "next/image";
import { Suspense } from "react";
import { BsGithub } from "react-icons/bs";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ProjectPage = async ({ params }: { params: { slug: string } }) => {
  const project = await GetProjectBySlug(params.slug);



  return (
    <div className="size-full px-6  *:mt-4 grid grid-rows-12 grid-cols-3 grid-flow-row gap-2 md:px-12 ">
      <InViewContainer
        toDirection="right"
        className="row-span-4 col-span-3 flex flex-col bg-main-brown-light/70 p-4 rounded-lg overflow-scroll 
        md:row-span-3 md:col-span-3 md:flex-row
         lg:block lg:col-span-1 lg:row-span-11  "
      >
        <Header className=" text-pretty mb-2 text-3xl font-extrabold md:w-1/3 lg:w-full">{project.Name}</Header>
        <p className="text-2xl  text-slate-800 text-pretty 
        md:w-2/3 lg:w-full">
          {project.Description}
        </p>
      </InViewContainer>

      <InViewContainer
        toDirection="left"
        className="row-span-4 col-span-3  
        md:row-span-6 md:col-span-3 lg:row-span-8 
        lg:col-span-2 lg:row-start-1 lg:col-start-2"
      >
        <div className="relative h-full max-w-full rounded-3xl overflow-hidden m-auto ">
          <Suspense fallback={<div>Loading image</div>} >
            <Image src={project?.ImageLink} alt={project?.Name} fill quality={40} />
          </Suspense>
        </div>
      </InViewContainer>

      <div className="row-span-4 col-span-3 lg:col-span-2">
        <InViewContainer
          toDirection="up"
          className="text-center "
        >
          <p className="text-xl text-slate-800 mb-2">Made with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {project.Technologies.map((t) => {
              return <Skill key={t} name={t} />;
            })}
          </div>
        </InViewContainer>
        <InViewContainer
          toDirection="left"
          className="flex justify-center m-0 gap-3 mt-4
          md:items-start md:justify-center md:flex-row "
        >
          <Button
            layout="full"
            color="blue"
            className=" hover:scale-110 transition-all "
          >
            <a
              href={project.githubLink}
              target="_blank"
              className="flex content-center items-center gap-2"
            >
              <BsGithub className="size-6" />
              <span className="hidden md:inline text-lg">Check on GitHub</span>
            </a>
          </Button>
          <Button
            layout="outlined"
            color="blue"
            className=" hover:scale-110 transition-all "
          >
            <a
              href={project.Link}
              target="_blank"
              className="flex content-center items-center gap-2"
            >
              <FaArrowUpRightFromSquare className="size-6" />
              <span className="text-lg hidden md:inline">Check it out</span>
            </a>
          </Button>
        </InViewContainer>
      </div>
    </div>
  );
};

export default ProjectPage;
