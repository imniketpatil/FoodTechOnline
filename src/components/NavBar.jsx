import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);

  const toggleProductMenu = () => {
    setIsProductMenuOpen(!isProductMenuOpen);
  };

  return (
    <header className="bg-slate-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/">
            {/* <span href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Company Logo"
              />
            </span> */}
            <h1 className="text-lg font-extrabold text-gray-900 sm:text-xl hover:text-gray-600 lg:text-2xl">
              Food Tech Online
            </h1>
          </Link>
        </div>
        {/* <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={toggleProductMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div
          className={`fixed h-fit inset-0 bg-white z-50 transition-transform transform ${
            isProductMenuOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
        >
          <div className="flex justify-end p-4">
            <button
              type="button"
              className="p-2 text-gray-700"
              onClick={toggleProductMenu}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center space-y-3 py-8">
            <a href="#" className="text-lg font-semibold text-gray-900">
              About Us
            </a>
            <a href="#" className="text-lg font-semibold text-gray-900">
              Contact Us
            </a>
            Uncomment if you want to show login link in mobile menu
            <a href="#" className="text-lg font-semibold text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            About Us
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Contact Us
          </a>
        </div> */}
      </nav>
    </header>
  );
}

export default NavBar;
