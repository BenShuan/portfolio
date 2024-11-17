import React from "react";
import HeroSection from "../ui/HeroSection";
import BoardsSection from "../ui/BoardsSection";

function HomePage() {
  return (
    <div className="h-[100%] overflow-scroll ">
      <div className="h-1/2 min-h-fit">
        <HeroSection />
      </div>
      <div className=" h-full md:h-1/2 ">
        <BoardsSection />
      </div>
      {/* <SkillsSection/> */}
    </div>
  );
}

export default HomePage;
