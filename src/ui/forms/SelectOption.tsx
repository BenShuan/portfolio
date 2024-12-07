"use client";

import {useState } from "react";

interface OptionsProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // option: string;
  changeItems: (option:string) => void;
}

const SelectOption = ({
  name,
  changeItems: changeItems,
  ...rest
}: OptionsProps) => {
  const [isSelected, setisSelected] = useState<boolean>(false);

  const changeVal = (event: React.FormEvent<HTMLInputElement>) => {
    
    if (name) {
      changeItems(name);
    }
    setisSelected(event.currentTarget.checked);
  };

  return (
    <div
      className={`relative size-full ${
        isSelected && "bg-slate-800 text-white"
      }`}
    >
      <label htmlFor={name}>{name}</label>
      <input
        type="checkbox"
        name={name}
        id={name}
        onChange={changeVal}
        className=" absolute size-full top-0 left-0 opacity-0 rounded-xl "
        // selected={isSelected}
        {...rest}
      />
    </div>
  );
};

export default SelectOption;
