import React from 'react';
import { IoMdCheckmarkCircle } from 'react-icons/io';

const CustomAlert = ({ data, onClose }) => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-20 backdrop-blur-lg flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl">
        <div className="flex flex-col items-center gap-4">
          <IoMdCheckmarkCircle className="text-6xl text-green-500" />
          <div className="w-full space-y-3 text-center">
            <h3 className="text-xl font-semibold">Submission Successful!</h3>
            <div className="space-y-1.5">
              <p className="flex justify-between">
                <span className="text-gray-600">Name:</span>
                <span className="font-medium">{data.firstName} {data.lastName}</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Email:</span>
                <span className="font-medium">{data.email}</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Phone:</span>
                <span className="font-medium">{data.phone}</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomAlert; 