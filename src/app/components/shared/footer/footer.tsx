import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1c0636] text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className=" mb-10 flex justify-between">
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
              {["Marketing", "Analytics", "Commerce", "Insights"].map(
                (item) => (
                  <li key={item} className="mb-2">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">SUPPORT</h4>
            <ul>
              {["Pricing", "Documentation", "Guides", "API Status"].map(
                (item) => (
                  <li key={item} className="mb-2">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">COMPANY</h4>
            <ul>
              {["About", "Blog", "Jobs", "Press", "Partners"].map((item) => (
                <li key={item} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">LEGAL</h4>
            <ul>
              {["Claim", "Privacy", "Terms"].map((item) => (
                <li key={item} className="mb-2">
                  {item}
                </li>
              ))}
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
            {["facebook", "twitter", "instagram", "github"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="w-6 h-6 bg-cover"
                style={{ backgroundImage: `url('/icons/${platform}.svg')` }}
              ></a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
