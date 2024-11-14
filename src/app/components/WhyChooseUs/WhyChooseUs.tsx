/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="">
      <div className="md:py-32 py-20 bg-[url('https://i.ibb.co.com/Bq50dx0/chooseusbg.png')] bg-cover">
        <h1 className="text-center font-bold md:text-4xl text-2xl">
          Why choose CoderMat?
        </h1>
        <p className="text-center md:text-xl text-lg md:px-0 px-4 md:w-3/5 m-auto pt-4">
          Choosing <span className="text-xl font-bold">CoderMat</span> means
          partnering with a team where creativity meets cutting-edge technology.
          Our highly skilled developers and tech professionals bring
          unparalleled expertise to every project, ensuring your vision is
          brought to life with precision and innovation. We recognize that each
          project is unique, which is why we offer tailored solutions designed
          to meet your specific needs. With a commitment to excellence and an
          unwavering focus on your success, we go beyond just meeting
          expectations—we strive to exceed them. Let’s work together to bring
          your ideas to life and drive your business forward with exceptional
          digital solutions.
        </p>
        <div className="grid md:grid-cols-3 items-center justify-center md:my-28 my-10 md:mx-20 mx-10 gap-20">
          <div className="relative">
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
          <div className="flex flex-col gap-10">
            <div>
              <h1 className="text-lg font-bold py-2">
                Team’s Seniority & Loyalty
              </h1>
              <p>
                At <span className="text-xl font-bold">CoderMat</span>, we value
                the seniority and loyalty of our team members. Our experienced
                professionals bring a wealth of knowledge and expertise to every
                project, ensuring that we deliver the best results for our
                clients. Their commitment to the company fosters a strong sense
                of teamwork and collaboration, which is reflected in the quality
                of our work. We believe in nurturing long-term relationships
                with our team, as their loyalty directly contributes to the
                success of our projects and the satisfaction of our clients.
              </p>
            </div>
            <div>
              <h1 className="text-lg font-bold py-2">Tech Diversity</h1>
              <p>
                At <span className="text-xl font-bold">CoderMat</span>, we
                embrace tech diversity as a key element of our success. Our team
                is proficient in a wide range of technologies and programming
                languages, which enables us to select the best tools for each
                project. This diversity not only enhances our problem-solving
                capabilities but also allows us to innovate and implement
                solutions that are best suited to our clients' needs. By staying
                up-to-date with industry trends and emerging technologies, we
                ensure that our clients benefit from the latest advancements,
                ultimately driving greater efficiency and effectiveness in their
                operations.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <h1 className="text-lg font-bold py-2">Versatility</h1>
              <p>
                At <span className="text-xl font-bold">CoderMat</span>,
                versatility is one of our core strengths. Our team is equipped
                with diverse skills and expertise across various technologies
                and industries, allowing us to adapt to the unique needs of each
                project. Whether it’s developing custom software solutions,
                integrating new technologies, or providing comprehensive
                support, we are able to respond effectively to changing
                requirements. This flexibility enables us to explore innovative
                approaches and deliver tailored solutions that drive your
                business forward.
              </p>
            </div>
            <div>
              <h1 className="text-lg font-bold py-2">Operational Excellence</h1>
              <p>
                At <span className="text-xl font-bold">CoderMat</span>,
                operational excellence is at the heart of our mission. We strive
                to optimize our processes and workflows to deliver efficient and
                effective solutions to our clients. By focusing on continuous
                improvement, we enhance our productivity and quality of work
                while minimizing waste and errors. Our dedicated team utilizes
                best practices and advanced methodologies to ensure that every
                phase of a project is executed flawlessly. This commitment to
                operational excellence not only elevates the service we provide
                but also contributes to the long-term success of our clients'
                businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
