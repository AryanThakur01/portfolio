import { cn } from "@/lib/utils";
import React, { FC, ReactNode } from "react";

interface IContainerSection {
  children: ReactNode;
  className?: string;
  id?: string;
}
const ContainerSection: FC<IContainerSection> = ({ children, className, id }) => {
  return (
    <section className={cn("container mx-auto min-h-screen", className)} id={id}>
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
