/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import NavbarSwitch from "./navbarswitch";
import { PuzzleIcon } from "@heroicons/react/solid";

function MyNavbar(props) {
  const tabs = [
    { label: "Home", href: "home" },
    { label: "Projects", href: "projects" },
    { label: "Contact Me", ref: "home" },
  ];
  return (
    <>
      {/* <!-- navbar goes here --> */}
      <nav className="bg-gray-100">
        <div className="max-w-6xl h-[80px] mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-9">
              {/* <!-- logo --> */}
              <div>
                <a
                  href="/"
                  className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <PuzzleIcon className="fill-amber-700" />
                  <span className="block font-bold ml-5">Milad Hassani</span>
                </a>
              </div>

              {/* <!-- primary nav --> */}

              <div className="hidden md:flex items-center space-x-1">
                {tabs.map((tab) => (
                  <a
                    href={`/${tab.href}`}
                    className="py-5 px-3 text-gray-700 hover:text-gray-900"
                    key={`${tab.href}`}
                  >
                    {tab.label}
                  </a>
                ))}
              </div>
            </div>

            {/* <!-- secondary nav --> */}
            <div className="hidden md:flex items-center space-x-1">
              <NavbarSwitch className="shadow-2xl" />
            </div>

            {/* <!-- mobile button goes here --> */}
            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- mobile menu --> */}
        <div className="mobile-menu hidden md:hidden">
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Features
          </a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Pricing
          </a>
        </div>
      </nav>
    </>
  );
}
export default MyNavbar;
