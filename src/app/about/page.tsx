/* eslint-disable react/no-unescaped-entities */
import React from "react";

const AboutUs = () => {
  return (
    <main className="text-white  bg-gradient-to-bl from-[#93239d] via-[#190b34] to-[#280d42]">
      <h1 className="text-center font-bold text-4xl pt-32">About Us</h1>

      <div className=" py-20 px-8 max-w-7xl mx-auto">
        {/* Top section */}
        <section className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16">
          {/* Testimonial */}
          <div className="bg-white/10 p-6 rounded-lg max-w-md">
            <div className="flex items-center mb-4">
              <img
                src="https://www.infomazeelite.com/wp-content/uploads/2022/03/Hire-Dedicated-Development-Team.png"
                alt="Discord Logo"
              />
            </div>
            <p className="font-bold text-xl">
              <span className="font-bold text-xl">Nayem</span> / CEO,{" "}
              <span className="font-bold text-xl">CoderMat</span>
            </p>
          </div>

          {/* Mission */}
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold mb-6">
              On a mission to empower teams
            </h1>
            <p className="mb-4">
              At <span className="font-bold text-xl">CoderMat</span>, we are
              dedicated to providing businesses with the tools they need to
              thrive in the digital world. Our focus is on building intuitive,
              user-friendly websites that not only help you establish a strong
              online presence but also enable your customers to easily interact
              with your brand. We believe that technology should work for you,
              not the other way around. Our goal is to help your team reach its
              full potential by providing a seamless digital experience that
              drives growth and engagement.
            </p>
            <p className="mb-4">
              While our main goal is to create engaging, high-quality websites,
              we also understand the importance of making every interaction
              count. Whether it's through compelling design or streamlined
              functionality, we ensure that your website helps users easily
              achieve their goals without confusion or frustration.
            </p>
            <p className="mb-4">
              At <span className="font-bold text-xl">CoderMat</span>, we focus
              on both aesthetics and performance. Just as a well-crafted design
              can support content, we ensure that the content is the driving
              force behind every design decision. By understanding both your
              business and your customers, we create websites that are not only
              beautiful but also functional and purpose-driven.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <h2 className="text-3xl font-bold">2000</h2>
                <p>Founded</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">23K</h2>
                <p>Employees</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">203K</h2>
                <p>Customers</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">$409M</h2>
                <p>Raised</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom section */}
        <section className="flex flex-col lg:flex-row items-start justify-items-end gap-10">
          <div className="max-w-xl">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
              <p className="mb-6 hidden">
                We believe that collaboration is key to the success of any
                project. Our process starts with understanding your goals,
                audience, and objectives. From there, we combine design,
                functionality, and usability to create digital solutions that
                work seamlessly and deliver measurable results. Every step of
                our process is guided by a desire to solve your problems, not
                just create a website.
              </p>

              <ul className="list-disc pl-6 mb-6">
                <li>
                  <span className="font-bold text-xl">
                    Custom Design & Development:
                  </span>{" "}
                  Every project is unique. We don’t rely on templates but create
                  custom, responsive designs that reflect your brand and meet
                  your specific needs.
                </li>
                <li>
                  <span className="font-bold text-xl">
                    User-Centered Approach:
                  </span>{" "}
                  Whether you need to build a brand-new website or revamp an
                  existing one, we ensure that your users have a seamless and
                  satisfying experience.
                </li>
                <li>
                  <span className="font-bold text-xl">
                    Results-Driven Strategy:
                  </span>{" "}
                  Our work isn’t just about looking good; it’s about achieving
                  the business goals that matter. From boosting conversion rates
                  to improving engagement, we focus on results that directly
                  impact your bottom line.
                </li>
              </ul>
            </div>
            <h2 className="text-3xl font-bold mb-6">Our Process</h2>
            <p className="mb-6">
              We believe that collaboration is key to the success of any
              project. Our process starts with understanding your goals,
              audience, and objectives. From there, we combine design,
              functionality, and usability to create digital solutions that work
              seamlessly and deliver measurable results. Every step of our
              process is guided by a desire to solve your problems, not just
              create a website.
            </p>

            <ul className="list-disc pl-6 mb-6">
              <li>
                <span className="font-bold text-xl">Discovery & Strategy:</span>{" "}
                We begin by understanding your business, industry, and goals so
                we can develop a strategy that works for you.
              </li>
              <li>
                <span className="font-bold text-xl">Design & Development:</span>{" "}
                Our design team creates custom, user-friendly designs that
                reflect your brand, while our developers ensure that the website
                is fast, secure, and scalable.
              </li>
              <li>
                <span className="font-bold text-xl">Testing & Launch:</span>{" "}
                Before going live, we test everything to ensure it’s perfect.
                From performance to usability, we ensure your website works
                flawlessly.
              </li>
              <li>
                <span className="font-bold text-xl">
                  Support & Optimization:
                </span>{" "}
                After launch, we continue to support and optimize your website
                to ensure it remains up-to-date and effective in achieving your
                goals.
              </li>
            </ul>

            <p className="mb-6">
              With <span className="font-bold text-xl">CoderMat</span>, you're
              not just getting a website — you're getting a partner committed to
              your business's success. Let us help you take your digital
              presence to the next level.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg max-w-md">
            <div className="flex items-center mb-4">
              <img
                src="https://www.infomazeelite.com/wp-content/uploads/2022/03/Hire-Dedicated-Development-Team.png"
                alt="Discord Logo"
              />
            </div>
            <p className="font-bold text-xl">
              <span className="font-bold text-xl">Nayem</span> / CEO,{" "}
              <span className="font-bold text-xl">CoderMat</span>
            </p>
          </div>
        </section>
      </div>
      <img
        className="w-full pt-14"
        src="https://i.postimg.cc/kgGNMLQ8/home14-bg4.png"
        alt=""
      />
    </main>
  );
};

export default AboutUs;
