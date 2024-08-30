import React from "react";
import image4 from "../assets/Pixel True Mockup (3).png";
function MobileDetailsTwo() {
  return (
    <div className="relative">
      <div
        className="flex flex-col-reverse items-center justify-center px-2 py-4 md:px-4 md:py-6 lg:px-8 lg:py-10"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="flex flex-col md:flex-row items-start justify-between max-w-screen-xl mx-auto space-y-6 md:space-y-0">
          {/* Image Section */}
          <img
            src={image4}
            alt="Quiz Sets Overview"
            className="w-full md:w-1/2 max-w-full h-auto rounded-lg"
            style={{ maxHeight: "520px" }}
          />

          {/* Text Section */}
          <div className="flex flex-col w-full md:w-1/2 mt-6 md:mt-0 md:ml-6 space-y-6">
            <div className="relative mb-4">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                Quiz Sets & Progress Tracking
              </h1>
            </div>
            <p className="text-gray-600 text-lg md:text-xl mb-4">
              Enhance your preparation with our interactive quiz sets and
              comprehensive progress tracking.
            </p>

            <div className="w-full">
              {/* Quiz Sets Overview Section */}
              <section className="p-4 bg-white rounded-lg mb-6 lg:mb-0 lg:mr-4 flex-1">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 md:text-3xl">
                  Quiz Sets Overview
                </h2>
                <p className="text-gray-700 mb-4 text-base md:text-lg">
                  Track your performance across various quiz sets with our
                  intuitive progress indicators.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
                  <li>
                    <strong>Progress Indicators:</strong> View how many
                    questions out of 10 have been answered correctly for each
                    quiz set.
                  </li>
                  <li>
                    <strong>Comprehensive Coverage:</strong> Ensure thorough
                    preparation with quizzes covering different topics from the
                    exam syllabus.
                  </li>
                  <li>
                    <strong>Interactive Learning:</strong> Engage with quizzes
                    designed to test your knowledge and reinforce learning.
                  </li>
                </ul>
              </section>

              {/* Multiple-Choice Questions Section */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileDetailsTwo;
