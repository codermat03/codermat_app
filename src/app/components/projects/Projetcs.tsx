'use client'
import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const Projetcs = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch("ourProjects.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    console.log(projects);

    return (
        <div className='mx-20'>
            <div className='pt-24'>
                <h1 className='text-center font-bold text-4xl'>Our Latest Project</h1>
                <p className='text-center text-xl w-1/2 m-auto pt-4'>Find our projects here!</p>
            </div>
            <div className='grid grid-cols-3 items-center justify-center gap-x-8 gap-y-20 py-20'>
                {projects.map((project) => <ProjectCard project={project} key={project.id} />)}
            </div>
        </div>
    );
};

export default Projetcs;