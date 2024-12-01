"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function SendMessage(prevState: any, formData: FormData) {
  const data ={
    name : formData.get("name"),
    email : formData.get("email"),
   message: formData.get("message"),
  };



  if (!data) {
    return { message: data };
  }

  revalidatePath("/","layout")

  redirect("/");
}
