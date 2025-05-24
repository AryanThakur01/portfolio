"use client";

import React, { HTMLAttributes, useEffect, useRef } from "react";

export const MainContainer = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ children, ...props }) => {
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!mainRef.current) return;
    const div = mainRef.current;
    const handleScroll = () => {
      const scrollTop = div.scrollTop;
      // setScrollValue(scrollTop);
    };

    div.addEventListener("scroll", handleScroll);
    return () => div.removeEventListener("scroll", handleScroll);
  }, [mainRef]);
  return (
    <main ref={mainRef} {...props} className="h-screen overflow-scroll">
      {children}
    </main>
  );
});

MainContainer.displayName = "MainContainer";
