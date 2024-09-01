"use client"
import React, { useEffect, useState } from 'react';
import ServiceCard from './serviceCard';
import { service } from '@/app/interface';



const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("servicesdata.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='my-20'>
            <h1 className='text-center font-bold text-4xl'>Services We Provide</h1>
            <p className='text-center text-xl w-1/2 m-auto pt-4'>Get the software that will help you to grow your business. We have a lot of features that you will love.</p>
            <div className='grid grid-cols-3 gap-y-12 mx-20 my-14'>
                {services.map((service: service) => <ServiceCard service={service} key={service.id} />)}
            </div>
        </div>
    );
};

export default Services;