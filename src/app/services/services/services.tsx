"use client";
import React, { useEffect, useState } from "react";
import ServiceCard from "./serviceCard";
import { service } from "@/app/interface";
import Image from "next/image";
import ProjectDiscuss from "@/app/components/shared/projectdiscuss/ProjectDiscuss";

const SkeletonLoader = () => {
  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 px-10 justify-center gap-8 mt-20">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="w-[340px] md:w-[390px]  h-auto backdrop-blur-md bg-[#2F1748] flex flex-col items-start border-l-0 border-t-0 border-[#5C099B] border-4 p-8 rounded-xl"
        >
          <div className="animate-pulse flex flex-col space-y-4 w-full">
            {/* Skeleton for the image */}
            <div className="h-14 w-14 bg-white/20 rounded"></div>
            {/* Skeleton for the title */}
            <div className="h-4 bg-white/20 rounded w-3/4"></div>
            {/* Skeleton for the description */}
            <div className="h-4 bg-white/20 rounded w-full"></div>
            <div className="h-4 bg-white/20 rounded w-2/3"></div>
            <div className="h-4 bg-white/20 rounded w-1/2"></div>
            {/* Skeleton for the button */}
            <div className="flex items-center gap-2 mt-3">
              <div className="h-9 bg-white/20 rounded w-32"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Services = () => {
  // State for services data
  const [services, setServices] = useState<service[]>([]);
  // State for loading
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate fetch delay to show loader for demo purposes
    setTimeout(() => {
      fetch("/servicesdata.json")
        .then((res) => res.json())
        .then((data) => {
          setServices(data);
          setLoading(false); // Set loading to false after data is fetched
        });
    }, 1000); // Adjust timeout as needed
  }, []);

  return (
    <div className="py-10 md:py-20 text-white px-4 md:px-0">
      <h1 className="text-center font-bold md:text-4xl text-2xl">
        Services We Provide
      </h1>
      <p className="text-center md:w-1/2 mx-auto text-sm md:pt-4 pt-2">
        Get the WebSite that will help you grow your business. We have many
        features that you will love.
      </p>

      {loading ? (
        <SkeletonLoader />
      ) : (
        // Services grid
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 px-10 justify-center gap-8 mt-10 md:mt-20">
          {services.map((service: service) => (
            <ServiceCard service={service} key={service.id} />
          ))}
        </div>
      )}
      {/* <Image
        className="w-full pt-14"
        src="https://i.postimg.cc/kgGNMLQ8/home14-bg4.png"
        alt=""
        width={1920}
        height={1080}
      /> */}
    </div>
  );
};

export default Services;
