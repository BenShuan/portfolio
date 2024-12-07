"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { formScheme, projectScheme } from "./schems";
import { SaveProject } from "./projects";
import { uploadImage } from "./cloudinary";
import slugify from "slugify";
import { ObjectId } from "mongodb";



export async function SendMessage(prevState: formScheme, formData: FormData) {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  if (!data) {
    return data;
  }

  revalidatePath("/", "layout");

  redirect("/");
}

export async function PostProject(
  prevState: { message: string } ,
  formData: FormData
) {
  const image = formData.get("image") as File;

  if (!image) {
    return { message: "There is no image" };
  }

  const result:projectScheme = {
    _id:new ObjectId(),
    Slug:"",
    ImageLink:"",
    Name: formData.get("name")?.toString()||"",
    Link: formData.get("link")?.toString()||"",
    githubLink: formData.get("githubLink")?.toString()||"",
    Technologies: formData.getAll("technologies") as string[] ||[],
    Description: formData.get("description")?.toString()||"",
  };


  result.Slug = slugify(result.Name);

  try {
    result.ImageLink = await uploadImage(image);
  } catch (error) {
    throw new Error(
      "Image upload failed, post was not created. Please try again later."
    );
  }

  SaveProject(result);

  revalidatePath("/projects", "layout");

  redirect("/projects");
}
