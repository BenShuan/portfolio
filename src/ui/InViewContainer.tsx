"use client"
import { useInView } from "framer-motion";
import React, { ReactNode, useRef } from "react";

interface inViewProps extends React.AllHTMLAttributes<HTMLParagraphElement>{
once?:boolean ;// animate every time the element goes in and out of view port
children : ReactNode
index?:number

}

function InViewContainer({children, once=true, index=0 ,...rest}:inViewProps) {
  const ref = useRef(null);
  
  const isInView = useInView(ref,{once});

  
const delay = index*500

  return (
    <div
      ref={ref}
      style={{
        height:'100%',
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        transitionDelay:`${delay}ms`
      }}
    {...rest}

    >
      {children}
    </div>
  );
}

export default InViewContainer;
