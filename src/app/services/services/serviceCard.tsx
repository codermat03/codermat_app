/* eslint-disable @next/next/no-img-element */
import PrimaryBtn from "@/app/components/shared/customized-component/PrimaryBtn";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowDown } from "react-icons/fa";

const ServiceCard = ({ service }: any) => {
  return (
    <div className="transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl backdrop-blur-md bg-[#2F1748] flex flex-col items-start border-l-0 border-t-0 border-[#5C099B] border-4 p-5 rounded-xl  w-[330px] lg:w-[390px] mx-auto">
      <Image
        className="w-14"
        src={service.image_url}
        alt={service.title}
        width={56}
        height={56}
      />
      <h2 className="py-2 text-lg font-bold">{service.title}</h2>
      <p className="text-md text-[#a8a8a8] mb-3">{service.short_description}</p>
      <PrimaryBtn className="px-4 rounded-md">
        <Link
          href={`services/${service.id}`}
          className="flex items-center text-base py-1 gap-2"
        >
          Read More{" "}
          <div>
            <Image
              className="w-4"
              src="https://i.ibb.co.com/gVjzd78/line-1.png"
              alt=""
              width={16}
              height={16}
            />
          </div>
        </Link>
      </PrimaryBtn>
    </div>
  );
};

export default ServiceCard;
