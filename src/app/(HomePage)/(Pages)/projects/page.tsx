"use client";
import Header from "@/app/ui/Header";
import InViewContainer from "@/app/ui/InViewContainer";

const projects = [
  {
    Id: 1,
    Name: "Dog Shelter Matcher",
    Link: "https://dogsheltermatcher.com",
    githubLink:"https://github.com/ruppinCgroup54/Hameluna-client",
    ImageLink: "/images/מי בבית.png",
    Technologies: [
      "React.js",
      ".NetCore",
      "MSSQL",
      "MongoDB",
      "Firebase RT database",
    ],
    Description:
      "A web application that matches potential adopters with dogs in shelters using AI technology.",
  },
  {
    Id: 2,
    Name: "E-commerce Platform",
    Link: "https://ecommerceplatform.com",
    ImageLink: "/images/מי בבית.png",
    githubLink:"https://github.com/ruppinCgroup54/Hameluna-client",
    Technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe API", "AWS"],
    Description:
      "An end-to-end e-commerce solution supporting multiple sellers, secure payments, and a streamlined UI for shoppers.",
  },
  {
    Id: 3,
    Name: "Portfolio Website",
    Link: "https://johndoeportfolio.com",
    ImageLink: "/images/מי בבית.png",
    githubLink:"https://github.com/ruppinCgroup54/Hameluna-client",
    Technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Email.js"],
    Description:
      "A personal portfolio showcasing projects, skills, and experiences with an integrated contact form.",
  },
  {
    Id: 4,
    Name: "Social Media Dashboard",
    Link: "https://socialmediadashboard.com",
    ImageLink: "/images/מי בבית.png",
    githubLink:"https://github.com/ruppinCgroup54/Hameluna-client",
    Technologies: ["Vue.js", "Firebase", "Express.js", "Node.js", "Chart.js"],
    Description:
      "A dashboard that tracks and displays user engagement across multiple social media platforms.",
  },
  {
    Id: 5,
    Name: "Real Estate Listings",
    Link: "https://realestatelistings.com",
    ImageLink: "/images/מי בבית.png",
    githubLink:"https://github.com/ruppinCgroup54/Hameluna-client",
    Technologies: ["Angular", "ASP.NET Core", "MySQL", "Azure", "Leaflet"],
    Description:
      "A web application for browsing real estate listings, with interactive maps and filters for enhanced user experience.",
  },
];

function Projects() {
  return (
    <div className="flex flex-wrap justify-center h-full overflow-scroll py-10 gap-9">
      {projects.map((proj) => {
        return (
          <div className=" w-2/3 h-2/3 md:w-1/3 relative  group overflow-hidden  *:rounded-lg ">
            <img
              src={proj.ImageLink}
              alt={proj.Name}
              className="absolute h-full object-cover w-full  "
            />
            <div className="md:translate-y-full md:group-hover:-translate-y-0 bg-gradient-to-t from-black/[0.6] from-50% absolute size-full  flex flex-col justify-end p-4 gap-4 transition duration-700">
              <Header>{proj.Name}</Header>
              <p className="text-xl">{proj.Description}</p>
              <div>
                
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
