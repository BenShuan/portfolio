import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  layout: "full" | "outlined";
  color: "green" | "blue" | "brown";
}
const buttonConfig = {
  green: {
    bg: {
      dark: "bg-main-green-dark",
      light: "bg-main-green-light",
      default: "bg-main-green-default",
      hover:"hover:bg-main-green-light",
      active:"active:bg-main-green-dark",
      'focus-visible':"focus-visible:bg-main-green-light" 
    },
    border: {
      default: "border-main-green-default",
      light: "border-main-green-light",
      dark: "border-main-green-dark",
      hover:"hover:border-main-blue-light",

    },
  },
  blue: {
    bg: {
      dark: "bg-main-blue-dark",
      light: "bg-main-blue-light",
      default: "bg-main-blue-default",
      active:"active:bg-main-blue-dark",
      hover:"hover:bg-main-blue-light",
      'focus-visible':"focus-visible:bg-main-blue-light"


    },
    border: {
      default: "border-main-blue-default",
      light: "border-main-blue-light",
      dark: "border-main-blue-dark",
      hover:"hover:border-main-blue-light",

    },
  },
  brown: {
    bg: {
      dark: "bg-main-brown-dark",
      light: "bg-main-brown-light",
      default: "bg-main-brown-default",
      hover:"hover:bg-main-brown-light",
      active:"active:bg-main-brown-light",
      'focus-visible':"focus-visible:bg-main-brown-light"


    },
    border: {
      default: "border-main-brown-default",
      light: "border-main-brown-light",
      dark: "border-main-brown-dark",
      hover: "hover:border-main-brown-light",

    },
  },
};

function Button({ children, layout = "full", color = "blue",className,...rest }: ButtonProps) {
  const layouts = {
    full: `${buttonConfig[color].bg.dark} border-solid border-2 ${buttonConfig[color].bg.hover} ${buttonConfig[color].bg.active} ${buttonConfig[color].bg["focus-visible"]} text-white hover:text-slate-800  `,
    outlined: `text-gray-900 ${buttonConfig[color].border.default} border-solid border-2 ${ buttonConfig[color].bg.hover} ${buttonConfig[color].border.hover} ${buttonConfig[color].bg.active}`,
  };

  return (
    <button
    className={`  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 px-3.5 py-2.5 text-sm font-semibold rounded-md ${layouts[layout]} ${className} `}
    {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
