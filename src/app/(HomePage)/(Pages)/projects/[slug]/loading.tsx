import React from "react";

const LoadingProject = () => {
  return (
    <div className="size-full px-6 md:px-12 *:mt-4 grid grid-rows-12 grid-cols-3 grid-flow-row gap-2 *:bg-slate-300/40 animate-pulse *:rounded-lg ">
      <div className="row-span-2 col-span-2 md:row-span-2 md:col-span-1 lg:row-span-2   "/>

      <div className="row-span-4 col-span-3 md:row-span-2 md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-1 lg:row-span-6 overflow-scroll"></div>

      <div className="row-span-3 col-span-3  md:row-span-6 md:col-span-3 lg:row-span-8 lg:col-span-2 lg:row-start-1 lg:col-start-2"></div>
    </div>
  );
};

export default LoadingProject;
