import React from 'react';
import Services from './components/shared/services/services';
import TechnologyStack from './components/shared/technologyStack/TechnologyStack';
import ProjectDiscuss from './components/shared/projectdiscuss/ProjectDiscuss';

const page = () => {
    return (
        <div className='text-white bg-[#22122E]'>
            <Services />
            <ProjectDiscuss />
            <TechnologyStack />
        </div>
    );
};

export default page;