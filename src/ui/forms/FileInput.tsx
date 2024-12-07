"use client";
import Image from "next/image";
import Button from "../Button";
import { FormEvent, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface FileInput extends React.InputHTMLAttributes<HTMLInputElement> {}

const FileInput = ({ className, name }: FileInput) => {
  const [pickedImage, setPickedImage] = useState<string|undefined>(undefined);

  const input = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    input.current?.click();
  };

  function handleImageChange(event: FormEvent<HTMLInputElement>) {
    const files = event.currentTarget.files;

    if (!files) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result?.toString());
    };

    fileReader.readAsDataURL(files[0]);
  }

  return (
    <div
      className={twMerge(
        "text-slate-800 size-full flex flex-col gap-y-4",
        className
      )}
    >
      <label htmlFor={name}>{name?.toUpperCase()}</label>
      <div className="flex-grow border border-slate-800 rounded-sm relative min-h-36">
            {
              pickedImage ?
              <Image src={pickedImage} fill alt="Picked Image"/>:
              <p>No Image Picked</p>
            }

      </div>
      <div>
        <input
          type="file"
          ref={input}
          name={name}
          id={name}
          onChange={handleImageChange}
          className="hidden "
          accept="image/png, image/jpeg"
        />
        <Button
          color="brown"
          layout="full"
          className="size-full "
          type="button"
          onClick={handleClick}
        >
          {"Upload Image"}
        </Button>
      </div>
    </div>
  );
};

export default FileInput;
