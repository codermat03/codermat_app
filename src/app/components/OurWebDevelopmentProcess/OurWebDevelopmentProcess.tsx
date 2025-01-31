import Image from "next/image";
import React from "react";

const OurWebDevelopmentProcess = () => {
  return (
    <main className="bg-[url('https://i.postimg.cc/Y24H959r/pattern-developmen-process.png')] bg-no-repeat bg-left-top">
      <div className="min-h-screen flex items-center px-3 md:px-0 justify-center md:p-5 bg-no-repeat bg-right lg:bg-[length:60%] bg-[url('https://i.postimg.cc/TYvK038H/Pattern-for-development-process.png')]">
        <div className="max-w-5xl mx-auto text-white md:py-20">
          {/* Title */}
          <div className="text-center mt-5 md:mt-0 mb-5 md:pb-20">
            <h1 className="text-2xl md:px-0 px-8 md:text-4xl font-bold">
              Our Web Development Process
            </h1>
            <p className="mt-4 text-gray-300">
              From Idea to Implementation: Our Seamless Web Development Process
              to Bring Your Vision to Life
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full z-0 hidden md:block">
              <Image
                className="h-full"
                src="https://i.ibb.co.com/0mcjR09/Group-1000002433.png"
                alt="Vertical process line"
                layout="intrinsic"
                width={223}
                height={1000}
              />
            </div>

            {/* Step 1 */}
            <div className="relative md:flex items-center px-3 md:px-0 mb-5 md:mb-16 z-10">
              <div className="md:w-1/2 md:pr-20 md:text-right mt-10">
                <div className="bg-[#2d1b39] p-6 rounded-lg shadow-lg relative hover:shadow-xl transition-shadow duration-300">
                  <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#2d1b39] rotate-45 -z-10"></div>

                  <h2 className="text-lg font-semibold">
                    1. Discovery and Business Analysis
                  </h2>
                  <p className="text-gray-300 text-sm">
                    The initial research efforts in the project definition start
                    with the project discovery phase, where our business
                    analysts understand the project’s purpose.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2"></div>{" "}
              {/* Empty spacer for alignment */}
            </div>

            {/* Step 2 */}
            <div className="relative md:flex items-center px-3 md:px-0 mb-5 md:mb-16 z-10">
              <div className="md:w-1/2"></div>{" "}
              {/* Empty spacer for alignment */}
              <div className="md:w-1/2 md:pl-20 mt-5">
                <div className="bg-[#2d1b39] p-6 rounded-lg shadow-lg relative hover:shadow-xl transition-shadow duration-300">
                  <div className="hidden md:block absolute -left-3 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#2d1b39] rotate-45 -z-10"></div>

                  <h2 className="text-lg font-semibold">
                    2. Front-end design and development
                  </h2>
                  <p className="text-gray-300 text-sm">
                    After understanding user audience needs, our web designers
                    incorporate these requirements in UI design.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative md:flex items-center px-3 md:px-0 mb-5 md:mb-16 z-10">
              <div className="md:w-1/2 md:pr-20 md:text-right mt-5">
                <div className="bg-[#2d1b39] p-6 rounded-lg shadow-lg relative hover:shadow-xl transition-shadow duration-300">
                  <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#2d1b39] rotate-45 -z-10"></div>

                  <h2 className="text-lg font-semibold">
                    3. Back-end development
                  </h2>
                  <p className="text-gray-300 text-sm">
                    In this stage, we implement the application logic on the
                    back end using proven frameworks.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2"></div>{" "}
              {/* Empty spacer for alignment */}
            </div>

            {/* Step 4 */}
            <div className="relative md:flex items-center px-3 md:px-0 mb-5 md:mb-16 z-10">
              <div className="md:w-1/2"></div>{" "}
              {/* Empty spacer for alignment */}
              <div className="md:w-1/2 md:pl-20 mt-4">
                <div className="bg-[#2d1b39] p-6 rounded-lg shadow-lg relative hover:shadow-xl transition-shadow duration-300">
                  <div className="hidden md:block absolute -left-3 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#2d1b39] rotate-45 -z-10"></div>

                  <h2 className="text-lg font-semibold">4. Integration</h2>
                  <p className="text-gray-300 text-sm">
                    We set up APIs for web app integration to ensure seamless
                    data synchronization.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative md:flex items-center px-3 md:px-0 mb-5 md:mb-16 z-10">
              <div className="md:w-1/2 md:pr-20 md:text-right mt-4">
                <div className="bg-[#2d1b39] p-6 rounded-lg shadow-lg relative hover:shadow-xl transition-shadow duration-300">
                  <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#2d1b39] rotate-45 -z-10"></div>
                  <h2 className="text-lg font-semibold">
                    5. Testing and Hot Fixes
                  </h2>
                  <p className="text-gray-300 text-sm">
                    We extend hot fixes within 24 hours to resolve any issues in
                    the functionality of your application.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2"></div>{" "}
              {/* Empty spacer for alignment */}
            </div>

            {/* Step 6 */}
            <div className="relative md:flex items-center px-3 md:px-0 mb-5 md:mb-16 z-10">
              <div className="md:w-1/2"></div>{" "}
              {/* Empty spacer for alignment */}
              <div className="md:w-1/2 md:pl-20 mt-5">
                <div className="bg-[#2d1b39] p-6 rounded-lg shadow-lg relative hover:shadow-xl transition-shadow duration-300">
                  <div className="hidden md:block absolute -left-3 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#2d1b39] rotate-45 -z-10"></div>
                  <div className="flex items-center mb-2">
                    <h2 className="text-lg font-semibold">
                      6. Support and Evolution
                    </h2>
                  </div>
                  <p className="text-gray-300 text-sm">
                    We continually support and advance your software by adding
                    new features to align with your business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurWebDevelopmentProcess;
