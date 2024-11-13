"use client";
import { useState, useEffect } from "react";
import { FaBootstrap, FaNode, FaReact } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";

import { IoIosArrowDown } from "react-icons/io";
import {
  SiCloudinary,
  SiExpress,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNpm,
  SiPostgresql,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpenTech, setDropdownOpenTech] = useState(false);
  const [dropdownOpenNav, setDropdownOpenNav] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`roboto-regular  md:py-3 fixed top-0 left-0 w-full transition-colors duration-300 z-30  ${
        scrolled ? "bg-[#21112e] bg-opacity-85 shadow-2xl " : "bg-transparent "
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex items-center justify-between md:h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <img
                  className="w-28 md:w-full"
                  src="https://i.postimg.cc/pXrT6fkh/Rectangle-4.png"
                  alt="CoderMat"
                />
              </Link>
            </div>
          </div>

          <div className="hidden sm:flex flex-1 justify-center sm:ml-6">
            <div className="relative flex items-center space-x-4 z-40">
              <Link
                href="/"
                onClick={() => setActiveLink("home")}
                className={`${
                  activeLink === "home"
                    ? "bg-white/20 text-white"
                    : "text-white hover:bg-white/20 hover:text-white"
                } px-3 py-2 rounded-md  font-medium`}
              >
                Home
              </Link>

              <div
                className="relative flex justify-center"
                onMouseEnter={() => setDropdownOpenTech(true)}
                onMouseLeave={() => setDropdownOpenTech(false)}
              >
                <Link
                  href="/services"
                  onClick={() => {
                    setActiveLink("services");
                    setDropdownOpenTech(!dropdownOpenTech);
                  }}
                  className={`${
                    activeLink === "services"
                      ? "bg-white/20 text-white"
                      : "text-white hover:bg-white/20 hover:text-white"
                  } px-3 py-2 rounded-md  font-medium  flex items-center gap-2`}
                >
                  Services
                  <IoIosArrowDown></IoIosArrowDown>
                </Link>
                {dropdownOpenTech && (
                  <div
                    className="absolute -left-[260px]  mt-12 w-max backdrop-blur-3xl bg-[#381c4489] border-[#72006A] border-2 rounded-xl text-white shadow-lg p-6 grid grid-cols-4 gap-4"
                    style={{ minWidth: "300px" }} // Adjust minWidth as needed
                  >
                    {/* Services Dropdown Content */}
                    <div>
                      <h3 className="font-bold text-xl mb-4">
                        Custom Web Application <br /> Development
                      </h3>
                      <ul className="space-y-2">
                        {[
                          "Custom Web Design",
                          "Responsive Layouts",
                          "User-Friendly Interfaces",
                          "Scalable Solutions",
                          "Fast Load Times",
                          "SEO Optimization",
                          "Advanced Security",
                          "Ongoing Support",
                        ].map((item, index) => (
                          <li key={index} className="flex items-center">
                            <span className="flex-shrink-0 w-3 h-3 bg-white rounded-full mr-3"></span>
                            <a href="#" className=" font-semibold">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-xl mb-4">
                        Web Portal Development
                      </h3>
                      <ul className="space-y-2">
                        {[
                          "Custom Portal Solutions",
                          "Responsive Layouts",
                          "Secure User Authentication",
                          "Multi-Device Compatibility",
                          "User-Friendly Interfaces",
                          "Real-Time Analytics",
                          "Advanced Search Features",
                          "Ongoing Maintenance",
                        ].map((item, index) => (
                          <li key={index} className="flex items-center">
                            <span className="flex-shrink-0 w-3 h-3 bg-white rounded-full mr-3"></span>
                            <a href="#" className="font-semibold">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-xl mb-4">
                        E-commerce Development
                      </h3>
                      <ul className="space-y-2">
                        {[
                          "Custom Online Stores",
                          "Payment Gateway Integration",
                          "Product Management",
                          "Secure Transactions",
                          "Mobile-Friendly Design",
                          "User Account Management",
                          "SEO-Friendly Features",
                          "Order Tracking Systems",
                        ].map((item, index) => (
                          <li key={index} className="flex items-center">
                            <span className="flex-shrink-0 w-3 h-3 bg-white rounded-full mr-3"></span>
                            <a href="#" className="font-semibold">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-xl mb-4">
                        WordPress Development
                      </h3>
                      <ul className="space-y-2">
                        {[
                          "Custom Themes",
                          "Plugin Integration",
                          "Responsive Design",
                          "SEO Optimization",
                          "Content Management",
                          "E-commerce Solutions",
                          "Speed Optimization",
                          "Ongoing Support",
                        ].map((item, index) => (
                          <li key={index} className="flex items-center">
                            <span className="flex-shrink-0 w-3 h-3 bg-white rounded-full mr-3"></span>
                            <a href="#" className="font-semibold">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-xl mb-4">UI & UX Design</h3>
                      <ul className="space-y-2">
                        {[
                          "User-Centered Design",
                          "Intuitive Interfaces",
                          "Responsive Layouts",
                          "Wireframing & Prototyping",
                          "Visual Consistency",
                          "Engaging User Experience",
                          "Cross-Platform Compatibility",
                          "Usability Testing",
                        ].map((item, index) => (
                          <li key={index} className="flex items-center">
                            <span className="flex-shrink-0 w-3 h-3 bg-white rounded-full mr-3"></span>
                            <a href="#" className=" font-semibold">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-xl mb-4">
                        Front-end Web Development
                      </h3>
                      <ul className="space-y-2">
                        {[
                          "Custom UI/UX Design",
                          "Interactive Interfaces",
                          "Responsive Design",
                          "HTML/CSS/JavaScript Expertise",
                          "Fast Load Times",
                          "Mobile Optimization",
                          "SEO-Friendly Code",
                          "User-Focused Layouts",
                        ].map((item, index) => (
                          <li key={index} className="flex items-center">
                            <span className="flex-shrink-0 w-3 h-3 bg-white rounded-full mr-3"></span>
                            <a href="#" className="font-semibold">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-xl mb-4">
                        Back-end Web Development
                      </h3>
                      <ul className="space-y-2">
                        {[
                          "Database Integration",
                          "Server-Side Scripting",
                          "API Development",
                          "Secure Data Handling",
                          "Scalable Architecture",
                          "Performance Optimization",
                          "Content Management Systems",
                          "Third-Party Integrations",
                        ].map((item, index) => (
                          <li key={index} className="flex items-center">
                            <span className="flex-shrink-0 w-3 h-3 bg-white rounded-full mr-3"></span>
                            <a href="#" className="font-semibold">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <div
                className="relative flex justify-center"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  href="/Technologies"
                  onClick={() => {
                    setActiveLink("technologies");
                    setDropdownOpen(!dropdownOpen);
                  }}
                  className={`${
                    activeLink === "technologies"
                      ? "bg-white/20 text-white"
                      : "text-white hover:bg-white/20 hover:text-white"
                  } px-3 py-2 rounded-md  font-medium  flex items-center gap-2`}
                >
                  Technologies
                  <IoIosArrowDown />
                </Link>
                {dropdownOpen && (
                  <div
                    className="absolute -left-[360px]  mt-12 w-max backdrop-blur-3xl bg-[#381c4489] border-[#72006A] border-2 rounded-xl text-white shadow-lg p-6 grid grid-cols-4 gap-4"
                    style={{ minWidth: "300px" }} // Adjust minWidth as needed
                  >
                    {/* MERN-Stack Dropdown Content */}
                    <div>
                      <h3 className="font-bold text-xl">MERN-Stack</h3>
                      <ul>
                        <li>
                          <a
                            href="https://www.mongodb.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1  flex items-center gap-2"
                          >
                            <SiMongodb />
                            MongoDB
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://expressjs.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1  flex items-center gap-2"
                          >
                            <SiExpress />
                            Express JS
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1  flex items-center gap-2"
                          >
                            <FaReact />
                            React JS
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://nodejs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1  flex items-center gap-2"
                          >
                            <FaNode />
                            Node JS
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Front-End Dropdown Content */}
                    <div>
                      <h3 className="font-bold text-xl">Front-End</h3>
                      <ul>
                        <li>
                          <a
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1  flex items-center gap-2"
                          >
                            <FaReact />
                            React JS
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://nextjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1  flex items-center gap-2"
                          >
                            <SiNextdotjs />
                            Next JS
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1  flex items-center gap-2"
                          >
                            <IoLogoJavascript />
                            JavaScript
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.typescriptlang.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1  flex items-center gap-2"
                          >
                            <SiTypescript />
                            TypeScript
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://redux.js.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1  flex items-center gap-2"
                          >
                            <SiRedux />
                            Redux
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tailwindcss.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1  flex items-center gap-2"
                          >
                            <SiTailwindcss />
                            Tailwind
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://getbootstrap.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1  flex items-center gap-2"
                          >
                            <FaBootstrap />
                            Bootstrap
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mui.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1  flex items-center gap-2"
                          >
                            <SiMui />
                            Material UI
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Back-End Dropdown Content */}
                    <div>
                      <h3 className="font-bold text-xl">Back-End</h3>
                      <ul>
                        <li>
                          <a
                            href="https://nodejs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1  flex items-center gap-2"
                          >
                            <FaNode />
                            Node JS
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://expressjs.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1  flex items-center gap-2"
                          >
                            <SiExpress />
                            Express JS
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://jwt.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1  flex items-center gap-2"
                          >
                            <SiNpm />
                            JWT
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://zod.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1  flex items-center gap-2"
                          >
                            <SiNpm />
                            Zod
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://cloudinary.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1  flex items-center gap-2"
                          >
                            <SiCloudinary />
                            Cloudinary
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Database Dropdown Content */}
                    <div>
                      <h3 className="font-bold text-xl">Database</h3>
                      <ul>
                        <li>
                          <a
                            href="https://www.mongodb.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1  flex items-center gap-2"
                          >
                            <SiMongodb />
                            MongoDB
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mongoosejs.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1  flex items-center gap-2"
                          >
                            <SiNpm />
                            Mongoose
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.postgresql.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-1  flex items-center gap-2"
                          >
                            <SiPostgresql />
                            PostgresQL
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* UI/UX Design Dropdown Content */}
                    <div>
                      <h3 className="font-bold text-xl">UI/UX Design</h3>
                      <ul>
                        <li>
                          <a href="#" className="block py-1 ">
                            Tell Us Your Requirements
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* WordPress Dropdown Content */}
                    <div>
                      <h3 className="font-bold text-xl">WordPress</h3>
                      <ul>
                        <li>
                          <a href="#" className="block py-1 ">
                            Tell Us Your Requirements
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                onClick={() => setActiveLink("About ")}
                className={`${
                  activeLink === "About "
                    ? "bg-white/20 text-white"
                    : "text-white hover:bg-white/20 hover:text-white"
                } px-3 py-2 rounded-md  font-medium hidden lg:block`}
              >
                About
              </Link>
              <Link
                href="/projects"
                onClick={() => setActiveLink("projects")}
                className={`${
                  activeLink === "projects"
                    ? "bg-white/20 text-white"
                    : "text-white hover:bg-white/20 hover:text-white"
                } px-3 py-2 rounded-md  font-medium hidden lg:block`}
              >
                Projects
              </Link>
              <Link
                href="/blogs"
                onClick={() => setActiveLink("Blogs")}
                className={`${
                  activeLink === "Blogs"
                    ? "bg-white/20 text-white"
                    : "text-white hover:bg-white/20 hover:text-white"
                } px-3 py-2 rounded-md  font-medium hidden lg:block`}
              >
                Blogs & News
              </Link>
            </div>
          </div>

          {/* Add this for mid-sized devices */}
          <div className="md:flex relative block lg:hidden">
            <span
              onClick={() => setDropdownOpenNav(!dropdownOpenNav)}
              className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium cursor-pointer"
            >
              <FaAnglesRight />
            </span>
            {dropdownOpenNav && (
              <div className="absolute top-12 bg-white text-black rounded-md w-40 shadow-lg p-2">
                <Link
                  href="/about"
                  onClick={() => setActiveLink("About ")}
                  className={`${
                    activeLink === "About "
                      ? "bg-white/20 text-white"
                      : "text-white hover:bg-white/20 hover:text-white"
                  } px-3 py-2 rounded-md  font-medium`}
                >
                  About
                </Link>
                <a
                  href="/projects"
                  onClick={() => setActiveLink("projects")}
                  className="block px-3 py-2 rounded-md font-medium text-black hover:bg-gray-200"
                >
                  Projects
                </a>
                <Link
                  href="/blogs"
                  onClick={() => setActiveLink("Blogs")}
                  className="block px-3 py-2 rounded-md font-medium text-black hover:bg-gray-200"
                >
                  Blogs & News
                </Link>
              </div>
            )}
          </div>

          <div className="hidden sm:flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link
              href={`/contactUs`}
              className="flex items-center text-base py-2 gap-2 text-white mt-auto ml-5 border-2 border-[#c1c1c13c]  bg-gradient-to-r hover:bg-gradient-to-l hover:from-[#49156D] hover:to-[#691a86] hover:border-[#a33ed2] from-[#6C00A5] to-[#6A0170] duration-150 px-5 rounded-md"
            >
              Contact Us{" "}
              <div>
                <img
                  className="w-4"
                  src="https://i.ibb.co.com/gVjzd78/line-1.png"
                  alt=""
                />
              </div>
            </Link>
          </div>

          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12" // Cross (X) icon for the open state
                      : "M4 6h16M4 12h16M4 18h16" // Three equal horizontal lines for the closed state
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${isOpen ? "block" : "hidden"} sm:hidden`}
        id="mobile-menu"
      >
        <div className=" bg-black px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            onClick={() => setActiveLink("home")}
            className={`${
              activeLink === "home"
                ? "bg-gray-900 text-white"
                : "text-white hover:bg-gray-700 hover:text-white"
            } block px-3 py-2 rounded-md text-base font-medium`}
          >
            Home
          </a>
          <div
            className=""
            onMouseEnter={() => setDropdownOpenTech(true)}
            onMouseLeave={() => setDropdownOpenTech(false)}
          >
            <a
              href="#"
              onClick={() => {
                setActiveLink("services");
                setDropdownOpenTech(!dropdownOpenTech);
              }}
              className={`${
                activeLink === "services"
                  ? "bg-gray-900 text-white"
                  : "text-white hover:bg-gray-700 hover:text-white"
              } px-3 py-2 rounded-md  font-medium  flex items-center gap-2`}
            >
              Services
              <IoIosArrowDown></IoIosArrowDown>
            </a>
            {dropdownOpenTech && (
              <div className="w-max bg-white text-black rounded-md shadow-lg p-6">
                <div>
                  <ul className="font-semibold">
                    <li>Custom Web Application Development</li>
                    <li>Web Portal Development</li>
                    <li>E-commerce Development</li>
                    <li>WordPress Development</li>
                    <li>UI & UX Design</li>
                    <li>Front-end Web Development</li>
                    <li> Back-end Web Development</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div
            className=""
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <a
              href="#"
              onClick={() => {
                setActiveLink("technologies");
                setDropdownOpen(!dropdownOpen);
              }}
              className={`${
                activeLink === "technologies"
                  ? "bg-gray-900 text-white"
                  : "text-white hover:bg-gray-700 hover:text-white"
              } px-3 py-2 rounded-md  font-medium  flex items-center gap-2`}
            >
              Technologies
              <IoIosArrowDown />
            </a>
            {dropdownOpen && (
              <div
                className="backdrop-blur-3xl bg-[#381c4489] border-[#72006A] border-4 rounded-xl text-white shadow-lg p-6 grid grid-cols-3 gap-1"
                style={{ minWidth: "300px" }} // Adjust minWidth as needed
              >
                {/* Technologies Dropdown Content */}
                <div>
                  <h3 className=" font-bold text-xl">MERN-Stack</h3>
                  <ul>
                    <li>
                      <a href="#" className="py-1  flex items-center gap-2">
                        <SiMongodb></SiMongodb>
                        MongoDB
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1  flex items-center gap-2">
                        <SiExpress></SiExpress>
                        Express JS
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1  flex items-center gap-2">
                        <FaReact></FaReact>
                        React JS
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1  flex items-center gap-2">
                        <FaNode />
                        Node JS
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className=" font-bold text-xl">Front-End</h3>
                  <ul>
                    <li>
                      <a href="#" className="py-1  flex items-center gap-2">
                        <FaReact></FaReact>
                        React JS
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1  flex items-center gap-2">
                        <SiNextdotjs></SiNextdotjs>
                        Next JS
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1  flex items-center gap-2">
                        <IoLogoJavascript />
                        JavaScript
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1  flex items-center gap-2">
                        <SiTypescript />
                        TypeScript
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1  flex items-center gap-2">
                        <SiRedux />
                        Redux
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1  flex items-center gap-2">
                        <SiTailwindcss />
                        Tailwind
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1  flex items-center gap-2">
                        <FaBootstrap />
                        Bootstrap
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1  flex items-center gap-2">
                        <SiMui />
                        Material UI
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className=" font-bold text-xl">Back-End</h3>
                  <ul>
                    <li>
                      <a href="#" className="py-1  flex items-center gap-2">
                        <FaNode />
                        Node JS
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1  flex items-center gap-2">
                        <SiExpress />
                        Express JS
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1  flex items-center gap-2">
                        <SiNpm />
                        JWT
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1  flex items-center gap-2">
                        <SiNpm />
                        Zod
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1  flex items-center gap-2">
                        <SiCloudinary />
                        Cloudinary
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className=" font-bold text-xl">Database</h3>
                  <ul>
                    <li>
                      <a href="#" className="py-1  flex items-center gap-2">
                        <SiMongodb />
                        MongoDB
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1  flex items-center gap-2">
                        <SiNpm />
                        Mongoose
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1  flex items-center gap-2">
                        <SiPostgresql />
                        PostgresQL
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className=" font-bold text-xl">UI/UX Design</h3>
                  <ul>
                    <li>
                      <a href="#" className="block py-1 ">
                        Tell Us Your Requirments
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className=" font-bold text-xl">WordPress</h3>
                  <ul>
                    <li>
                      <a href="#" className="block py-1 ">
                        Tell Us Your Requirments
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <a
            href="#"
            onClick={() => setActiveLink("about")}
            className={`${
              activeLink === "about"
                ? "bg-gray-900 text-white"
                : "text-white hover:bg-gray-700 hover:text-white"
            } block px-3 py-2 rounded-md text-base font-medium`}
          >
            About
          </a>
          <a
            href="#"
            onClick={() => setActiveLink("projects")}
            className={`${
              activeLink === "projects"
                ? "bg-gray-900 text-white"
                : "text-white hover:bg-gray-700 hover:text-white"
            } block px-3 py-2 rounded-md text-base font-medium`}
          >
            Projects
          </a>
          <a
            href="#"
            onClick={() => setActiveLink("Blogs")}
            className={`${
              activeLink === "Blogs"
                ? "bg-gray-900 text-white"
                : "text-white hover:bg-gray-700 hover:text-white"
            } block px-3 py-2 rounded-md text-base font-medium`}
          >
            Blogs & News
          </a>
          <div className="flex justify-center border">
            <button className="text-white ">Choose us</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
