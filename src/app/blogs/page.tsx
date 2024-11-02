/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";

const Blogs = () => {
  return (
    <main className="bg-gradient-to-bl from-[#93239d] via-[#190b34] to-[#280d42] pt-20">
      <div className="min-h-screen text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
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
                  Creativity is a highfalutin word for the work I have to <br />{" "}
                  do between now and Tuesday.
                </p>
                <Link
                  href="#"
                  className="py-[10px] w-36 text-center border-2 flex items-center justify-center gap-2 border-[#7272723c]  bg-gradient-to-r from-[#49156D] to-[#49165C] hover:border-[#a33ed2] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150 px-5 rounded-md"
                >
                  Read more →
                </Link>
              </div>
            </div>

            {/* Right Blog Section */}
            <div className="space-y-4">
              <div>
                <div className="bg-[#a545b2]/25 rounded-tl-xl h-[170px] backdrop-blur-md ps-0 pt-0 p-4 flex gap-7">
                  <div>
                    <img
                      className="w-[350px] h-[140px] rounded-tl-xl"
                      src="https://cdn.mos.cms.futurecdn.net/xCSAEp8DjjrT2UQB87AoFN.jpg"
                      alt=""
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm bg-pink-400 w-16 rounded-xl text-center">
                      Design
                    </p>
                    <h3 className="text-lg font-semibold mt-7">
                      Guide for designing better mobile apps typography
                    </h3>
                  </div>
                </div>
                <div className="bg-[#ffffff4e] p-[1.5px] mb-12" />
              </div>
              <div>
                <div className="bg-[#a545b2]/25 rounded-tl-xl h-[170px] backdrop-blur-md ps-0 pt-0 p-4 flex gap-7">
                  <div>
                    <img
                      className="w-[350px] h-[140px] rounded-tl-xl"
                      src="https://lh7-us.googleusercontent.com/iIS_pCALWqGScsc4M5t3IcZHcFbnSffzfRBXKGdywbzuDe6BwJmQsx72GYdc2KRLRUUPSbIFg98t3FEL_QWeAdiXpg0l1MQpb6FJOiZU0JNlaE1Jr8zDLeCsHl6qdkidePxxLRnFXJT3dMk3U_NuWNA"
                      alt=""
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm bg-pink-400 w-16 rounded-xl text-center">
                      Design
                    </p>
                    <h3 className="text-lg font-semibold mt-7">
                      Guide for designing better mobile apps typography
                    </h3>
                  </div>
                </div>
                <div className="bg-[#ffffff4e] p-[1.5px] mb-12" />
              </div>
              <div>
                <div className="bg-[#a545b2]/25 rounded-tl-xl h-[170px] backdrop-blur-md ps-0 pt-0 p-4 flex gap-7">
                  <div>
                    <img
                      className="w-[350px] h-[140px] rounded-tl-xl"
                      src="https://aaftonline.com/blog/wp-content/uploads/2024/01/What-are-the-Benefits-of-Photography-Complete-Overview.png"
                      alt=""
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm bg-pink-400 w-16 rounded-xl text-center">
                      Design
                    </p>
                    <h3 className="text-lg font-semibold mt-7">
                      Guide for designing better mobile apps typography
                    </h3>
                  </div>
                </div>
                <div className="bg-[#ffffff4e] p-[1.5px] mb-12" />
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="relative">
                <span className="text-xs bg-pink-500 px-2 py-1 rounded-full uppercase">
                  Article
                </span>
                <h3 className="mt-7 text-lg font-semibold">
                  Guide for designing better mobile apps typography
                </h3>
                <p className="mt-2 text-purple-300">
                  In this article, I won't talk about the general concepts of
                  typography...
                </p>
                <div className="flex items-center gap-3 mt-7 ">
                  <img
                    className="w-[50px] h-[50px] rounded-full"
                    src="https://blog.feedspot.com/wp-content/uploads/2018/04/react.jpg"
                    alt=""
                  />
                  <div className=" text-xs text-purple-400">
                    <p className="text-xl font-bold">Kristin Watson</p>
                    <p>Jun 27, 2020 • 6 min read</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <span className="text-xs bg-yellow-500 px-2 py-1 rounded-full uppercase">
                  Video
                </span>
                <h3 className="mt-7 text-lg font-semibold">
                  New Dashboard features to save you time
                </h3>
                <p className="mt-2 text-purple-300">
                  Dashboard is the hub for millions of businesses to take
                  action...
                </p>
                <div className="flex items-center gap-3 mt-7 absolute bottom-0">
                  <img
                    className="w-[50px] h-[50px] rounded-full"
                    src="https://blog.feedspot.com/wp-content/uploads/2018/04/react.jpg"
                    alt=""
                  />
                  <div className=" text-xs text-purple-400">
                    <p className="text-xl font-bold">Kristin Watson</p>
                    <p>Jun 27, 2020 • 6 min read</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <span className="text-xs bg-green-500 px-2 py-1 rounded-full uppercase">
                  Case Study
                </span>
                <h3 className="mt-7 text-lg font-semibold">
                  Noom sees an 8% increase in authorization rates with Dlex
                </h3>
                <p className="mt-2 text-purple-300">
                  The health platform boosted acceptance rates and expanded
                  global coverage...
                </p>
                <div className="flex items-center gap-3 mt-7 absolute bottom-0">
                  <img
                    className="w-[50px] h-[50px] rounded-full"
                    src="https://blog.feedspot.com/wp-content/uploads/2018/04/react.jpg"
                    alt=""
                  />
                  <div className=" text-xs text-purple-400">
                    <p className="text-xl font-bold">Kristin Watson</p>
                    <p>Jun 27, 2020 • 6 min read</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="w-full pt-14"
        src="https://i.postimg.cc/kgGNMLQ8/home14-bg4.png"
        alt=""
      />
    </main>
  );
};

export default Blogs;
