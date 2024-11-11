import React, { ReactEventHandler, ReactNode, Reference, RefObject, useEffect } from "react";

export default function useClickOutside(ref:React.RefObject<HTMLDivElement>, onClickOutside:Function) {
  useEffect(() => {
    /**
     * Invoke Function onClick outside of element
     */
    function handleClickOutside(event:any) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    }
    // Bind
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // dispose
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
}