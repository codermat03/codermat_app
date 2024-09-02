"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpenTech, setDropdownOpenTech] = useState(false);
  const [activeLink, setActiveLink] = useState("home"); // State for active link

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
      className={`fixed top-0 left-0 w-full transition-colors duration-300 ${
        scrolled ? "bg-gray-900 bg-opacity-50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-auto" src="/logo.svg" alt="CoderMat" />
            </div>
          </div>

          <div className="hidden sm:flex flex-1 justify-center sm:ml-6">
            <div className="relative flex items-center space-x-4">
              <a
                href="#"
                onClick={() => setActiveLink("home")}
                className={`${
                  activeLink === "home"
                    ? "bg-gray-900 text-white"
                    : "text-gray-500 hover:bg-gray-700 hover:text-white"
                } px-3 py-2 rounded-md text-sm font-medium`}
              >
                Home
              </a>

              <div
                className="relative"
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
                      : "text-gray-500 hover:bg-gray-700 hover:text-white"
                  } px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Services
                </a>
                {dropdownOpenTech && (
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-white text-black rounded-md shadow-lg p-6 grid grid-cols-4 gap-4"
                    style={{ minWidth: "300px" }} // Adjust minWidth as needed
                  >
                    {/* Services Dropdown Content */}
                    <div>
                      <h3 className="text-sm font-semibold">SALESFORCE</h3>
                      <ul>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Implementation
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Application Development
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Integration
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Sales Marketing Cloud
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Community Enhancement
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Financial Services
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Support Services
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">AWS</h3>
                      <ul>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            DevOps
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Solution Architecture
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Integration And Migration
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Support Services
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            AWS Cognito
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">AZURE</h3>
                      <ul>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            DevOps
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Solution Architecture
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Cloud Migration and Modernization
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Active Directory
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Support Services
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">DELL BOOMI</h3>
                      <ul>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Application Integration
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Consulting
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Master Data Management
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Boomi Mediate
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Boomi Flow
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Support Services
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">NETSUITE</h3>
                      <ul>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Enterprise Resource Planning
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Customer Relationship Management
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Professional Services Automation
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            E-commerce
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <div
                className="relative"
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
                      : "text-gray-500 hover:bg-gray-700 hover:text-white"
                  } px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Technologies
                </a>
                {dropdownOpen && (
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-white text-black rounded-md shadow-lg p-6 grid grid-cols-4 gap-4"
                    style={{ minWidth: "300px" }} // Adjust minWidth as needed
                  >
                    {/* Technologies Dropdown Content */}
                    <div>
                      <h3 className="text-sm font-semibold">SALESFORCE</h3>
                      <ul>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Implementation
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Application Development
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Integration
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Sales Marketing Cloud
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Community Enhancement
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Financial Services
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Support Services
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">AWS</h3>
                      <ul>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            DevOps
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Solution Architecture
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Integration And Migration
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Support Services
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            AWS Cognito
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">AZURE</h3>
                      <ul>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            DevOps
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Solution Architecture
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Cloud Migration and Modernization
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Active Directory
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Support Services
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">DELL BOOMI</h3>
                      <ul>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Application Integration
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Consulting
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Master Data Management
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Boomi Mediate
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Boomi Flow
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Support Services
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">NETSUITE</h3>
                      <ul>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Enterprise Resource Planning
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Customer Relationship Management
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            Professional Services Automation
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block py-1 text-sm">
                            E-commerce
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="#"
                onClick={() => setActiveLink("team")}
                className={`${
                  activeLink === "team"
                    ? "bg-gray-900 text-white"
                    : "text-gray-500 hover:bg-gray-700 hover:text-white"
                } px-3 py-2 rounded-md text-sm font-medium`}
              >
                Team
              </a>
              <a
                href="#"
                onClick={() => setActiveLink("projects")}
                className={`${
                  activeLink === "projects"
                    ? "bg-gray-900 text-white"
                    : "text-gray-500 hover:bg-gray-700 hover:text-white"
                } px-3 py-2 rounded-md text-sm font-medium`}
              >
                Projects
              </a>
              <a
                href="#"
                onClick={() => setActiveLink("calendar")}
                className={`${
                  activeLink === "calendar"
                    ? "bg-gray-900 text-white"
                    : "text-gray-500 hover:bg-gray-700 hover:text-white"
                } px-3 py-2 rounded-md text-sm font-medium`}
              >
                Calendar
              </a>
            </div>
          </div>

          <div className="hidden sm:flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button className=" text-white px-4 py-2 rounded-md text-sm font-medium">
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
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
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
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            onClick={() => setActiveLink("dashboard")}
            className={`${
              activeLink === "dashboard"
                ? "bg-gray-900 text-white"
                : "text-gray-500 hover:bg-gray-700 hover:text-white"
            } block px-3 py-2 rounded-md text-base font-medium`}
          >
            Dashboard
          </a>
          <a
            href="#"
            onClick={() => setActiveLink("team")}
            className={`${
              activeLink === "team"
                ? "bg-gray-900 text-white"
                : "text-gray-500 hover:bg-gray-700 hover:text-white"
            } block px-3 py-2 rounded-md text-base font-medium`}
          >
            Team
          </a>
          <a
            href="#"
            onClick={() => setActiveLink("projects")}
            className={`${
              activeLink === "projects"
                ? "bg-gray-900 text-white"
                : "text-gray-500 hover:bg-gray-700 hover:text-white"
            } block px-3 py-2 rounded-md text-base font-medium`}
          >
            Projects
          </a>
          <a
            href="#"
            onClick={() => setActiveLink("calendar")}
            className={`${
              activeLink === "calendar"
                ? "bg-gray-900 text-white"
                : "text-gray-500 hover:bg-gray-700 hover:text-white"
            } block px-3 py-2 rounded-md text-base font-medium`}
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
}
