/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { secondarticles } from "../blogSingle/blogData";

const Blogs = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3); // Default show 3 articles

  const toggleVisibility = () => {
    setIsExpanded(!isExpanded);
    setVisibleCount(isExpanded ? 3 : 8); // Show 3 when collapsed, 8 when expanded
  };
  const getShortDescription = (description: string) => {
    // Split the description into an array of words
    const words = description.split(" ");
    // Take the first 30 words and join them back into a string
    const shortDescription = words.slice(0, 30).join(" ");
    // Add "..." if the description is longer than 30 words
    return words.length > 30 ? `${shortDescription}...` : shortDescription;
  };

  return (
    <main className="bg-gradient-to-bl from-[#93239d] via-[#190b34] to-[#280d42] pt-20">
      <div className="min-h-screen text-white py-16">
        <div className="max-w-[1480px] mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Blogs & News</h1>
            <p className="text-xl">
              Creativity is a highfalutin word for the work I have to <br /> do
              between now and Tuesday.
            </p>
          </div>

          {/* Main Blog Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-14">
            {/* Left Blog Section */}
            <div className="space-y-6">
              <div className="">
                <p className="text-sm text-purple-300 uppercase mb-2">
                  From the Blog
                </p>
                <h2 className="text-3xl font-bold mb-4">
                  Design is intelligence <br /> made visible.
                </h2>
                <p className="mb-4">
                  Responsive web design is essential for providing a seamless
                  <br /> user experience across all devices.
                </p>
                <Link
                  href="/blogSingle/6"
                  className="py-[10px] w-36 text-center border-2 flex items-center justify-center gap-2 border-[#7272723c]  bg-gradient-to-r from-[#49156D] to-[#49165C] hover:border-[#a33ed2] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150 px-5 rounded-md"
                >
                  Read more →
                </Link>
              </div>
            </div>

            {/* Right Blog Section */}
            <div className="space-y-4">
              {secondarticles.slice(0, visibleCount).map((article) => (
                <Link
                  key={article.id}
                  href={`/blogSingle/${article.id}`}
                  className="bg-[#a545b2]/25 rounded-tl-2xl h-[170px] backdrop-blur-md p-2 flex gap-7 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <div>
                    <Image
                      className="w-[400px] h-[150px] p-1 rounded-tl-2xl object-cover"
                      src={article.cardImage}
                      alt={article.title}
                      width={400}
                      height={150}
                    />
                  </div>
                  <div className="p-1">
                    <p className="text-sm bg-pink-400 w-20 rounded-xl text-center">
                      {article.category}
                    </p>
                    <h3 className="text-lg font-semibold mt-2">
                      {article.title}
                    </h3>
                  </div>
                </Link>
              ))}

              {/* Toggle Button to Show More / Show Less */}
              <div className="flex justify-center">
                <button
                  onClick={toggleVisibility}
                  className="mt-2 py-2 px-6 bg-pink-400 text-white rounded-xl hover:bg-pink-500 transition-all duration-300"
                >
                  {isExpanded ? "Show Less" : "Show More"}
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Blog Cards */}
          <div className="mt-16 space-y-12">
            <div className="border-b pb-16">
              <p className="text-sm text-purple-300 uppercase mb-2">
                From the Blog
              </p>
              <h2 className="text-3xl font-bold mb-4">
                Design is intelligence made visible.
              </h2>
              <p className="text-sm">
                Creativity is a highfalutin word for the work I have to do
                between now and Tuesday.
              </p>
            </div>

            {/* Blog Cards */}

            <div className="flex gap-10">
              {secondarticles.slice(0, 3).map((article) => (
                <div key={article.id} className="">
                  <div className="relative">
                    <span className="text-xs bg-pink-500 px-2 py-1 rounded-full uppercase">
                      {article.category}
                    </span>
                    <h3 className="mt-7 text-lg font-semibold">
                      <Link href={`/blogSingle/1${article.id}`}>
                        <span className="text-xl font-bold">
                          {" "}
                          {article.subTitle}
                        </span>
                        <p className="mt-2 text-purple-300">
                          {getShortDescription(article.description)}
                          <span className="ms-5 text-blue-600">Read More</span>
                        </p>
                      </Link>
                    </h3>

                    {/* Display first 30 words of the description */}

                    <div className="flex items-center gap-3 mt-7">
                      <Image
                        className="w-[50px] h-[50px] rounded-full"
                        src="https://blog.feedspot.com/wp-content/uploads/2018/04/react.jpg"
                        alt="React logo"
                        width={50}
                        height={50}
                      />
                      <div className=" text-xs text-purple-400">
                        <p className="text-xl font-bold">Shakil Ahmed</p>
                        <p>Jun 27, 2020 • 6 min read</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Image
        className="w-full pt-14"
        src="https://i.postimg.cc/kgGNMLQ8/home14-bg4.png"
        alt="Background image"
        width={1920}
        height={1080}
      />
    </main>
  );
};

export default Blogs;
