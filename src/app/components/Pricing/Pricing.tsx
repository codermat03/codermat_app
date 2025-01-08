import React from "react";

const Pricing = () => {
  return (
    <div className="pt-8 md:pt-20 md:pb-20 md:mx-auto md:max-w-[1480px]">
      <h1 className="text-center font-bold md:text-4xl text-2xl md:px-0 px-4">
        Pricing Options for Our Services
      </h1>
      <p className="text-center lg:text-xl md:px-0 px-4 md:w-1/2 m-auto pt-4">
        Affordable Plans Customized for Your Business Needs: Select the Right
        Package for Your Success.
      </p>
      <div className="lg:mx-20 pt-8 md:pt-20">
        <div className="grid md:mx-auto md:grid-cols-2 lg:grid-cols-3 md:gap-0 md:gap-y-10 gap-y-6 justify-center">
          {/* Basic Plan Card */}
          <div className="grid gap-3 mx-auto bg-[#2D1B38] p-8 rounded-3xl md:w-[360px] md:h-[480px} w-[360px]">
            <h1 className="text-base">Basic</h1>
            <h1>
              <span className="text-3xl font-bold">${200}</span>/month
            </h1>
            <p className="text-[#ffffff4c]">Billed monthly</p>
            <p>
              Perfect for startups looking to create a strong online presence
              with a customized website.
            </p>
            <div className="grid gap-5">
              <button className="mb-2 mt-auto border-2 text-lg gap-2 border-[#ffffff5e] bg-gradient-to-r from-[#49156D] to-[#49165C] hover:border-[#a33ed2] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150 px- py-2 rounded-xl">
                Try for free
              </button>
              <div className="w-full border-t border-dashed border-white"></div>
              <div className="flex flex-col gap-1">
                <p>
                  <span className="text-xl font-bold"></span>✔️ Custom website
                </p>
                <p>
                  <span className="text-xl font-bold"></span>✔️ Up to 7
                  Information Pages
                </p>
                <p>
                  <span className="text-xl font-bold"></span>✔️ Not included in
                  the plan
                </p>
                <p>
                  <span className="text-xl font-bold"></span>✔️ ~2 weeks to
                  complete
                </p>
                <p>
                  <span className="text-xl font-bold"></span>✔️ 2 months of free
                  support
                </p>
                <p className="pt-2">
                  Get started with your online presence today with{" "}
                  <span className="text-lg font-semibold">CoderMat</span>!
                </p>
              </div>
            </div>
          </div>

          {/* Premium Plan Card */}
          <div className="relative grid border-t-4 border-[#7D1A8D] gap-3 mx-auto bg-[#2D1B38] p-12 rounded-3xl md:w-[360px] md:h-[480px} w-[360px]">
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#7D1A8D] w-[240px] h-[30px] rounded-b-full flex justify-center items-center text-white text-lg">
              Recommended
            </div>
            <h1 className="text-base mt-4">Premium</h1>
            <h1>
              <span className="text-3xl font-bold">${600}</span>/month
            </h1>
            <p className="text-[#ffffff4c]">Billed monthly</p>
            <p>
              Ideal for growing businesses needing advanced functionalities and
              a larger site
            </p>
            <div className="grid gap-5">
              <button className="mb-2 mt-auto border-2 text-lg gap-2 border-[#ffffff5e] bg-gradient-to-r from-[#49156D] to-[#49165C] hover:border-[#a33ed2] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150 px-4 py-2 rounded-xl">
                Try for free
              </button>
              <div className="w-full border-t border-dashed border-white"></div>
              <div className="flex flex-col gap-1">
                <p>
                  <span className="text-xl font-bold"></span>✔️ Custom designs &
                  animations
                </p>
                <p>
                  <span className="text-xl font-bold"></span>✔️ Up to 15
                  Information Pages
                </p>
                <p>
                  <span className="text-xl font-bold"></span>✔️ Includes full
                  blog functionality
                </p>
                <p>
                  <span className="text-xl font-bold"></span>✔️ Approximately 4
                  weeks
                </p>
                <p>
                  <span className="text-xl font-bold"></span>✔️ 6 months of
                  priority support
                </p>
                <p className="pt-2">
                  Scale your online presence with{" "}
                  <span className="text-lg font-semibold">CoderMat</span>!
                </p>
              </div>
            </div>
          </div>

          {/* Plus Plan Card */}
          <div className="grid gap-3 mx-auto bg-[#2D1B38] p-12 rounded-3xl md:w-[360px] md:h-[480px} w-[360px]">
            <h1 className="text-base">Plus</h1>
            <h1>
              <span className="text-3xl font-bold">${1000}</span>/month
            </h1>
            <p className="text-[#ffffff4c]">Billed monthly</p>
            <p>
              Comprehensive package for established businesses requiring
              extensive site features
            </p>
            <div className="grid gap-5">
              <button className="mb-2 mt-auto border-2 text-lg gap-2 border-[#ffffff5e] bg-gradient-to-r from-[#49156D] to-[#49165C] hover:border-[#a33ed2] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150 px-4 py-2 rounded-xl">
                Try for free
              </button>
              <div className="flex flex-col gap-1">
                <div className="w-full border-t border-dashed border-white"></div>
                <p>
                  <span className="text-xl font-bold"></span>✔️ Premium designs
                  with animation
                </p>
                <p>
                  <span className="text-xl font-bold"></span>✔️ Unlimited pages
                </p>
                <p>
                  <span className="text-xl font-bold"></span>✔️ Full blog setup
                  and integration
                </p>
                <p>
                  <span className="text-xl font-bold"></span>✔️ Approximately 6
                  weeks
                </p>
                <p>
                  <span className="text-xl font-bold"></span>✔️ 1 year of
                  priority support
                </p>
                <p className="pt-2">
                  Achieve complete business growth with{" "}
                  <span className="text-lg font-semibold">CoderMat</span>!
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
