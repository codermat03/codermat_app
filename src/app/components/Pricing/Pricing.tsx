import React from "react";

const Pricing = () => {
  return (
    <div className="pt-20 pb-20">
      <h1 className="text-center font-bold md:text-4xl text-2xl md:px-0 px-4">
        Pricing Options for Our Services
      </h1>
      <p className="text-center text-xl md:px-0 px-4 md:w-1/2 m-auto pt-4">
        Affordable Plans Customized for Your Business Needs: Select the Right
        Package for Your Success.
      </p>
      <div className="mx-20 mt-20">
        <div className="grid md:mx-auto md:grid-cols-3 md:gap-0 md:gap-y-10 gap-y-6 justify-center">
          {/* Basic Plan Card */}
          <div className="grid gap-3 mx-auto bg-[#2D1B38] p-8 rounded-3xl md:w-[400px] md:h-[500px w-[330px]">
            <h1 className="text-lg">Basic</h1>
            <h1>
              <span className="text-4xl font-bold">${200}</span>/month
            </h1>
            <p className="text-[#ffffff4c]">Billed monthly</p>
            <p>
              Perfect for startups looking to create a strong online presence
              with a customized website.
            </p>
            <div className="divide-y divide-dashed grid gap-5">
              <button className="mb-2 mt-auto border-2 text-lg gap-2 border-[#ffffff5e] bg-gradient-to-r from-[#49156D] to-[#49165C] hover:border-[#a33ed2] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150 px- py-2 rounded-xl">
                Try for free
              </button>
              <div className="flex flex-col gap-3">
                <p>
                  <span className="text-xl font-bold">Design:</span> Custom
                  website that reflects your brand identity.
                </p>
                <p>
                  <span className="text-xl font-bold">Pages:</span> Up to 7
                  Information Pages.
                </p>
                <p>
                  <span className="text-xl font-bold">Blog:</span> Not included
                  in the plan.
                </p>
                <p>
                  <span className="text-xl font-bold">Development Time:</span>{" "}
                  Approximately 2 weeks for completion.
                </p>
                <p>
                  <span className="text-xl font-bold">Support:</span> 2 months
                  of free support.
                </p>
                <p>
                  Get started with your online presence today with{" "}
                  <span className="text-xl font-bold">CoderMat</span>!
                </p>
              </div>
            </div>
          </div>

          {/* Premium Plan Card */}
          <div className="relative grid border-t-4 border-[#7D1A8D] gap-3 mx-auto bg-[#2D1B38] p-12 rounded-3xl md:w-[400px] md:h-[500px w-[330px]">
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#7D1A8D] w-[240px] h-[30px] rounded-b-full flex justify-center items-center text-white text-lg">
              Recommended
            </div>
            <h1 className="text-lg mt-8">Premium</h1>
            <h1>
              <span className="text-4xl font-bold">${600}</span>/month
            </h1>
            <p className="text-[#ffffff4c]">Billed monthly</p>
            <p>
              Ideal for growing businesses needing advanced functionalities and
              a larger site.
            </p>
            <div className="divide-y divide-dashed grid gap-5">
              <button className="mb-2 mt-auto border-2 text-lg gap-2 border-[#ffffff5e] bg-gradient-to-r from-[#49156D] to-[#49165C] hover:border-[#a33ed2] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150 px-4 py-2 rounded-xl">
                Try for free
              </button>
              <div className="flex flex-col gap-3">
                <p>
                  <span className="text-xl font-bold">Design:</span> Advanced
                  custom design and animations.
                </p>
                <p>
                  <span className="text-xl font-bold">Pages:</span> Up to 15
                  Information Pages.
                </p>
                <p>
                  <span className="text-xl font-bold">Blog:</span> Included with
                  full blog functionality.
                </p>
                <p>
                  <span className="text-xl font-bold">Development Time:</span>{" "}
                  Approximately 4 weeks.
                </p>
                <p>
                  <span className="text-xl font-bold">Support:</span> 6 months
                  of priority support.
                </p>
                <p>
                  Scale your online presence with{" "}
                  <span className="text-xl font-bold">CoderMat</span>!
                </p>
              </div>
            </div>
          </div>

          {/* Plus Plan Card */}
          <div className="grid gap-3 mx-auto bg-[#2D1B38] p-12 rounded-3xl md:w-[400px] md:h-[500px w-[330px]">
            <h1 className="text-lg">Plus</h1>
            <h1>
              <span className="text-4xl font-bold">${1000}</span>/month
            </h1>
            <p className="text-[#ffffff4c]">Billed monthly</p>
            <p>
              Comprehensive package for established businesses requiring
              extensive site features.
            </p>
            <div className="divide-y divide-dashed grid gap-5">
              <button className="mb-2 mt-auto border-2 text-lg gap-2 border-[#ffffff5e] bg-gradient-to-r from-[#49156D] to-[#49165C] hover:border-[#a33ed2] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150 px-4 py-2 rounded-xl">
                Try for free
              </button>
              <div className="flex flex-col gap-3">
                <p>
                  <span className="text-xl font-bold">Design:</span> Premium
                  custom design with animation and interactions.
                </p>
                <p>
                  <span className="text-xl font-bold">Pages:</span> Unlimited
                  pages.
                </p>
                <p>
                  <span className="text-xl font-bold">Blog:</span> Full blog
                  setup and integration.
                </p>
                <p>
                  <span className="text-xl font-bold">Development Time:</span>{" "}
                  Approximately 6 weeks.
                </p>
                <p>
                  <span className="text-xl font-bold">Support:</span> 1 year of
                  priority support.
                </p>
                <p>
                  Achieve complete business growth with{" "}
                  <span className="text-xl font-bold">CoderMat</span>!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
