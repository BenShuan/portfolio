import nodemailer from "nodemailer";

import { connectProjectsCollection } from "./mongo";
import { formScheme } from "./schems";

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
    skills = await db.collection("skills").findOne({ id: "my-skills" });
    return JSON.parse(JSON.stringify(skills?.skills));
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function UpdateMySkills(skills: string[]) {
  try {
    const db = await connectProjectsCollection();
    await db
      .collection("skills")
      .updateOne({ id: "my-skills" }, { $set: { skills } });
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function SendEmail(emaillData: formScheme) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const emailHtml = `<div>
    <h1>New message from ${emaillData.name}!</h1>
    <h3>Message:</h3>
    <p>${emaillData.message}</p>
  </div>`;

  const myOptions = {
    from: "benshuan@gmail.com",
    to: "benshuan@gmail.com",
    subject: `${emaillData.name} wants to conact`,
    html: emailHtml,
  };
  try {
    await transporter.sendMail(myOptions);
  } catch (error) {
    throw new Error("Could not reach out to my mail")
  }

  const options = {
    from: "benshuan@gmail.com",
    to: emaillData.email,
    subject: `Thank you for reaching out ${emaillData.name}`,
    html: `Thank you for reaching out to me,
    I will return to you as soon as possible!
            `
  };

  try {
    
    await transporter.sendMail(options);
  } catch (error) {
    throw new Error("Could not send you email")
  }
}
