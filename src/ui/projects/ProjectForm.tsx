"use client";
import React from "react";
import { useFormState } from "react-dom";
import TextInput from "../forms/TextInput";
import Textarea from "../forms/Textarea";
import { PostProject } from "@/lib/actions";
import SelectInput from "../forms/SelectInput";
import FormButton from "../forms/FormButton";
import FileInput from "../forms/FileInput";

const ProjectForm = ({technologies}:{technologies:string[]}) => {
  const [, action] = useFormState(PostProject, { message: "" });

  return (
    <form
      className="m-auto  gap-4 px-4 flex-grow md:grid md:grid-cols-3 md:grid-flow-row  "
      action={action}
    >
      <TextInput name="name" placeholder="Name" className="  w-full" required/>
      <TextInput name="link" placeholder="Link" className=" w-full" required/>
      <TextInput name="githubLink" placeholder="GitHub Link" className=" w-full" required />
      <SelectInput data={technologies} name="technologies" className="col-span-2 w-full " required multiple />
      <Textarea required
        name="description"
        placeholder="Description"
        className=" col-span-2  w-full"
        rows={4}
      />
      <FileInput type="file" name="image" className="row-start-2 col-start-3 row-span-2 w-full "  />

      <div className=" text-star col-span-3">
        <FormButton />
      </div>
    </form>
  );
};

export default ProjectForm;
