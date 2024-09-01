/* eslint-disable @next/next/no-img-element */
import React from 'react';

const ServiceCard = ({ service }: any) => {
    return (
        <div className='w-[300px] flex flex-col items-start border-dark-50 border-2 p-5 rounded-md'>
            <img
                className='size-20 mt-6'
                src={service.image_url}
                alt={service.title}
            />
            <h2 className='py-4 text-xl font-bold'>{service.title}</h2>
            <p className='text-lg my-2'>{service.short_description}</p>
            <button className='mt-auto border-2 border-light-500 px-3 py-1 rounded-md'>Read More</button>
        </div>
    );
};

export default ServiceCard;