/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { FaArrowDown } from "react-icons/fa";

const ServiceCard = ({ service }: any) => {
  return (
    <div className="w-[300px] mx-auto backdrop-blur-md bg-[#2F1748] flex flex-col items-start border-l-0 border-t-0 border-[#5C099B] border-4 p-5 rounded-xl">
      <img className="w-14 mt-6" src={service.image_url} alt={service.title} />
      <h2 className="py-4 text-xl font-bold">{service.title}</h2>
      <p className="text-lg my-2 text-[#a8a8a8]">{service.short_description}</p>
      <button className="mt-auto border flex items-center gap-2 border-[#7272723c] bg-gradient-to-r from-[#49156D] to-[#49165C] px-5 py-2 rounded-md">
        <Link
          href={`services/${service.id}`}
          className="flex items-center gap-2"
        >
          Read More{" "}
          <div>
            <img
              className="w-4"
              src="https://i.ibb.co.com/gVjzd78/line-1.png"
              alt=""
            />
          </div>
        </Link>
      </button>
    </div>
  );
};

export default ServiceCard;
