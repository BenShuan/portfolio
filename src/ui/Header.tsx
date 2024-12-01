import React, { ReactNode } from "react";

interface headerProp extends React.AllHTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  hasShadow?:boolean;
  color?:"black"|"white"
}

const Header = ({ children, className,hasShadow=false, color="black",...rest }: headerProp) => {


  const shadowColor=color==="black"?"white":"black"
  const shadow = hasShadow && `1px 1px 2px ${shadowColor}, 0 0 1em ${shadowColor}, 0 0 0.1em brown`

  return (
    <h1
      className={` text-4xl lg:text-5xl font-extrabold capitalize text-balance ${color==="black" && "text-slate-800"  } ${className} `}
      style={{textShadow:`${shadow}`}}
      {...rest}
    >
      {children}
    </h1>
  );
};

export default Header;
