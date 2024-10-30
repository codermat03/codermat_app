import React from "react";

const Pricing = () => {
  return (
    <div className="pt-20 pb-20 ">
      <h1 className="text-center font-bold text-4xl">
        Pricing Options for Our Services
      </h1>
      <p className="text-center text-xl w-1/2 m-auto pt-4">
        We focus on ergonomics and meeting you where you work. It’s only a
        keystroke away.
      </p>
      <div className="mx-20 mt-20">
        {/* <div className="w-[350px] mb-10 rounded-full border-[3.5px] border-[#7D1A8D]">
          <div className="flex bg-[#2C1C36] rounded-full items-center p-1 gap-10 font-semibold text-md">
            <button className="bg-gradient-to-r from-[#49156D] to-[#49165C] py-3 px-12 rounded-full">
              Personal
            </button>
            <button className="py-3">Professional</button>
          </div>
        </div> */}
        <div className="grid grid-cols-3 justify-center">
          <div className="grid gap-3 mx-auto bg-[#2D1B38] p-12 rounded-3xl w-[340px] h-[500px]">
            <h1 className="text-lg">Basic</h1>
            <h1>
              <span className="text-4xl font-bold">${600}</span>/month
            </h1>
            <p className="text-[#ffffff4c]">Billed monthly</p>
            <div className="divide-y divide-dashed grid gap-5">
              <button className="mb-2 mt-auto border-2 text-lg gap-2 border-[#ffffff5e] bg-gradient-to-r from-[#49156D] to-[#49165C] hover:border-[#a33ed2] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150 px- py-2 rounded-xl">
                Try for free
              </button>
              <div className="flex flex-col gap-3">
                <p className="flex gap-2 items-center mt-6">
                  <span className="bg-white rounded-full py-[2px] px-[2.5px]">
                    ✔️
                  </span>{" "}
                  100 GB Storage
                </p>
                <p className="flex gap-2 items-center">
                  <span className="bg-white rounded-full py-[2px] px-[2.5px]">
                    ✔️
                  </span>{" "}
                  100 GB Storage
                </p>
                <p className="flex gap-2 items-center">
                  <span className="bg-white rounded-full py-[2px] px-[2.5px]">
                    ✔️
                  </span>{" "}
                  100 GB Storage
                </p>
                <p className="flex gap-2 items-center">
                  <span className="bg-white rounded-full py-[2px] px-[2.5px]">
                    ✔️
                  </span>{" "}
                  100 GB Storage
                </p>
                <p className="flex gap-2 items-center">
                  <span className="bg-white rounded-full py-[2px] px-[2.5px]">
                    ✔️
                  </span>{" "}
                  100 GB Storage
                </p>
              </div>
            </div>
          </div>
          <div className="relative grid border-t-4 border-[#7D1A8D] gap-3 mx-auto bg-[#2D1B38] p-12 rounded-3xl w-[340px] h-[500px]">
            {/* Upper rounded border with centered text */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#7D1A8D] w-[240px] h-[30px] rounded-b-full flex justify-center items-center text-white text-lg">
              Recommended
            </div>

            {/* Content inside the card */}
            <h1 className="text-lg mt-8">Premium</h1>
            <h1>
              <span className="text-4xl font-bold">${600}</span>/month
            </h1>
            <p className="text-[#ffffff4c]">Billed monthly</p>

            <div className="divide-y divide-dashed grid gap-5">
              <button className="mb-2 mt-auto border-2 text-lg gap-2 border-[#ffffff5e] bg-gradient-to-r from-[#49156D] to-[#49165C] hover:border-[#a33ed2] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150 px-4 py-2 rounded-xl">
                Try for free
              </button>

              <div className="flex flex-col gap-3">
                <p className="flex gap-2 items-center">
                  <span className="bg-white rounded-full py-[2px] px-[2.5px]">
                    ✔️
                  </span>{" "}
                  100 GB Storage
                </p>
                <p className="flex gap-2 items-center">
                  <span className="bg-white rounded-full py-[2px] px-[2.5px]">
                    ✔️
                  </span>{" "}
                  100 GB Storage
                </p>
                <p className="flex gap-2 items-center">
                  <span className="bg-white rounded-full py-[2px] px-[2.5px]">
                    ✔️
                  </span>{" "}
                  100 GB Storage
                </p>
                <p className="flex gap-2 items-center">
                  <span className="bg-white rounded-full py-[2px] px-[2.5px]">
                    ✔️
                  </span>{" "}
                  100 GB Storage
                </p>
                <p className="flex gap-2 items-center">
                  <span className="bg-white rounded-full py-[2px] px-[2.5px]">
                    ✔️
                  </span>{" "}
                  100 GB Storage
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 mx-auto bg-[#2D1B38] p-12 rounded-3xl w-[340px] h-[500px]">
            <h1 className="text-lg">Plus</h1>
            <h1>
              <span className="text-4xl font-bold">${600}</span>/month
            </h1>
            <p className="text-[#ffffff4c]">Billed monthly</p>
            <div className="divide-y divide-dashed grid gap-5">
              <button className="mb-2 mt-auto border-2 text-lg gap-2 border-[#ffffff5e] bg-gradient-to-r from-[#49156D] to-[#49165C] hover:border-[#a33ed2] hover:from-[#6C00A5] hover:to-[#6A0170] duration-200 px- py-2 rounded-xl">
                Try for free
              </button>
              <div className="flex flex-col gap-3">
                <p className="flex gap-2 items-center">
                  <span className="bg-white rounded-full py-[2px] px-[2.5px]">
                    ✔️
                  </span>{" "}
                  100 GB Storage
                </p>
                <p className="flex gap-2 items-center">
                  <span className="bg-white rounded-full py-[2px] px-[2.5px]">
                    ✔️
                  </span>{" "}
                  100 GB Storage
                </p>
                <p className="flex gap-2 items-center">
                  <span className="bg-white rounded-full py-[2px] px-[2.5px]">
                    ✔️
                  </span>{" "}
                  100 GB Storage
                </p>
                <p className="flex gap-2 items-center">
                  <span className="bg-white rounded-full py-[2px] px-[2.5px]">
                    ✔️
                  </span>{" "}
                  100 GB Storage
                </p>
                <p className="flex gap-2 items-center">
                  <span className="bg-white rounded-full py-[2px] px-[2.5px]">
                    ✔️
                  </span>{" "}
                  100 GB Storage
                </p>
              </div>
            </div>
          </div>
          {/* {pricing.map((service: service) => <PricingCard pricing={item} key={item.id} />)} */}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
