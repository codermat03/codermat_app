"use client";
import React, { useEffect, useState } from "react";
import ServiceCard from "./serviceCard";
import { service } from "@/app/interface";

const SkeletonLoader = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-3 gap-y-12 mt-20">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="md:w-[390px] md:h-auto mx-7 md:mx-auto backdrop-blur-md bg-[#2F1748] flex flex-col items-start border-l-0 border-t-0 border-[#5C099B] border-4 p-5 rounded-xl"
        >
          <div className="animate-pulse flex flex-col space-y-4 w-full">
            {/* Skeleton for the image */}
            <div className="h-14 bg-white/20 rounded w-14"></div>
            {/* Skeleton for the title */}
            <div className="h-4 bg-white/20 rounded w-3/4"></div>
            {/* Skeleton for the description */}
            <div className="h-4 bg-white/20 rounded w-1/2"></div>
            <div className="h-4 bg-white/20 rounded w-full"></div>
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
    <div className="pt-20 text-white">
      <h1 className="text-center font-bold md:text-4xl text-2xl">
        Services We Provide
      </h1>
      <p className="text-center text-xl md:w-1/2 mx-auto pt-4">
        Get the WebSite that will help you grow your business. We have many
        features that you will love.
      </p>

      {loading ? (
        <SkeletonLoader />
      ) : (
        // Services grid
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 justify-center gap-8 mt-20">
          {services.map((service: service) => (
            <ServiceCard service={service} key={service.id} />
          ))}
        </div>
      )}

      <img
        className="w-full pt-14"
        src="https://i.postimg.cc/kgGNMLQ8/home14-bg4.png"
        alt=""
      />
    </div>
  );
};

export default Services;
