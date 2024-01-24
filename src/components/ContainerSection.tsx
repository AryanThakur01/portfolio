import { cn } from "@/lib/utils";
import React, { FC, ReactNode } from "react";

interface IContainerSection {
  children: ReactNode;
  className?: string;
  id?: string;
}
const ContainerSection: FC<IContainerSection> = ({
  children,
  className,
  id,
}) => {
  return (
    <section className={cn("container mx-auto", className)} id={id}>
      {children}
    </section>
  );
};

export default ContainerSection;
