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
                src="https://scontent.fjsr13-1.fna.fbcdn.net/v/t39.30808-6/350638671_793054565712230_366404522768911357_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=G8Qd-w52pfAQ7kNvgGIRHDO&_nc_ht=scontent.fjsr13-1.fna&oh=00_AYBifBZycCmsJWt_1xwBsFhL_B-_D7rsde-qFEwuf9sgKA&oe=66F1C65D"
                alt="Discord Logo"
              />
            </div>
            <p className="font-bold">Nayem / CEO, CoderMat</p>
          </div>

          {/* Mission */}
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold mb-6">
              On a mission to <br /> empower teams
            </h1>
            <p className="mb-4">
              Sales copywriting is all about getting users to make a purchase or
              sign up for a product or service. UX copywriting, on the other
              hand, is all about helping users reach a goal efficiently and
              effectively.
            </p>
            <p className="mb-4">
              There are overlaps between the two, for sure. But while sales
              copywriting is often about convincing a customer to do something,
              UX copywriting is about helping them do something they're already
              trying to do. You don't have to sell them on the goal, just help
              them achieve it.
            </p>
            <p className="mb-4">
              Believe it or not, copywriting is one of the most important
              content-creation skills a designer can possess. If you think about
              it, design exists to support and deliver content—not the other way
              around.
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
            <h2 className="text-3xl font-bold mb-6">Our Process</h2>
            <p className="mb-6">
              Believe it or not, copywriting is one of the most important
              content-creation skills a designer can possess. If you think about
              it, design exists to support and deliver content—not the other way
              around.
            </p>
            <p className="mb-6">
              As a designer, content should be the driving force behind many of
              your decisions, whether you’re creating the content or someone
              else is. So if you can understand how to write effective copy (and
              understand the purpose that it serves), you'll be able to better
              serve your clients and ultimately create better designs.
            </p>

            <h3 className="text-xl font-bold mb-2">
              Sales Copywriting vs. UX Copywriting
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Why consistent writing makes you a better designer</li>
              <li>5 soft skills every product designer should master</li>
              <li>The UX Writing Starter-Kit</li>
            </ul>
            <p className="mb-6">
              As a designer, content should be the driving force behind many of
              your decisions, whether you’re creating the content or someone
              else is. So if you can understand how to write effective copy (and
              understand the purpose that it serves), you'll be able to better
              serve your clients and ultimately create better designs.
            </p>
            <p className="mb-6">
              As a designer, content should be the driving force behind many of
              your decisions, whether you’re creating the content or someone
              else is. So if you can understand how to write effective copy (and
              understand the purpose that it serves), you'll be able to better
              serve your clients and ultimately create better designs.
            </p>
          </div>
          <div className="flex-shrink-0">
            <img
              className="w-[450px] rounded-2xl"
              src="https://scontent.fjsr13-1.fna.fbcdn.net/v/t39.30808-6/333512058_932828284386738_1785459851647311778_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=-3dY0j4T1IQQ7kNvgHVkUAr&_nc_ht=scontent.fjsr13-1.fna&oh=00_AYDAeHqtTEOIrcLhityt2lGC6yToB0RMtdJInJ44wNeTeQ&oe=66F1CDF1"
              alt="Team Working"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutUs;
