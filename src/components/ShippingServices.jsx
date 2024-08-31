import React from "react";
import { FaShippingFast, FaCheckCircle } from "react-icons/fa";

function ShippingServices() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">
        <div className="flex items-center space-x-4">
          <FaShippingFast className="text-4xl text-blue-500" />
          <h2 className="text-2xl font-bold text-gray-800">
            Shipping Services
          </h2>
        </div>
        <div className="mt-4 text-gray-600">
          <p className="text-lg leading-relaxed">
            <FaCheckCircle className="inline-block text-green-500 mr-2" />
            For our business, shipping services are not applicable. All products
            or services offered are either digital, virtual, or provided
            directly through in-person interactions, eliminating the need for
            physical shipping or delivery.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            <FaCheckCircle className="inline-block text-green-500 mr-2" />
            Please rest assured that any items purchased will be accessible or
            fulfilled without the requirement for traditional shipping methods.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShippingServices;
