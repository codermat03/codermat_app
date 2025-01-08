import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#22102F] text-white">
      <div className="bg-[#6461616d] p-[1px] md:mb-12 mb-8" />
      <div className="max-w-7xl mx-auto px-4">
        <div className="md:flex justify-between">
          <div>
            <h3 className="text-lg font-semibold">
              SUBSCRIBE TO OUR NEWSLETTER
            </h3>
            <p className="text-sm mt-2 mb-4">
              The latest news, articles, and resources, sent to your inbox
              weekly
            </p>
          </div>
          <div className="flex gap-2 items-center justify-center h-[40px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-72 resize-none px-3 py-[10px] bg-[#ffffff00] border-[1px] border-[#6461616d] rounded-lg text-white focus:outline-none"
            />
            <button className="py-[10px] border-2 flex items-center gap-2 border-[#7272723c]  bg-gradient-to-r from-[#49156D] to-[#49165C] hover:border-[#a33ed2] hover:from-[#6C00A5] hover:to-[#6A0170] duration-150 px-5 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
        <div className="bg-[#6461616d] p-[0.3px] my-10" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-left">
          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#5C4F67]">
              SOLUTIONS
            </h4>
            <ul>
              <li className="mb-2 underline-animation hover:text-[#acacac] duration-300">
                <a href="/marketing">Marketing</a>
              </li>
              <li className="mb-2 underline-animation hover:text-[#acacac] duration-300">
                <a href="/analytics">Analytics</a>
              </li>
              <li className="mb-2 underline-animation hover:text-[#acacac] duration-300">
                <a href="/commerce">Commerce</a>
              </li>
              <li className="mb-2 underline-animation hover:text-[#acacac] duration-300">
                <a href="/insights">Insights</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#5C4F67]">
              SUPPORT
            </h4>
            <ul>
              <li className="mb-2 underline-animation hover:text-[#acacac] duration-300">
                <a href="/pricing">Pricing</a>
              </li>
              <li className="mb-2 underline-animation hover:text-[#acacac] duration-300">
                <a href="/documentation">Documentation</a>
              </li>
              <li className="mb-2 underline-animation hover:text-[#acacac] duration-300">
                <a href="/guides">Guides</a>
              </li>
              <li className="mb-2 underline-animation hover:text-[#acacac] duration-300">
                <a href="/api-status">API Status</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#5C4F67]">
              COMPANY
            </h4>
            <ul>
              <li className="mb-2 underline-animation hover:text-[#acacac] duration-300">
                <a href="/about">About</a>
              </li>
              <li className="mb-2 underline-animation hover:text-[#acacac] duration-300">
                <a href="/blog">Blog</a>
              </li>
              <li className="mb-2 underline-animation hover:text-[#acacac] duration-300">
                <a href="/jobs">Jobs</a>
              </li>
              <li className="mb-2 underline-animation hover:text-[#acacac] duration-300">
                <a href="/press">Press</a>
              </li>
              <li className="mb-2 underline-animation hover:text-[#acacac] duration-300">
                <a href="/partners">Partners</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#5C4F67]">LEGAL</h4>
            <ul>
              <li className="mb-2 underline-animation hover:text-[#acacac] duration-300">
                <a href="/claim">Claim</a>
              </li>
              <li className="mb-2 underline-animation hover:text-[#acacac] duration-300">
                <a href="/privacy">Privacy</a>
              </li>
              <li className="mb-2 underline-animation hover:text-[#acacac] duration-300">
                <a href="/terms">Terms</a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1 col-span-2">
            <h4 className="text-sm font-semibold mb-4 text-[#5C4F67]">
              LANGUAGE & CURRENCY
            </h4>
            <div className="mb-2">
              <select className="w-full p-3 bg-[#ffffff00] border-[1px] border-[#6461616d] rounded-lg text-white focus:outline-none">
                <option className="">English</option>
              </select>
            </div>
            <div>
              <select className="w-full p-3 bg-[#ffffff00] border-[1px] border-[#6461616d] rounded-lg text-white focus:outline-none">
                <option>USD</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center border-t border-[#6461616d] pt-6 flex justify-between items-center pb-7">
          <p className="text-sm">© 2024 Codermat, Inc. All rights reserved</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a
              target="_blank"
              href="https://www.facebook.com/codermat"
              className="w-8 h-8 rounded-full bg-cover hover:bg-[#93239d] duration-150"
            >
              {" "}
              <Image
                className=""
                src="https://i.ibb.co.com/RTMngt9/logo-facebook.png"
                alt=""
                width={500}
                height={500}
              />
            </a>
            <a
              target="_blank"
              href="https://x.com/tweeter?lang=en"
              className="w-8 h-8 rounded-xl bg-cover hover:bg-[#93239d] duration-150"
            >
              {" "}
              <Image
                className=""
                src="https://i.ibb.co.com/yh5pjSH/logo-twitter.png"
                alt=""
                width={500}
                height={500}
              />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/shake_shakx/"
              className="w-8 h-8 rounded-xl bg-cover hover:bg-[#93239d] duration-150"
            >
              {" "}
              <Image
                className=""
                src="https://i.ibb.co.com/9hkzwqC/logo-instagram.png"
                alt=""
                width={500}
                height={500}
              />
            </a>
            <a
              target="_blank"
              href="https://github.com/codermat03"
              className="w-8 h-8 rounded-full bg-cover hover:bg-[#93239d] duration-150"
            >
              {" "}
              <Image
                className=""
                src="https://i.ibb.co.com/Zf6dH50/logo-github.png"
                alt=""
                width={500}
                height={500}
              />
            </a>
          </div>
        </div>
      </div>
      <div></div>
      <div>
        <a
          href="https://wa.me/+8801910882903"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open WhatsApp"
        >
          <div className="fixed bottom-[30px] right-1">
            <button className="rounded-full hover:bg-[#66237e] hover:text-black transition-all duration-200">
              <Image
                className="w-14"
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
                alt="WhatsApp"
                width={56}
                height={56}
              />
            </button>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
