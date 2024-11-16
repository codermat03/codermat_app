/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function HeroSection() {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u0e6rrn", // Service ID
        "template_ctk2p65", // Template ID
        form.current, // Form Reference
        "UANiDaV9CE5zcmzkX" // Public Key
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setSuccessMessage("Message sent successfully!");
          form.current.reset(); // Clear the form
        },
        (error) => {
          console.log("Error:", error.text);
          setSuccessMessage("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div>
      <section className="pt-20 pb-10 md:pb-0 md:pt-0 min-h-screen flex items-center justify-center md:p-3 lg:p-8">
        <div className="flex flex-col gap-2 lg:gap-0 items-center justify-center md:flex-row max-w-6xl w-full text-white">
          {/* Left Section */}
          <div className="flex-1 mb-8 md:mb-0">
            <h1 className="text-2xl md:text-4xl lg:text-6xl text-center md:text-start font-bold">
              Bring Your Tech Ideas into Reality.
            </h1>
            <p className="mt-2 md:mt-4 text-sm md:text-xl text-center md:text-start md:max-w-md md:px-0 px-7 py-2">
              <span className="font-bold text-2xl">
                Your Vision, Our Expertise
              </span>{" "}
              — CoderMat connects your vision with expert web development
              solutions, driving project success through innovation, precision,
              and collaboration.
            </p>
            <div className="flex md:justify-start justify-center">
              <button className="border-2 gap-2 border-[#7272723c] bg-gradient-to-r from-[#49156D] to-[#49165C] hover:border-[#a33ed2] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150 px-5 py-2 rounded-md mt-5 bottom-5">
                Our Services
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 flex justify-center items-center relative">
            {/* Back Rotated Card */}
            <div className="md:h-[530px] md:w-[390px] absolute bg-gradient-to-br from-[#350da5] via-[#7b0ea0] to-[#99058d] rounded-3xl transform -rotate-12 opacity-75"></div>

            {/* Front Static Card */}
            <div className="relative bg-gradient-to-br from-[#350da5] via-[#7b0ea0] to-[#99058d] opacity-80 p-8 rounded-3xl shadow-lg w-[330px] md:h-[530px] md:w-[390px] max-w-md">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                Let’s start a <br /> Project Together
              </h2>
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Full Name"
                    className="w-full py-2 px-4 rounded-md bg-white bg-opacity-20 border border-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-[#c445ff]"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    className="w-full py-2 px-4 rounded-md bg-white bg-opacity-20 border border-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-[#c445ff]"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="user_number"
                    placeholder="Number"
                    className="w-full py-2 px-4 rounded-md bg-white bg-opacity-20 border border-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-[#c445ff]"
                  />
                </div>
                <div className="">
                  <textarea
                    name="message"
                    placeholder="Describe Your Project Need."
                    className="w-full py-2 px-4 rounded-md bg-white resize-none bg-opacity-20 border border-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-[#c445ff] h-32"
                    required
                  />
                </div>
                <span className="absolute">
                  {" "}
                  {successMessage && (
                    <p className="text-green-400 text-center">{successMessage}</p>
                  )}
                </span>
                <button
                  type="submit"
                  className="mt-6 border-2 gap-2 border-[#ffffff] hover:bg-gradient-to-l from-[#49156D] to-[#49165C] text-white hover:border-[#c445ff] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150 px-5 py-2 rounded-md bottom-5"
                >
                  Let’s Talk
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <img
        className="w-full"
        src="https://i.postimg.cc/kgGNMLQ8/home14-bg4.png"
        alt=""
      />
    </div>
  );
}
