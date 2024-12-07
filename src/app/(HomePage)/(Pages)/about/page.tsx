import Header from "@/ui/Header";
import InViewContainer from "@/ui/InViewContainer";
import { SkillsSection } from "@/ui/SkillsSection";

function About() {
  return (
    <div className="my-6 flex flex-col gap-4">
      <InViewContainer
        index={0}
        className=" text-slate-800 mx-6 md:w-3/5 md:m-auto "
        toDirection="left"
      >
        <Header className=" text-center mb-4" hasShadow={true}>
          About me
        </Header>
        <h2 className="text-2xl">
          Hi, I’m <span>Ben Shuan!</span>
        </h2>
        <p className="text-xl">
          I’m a passionate Full-Stack Developer with a degree in Industrial
          Engineering and Management, specializing in Information Systems. I
          love creating innovative, user-friendly web applications that solve
          real-world problems.
        </p>
      </InViewContainer>

      <InViewContainer index={1}>
        <SkillsSection />
      </InViewContainer>
    </div>
  );
}

export default About;
