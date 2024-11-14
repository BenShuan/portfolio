
import React, {  ReactNode } from "react";

interface headerProp extends React.AllHTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

const Header = ({ children,...rest }: headerProp) => {


  return <p  className={`text-5xl font-extrabold capitalize `+rest.className} {...rest} >{children}</p>
};

export default Header;
