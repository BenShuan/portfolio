import { connectProjectsCollection } from "./mongo";

export const menu = [
  { text: "Home", link: "/" },
  { text: "Projects", link: "/projects" },
  { text: "About", link: "/about" },
  { text: "Contact", link: "/contact" },
];

export async function GetMySkills(): Promise<string[]> {
  
  let skills;

  try {
    const db = await connectProjectsCollection();
    skills = await db
      .collection("skills")
      .findOne({id:"my-skills"})
    return JSON.parse(JSON.stringify(skills?.skills));
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function UpdateMySkills(skills:string[]){

  try {
    const db = await connectProjectsCollection();
     await db.collection("skills").updateOne({id:"my-skills"},{$set:{skills}})
  } catch (e) {
    console.error(e);
    return [];
  }

}



