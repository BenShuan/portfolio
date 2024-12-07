"use client";
import { useInView } from "framer-motion";
import React, { ReactNode, useRef } from "react";

interface inViewProps extends React.AllHTMLAttributes<HTMLParagraphElement> {
  once?: boolean; // animate every time the element goes in and out of view port
  children: ReactNode;
  index?: number;
  toDirection?: "up" | "down" | "left" | "right";
}

function InViewContainer({
  children,
  toDirection: direction = "left",
  once = true,
  index = 0,
  ...rest
}: inViewProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, { once });

  const delay = index * 500;

  const dir = {
    up: "translateY(50%)",
    down: "translateY(-50%)",
    right: "translateX(-50%)",
    left: "translateX(50%)",
  };

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : dir[direction],
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        transitionDelay: `${delay}ms`,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

export default InViewContainer;
