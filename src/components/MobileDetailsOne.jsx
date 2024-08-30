import React from "react";
import image2 from "../assets/Pixel True Mockup 1.png";

function MobileDetailsOne() {
  return (
    <div className="relative">
      <div
        className="flex flex-col items-center justify-center px-2 py-4 md:px-4 md:py-6 lg:px-8 lg:py-10"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="flex flex-col-reverse md:flex-row items-start justify-between max-w-screen-xl mx-auto space-y-6 md:space-y-0">
          {/* Image Section */}
          <img
            src={image2}
            alt="Exam Preparation"
            className="w-full md:w-1/2 max-w-full h-auto rounded-lg"
            style={{ maxHeight: "520px" }}
          />

          {/* Text Section */}
          <div className="flex flex-col w-full md:w-1/2 mt-6 md:mt-0 md:ml-6 space-y-6">
            <div className="relative mb-4">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                Exam Preparation & Courses
              </h1>
            </div>
            <p className="text-gray-600 text-lg md:text-xl mb-4">
              Explore our comprehensive resources and courses tailored for food
              technology professionals.
            </p>

            <div className="w-full">
              {/* Exam Preparation Section */}
              <section className="p-4 bg-white rounded-lg mb-6 lg:mb-0 lg:mr-4 flex-1">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 md:text-3xl">
                  FSSAI Junior Analyst & Food Analyst Exam Course
                </h2>
                <p className="text-gray-700 mb-4 text-base md:text-lg">
                  The course focuses on preparing students for the FSSAI Junior
                  Analyst & Food Analyst Exam with comprehensive resources.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
                  <li>
                    <strong>Recorded Video Lectures:</strong> In-depth video
                    sessions covering essential topics, allowing students to
                    learn at their own pace.
                  </li>
                  <li>
                    <strong>E-Books:</strong> Digital books that provide
                    extensive coverage of the exam syllabus, including key
                    concepts and detailed explanations.
                  </li>
                  <li>
                    <strong>Previous Year Papers:</strong> Access to past exam
                    papers to understand the exam pattern and types of questions
                    asked.
                  </li>
                  <li>
                    <strong>Important MCQs:</strong> A collection of
                    multiple-choice questions crucial for exam preparation.
                  </li>
                  <li>
                    <strong>Exam Updates:</strong> Regular updates about the
                    exam, including any changes in the syllabus or important
                    notifications.
                  </li>
                  <li>
                    <strong>Exam Syllabus:</strong> Detailed coverage of the
                    exam syllabus to ensure comprehensive preparation.
                  </li>
                  <li>
                    <strong>WhatsApp Discussion Groups:</strong> Community
                    support for discussing topics, clarifying doubts, and
                    staying motivated.
                  </li>
                </ul>
              </section>

              {/* FSSAI Junior Analyst & Food Analyst Exam Course Section */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileDetailsOne;
