"use client";

import { useFormStatus } from "react-dom";
import Button from "../Button";

const FormButton = () => {

  const {pending} = useFormStatus();
  

  return (
    <div>
      <Button color="green" layout="full" className="my-3" disabled={pending}>
       { !pending ? "Send" : "Submiting..."}
      </Button>
    </div>
  );
};

export default FormButton;
