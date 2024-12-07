"use client";
import React from "react";
import { SendMessage } from "@/lib/actions";
import { useFormState } from "react-dom";
import TextInput from "./forms/TextInput";
import Textarea from "./forms/Textarea";
import FormButton from "./forms/FormButton";

const ContactForm = () => {
  const [, action] = useFormState(SendMessage, {
    message: "",
    email: "",
    name: "",
  });

  return (
    <form
      className="flex flex-col items-center gap-1 flex-grow "
      action={action}
    >
      <TextInput name="name" id="name" placeholder="Name" />
      <TextInput name="email" type="email" id="email" placeholder="Email" />
      <Textarea
        name="message"
        id="message"
        placeholder="Message"
        className=" flex-grow "
      />

      <div className="w-3/4 text-start">
        <FormButton />
      </div>
    </form>
  );
};

export default ContactForm;
