"use client";
import React, { useEffect, useState } from "react";
import StackCard from "./StackCard";
import Image from "next/image";
import { Technology } from "@/app/interface";

const TechnologyStack = () => {
  const [techStack, setTechStack] = useState<Technology[]>([]);
  useEffect(() => {
    fetch("technologies.json")
      .then((res) => res.json())
      .then((data) => setTechStack(data));
  }, []);
  return (
    <div className="py-20 text-white">
      <h1 className="text-center font-bold text-4xl">Our Technology stack</h1>
      <Image
        className="absolute py-32"
        width={500}
        height={500}
        src="https://i.ibb.co/9bBMgsX/Background.png"
        alt="Background"
      />
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 mt-20 justify-items-center">
        {techStack.map((stack) => (
          <StackCard stack={stack} key={stack.id} />
        ))}
      </div>
    </div>
  );
};

export default TechnologyStack;
