import React from "react";

function QuizAndProgress() {
  return (
    <div className="relative flex flex-col lg:flex-row max-w-screen-xl mx-auto px-3 lg:px-6 space-y-6 lg:space-y-0 lg:space-x-6">
      {/* MCQs Section */}
      <section className="p-6 bg-gray-100 rounded-lg  mb-6 lg:mb-0 flex-1">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 md:text-3xl">
          Multiple-Choice Questions (MCQs)
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
          <li>
            <strong className="text-gray-900">Quiz Interface:</strong> The quiz
            interface presents multiple-choice questions relevant to food
            technology, allowing students to test their knowledge actively.
          </li>
          <li>
            <strong className="text-gray-900">Question Examples:</strong>
            Questions might include identifying the nature of enzymes, assessing
            their role in food technology.
          </li>
          <li>
            <strong className="text-gray-900">Practice Questions:</strong>
            Engage with practice questions similar to those encountered in
            actual exams to enhance preparation.
          </li>
        </ul>
      </section>

      {/* Progress Tracking Section */}
      <section className="p-6 bg-gray-100 rounded-lg  flex-1">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 md:text-3xl">
          Progress Tracking
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
          <li>
            <strong className="text-gray-900">Score Tracking:</strong>
            The app tracks the user's scores for each quiz set, providing
            immediate feedback.
          </li>
          <li>
            <strong className="text-gray-900">Feedback:</strong> Immediate
            feedback helps students understand their performance and identify
            areas for improvement.
          </li>
          <li>
            <strong className="text-gray-900">Targeted Learning:</strong>
            Use progress insights for targeted learning and effective exam
            preparation.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default QuizAndProgress;
