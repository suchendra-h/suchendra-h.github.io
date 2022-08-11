/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import NavbarDarkSwitch from "./navbardarkswitch";
import { PuzzleIcon } from "@heroicons/react/solid";
import Signature from "../signature/signature";

function MyNavbar(props) {
  const tabs = [
    { label: "Home", href: "home" },
    { label: "Projects", href: "projects" },
    { label: "Contact Me", href: "contact" },
  ];
  return (
    <>
      {/* <!-- navbar goes here --> */}
      <nav className="bg-gray-200 dark:bg-slate-900 shadow-md shadow-slate-300 dark:shadow-slate-900">
        <div className="flex max-w-6xl h-[45px] items-center justify-between mx-auto px-4 drop-shadow-2xl">
          <div className="flex space-x-0">
            {/* <!-- logo --> */}
            <div>
              <a
                href="/"
                className="grid grid-cols-4 gap-2 place-content-center w-60 py-5 px-2 text-gray-700 hover:text-gray-900"
              >
                <PuzzleIcon className="fill-amber-700 justify-self-end dark:fill-orange-300 py-3 h-12" />
                <span className="whitespace-nowrap col-auto justify-self-start my-auto font-bold  dark:text-slate-50 ">
                  Milad Hassani
                </span>
              </a>
            </div>

            {/* <!-- primary nav --> */}

            <div className="hidden md:flex items-center justify-start ">
              {tabs.map((tab) => (
                <a
                  href={`/${tab.href}`}
                  className="py-5 px-3 text-gray-700 hover:text-gray-900 dark:text-sky-200 dark:hover:text-sky-400"
                  key={`${tab.href}`}
                >
                  {tab.label}
                </a>
              ))}
            </div>
          </div>

          {/* <!-- secondary nav --> */}
          <div className="hidden md:flex items-center space-x-1">
            <NavbarDarkSwitch
              className="shadow-2xl dark:"
              setDarkMode={props.setDarkMode}
              darkMode={props.darkMode}
              size="small"
            />
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
