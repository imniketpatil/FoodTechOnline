import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32  ">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            {/* <img
              className="h-20"
              src="https://img.freepik.com/premium-vector/food-tech-logo-design-with-creative-concept-premium-vector_632138-168.jpg"
              alt="Company name"
            /> */}
            <h1 className="text-3xl font-bold">Food Tech Online</h1>
            <p className="text-sm leading-6 text-gray-600">
              Making Food Tech look better to the world
            </p>
          </div>
          <div className="space-y-8 xl:col-span-2 xl:gap-x-12 xl:gap-y-8">
            <div className="grid grid-cols-2 gap-y-8 gap-x-12 sm:grid-cols-3 md:grid-cols-2 md:gap-x-6">
              <div className="space-y-2">
                <p className="text-base font-semibold text-gray-900">Legal</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <Link to="/termsofuse">
                      <span href="#" className="hover:text-gray-900">
                        Terms of Use
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/refundcancellationpolicy">
                      <span href="#" className="hover:text-gray-900">
                        Refund & Cancellation Policy
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacypolicy">
                      <span href="#" className="hover:text-gray-900">
                        Privacy Policy
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-900/10">
          <p className="text-xs text-gray-500 text-center">
            &copy; 2024 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
