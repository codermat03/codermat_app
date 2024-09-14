import React from "react";

const OurWebDevelopmentProcess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-20">
      <div className="max-w-5xl mx-auto text-white">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-16">
          Our Web Development Process
        </h1>

        {/* Process Steps */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full z-0">
            <img
              className="h-full"
              src="https://i.postimg.cc/h42kyWnV/development-process.png"
              alt=""
            />
          </div>

          {/* Step 1 */}
          <div className="relative flex items-center mb-16 z-10">
            <div className="w-1/2 pr-20 text-right">
              <div className="bg-purple-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold mb-2">
                  1. Discovery and Business Analysis
                </h2>
                <p className="text-gray-300 text-sm">
                  The initial research efforts in the project definition start
                  with the project discovery phase, where our business analysts
                  understand the project’s purpose.
                </p>
              </div>
            </div>
            <div className="relative w-1/2 flex justify-center">
              <div className="bg-purple-600 rounded-full p-4 z-10">
                <img
                  src="/discovery-icon.png"
                  alt="Discovery Icon"
                  className="w-10 h-10"
                />
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative flex items-center mb-16 z-10">
            <div className="relative w-1/2 flex justify-center">
              <div className="bg-purple-600 rounded-full p-4 z-10">
                <img
                  src="/frontend-icon.png"
                  alt="Frontend Icon"
                  className="w-10 h-10"
                />
              </div>
            </div>
            <div className="w-1/2 pl-8">
              <div className="bg-purple-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold mb-2">
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
          <div className="relative flex items-center mb-16 z-10">
            <div className="w-1/2 pr-8 text-right">
              <div className="bg-purple-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold mb-2">
                  3. Back-end development
                </h2>
                <p className="text-gray-300 text-sm">
                  In this stage, we implement the application logic on the back
                  end using proven frameworks.
                </p>
              </div>
            </div>
            <div className="relative w-1/2 flex justify-center">
              <div className="bg-purple-600 rounded-full p-4 z-10">
                <img
                  src="/backend-icon.png"
                  alt="Backend Icon"
                  className="w-10 h-10"
                />
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative flex items-center mb-16 z-10">
            <div className="relative w-1/2 flex justify-center">
              <div className="bg-purple-600 rounded-full p-4 z-10">
                <img
                  src="/integration-icon.png"
                  alt="Integration Icon"
                  className="w-10 h-10"
                />
              </div>
            </div>
            <div className="w-1/2 pl-8">
              <div className="bg-purple-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold mb-2">4. Integration</h2>
                <p className="text-gray-300 text-sm">
                  We set up APIs for web app integration to ensure seamless data
                  synchronization.
                </p>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="relative flex items-center mb-16 z-10">
            <div className="w-1/2 pr-8 text-right">
              <div className="bg-purple-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold mb-2">
                  5. Testing and Hot Fixes
                </h2>
                <p className="text-gray-300 text-sm">
                  We extend hot fixes within 24 hours to resolve any issues in
                  the functionality of your application.
                </p>
              </div>
            </div>
            <div className="relative w-1/2 flex justify-center">
              <div className="bg-purple-600 rounded-full p-4 z-10">
                <img
                  src="/testing-icon.png"
                  alt="Testing Icon"
                  className="w-10 h-10"
                />
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="relative flex items-center z-10">
            <div className="relative w-1/2 flex justify-center">
              <div className="bg-purple-600 rounded-full p-4 z-10">
                <img
                  src="/support-icon.png"
                  alt="Support Icon"
                  className="w-10 h-10"
                />
              </div>
            </div>
            <div className="w-1/2 pl-8">
              <div className="bg-purple-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold mb-2">
                  6. Support and Evolution
                </h2>
                <p className="text-gray-300 text-sm">
                  We continually support and advance your software by adding new
                  features to align with your business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWebDevelopmentProcess;
