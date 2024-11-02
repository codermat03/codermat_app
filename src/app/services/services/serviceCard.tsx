/* eslint-disable @next/next/no-img-element */
import PrimaryBtn from "@/app/components/shared/customized-component/PrimaryBtn";
import Link from "next/link";
import React from "react";
import { FaArrowDown } from "react-icons/fa";

const ServiceCard = ({ service }: any) => {
  return (
    <div className="md:w-[390px] mx-auto backdrop-blur-md bg-[#2F1748] flex flex-col items-start border-l-0 border-t-0 border-[#5C099B] border-4 p-5 rounded-xl">
      <img className="w-14" src={service.image_url} alt={service.title} />
      <h2 className="py-2 text-lg font-bold">{service.title}</h2>
      <p className="text-md text-[#a8a8a8] mb-3">{service.short_description}</p>
      <PrimaryBtn className="px-4 rounded-md">
        <Link
          href={`services/${service.id}`}
          className="flex items-center text-base py-1 gap-2"
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
      </PrimaryBtn>
    </div>
  );
};

export default ServiceCard;
