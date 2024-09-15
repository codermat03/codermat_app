"use client";
import { useState, useEffect } from "react";
import { FaBootstrap, FaNode, FaReact } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";

import { GiHamburgerMenu } from "react-icons/gi";

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
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <img
                  className=""
                  src="https://i.postimg.cc/pXrT6fkh/Rectangle-4.png"
                  alt="CoderMat"
                />
              </Link>
            </div>
          </div>

          <div className="hidden sm:flex flex-1 justify-center sm:ml-6">
            <div className="relative flex items-center space-x-4 z-40">
              <a
                href="/"
                onClick={() => setActiveLink("home")}
                className={`${
                  activeLink === "home"
                    ? "bg-gray-900 text-white"
                    : "text-white hover:bg-gray-700 hover:text-white"
                } px-3 py-2 rounded-md  font-medium`}
              >
                Home
              </a>

              <div
                className="relative flex justify-center"
                onMouseEnter={() => setDropdownOpenTech(true)}
                onMouseLeave={() => setDropdownOpenTech(false)}
              >
                <a
                  href="/services"
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
                  <div
                    className="absolute -left-[260px]  mt-12 w-max bg-white text-black rounded-md shadow-lg p-6 grid grid-cols-4 gap-4"
                    style={{ minWidth: "300px" }} // Adjust minWidth as needed
                  >
                    {/* Services Dropdown Content */}
                    <div>
                      <h3 className=" font-bold text-xl">
                        Custom Web Application <br /> Development
                      </h3>
                      <ul>
                        <li>
                          <a href="#" className="block py-1 ">
                            Implementation
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 ">
                            Application Development
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 ">
                            Integration
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 ">
                            Sales Marketing Cloud
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 ">
                            Community Enhancement
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 ">
                            Financial Services
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 ">
                            Support Services
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className=" font-bold text-xl">
                        Web Portal Development
                      </h3>
                      <ul>
                        <li>
                          <a href="#" className="block py-1 ">
                            DevOps
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 ">
                            Solution Architecture
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 ">
                            Integration And Migration
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 ">
                            Support Services
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 ">
                            AWS Cognito
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className=" font-bold text-xl">
                        E-commerce Development
                      </h3>
                      <ul>
                        <li>
                          <a href="#" className="block py-1 ">
                            DevOps
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 ">
                            Solution Architecture
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 ">
                            Cloud Migration and Modernization
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 ">
                            Active Directory
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 ">
                            Support Services
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className=" font-bold text-xl">
                        WordPress Development
                      </h3>
                      <ul>
                        <li>
                          <a href="#" className="block py-1 ">
                            Application Integration
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 ">
                            Consulting
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 ">
                            Master Data Management
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 ">
                            Boomi Mediate
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 ">
                            Boomi Flow
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 ">
                            Support Services
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className=" font-bold text-xl">UI & UX Design</h3>
                      <ul>
                        <li>
                          <a href="#" className="block py-1 ">
                            Enterprise Resource Planning
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 ">
                            Customer Relationship Management
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 ">
                            Professional Services Automation
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 ">
                            E-commerce
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className=" font-bold text-xl">
                        Front-end Web Development
                      </h3>
                      <ul>
                        <li>
                          <a href="#" className="block py-1 ">
                            Enterprise Resource Planning
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 ">
                            Customer Relationship Management
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 ">
                            Professional Services Automation
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 ">
                            E-commerce
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className=" font-bold text-xl">
                        Back-end Web Development
                      </h3>
                      <ul>
                        <li>
                          <a href="#" className="block py-1 ">
                            Enterprise Resource Planning
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 ">
                            Customer Relationship Management
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 ">
                            Professional Services Automation
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 ">
                            E-commerce
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <div
                className="relative relative flex justify-center"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <a
                  href="/Technologies"
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
                    className="absolute -left-[360px]  mt-12 w-max bg-white text-black rounded-md shadow-lg p-6 grid grid-cols-4 gap-4"
                    style={{ minWidth: "300px" }} // Adjust minWidth as needed
                  >
                    {/* Technologies Dropdown Content */}
                    <div>
                      <h3 className=" font-bold text-xl">MERN-Stack</h3>
                      <ul>
                        <li>
                          <a
                            href="#"
                            className="block py-1  flex items-center gap-2"
                          >
                            <SiMongodb></SiMongodb>
                            MongoDB
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-1  flex items-center gap-2"
                          >
                            <SiExpress></SiExpress>
                            Express JS
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-1  flex items-center gap-2"
                          >
                            <FaReact></FaReact>
                            React JS
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-1  flex items-center gap-2"
                          >
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
                          <a
                            href="#"
                            className="block py-1  flex items-center gap-2"
                          >
                            <FaReact></FaReact>
                            React JS
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-1  flex items-center gap-2"
                          >
                            <SiNextdotjs></SiNextdotjs>
                            Next JS
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-1  flex items-center gap-2"
                          >
                            <IoLogoJavascript />
                            JavaScript
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-1  flex items-center gap-2"
                          >
                            <SiTypescript />
                            TypeScript
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-1  flex items-center gap-2"
                          >
                            <SiRedux />
                            Redux
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-1  flex items-center gap-2"
                          >
                            <SiTailwindcss />
                            Tailwind
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-1  flex items-center gap-2"
                          >
                            <FaBootstrap />
                            Bootstrap
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-1  flex items-center gap-2"
                          >
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
                          <a
                            href="#"
                            className="block py-1  flex items-center gap-2"
                          >
                            <FaNode />
                            Node JS
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-1  flex items-center gap-2"
                          >
                            <SiExpress />
                            Express JS
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-1  flex items-center gap-2"
                          >
                            <SiNpm />
                            JWT
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-1  flex items-center gap-2"
                          >
                            <SiNpm />
                            Zod
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-1  flex items-center gap-2"
                          >
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
                          <a
                            href="#"
                            className="block py-1  flex items-center gap-2"
                          >
                            <SiMongodb />
                            MongoDB
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-1  flex items-center gap-2"
                          >
                            <SiNpm />
                            Mongoose
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-1  flex items-center gap-2"
                          >
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
                href="/about"
                onClick={() => setActiveLink("About ")}
                className={`${
                  activeLink === "About "
                    ? "bg-gray-900 text-white"
                    : "text-white hover:bg-gray-700 hover:text-white"
                } px-3 py-2 rounded-md  font-medium hidden lg:block`}
              >
                About
              </a>
              <a
                href="/projects"
                onClick={() => setActiveLink("projects")}
                className={`${
                  activeLink === "projects"
                    ? "bg-gray-900 text-white"
                    : "text-white hover:bg-gray-700 hover:text-white"
                } px-3 py-2 rounded-md  font-medium hidden lg:block`}
              >
                Projects
              </a>
              <a
                href="/blogs"
                onClick={() => setActiveLink("Blogs")}
                className={`${
                  activeLink === "Blogs"
                    ? "bg-gray-900 text-white"
                    : "text-white hover:bg-gray-700 hover:text-white"
                } px-3 py-2 rounded-md  font-medium hidden lg:block`}
              >
                Blogs & News
              </a>
            </div>
          </div>

          {/* Add this for mid-sized devices */}
          <div className="hidden md:flex relative block lg:hidden">
            <span
              onClick={() => setDropdownOpenNav(!dropdownOpenNav)}
              className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium cursor-pointer"
            >
              <FaAnglesRight />
            </span>
            {dropdownOpenNav && (
              <div className="absolute top-12 bg-white text-black rounded-md w-40 shadow-lg p-2">
                <a
                  href="/about"
                  onClick={() => setActiveLink("About ")}
                  className={`${
                    activeLink === "About "
                      ? "bg-gray-900"
                      : " hover:bg-gray-700 hover:text-white"
                  } px-3 py-2 rounded-md  font-medium`}
                >
                  About
                </a>
                <a
                  href="/projects"
                  onClick={() => setActiveLink("projects")}
                  className="block px-3 py-2 rounded-md font-medium text-black hover:bg-gray-200"
                >
                  Projects
                </a>
                <a
                  href="/blogs"
                  onClick={() => setActiveLink("Blogs")}
                  className="block px-3 py-2 rounded-md font-medium text-black hover:bg-gray-200"
                >
                  Blogs & News
                </a>
              </div>
            )}
          </div>

          <div className="hidden sm:flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button className=" text-white px-4 py-2 rounded-md  font-medium">
              Start Work With Us
            </button>
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
                className=" bg-white text-black rounded-md shadow-lg p-6 grid grid-cols-3 gap-1"
                style={{ minWidth: "300px" }} // Adjust minWidth as needed
              >
                {/* Technologies Dropdown Content */}
                <div>
                  <h3 className=" font-bold text-xl">MERN-Stack</h3>
                  <ul>
                    <li>
                      <a
                        href="#"
                        className="block py-1  flex items-center gap-2"
                      >
                        <SiMongodb></SiMongodb>
                        MongoDB
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-1  flex items-center gap-2"
                      >
                        <SiExpress></SiExpress>
                        Express JS
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-1  flex items-center gap-2"
                      >
                        <FaReact></FaReact>
                        React JS
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-1  flex items-center gap-2"
                      >
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
                      <a
                        href="#"
                        className="block py-1  flex items-center gap-2"
                      >
                        <FaReact></FaReact>
                        React JS
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-1  flex items-center gap-2"
                      >
                        <SiNextdotjs></SiNextdotjs>
                        Next JS
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-1  flex items-center gap-2"
                      >
                        <IoLogoJavascript />
                        JavaScript
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-1  flex items-center gap-2"
                      >
                        <SiTypescript />
                        TypeScript
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-1  flex items-center gap-2"
                      >
                        <SiRedux />
                        Redux
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-1  flex items-center gap-2"
                      >
                        <SiTailwindcss />
                        Tailwind
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-1  flex items-center gap-2"
                      >
                        <FaBootstrap />
                        Bootstrap
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-1  flex items-center gap-2"
                      >
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
                      <a
                        href="#"
                        className="block py-1  flex items-center gap-2"
                      >
                        <FaNode />
                        Node JS
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-1  flex items-center gap-2"
                      >
                        <SiExpress />
                        Express JS
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-1  flex items-center gap-2"
                      >
                        <SiNpm />
                        JWT
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-1  flex items-center gap-2"
                      >
                        <SiNpm />
                        Zod
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-1  flex items-center gap-2"
                      >
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
                      <a
                        href="#"
                        className="block py-1  flex items-center gap-2"
                      >
                        <SiMongodb />
                        MongoDB
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-1  flex items-center gap-2"
                      >
                        <SiNpm />
                        Mongoose
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-1  flex items-center gap-2"
                      >
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
