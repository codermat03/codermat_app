import Link from "next/link";
import React from "react";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Basic",
      price: 200,
      description:
        "Perfect for startups looking to create a strong online presence with a customized website.",
      features: [
        "Custom website",
        "Up to 7 Information Pages",
        "Not included in the plan",
        "~2 weeks to complete",
        "2 months of free support",
      ],
      ctaText: "Get started with your online presence today with CoderMat!",
    },
    {
      title: "Premium",
      price: 600,
      description:
        "Ideal for growing businesses needing advanced functionalities and a larger site.",
      features: [
        "Custom designs & animations",
        "Up to 15 Information Pages",
        "Includes full blog functionality",
        "Approximately 4 weeks",
        "6 months of priority support",
      ],
      ctaText: "Scale your online presence with CoderMat!",
      recommended: true,
    },
    {
      title: "Plus",
      price: 1000,
      description:
        "Comprehensive package for established businesses requiring extensive site features.",
      features: [
        "Premium designs with animation",
        "Unlimited pages",
        "Full blog setup and integration",
        "Approximately 6 weeks",
        "1 year of priority support",
      ],
      ctaText: "Achieve complete business growth with CoderMat!",
    },
  ];

  return (
    <div className="py-8 md:py-20 md:mx-auto md:max-w-[1480px] animate-fade-in">
      <h1 className="text-center font-bold md:text-4xl text-2xl md:px-0 px-4">
        Pricing Options for Our Services
      </h1>
      <p className="text-center md:px-0 px-4 md:w-1/2 m-auto pt-2 md:pt-4">
        Affordable Plans Customized for Your Business Needs: Select the Right
        Package for Your Success.
      </p>
      <div className="lg:mx-20 pt-8 md:pt-20 md:px-8 lg:px-0 ">
        <div className="grid md:mx-auto md:grid-cols-2 lg:grid-cols-3 md:gap-0 md:gap-y-10 gap-y-6 justify-center">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative grid gap-3 mx-auto bg-[#2D1B38] p-8 rounded-3xl md:w-[350px] md:h-[580px] w-[330px] hover:scale-105 hover:bg-[#1E1227] transition-all duration-300 ${
                plan.recommended ? "border-t-4 border-[#7D1A8D]" : ""
              }`}
            >
              {plan.recommended && (
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#7D1A8D] w-[240px] h-[30px] rounded-b-full flex justify-center items-center text-white text-lg">
                  Recommended
                </div>
              )}
              <h1 className="text-base">{plan.title}</h1>
              <h1>
                <span className="text-3xl font-bold">${plan.price}</span>/month
              </h1>
              <p className="text-[#ffffff4c]">Billed monthly</p>
              <p>{plan.description}</p>
              <div className="grid gap-5">
                <button className="mb-2 mt-auto border-2 text-lg gap-2 border-[#ffffff5e] bg-gradient-to-r from-[#49156D] to-[#49165C] hover:border-[#a33ed2] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150 px-4 py-2 rounded-xl">
                  <Link href={`/contactUs`}> Try for free</Link>
                </button>
                <div className="w-full border-t border-dashed border-white"></div>
                <div className="flex flex-col gap-1">
                  {plan.features.map((feature, idx) => (
                    <p key={idx}>
                      <span className="text-xl font-bold"></span>✔️ {feature}
                    </p>
                  ))}
                  <p className="pt-2">{plan.ctaText}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
