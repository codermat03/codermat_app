/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="md:mx-auto md:mx-8 md:max-w-[1480px]">
      <div className="md:py-20 py-10 bg-[url('https://i.ibb.co.com/Bq50dx0/chooseusbg.png')] bg-cover">
        <h1 className="text-center font-bold md:text-4xl text-2xl">
          Why choose CoderMat?
        </h1>
        <div className="grid lg:grid-cols-3 items-center justify-center md:my-28 my-10 md:mx-20 mx-5 md:mx-10 gap-5 lg:gap-20">
          <div className="relative self-center">
            <Image
              className="rounded-xl"
              width={350}
              height={350}
              src="https://img.freepik.com/free-vector/flat-people-asking-questions-illustrated_23-2148898772.jpg"
              alt="Background"
            />
            <Image
              className="absolute top-44 -right-6"
              width={200}
              height={200}
              src="https://i.ibb.co.com/FqsS3dH/Untitled-design-1.png"
              alt="Background"
            />
          </div>
          <div className="flex flex-col items-center self-center gap-5 lg:gap-10">
            <div>
              <h1 className="text-lg font-bold py-2">
                Team’s Seniority & Loyalty
              </h1>
              <p>
                At <span className="text-xl font-bold">CoderMat</span>, we value
                our team's seniority and loyalty. Our experienced professionals
                ensure top-quality results through collaboration and commitment,
                fostering long-term success for our clients and projects.
              </p>
            </div>
            <div>
              <h1 className="text-lg font-bold py-2">Tech Diversity</h1>
              <p>
                At <span className="text-xl font-bold">CoderMat</span>, our tech
                diversity ensures innovative solutions, leveraging the latest
                tools and trends for client success.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:gap-10 items-center self-center">
            <div>
              <h1 className="text-lg font-bold py-2">Versatility</h1>
              <p>
                At <span className="text-xl font-bold">CoderMat</span>, our tech
                diversity ensures innovative solutions, leveraging the latest
                tools and trends for client success.
              </p>
            </div>
            <div>
              <h1 className="text-lg font-bold py-2">Operational Excellence</h1>
              <p>
                At <span className="text-xl font-bold">CoderMat</span>, we
                prioritize operational excellence by optimizing processes,
                ensuring flawless execution, and delivering high-quality,
                efficient solutions for long-term client success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
