import React from "react";

const LoadingPages = () => {
  return (
    <div className=" absolute size-full backdrop-blur top-0 bg-slate-300/40 ">
      <div
        className={
          "loader absolute min-h-20 top-[50%] left-[50%] -translate-x-1/2 w-full "
        }
      />
    </div>
  );
};

export default LoadingPages;
