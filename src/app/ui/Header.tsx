
import React, {  ReactNode } from "react";

interface headerProp extends React.AllHTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

const Header = ({ children,...rest }: headerProp) => {


  return <p {...rest} className={` text-2xl md:text-4xl font-extrabold capitalize text-pretty `+rest.className}  >{children}</p>
};

export default Header;
