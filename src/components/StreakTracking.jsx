import React from "react";
import image3 from "../assets/Pixel True Mockup (6).png";
function StreakTracking() {
  return (
    <div className="relative">
      <div
        className="flex flex-col-reverse items-center justify-center px-2 py-4 md:px-4 md:py-6 lg:px-8 lg:py-10"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="flex flex-col md:flex-row items-start justify-between max-w-screen-xl mx-auto space-y-6 md:space-y-0">
          {/* Image Section */}
          <div className="flex flex-col w-full md:w-1/2 mt-6 md:mt-0 md:ml-6 space-y-6">
            <div className="relative mb-4">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                Streak Tracking & Activity Overview
              </h1>
            </div>
            <p className="text-gray-600 text-lg md:text-xl mb-4">
              Keep track of your daily engagement and build a consistent study
              routine with our streak-tracking feature.
            </p>

            <div className="w-full">
              {/* Streak Tracking Section */}
              <section className="p-4 bg-white rounded-lg mb-6 lg:mb-0 lg:mr-4 flex-1">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 md:text-3xl">
                  Track Your Streaks
                </h2>
                <p className="text-gray-700 mb-4 text-base md:text-lg">
                  Our streak-tracking feature helps you stay motivated and
                  maintain a regular study routine.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
                  <li>
                    <strong>Longest Streak :</strong> This metric highlights
                    your best performance in maintaining consecutive daily
                    activity, motivating you to set and break personal records.
                  </li>
                  <li>
                    <strong>Ongoing Streak :</strong> This shows your current
                    streak of active days, encouraging you to keep your momentum
                    going.
                  </li>
                  <li>
                    <strong>Activity Calendar :</strong> The calendar visually
                    represents the days you've engaged with the app, marked by
                    flame icons, helping you see your activity patterns and
                    reinforcing daily commitment.
                  </li>
                </ul>
                <div className="mt-4 text-base md:text-lg">
                  <strong>Start Tracking Today:</strong> Stay committed and
                  track your progress with ease. Engage daily to build a strong
                  study routine!
                </div>
              </section>

              {/* Activity Calendar Section */}
            </div>
          </div>

          <img
            src={image3}
            alt="Streak Tracking"
            className="w-full md:w-1/2 max-w-full h-auto rounded-lg"
            style={{ maxHeight: "520px" }}
          />

          {/* Text Section */}
        </div>
      </div>
    </div>
  );
}

export default StreakTracking;
