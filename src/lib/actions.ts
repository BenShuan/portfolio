"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { formScheme } from "./schems";


export async function SendMessage(prevState: formScheme, formData: FormData) {
  const data ={
    name : formData.get("name"),
    email : formData.get("email"),
   message: formData.get("message"),
  };



  if (!data) {
    return  data ;
  }

  revalidatePath("/","layout")

  redirect("/");
}
