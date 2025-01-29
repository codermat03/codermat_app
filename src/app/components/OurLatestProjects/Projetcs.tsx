"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "@/app/interface";
import PrimaryBtn from "../shared/customized-component/PrimaryBtn";
import Image from "next/image";
import Link from "next/link";

// Skeleton Loader
const ProjectCardSkeleton = () => {
  return (
    <div className="md:w-[390px] md:h-[660px] w-[320px] mx-auto backdrop-blur-md bg-[#2b1d3469] flex flex-col items-start rounded-2xl text-white animate-pulse">
      <div className="w-full h-[260px] bg-white/20 rounded-t-2xl"></div>
      <div className="h-8 my-6 bg-white/20 rounded w-3/4 mb-5 mx-4"></div>

      <div className="h-6 bg-white/20 rounded w-1/2 mb-5 mx-4"></div>
      <div className="h-5 bg-white/20 rounded w-[350px] mb-5 mx-4"></div>
      <div className="h-5 bg-white/20 rounded w-[350px] mb-5 mx-4"></div>
      <div className="h-6 bg-white/20 rounded w-1/2 mb-5 mx-4"></div>
      <div className="h-5 bg-white/20 rounded w-[350px] mb-5 mx-4"></div>
      <div className="h-12 bg-white/20 rounded w-[130px] mt-auto mb-5 mx-4"></div>
    </div>
  );
};

const Projetcs = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [visibleProjects, setVisibleProjects] = useState(3); // Initial number of visible projects
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    fetch("ourProjects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false); // Set loading to false after data is fetched
      });
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
      <div className="lg:mx-20">
        <div className="pt-24">
          <h1 className="text-center font-bold md:text-4xl text-2xl">
            Our Latest Projects
          </h1>
          <p className="text-center text-xl md:w-1/2 m-auto pt-4">
            Explore Our Successful Projects: See How We Bring Ideas to Life!!!!
          </p>
        </div>

        {/* Grid of project cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-[1480px] mx-auto items-center justify-center lg:gap-x-8 lg:gap-y-20 gap-y-10 py-10 relative">
          {loading
            ? // Render skeleton loader while loading
              Array.from({ length: visibleProjects }).map((_, index) => (
                <ProjectCardSkeleton key={index} />
              ))
            : // Render actual project cards after data is fetched
              projects
                .slice(0, visibleProjects)
                .map((project) => (
                  <ProjectCard project={project} key={project.id} />
                ))}
        </div>

        {/* Show more projects button */}

        <Link href="/projects">
          <div className="text-center pb-20">
            <PrimaryBtn
              className="px-6 py-2 rounded-xl"
              onClick={showMoreProjects}
            >
              Show More
            </PrimaryBtn>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projetcs;
