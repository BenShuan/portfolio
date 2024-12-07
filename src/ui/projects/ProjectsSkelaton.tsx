import React from "react";

const ProjectsSkelaton = () => {
  return (
    <div className="flex flex-wrap justify-evenly flex-1 gap-9 overflow-scroll py-4">
      {[1, 2, 3, 4, 5, 6].map((sklt) => {
        return (
          <div
            key={sklt}
            className=" w-4/5 aspect-[5/6] lg:aspect-square  md:w-[40%] lg:w-1/4 rounded-lg drop-shadow-2xl bg-slate-300/50 animate-pulse"
          />
        );
      })}
    </div>
  );
};

export default ProjectsSkelaton;
