import { FiBook, FiHome, FiBriefcase } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const LoanServices = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Choose Service</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
          <Link to="education-loan" className="flex items-center">
            <FiBook className="text-blue-500 text-4xl" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-700">Education Loan</h3>
            </div>
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between border-l-4 border-green-500 hover:shadow-lg transition-shadow">
          <div className="flex items-center">
            <FiHome className="text-green-500 text-4xl" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-700">One Day Loan</h3>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between border-l-4 border-yellow-500 hover:shadow-lg transition-shadow">
          <div className="flex items-center">
            <FiBriefcase className="text-yellow-500 text-4xl" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-700">Business Loan</h3>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between border-l-4 border-yellow-500 hover:shadow-lg transition-shadow">
          <div className="flex items-center">
            <FiBriefcase className="text-yellow-500 text-4xl" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-700">Business Loan</h3>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between border-l-4 border-yellow-500 hover:shadow-lg transition-shadow">
          <div className="flex items-center">
            <FiBriefcase className="text-yellow-500 text-4xl" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-700">Business Loan</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanServices;
