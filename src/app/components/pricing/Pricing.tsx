import React from 'react';

const Pricing = () => {
    return (
        <div className='pt-20 pb-72 bg-gradient-to-b from-[#181619] to-[#1F122A]'>
            <h1 className='text-center font-bold text-4xl'>Pricing Options for Our Services</h1>
            <p className='text-center text-xl w-1/2 m-auto pt-4'>We focus on ergonomics and meeting you where you work. It’s only a keystroke away.</p>
            <div className='mx-20 mt-20'>
                <div className='w-[350px] rounded-full border-[3.5px] border-[#7D1A8D]'>
                    <div className='flex bg-[#2C1C36] rounded-full items-center p-1 gap-10 font-semibold text-md'>
                        <button className='bg-gradient-to-r from-[#49156D] to-[#49165C] py-3 px-12 rounded-full'>Personal</button>
                        <button className='py-3'>Professional</button>
                    </div>
                </div>
                <div className='grid grid-cols-3 justify-center gap-y-12 mx-20 my-14'>

                    {/* {services.map((service: service) => <ServiceCard service={service} key={service.id} />)} */}
                </div>
            </div>
        </div>
    );
};

export default Pricing;