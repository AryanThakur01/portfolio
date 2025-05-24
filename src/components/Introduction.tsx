import React from "react";
import { Container } from "./Container";
const Introduction = () => {
  return (
    <Container.Section className="flex flex-col justify-center relative" id="intro">
      <h1 className="md:text-center md:text-7xl text-5xl font-bold my-8">Aryan Thakur</h1>
      <h2 className="md:text-center md:text-2xl text-xl text-muted-foreground max-w-[72rem] mx-auto">
        I&apos;m a <span className="text-primary">Software Engineer</span> passionate about crafting user-friendly digital experiences. Explore my portfolio for a glimpse into my
        world, where simplicity meets functionality.
      </h2>
    </Container.Section>
  );
};

export default Introduction;
