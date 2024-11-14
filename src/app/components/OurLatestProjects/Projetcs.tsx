"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "@/app/interface";
import PrimaryBtn from "../shared/customized-component/PrimaryBtn";
import Image from "next/image";

const Projetcs = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [visibleProjects, setVisibleProjects] = useState(3); // Initial number of visible projects

  useEffect(() => {
    fetch("ourProjects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const showMoreProjects = () => {
    setVisibleProjects(projects.length); // Show all projects when the button is clicked
  };

  return (
    <div className="text-white min-h-screen">
      <Image
        className="absolute py-52"
        width={500}
        height={500}
        src="https://i.ibb.co/9bBMgsX/Background.png"
        alt="Background"
      />
      <div className="md:mx-20">
        <div className="pt-24">
          <h1 className="text-center font-bold md:text-4xl text-2xl">
            Our Latest Projects
          </h1>
          <p className="text-center text-xl md:w-1/2 m-auto pt-4">
            Explore Our Successful Projects: See How We Bring Ideas to Life!!!!
          </p>
        </div>
        <div className="grid md:grid-cols-3 items-center justify-center md:gap-x-8 md:gap-y-20 gap-y-10 py-10 relative">
          {projects.slice(0, visibleProjects).map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
        {visibleProjects < projects.length && (
          <div className="text-center pb-20">
            <PrimaryBtn
              className="px-6 py-2 rounded-xl"
              onClick={showMoreProjects}
            >
              Show More
            </PrimaryBtn>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projetcs;
