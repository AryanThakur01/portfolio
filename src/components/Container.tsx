"use client";

import { cn } from "@/lib/utils";
import React, { CSSProperties, FC, ReactNode, useEffect, useRef, useState } from "react";
import { useScrollContext } from "./MainContainer";

interface IContainerSection {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}
const ContainerSection: FC<IContainerSection> = ({ children, className, id, style }) => {
  const [multiplier, setMultiplier] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scroll = useScrollContext();
  useEffect(() => {
    if (sectionRef.current) {
      setMultiplier((sectionRef.current.offsetTop + sectionRef.current.clientHeight - scroll) / sectionRef.current.clientHeight);
    }
  }, [scroll]);
  return (
    <section
      className={cn("container mx-auto min-h-screen relative", className)}
      id={id}
      ref={sectionRef}
      style={{ transform: `rotateY(${-(multiplier * 90) + 90}deg)`, ...style }}
    >
      {children}
    </section>
  );
};

interface IContainerHeader {
  children: ReactNode;
  className?: string;
  id?: string;
}
const ContainerHeader: FC<IContainerHeader> = ({ children, className, id }) => {
  return (
    <h1 className={cn("md:text-4xl text-2xl font-bold rounded-2xl py-10 md:text-center text-start", className)} id={id}>
      {children}
    </h1>
  );
};

export const Container = {
  Section: ContainerSection,
  Header: ContainerHeader,
};
