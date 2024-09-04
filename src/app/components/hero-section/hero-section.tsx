/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-[#0e002b] min-h-screen flex items-center justify-center p-8">
      <div className="flex flex-col md:flex-row max-w-6xl w-full text-white">
        {/* Left Section */}
        <div className="flex-1 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold">
            Let's Build Something Extraordinary
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-md">
            Are you ready to bring your vision to life? Let's set sail on a
            journey together and build something extraordinary. Get in touch
            with us today, and let's turn your dreams into digital reality.
          </p>
          <button className="mt-8 bg-[#6e03ff] hover:bg-[#5d03cc] text-white font-bold py-3 px-6 rounded-md">
            Our Services
          </button>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center items-center relative">
          {/* Back Rotated Card */}
          <div className="absolute inset-9 bg-gradient-to-br from-[#0a4fdf] via-[#6200ea] to-[#b42ff0] rounded-3xl transform -rotate-6  opacity-75"></div>

          {/* Front Static Card */}
          <div className="relative bg-gradient-to-br from-[#0a4fdf] via-[#6200ea] to-[#b42ff0] opacity-80 p-8 rounded-3xl shadow-lg w-full max-w-md  ">
            <h2 className="text-4xl font-bold mb-6 text-center">
              Let’s start a <br /> Project Together
            </h2>
            <form className="opacity-">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 rounded-md bg-white bg-opacity-20 border border-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-md bg-white bg-opacity-20 border border-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Number"
                  className="w-full p-3 rounded-md bg-white bg-opacity-20 border border-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div className="mb-6">
                <textarea
                  placeholder="Describe Your Project Need."
                  className="w-full p-3 rounded-md bg-white bg-opacity-20 border border-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-white h-32"
                />
              </div>
              <button
                type="submit"
                className=" py-3 text-left pl-3 text-white font-bold rounded-md border p-4"
              >
                Let’s Talk
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
