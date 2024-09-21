"use client";
import React, { useEffect, useState } from "react";
import ServiceCard from "./serviceCard";
import { service } from "@/app/interface";
import Image from "next/image";

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
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
        </div>
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
