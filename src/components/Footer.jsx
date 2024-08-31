import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 pb-4 pt-8 sm:px-6 lg:px-8 lg:pt-16">
        <div className="space-y-8 md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
          <div className="space-y-4 md:col-span-1">
            <Link to="/">
              <h1 className="text-2xl font-bold sm:text-3xl">
                Food Tech Online
              </h1>
            </Link>
            <p className="text-sm leading-6 text-gray-600">
              Making Food Tech look better to the world !
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 gap-y-8 gap-x-12 sm:grid-cols-2 sm:gap-y-6 md:grid-cols-2 md:gap-x-6">
              <div className="space-y-2">
                <p className="text-base font-semibold text-gray-900">Legal</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <Link to="/termsofuse" className="hover:text-gray-900">
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/refundcancellationpolicy"
                      className="hover:text-gray-900"
                    >
                      Refund & Cancellation Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacypolicy" className="hover:text-gray-900">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/disclaimer" className="hover:text-gray-900">
                      Disclaimer
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shippinganddeliverypolicy"
                      className="hover:text-gray-900"
                    >
                      Shipping and Delivery Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-base font-semibold text-gray-900">Support</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <a href="mailto:foodtechonline2022@gmail.com">
                      foodtechonline2022@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+917020968581">+917020968581</a>
                  </li>
                  <li> Address: Nagbhid, Chandrapur, 441205</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            &copy; 2024 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
