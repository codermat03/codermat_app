"use client";
import React, { useEffect, useState } from "react";
import ServiceCard from "./serviceCard";
import { service } from "@/app/interface";

const SkeletonLoader = () => {
  return (
    <div className="max-w-7xl grid grid-cols-3 gap-y-12 mx-20 mt-20">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="bg-white/20 rounded-lg p-4 w-full max-w-[300px]"
        >
          <div className="animate-pulse flex flex-col space-y-4">
            <div className="h-32 bg-white/20 rounded"></div>
            <div className="h-4 bg-white/20 rounded w-3/4"></div>
            <div className="h-4 bg-white/20 rounded w-1/2"></div>
            <div className="h-4 bg-white/20 rounded w-1/2"></div>
            <div className="h-4 bg-white/20 rounded w-1/2"></div>
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
      <h1 className="text-center font-bold text-4xl">Services We Provide</h1>
      <p className="text-center text-xl w-1/2 mx-auto pt-4">
        Get the software that will help you to grow your business. We have a lot
        of features that you will love.
      </p>

      {loading ? (
        <SkeletonLoader />
      ) : (
        // Services grid
        <div className="max-w-7xl mx-auto grid grid-cols-3 justify-center gap-y-12 mx-20 mt-20">
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
