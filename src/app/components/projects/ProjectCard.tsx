import Link from 'next/link';
import React from 'react';

const ProjectCard = ({ project }) => {
    const { id, description, image, project_name, technologies } = project
    return (
        <div className="w-[390px] h-[650px] mx-auto backdrop-blur-3xl bg-[#3e2a4b70] flex flex-col items-start rounded-2xl">
            <img className="" src={image} alt={project_name} />
            <div className='p-7'>
                <h2 className="py-4 text-xl font-bold">{project_name}</h2>
                <div>
                    <h1 className="text-lg mt-2 text-[#A29CA6] font-bold">Description:</h1>
                    <p className="text-lg mb-2 text-[#A29CA6]">{description}</p>
                </div>
                <div>
                    <h1 className="text-lg mt-3 text-[#A29CA6] font-bold">Technologies:</h1>
                    <p className="text-lg mb-2 text-[#A29CA6]"> {technologies.join(', ')}</p>
                </div>
            </div>
            <button className="mt-auto m-7 border-2 flex items-center gap-2 border-[#7272723c]  bg-gradient-to-r from-[#49156D] to-[#49165C] hover:border-[#a33ed2] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150 px-5 py-2 rounded-md">
                <Link
                    href={`details/${id}`}
                    className="flex items-center gap-2"
                >
                    Show Live{" "}
                    <div>
                        <img
                            className="w-4"
                            src="https://i.ibb.co.com/gVjzd78/line-1.png"
                            alt=""
                        />
                    </div>
                </Link>
            </button>
        </div>
    );
};

export default ProjectCard;