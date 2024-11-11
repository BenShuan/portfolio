
import React, { ReactElement, ReactNode } from "react";

interface headerProp extends React.AllHTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  fontSize?:string;
}

const Header = ({ children,fontSize="5xl",...rest }: headerProp) => {


  return <p {...rest} className={`text-${fontSize} font-extrabold capitalize `+rest.className}>{children}</p>
};

export default Header;
