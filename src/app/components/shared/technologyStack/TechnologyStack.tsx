"use client";
import React, { useEffect, useState } from "react";
import StackCard from "./StackCard";
import Image from "next/image";
import { Technology } from "@/app/interface";

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
      <h1 className="text-center font-bold text-4xl">Our Technology Stack</h1>

      <Image
        className="absolute py-32"
        width={500}
        height={500}
        src="https://i.ibb.co/9bBMgsX/Background.png"
        alt="Background"
      />

      {/* Show loader when data is loading */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          {/* Loader (spinner) */}
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
        </div>
      ) : (
        // Grid of technology stack
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 mt-20 justify-items-center">
          {techStack.map((stack) => (
            <StackCard stack={stack} key={stack.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TechnologyStack;
