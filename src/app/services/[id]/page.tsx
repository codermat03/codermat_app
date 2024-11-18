"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ServiceFeature {
  id: number;
  title: string;
  description: string;
}

interface Service {
  id: number;
  title: string;
  service_details_description: string;
  image_url: string;
  service_features: ServiceFeature[];
  short_description: string
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

  return (
    <main className="bg-gradient-to-bl from-[#93239d] via-[#190b34] to-[#280d42] min-h-screen pt-32 text-white">
      <h1 className="text-center font-bold text-4xl">Service Details</h1>
      <h3 className="text-center text-2xl font-semibold pt-4">
        {service?.title || "Service not found"}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10 pt-20 max-w-6xl mx-auto">
        <div>
          {/* Service Details Section */}
          <div>
            <p className="text-[#d735ff] uppercase font-bold pb-3">Your vision our expertise</p>
            <p className="text-xl">{service?.short_description}</p>
          </div>
          {/* Service Features */}
          {service?.service_features && service.service_features.length > 0 && (
            <div className="pt-10 max-w-6xl mx-auto">
              <p className="text-[#d735ff] uppercase font-bold pb-3">Service Details:</p>
              <ul className="space-y-6 text-md">
                {service.service_features.map((feature) => (
                  <li key={feature.id} className="">
                    <p className="text-lg"><span className="font-semibold">{feature.id}. {feature.title}:</span> {feature.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Service Image */}
        <div>
          <Image
            src={service?.image_url || "/default-image.jpg"}
            alt={`${service?.title}`}
            className="w-full h-auto"
            layout="responsive"
            width={1920}
            height={1080}
          />
        </div>
      </div>
      <p className="max-w-6xl mx-auto py-10">{service?.service_details_description}</p>
    </main>
  );
};

export default ServiceDetails;
