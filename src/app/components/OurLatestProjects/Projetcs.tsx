"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "@/app/interface";

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
    <div className="mx-20">
      <div className="pt-24">
        <h1 className="text-center font-bold text-4xl">Our Latest Projects</h1>
        <p className="text-center text-xl w-1/2 m-auto pt-4">
          Find our projects here!!!
        </p>
      </div>
      <div className="grid grid-cols-3 items-center justify-center gap-x-8 gap-y-20 py-10 relative">
        {projects.slice(0, visibleProjects).map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
      {visibleProjects < projects.length && (
        <div className="text-center pb-20">
          <button
            className=" px-6 py-2 bg-gradient-to-r from-[#6C00A5] to-[#49165C] hover:from-[#49156D] hover:to-[#49165C] text-white font-semibold rounded-md"
            onClick={showMoreProjects}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Projetcs;
