import React from "react";
import TechnologyStack from "../components/shared/technologyStack/TechnologyStack";
import Image from "next/image";

const Technologies = () => {
  return (
    <main className="bg-gradient-to-bl from-[#93239d] via-[#190b34] to-[#280d42] text-white pt-16 min-h-screen">
      <div className=" text-center ">
        <TechnologyStack></TechnologyStack>
      </div>
      <Image
        className="w-full pt-14"
        src="https://i.postimg.cc/kgGNMLQ8/home14-bg4.png"
        alt=""
        width={1920}
        height={1080}
      />
    </main>
  );
};

export default Technologies;
