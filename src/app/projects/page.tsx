import React from "react";
import Projetcs from "../components/OurLatestProjects/Projetcs";

const Projects = () => {
  return (
    <main className="bg-gradient-to-bl from-[#93239d] via-[#190b34] to-[#280d42]">
      <div className="">
        <div>
          <Projetcs></Projetcs>
        </div>
        <img
          className="w-full pt-14"
          src="https://i.postimg.cc/kgGNMLQ8/home14-bg4.png"
          alt=""
        />
      </div>
    </main>
  );
};

export default Projects;
