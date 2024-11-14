import React from "react";
import HeroSection from "../ui/HeroSection";
import BoardsSection from "../ui/BoardsSection";

function HomePage() {
  return (
    <div className="h-[100%] overflow-scroll snap-y">
      <div className="h-1/2 min-h-fit snap-start">
        <HeroSection />
      </div>
      <div className=" h-full md:h-1/2  snap-start">
        <BoardsSection />
      </div>
      {/* <SkillsSection/> */}
    </div>
  );
}

export default HomePage;
