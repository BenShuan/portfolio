import  { connectProjectsCollection } from "@/lib/mongo/index";
import { projectScheme } from "./schems";



export async function GetProjects(): Promise<projectScheme[]> {
  
  let allProjects;

  try {
    const db = await connectProjectsCollection();
    allProjects = await db
      .collection("projects")
      .find({})
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray();
    return JSON.parse(JSON.stringify(allProjects));
  } catch (e) {
    console.error(e);
    return [];
  }
}

export const GetProjectBySlug = async (slug: string) => {
 
  try {
    const db = await connectProjectsCollection();
    const proj = await db.collection<projectScheme>("projects").findOne({"Slug":slug})

    if (!proj) {
      throw new Error;
    }

    return proj;
      
  } catch (e) {
    console.error(e);
    throw new Error("Unable to get the project " + slug)
  }
};

export async function SaveProject(proj: projectScheme) {


  try {
    const db = await connectProjectsCollection();
    const newProj = db.collection("projects").insertOne(proj)
    return newProj;
  } catch (e) {
    console.error(e);
    return {};
  }
}

export const GetTechnologies = () => {
  const fullStackTechnologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Angular",
    "Vue.js",
    "Svelte",
    "Node.js",
    "Express.js",
    "Next.js",
    "Nuxt.js",
    "Redux",
    "MobX",
    "Bootstrap",
    "Tailwind CSS",
    "Material-UI",
    "Chakra UI",
    "jQuery",
    "ASP.NET Core",
    "Django",
    "Flask",
    "Ruby on Rails",
    "Spring Boot",
    "PHP",
    "Laravel",
    "CodeIgniter",
    "Symfony",
    "GraphQL",
    "REST APIs",
    "WebSockets",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "MariaDB",
    "SQLite",
    "Firebase",
    "AWS (Amazon Web Services)",
    "Google Cloud Platform (GCP)",
    "Microsoft Azure",
    "Docker",
    "Kubernetes",
    "Git",
    "GitHub",
    "GitLab",
    "Bitbucket",
    "CI/CD Pipelines",
    "Webpack",
    "Vite",
    "Parcel",
    "Babel",
    "ESLint",
    "Prettier",
    "Testing Libraries (e.g., Jest, Mocha, Chai)",
    "Cypress",
    "Playwright",
    "Puppeteer",
    "Microservices Architecture",
    "Serverless Architecture",
    "Socket.io",
    "Nginx",
    "Apache",
    "Terraform",
    "Ansible",
    "Postman",
    "Swagger",
    "Figma",
    "Adobe XD",
    "SQL",
    "NoSQL",
    "Redis",
    "RabbitMQ",
    "Kafka",
    "Agile/Scrum",
    "JIRA",
    "VS Code",
    "IntelliJ IDEA",
    "Eclipse",
    "PyCharm",
    "NetBeans",
  ];

  return fullStackTechnologies;
};


