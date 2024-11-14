"use client";
import React, { useEffect, useState } from "react";
import StackCard from "./StackCard";
import Image from "next/image";
import { Technology } from "@/app/interface";

const SkeletonLoader = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 mt-20 justify-items-center z-10">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="bg-white/15 rounded-lg p-4 w-full max-w-[300px]"
        >
          <div className="animate-pulse flex flex-col space-y-4">
            <div className="h-32 bg-white/15 rounded"></div>
            <div className="h-4 bg-white/15 rounded w-3/4"></div>
            <div className="h-4 bg-white/15 rounded w-1/2"></div>
            <div className="h-4 bg-white/15 rounded w-1/2"></div>
            <div className="h-4 bg-white/15 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

const TechnologyStack = () => {
  // State for tech stack data
  const [techStack, setTechStack] = useState<Technology[]>([]);
  // State for loading
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate fetch delay to show loader
    setTimeout(() => {
      fetch("/technologies.json")
        .then((res) => res.json())
        .then((data) => {
          setTechStack(data);
          setLoading(false); // Set loading to false after data is fetched
        });
    }, 1000); // Adjust timeout as needed
  }, []);

  return (
    <div className="py-20 text-white relative">
      <h1 className="text-center font-bold md:text-4xl text-2xl">
        Our Technology Stack
      </h1>
      <p className="text-center text-xl md:w-1/2 mx-auto pt-4">
        Building the Future with Innovative and Reliable Technologies
      </p>

      <Image
        className="absolute py-32"
        width={500}
        height={500}
        src="https://i.ibb.co/9bBMgsX/Background.png"
        alt="Background"
      />

      {/* Show skeleton loader when data is loading */}
      {loading ? (
        <div className="relative z-10">
          <SkeletonLoader />
        </div>
      ) : (
        // Grid of technology stack
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 mt-20 justify-items-center z-0">
          {techStack.map((stack) => (
            <StackCard stack={stack} key={stack.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TechnologyStack;
