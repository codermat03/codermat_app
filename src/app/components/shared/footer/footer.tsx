import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1c0636] text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10 flex justify-between">
          <div>
            <h3 className="text-lg font-semibold">
              SUBSCRIBE TO OUR NEWSLETTER
            </h3>
            <p className="text-sm mt-2 mb-4">
              The latest news, articles, and resources, sent to your inbox
              weekly
            </p>
          </div>
          <div className="flex justify-center h-[40px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-72 rounded-l-md text-black border border-white focus:outline-none"
            />
            <button className="p-2 px-6 rounded-r-md bg-[#a23deb] text-white">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center md:text-left">
          <div>
            <h4 className="text-sm font-semibold mb-4">SOLUTIONS</h4>
            <ul>
              <li className="mb-2">
                <a href="/marketing">Marketing</a>
              </li>
              <li className="mb-2">
                <a href="/analytics">Analytics</a>
              </li>
              <li className="mb-2">
                <a href="/commerce">Commerce</a>
              </li>
              <li className="mb-2">
                <a href="/insights">Insights</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">SUPPORT</h4>
            <ul>
              <li className="mb-2">
                <a href="/pricing">Pricing</a>
              </li>
              <li className="mb-2">
                <a href="/documentation">Documentation</a>
              </li>
              <li className="mb-2">
                <a href="/guides">Guides</a>
              </li>
              <li className="mb-2">
                <a href="/api-status">API Status</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">COMPANY</h4>
            <ul>
              <li className="mb-2">
                <a href="/about">About</a>
              </li>
              <li className="mb-2">
                <a href="/blog">Blog</a>
              </li>
              <li className="mb-2">
                <a href="/jobs">Jobs</a>
              </li>
              <li className="mb-2">
                <a href="/press">Press</a>
              </li>
              <li className="mb-2">
                <a href="/partners">Partners</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">LEGAL</h4>
            <ul>
              <li className="mb-2">
                <a href="/claim">Claim</a>
              </li>
              <li className="mb-2">
                <a href="/privacy">Privacy</a>
              </li>
              <li className="mb-2">
                <a href="/terms">Terms</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">LANGUAGE & CURRENCY</h4>
            <div className="mb-2">
              <select className="p-2 w-full rounded-md text-black">
                <option>English</option>
              </select>
            </div>
            <div>
              <select className="p-2 w-full rounded-md text-black">
                <option>USD</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center border-t border-gray-700 pt-6">
          <p className="text-sm">© 2024 Codermat, Inc. All rights reserved</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              className="w-6 h-6 bg-cover"
              style={{ backgroundImage: `url('/icons/facebook.svg')` }}
            ></a>
            <a
              href="https://twitter.com"
              className="w-6 h-6 bg-cover"
              style={{ backgroundImage: `url('/icons/twitter.svg')` }}
            ></a>
            <a
              href="https://instagram.com"
              className="w-6 h-6 bg-cover"
              style={{ backgroundImage: `url('/icons/instagram.svg')` }}
            ></a>
            <a
              href="https://github.com"
              className="w-6 h-6 bg-cover"
              style={{ backgroundImage: `url('/icons/github.svg')` }}
            ></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
