import React from "react";
import ContainerSection from "./ContainerSection";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const ProjectList = () => {
  const projectList = [
    {
      title: "Web Apps",
      list: [
        {
          projectName: "DSA Visualizer",
          link: "https://dsa.aryanthakur.me/",
          image: assets.DsaVisualizer,
        },
        {
          projectName: "E-Commerce Website",
          link: "https://shopicom.aryanthakur.me/",
          image: assets.Shopicom,
        },
      ],
    },
    {
      title: "Landing Page (Contributions in frontend)",
      list: [
        {
          projectName: "Compositech",
          link: "https://www.compositech.in/",
          image: assets.Compositech,
        },
        {
          projectName: "Landing Page Transport Website",
          link: "https://bbpm.aryanthakur.me/",
          image: assets.BBPM,
        },
        {
          projectName: "Landing Page Transport Website",
          link: "https://www.rennov8.in/",
          image: assets.Renovate,
        },
      ],
    },
  ];
  return (
    <ContainerSection id="projects">
      <h2 className="md:text-center md:text-4xl text-2xl font-bold my-8">
        My <span className="text-primary">Projects</span>
      </h2>
      {projectList.map((category) => (
        <div className="my-16" key={category.title}>
          <h3 className="text-2xl my-8">{category.title}</h3>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {category.list.map((item) => (
              <Link
                href={item.link}
                className="rounded-xl overflow-hidden border-2 border-border w-fit group bg-muted"
                key={item.projectName}
              >
                <Image
                  src={item.image}
                  alt={item.projectName}
                  width={400}
                  height={300}
                  className="group-hover:scale-110 transition-all hover:opacity-80"
                />
                <div className="">
                  <div></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </ContainerSection>
  );
};

export default ProjectList;
