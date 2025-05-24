"use client";

import React, { HTMLAttributes, createContext, useContext, useEffect, useRef, useState } from "react";

const ScrollContext = createContext<number>(0);

export const MainContainer = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ children, ...props }, ref) => {
  const [scrollValue, setScrollValue] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!mainRef.current) return;
    const div = mainRef.current;
    const handleScroll = () => {
      const scrollTop = div.scrollTop;
      setScrollValue(scrollTop);
    };

    div.addEventListener("scroll", handleScroll);
    return () => div.removeEventListener("scroll", handleScroll);
  }, [mainRef]);
  return (
    <main ref={ref ?? mainRef} {...props} className="h-screen overflow-scroll w-screen overflow-x-hidden">
      <ScrollContext.Provider value={scrollValue}>{children}</ScrollContext.Provider>
    </main>
  );
});

export const useScrollContext = () => useContext(ScrollContext);

MainContainer.displayName = "MainContainer";
