import React from "react";

function TempComponent() {
  return (
    <div className="relative flex flex-col lg:flex-row max-w-screen-xl mx-auto px-6 lg:px-12 space-y-6 lg:space-y-0 lg:space-x-6">
      {/* Exam Preparation Section */}
      <section className="p-6 bg-gray-100 rounded-lg shadow-md mb-6 lg:mb-0 flex-1">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 md:text-3xl">
          Exam Preparation
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
          <li>
            <strong className="text-gray-900">CUET PG:</strong> Postgraduate
            entrance exam preparation with relevant study materials.
          </li>
          <li>
            <strong className="text-gray-900">Ctri:</strong> Resources for exams
            related to the Central Tobacco Research Institute.
          </li>
          <li>
            <strong className="text-gray-900">FCI:</strong> Study guides and
            practice materials for the Food Corporation of India exams.
          </li>
          <li>
            <strong className="text-gray-900">Food Analysis:</strong>{" "}
            Specialized resources on methods and techniques in food analysis.
          </li>
        </ul>
      </section>

      {/* Food Chemistry Topics Section */}
      <section className="p-6 bg-gray-100 rounded-lg shadow-md flex-1">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 md:text-3xl">
          Food Chemistry Topics
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
          <li>
            <strong className="text-gray-900">Enzymes:</strong> Detailed
            information about the role of enzymes in food processing and
            preservation.
          </li>
          <li>
            <strong className="text-gray-900">Food Proteins:</strong> Insights
            into the different types of proteins in food, their functions, and
            their importance in nutrition.
          </li>
          <li>
            <strong className="text-gray-900">Food Analysis:</strong> Covers
            various analytical techniques used to ensure food safety and
            quality.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default TempComponent;
