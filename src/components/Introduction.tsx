import React from "react";
import ContainerSection from "./ContainerSection";

const Introduction = () => {
  return (
    <ContainerSection
      className="h-[calc(100vh-7rem)] min-h-96 flex flex-col justify-center"
      id="intro"
    >
      <h1 className="md:text-center md:text-7xl text-5xl font-bold my-8">
        Frontend Web Developer
      </h1>
      <h2 className="md:text-center md:text-2xl text-xl text-muted-foreground max-w-[72rem] mx-auto">
        I'm Aryan Thakur, a web developer passionate about crafting
        user-friendly digital experiences. Explore my portfolio for a glimpse
        into my world, where simplicity meets functionality.
      </h2>
    </ContainerSection>
  );
};

export default Introduction;
