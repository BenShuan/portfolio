import React from "react";
import HeroSection from "../../ui/HeroSection";
import BoardsSection from "../../ui/BoardsSection";

function HomePage() {
  return (
    <main className="h-[100%] overflow-scroll backdrop-blur-sm  ">
      <div className="h-full md:h-1/2 min-h-fit ">
        <HeroSection />
      </div>
      <div className=" h-full md:h-1/2  relative ">
        
        <BoardsSection />
      </div>
    </main>
  );
}

export default HomePage;
