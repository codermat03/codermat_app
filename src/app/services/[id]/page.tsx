"use client";

import { useEffect, useState } from "react";

interface Service {
  id: number;
  title: string;
  service_details_description: string;
  image_url: string;
}

interface Params {
  id: string;
}

const ServiceDetails = ({ params }: { params: Params }) => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetch("/servicesdata.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const service = services.find((data) => data.id === Number(params.id));

  console.log(service, params.id);

  return (
    <main className="bg-gradient-to-bl from-[#93239d] via-[#190b34] to-[#280d42] min-h-screen pt-32 text-white">
      <h1 className="text-center font-bold text-4xl">Service Details</h1>
      <h3 className="text-center text-2xl font-semibold pt-4">
        {service?.title || "Service not found"}
      </h3>
      <div className=" grid grid-cols-2 justify-between gap-28 pt-20 max-w-7xl mx-auto ">
        <div>
          <p className="text-xl">{service?.service_details_description}</p>
        </div>
        <div>
          <img src={service?.image_url} alt="" />
        </div>
      </div>
    </main>
  );
};

export default ServiceDetails;
