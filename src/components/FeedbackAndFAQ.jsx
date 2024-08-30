import React from "react";
import image5 from "../assets/Pixel True Mockup (7).png";

function FeedbackAndFAQs() {
  return (
    <div className="relative bg-[#f8f9fa]">
      <div className="flex flex-col items-center justify-center px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10">
        <div className="flex flex-col md:flex-row items-start justify-between max-w-screen-xl mx-auto space-y-6 md:space-y-0">
          {/* Text Section */}
          <div className="flex flex-col w-full md:w-1/2 mt-6 md:mt-0 md:mr-6 space-y-6">
            <div className="relative mb-4">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Feedback & FAQs
              </h1>
            </div>
            <p className="text-gray-700 text-lg md:text-xl mb-4">
              Share your feedback or get answers to frequently asked questions
              about the app.
            </p>

            <div className="w-full">
              {/* FAQ Section */}
              <section className="p-6 bg-white rounded-lg  mb-6 lg:mb-0 lg:mr-4 flex-1">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                  Frequently Asked Questions (FAQs)
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-4 text-base md:text-lg">
                  <li>
                    <strong className="text-gray-900">
                      How can I start taking quizzes in the app?
                    </strong>{" "}
                    Navigate to the exam or subject section and select a quiz
                    category to begin.
                  </li>
                  <li>
                    <strong className="text-gray-900">
                      How do I check my quiz results?
                    </strong>{" "}
                    View your score, correct answers, and review your responses
                    after completing a quiz.
                  </li>
                  <li>
                    <strong className="text-gray-900">
                      Can I retake a quiz if I’m not satisfied with my score?
                    </strong>{" "}
                    Yes, you can retake quizzes as many times as you like; only
                    the latest score will be recorded.
                  </li>
                  <li>
                    <strong className="text-gray-900">
                      How often are new quizzes added to the app?
                    </strong>{" "}
                    New quizzes and content are regularly added to keep the app
                    engaging and up-to-date.
                  </li>
                  <li>
                    <strong className="text-gray-900">
                      Can I suggest a topic for a quiz or provide feedback?
                    </strong>{" "}
                    Yes, we welcome suggestions for quiz topics and other
                    feedback through the submission form.
                  </li>
                  <li>
                    <strong className="text-gray-900">
                      How can I contact customer support if I encounter an
                      issue?
                    </strong>{" "}
                    Contact support via the app or through our provided email
                    address for assistance.
                  </li>
                  <li>
                    <strong className="text-gray-900">
                      Is my personal data secure?
                    </strong>{" "}
                    We prioritize data security and follow industry standards to
                    protect your privacy.
                  </li>
                </ul>
              </section>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-shrink-0 w-full md:w-1/2 flex items-center justify-center">
            <img
              src={image5}
              alt="Feedback and Support"
              className="w-full max-w-xl rounded-xl "
              style={{
                maxHeight: "700px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackAndFAQs;
