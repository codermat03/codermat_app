import React from 'react';
import Services from './components/shared/services/services';
import TechnologyStack from './components/shared/technologyStack/TechnologyStack';
import ProjectDiscuss from './components/shared/projectdiscuss/ProjectDiscuss';
import WhyChooseUs from './components/shared/whychooseus/WhyChooseUs';
import Pricing from './components/pricing/Pricing';

const page = () => {
    return (
        <div className='text-white bg-[#22122E]'>
            <Services />
            <ProjectDiscuss />
            <div className='p-[1px] bg-[#ffffff58]'></div>
            <TechnologyStack />
            <WhyChooseUs />
            <Pricing />
        </div>
    );
};

export default page;