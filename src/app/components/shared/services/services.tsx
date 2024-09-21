"use client"
import React, { useEffect, useState } from 'react';
import ServiceCard from './serviceCard';
import { service } from '@/app/interface';
import Image from 'next/image';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("servicesdata.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='pt-20 pb-72'>
            <h1 className='text-center font-bold text-4xl'>Services We Provide</h1>
            <p className='text-center text-xl w-1/2 m-auto pt-4'>Get the software that will help you to grow your business. We have a lot of features that you will love.</p>
            <div className='grid grid-cols-3 justify-center gap-y-12 mx-20 my-14'>
                {services.map((service: service) => <ServiceCard service={service} key={service.id} />)}
            </div>
            <Image
                className='absolute mt-10'
                width={1520}
                height={300}
                src="https://i.ibb.co.com/7GGjHDr/home14-bg4-1.png"
                alt="Background"
            />
        </div>
    );
};

export default Services;