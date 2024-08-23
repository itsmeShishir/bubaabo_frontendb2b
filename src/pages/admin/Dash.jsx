import { FiCheckCircle, FiClock, FiXCircle, FiClipboard } from 'react-icons/fi';

const DashSummary = () => {
  return (
    <div className="container mx-auto p-6 overflow-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-700">Service Requests Overview</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between border-l-4 border-blue-500">
          <div>
            <h3 className="text-lg font-semibold text-blue-600">Total Service Requested</h3>
            <p className="text-2xl font-bold text-gray-800">0</p>
          </div>
          <FiClipboard className="text-blue-500 text-4xl" />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between border-l-4 border-green-500">
          <div>
            <h3 className="text-lg font-semibold text-green-600">Service Completed</h3>
            <p className="text-2xl font-bold text-gray-800">0</p>
          </div>
          <FiCheckCircle className="text-green-500 text-4xl" />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between border-l-4 border-yellow-500">
          <div>
            <h3 className="text-lg font-semibold text-yellow-600">Pending Requests</h3>
            <p className="text-2xl font-bold text-gray-800">0</p>
          </div>
          <FiClock className="text-yellow-500 text-4xl" />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between border-l-4 border-red-500">
          <div>
            <h3 className="text-lg font-semibold text-red-600">Rejected Requests</h3>
            <p className="text-2xl font-bold text-gray-800">0</p>
          </div>
          <FiXCircle className="text-red-500 text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default DashSummary;
