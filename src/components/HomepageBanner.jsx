import React from "react";
import image1 from "../assets/Pixel True Mockup (2).png";

export default function HomepageBanner() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-100 px-6 py-12 sm:py-16 lg:px-8 lg:py-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className="mx-auto max-w-screen-xl px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
          <div className="relative flex flex-col justify-center lg:col-start-1 lg:row-start-1">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
              Your Ultimate Resource for Food Technology
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive resources for competitive exams, job courses, and
              food chemistry.
            </p>
            <div className="flex flex-col md:flex-row gap-3 mt-6">
              <a
                href="https://play.google.com/store/apps/details?id=com.androkode.android.foodtechquiz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-black text-white hover:bg-gray-800 transition duration-300">
                  <svg viewBox="30 336.7 120.9 129.2" className="w-5 sm:w-7">
                    <path
                      d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                      fill="#FFD400"
                    ></path>
                    <path
                      d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                      fill="#FF3333"
                    ></path>
                    <path
                      d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                      fill="#48FF48"
                    ></path>
                    <path
                      d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                      fill="#3BCCFF"
                    ></path>
                  </svg>
                  <div>
                    <div className="text-sm font-semibold text-left">
                      GET IT ON
                    </div>

                    <div className="text-lg font-semibold text-left">
                      Google Play
                    </div>
                  </div>
                </button>
              </a>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center lg:col-start-2 lg:row-start-1">
            <img
              src={image1}
              alt="Main banner"
              className="w-full h-full object-cover rounded-xl "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
