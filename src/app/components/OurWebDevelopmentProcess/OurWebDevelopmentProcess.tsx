import React from "react";

const OurWebDevelopmentProcess = () => {
  return (
    <main className="  bg-[url('https://i.postimg.cc/Y24H959r/pattern-developmen-process.png')] bg-no-repeat bg-left-top ">
      <div className="min-h-screen flex items-center px-1 md:px-0 justify-center md:p-5 lg:p-10 bg-no-repeat lg:bg-contain	 bg-right	 bg-[url('https://i.postimg.cc/TYvK038H/Pattern-for-development-process.png')]">
        <div className="max-w-5xl mx-auto text-white">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-center mt-5 md:mt-0 mb-5 md:mb-16">
            Our Web Development Process
          </h1>

          {/* Process Steps */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full z-0 hidden md:block">
              <img
                className="h-full "
                src="https://i.postimg.cc/h42kyWnV/development-process.png"
                alt="Vertical process line"
              />
            </div>

            {/* Step 1 */}
            <div className="relative md:flex items-center px-1 md:px-0 mb-5 md:mb-16  md:-ms-20 z-10">
              <div className="md:w-1/2 md:pr-20 md:text-right mt-10">
                <div className="bg-[#2d1b39] p-6 md:ml-20 lg:ml-0 rounded-lg shadow-lg relative">
                  <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#2d1b39] rotate-45 -z-10"></div>
                  <h2 className="text-lg font-semibold mb-2">
                    1. Discovery and Business Analysis
                  </h2>
                  <p className="text-gray-300 text-sm">
                    The initial research efforts in the project definition start
                    with the project discovery phase, where our business
                    analysts understand the project’s purpose.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex items-center px-1 md:px-0 mb-5 md:mb-16 md:ms-20 z-10">
              <div className="relative md:w-1/2 flex justify-center"></div>
              <div className="md:w-1/2 md:pl-20">
                <div className="bg-[#2d1b39] p-6  rounded-lg shadow-lg relative">
                  <div className="hidden md:block absolute -left-3 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#2d1b39] rotate-45 -z-10"></div>
                  <h2 className="text-lg font-semibold mb-2 ">
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
            <div className="relative md:flex items-center px-1 md:px-0 mb-5 md:mb-16  md:-ms-20 z-10">
              <div className="md:w-1/2 md:pr-20 md:text-right">
                <div className="bg-[#2d1b39] p-6 md:ml-20 lg:ml-0 rounded-lg shadow-lg relative">
                  <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#2d1b39] rotate-45 -z-10"></div>
                  <h2 className="text-lg font-semibold mb-2">
                    3. Back-end development
                  </h2>
                  <p className="text-gray-300 text-sm">
                    In this stage, we implement the application logic on the
                    back end using proven frameworks.
                  </p>
                </div>
              </div>
              <div className="relative w-1/2 flex justify-center"></div>
            </div>

            {/* Step 4 */}
            <div className="relative flex items-center px-1 md:px-0 mb-5 md:mb-16 md:ms-20 z-10">
              <div className="relative md:w-1/2 flex justify-center"></div>
              <div className="md:w-1/2 md:pl-20">
                <div className="bg-[#2d1b39] p-6 rounded-lg shadow-lg relative">
                  <div className="hidden md:block absolute -left-3 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#2d1b39] rotate-45 -z-10"></div>
                  <h2 className="text-lg font-semibold mb-2">4. Integration</h2>
                  <p className="text-gray-300 text-sm">
                    We set up APIs for web app integration to ensure seamless
                    data synchronization.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative md:flex items-center px-1 md:px-0 mb-5 md:mb-16  md:-ms-20 z-10">
              <div className="md:w-1/2 md:pr-20 md:text-right">
                <div className="bg-[#2d1b39] p-6 md:ml-20 lg:ml-0 rounded-lg shadow-lg relative">
                  <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#2d1b39] rotate-45 -z-10"></div>
                  <h2 className="text-lg font-semibold mb-2">
                    5. Testing and Hot Fixes
                  </h2>
                  <p className="text-gray-300 text-sm">
                    We extend hot fixes within 24 hours to resolve any issues in
                    the functionality of your application.
                  </p>
                </div>
              </div>
              <div className="relative w-1/2 flex justify-center"></div>
            </div>

            {/* Step 6 */}
            <div className="relative flex items-center px-1 md:px-0 mb-5 md:mb-16 md:ms-20 z-10">
              <div className="relative md:w-1/2 flex justify-center"></div>
              <div className="md:w-1/2 md:pl-20">
                <div className="bg-[#2d1b39] p-6 rounded-lg shadow-lg relative">
                  <div className="hidden md:block absolute -left-3 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#2d1b39] rotate-45 -z-10"></div>
                  <h2 className="text-lg font-semibold mb-2">
                    6. Support and Evolution
                  </h2>
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
