import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="">
      <div className="md:py-32 py-20 bg-[url('https://i.ibb.co.com/Bq50dx0/chooseusbg.png')] bg-cover">
        <h1 className="text-center font-bold md:text-4xl text-2xl">Why choose CoderMat?</h1>
        <p className="text-center md:text-xl text-lg md:px-0 px-4 md:w-3/5 m-auto pt-4">
          Unlike other development companies, you’ll get to know our experts
          face-to-face. We go the distance to understand your business and
          integrate with your teams and workflows.
        </p>
        <div className="grid md:grid-cols-3 items-center justify-center md:my-28 my-10 md:mx-20 mx-10 gap-20">
          <div className="relative">
            <Image
              className=""
              width={350}
              height={350}
              src="https://i.ibb.co.com/BGY5CjF/image-15.png"
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
          <div className="flex flex-col gap-10">
            <div>
              <h1 className="text-lg font-bold py-2">
                Team’s Seniority & Loyalty
              </h1>
              <p>
                Our rigorous screening process (passed by less than 2% of
                developers) results in a team of Mid and Senior developers who
                have been with us for years, providing clients with stability,
                assurance, and technical proficiency. This also allows us to
                advise on the IT strategy and help in making informed decisions
                about implementing scalable projects.
              </p>
            </div>
            <div>
              <h1 className="text-lg font-bold py-2">Tech Diversity</h1>
              <p>
                Our full-stack team can deliver projects end-to-end and approach
                them as advisors to ensure optimal performance, scalability, and
                maintainability – so you can avoid costly technical debt down
                the line.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <h1 className="text-lg font-bold py-2">Versatility</h1>
              <p>
                We offer both managed IT services and product delivery, allowing
                us to work on individual modules or entire ecosystems of
                applications. Our team has experience building products from
                scratch, modernizing legacy systems, and integrating new
                solutions that accelerate the deployment of new functionalities.
              </p>
            </div>
            <div>
              <h1 className="text-lg font-bold py-2">Operational Excellence</h1>
              <p>
                We have developed strict yet flexible processes to ensure that
                every solution we deliver is nothing short of excellent. We
                proactively monitor, analyze risks, and use robust QA procedures
                to make sure that everything runs smoothly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
