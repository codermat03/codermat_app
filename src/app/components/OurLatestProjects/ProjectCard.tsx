import { Project } from "@/app/interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { id, description, image, project_name, technologies, liveLink } =
    project; // Ensure liveLink is available

  return (
    <div className="md:w-[390px] md:h-[660px] w-[320px] mx-auto backdrop-blur-md bg-[#2b1d3469] flex flex-col items-start rounded-2xl text-white">
      <Image
        src={image}
        alt={project_name}
        width={390}
        height={260}
        className="rounded-t-2xl"
        objectFit="cover"
        priority
      />
      <div className="p-7">
        <h2 className="py-4 text-xl font-bold">{project_name}</h2>
        <div>
          <h1 className="text-lg mt-2 text-[#A29CA6] font-bold">
            Description:
          </h1>
          <p className="text-lg mb-2 text-[#A29CA6]">{description}</p>
        </div>
        <div>
          <h1 className="text-lg mt-3 text-[#A29CA6] font-bold">
            Technologies:
          </h1>
          <p className="text-lg mb-2 text-[#A29CA6]">
            {technologies.join(", ")}
          </p>
        </div>
      </div>
      <button className="mt-auto mb-5 ml-5 border-2 flex items-center gap-2 border-[#7272723c] bg-gradient-to-r from-[#49156D] to-[#49165C] hover:border-[#a33ed2] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150 px-5 py-2 rounded-md bottom-5">
        <Link
          href={`${liveLink}`}
          target="_blank"
          className="flex items-center gap-2"
        >
          Show Live
          <Image
            className="w-4"
            src="https://i.ibb.co/gVjzd78/line-1.png"
            alt="icon"
            width={16}
            height={16}
          />
        </Link>
      </button>
    </div>
  );
};

export default ProjectCard;
