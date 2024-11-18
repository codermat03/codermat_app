import React from "react";
import Projetcs from "../components/OurLatestProjects/Projetcs";
import Image from "next/image";

const Projects = () => {
  return (
    <main className="bg-gradient-to-bl from-[#93239d] via-[#190b34] to-[#280d42]">
      <div className="">
        <div>
          <Projetcs></Projetcs>
        </div>
        <Image
          className="w-full pt-14"
          src="https://i.postimg.cc/kgGNMLQ8/home14-bg4.png"
          alt=""
          layout="responsive"
          width={1920}
          height={1080}
        />
      </div>
    </main>
  );
};

export default Projects;
