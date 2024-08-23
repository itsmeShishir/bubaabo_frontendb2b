import { FiDollarSign } from 'react-icons/fi';

const Earnings = () => {
  // Dummy data for the table
  const earningsData = [
    {
      serviceCode: 'SR001',
      applyDate: '2024-08-01',
      status: 'Pending',
      commission: 'Rs. 500',
    },
    {
      serviceCode: 'SR002',
      applyDate: '2024-08-02',
      status: 'Completed',
      commission: 'Rs. 1000',
    },
    {
      serviceCode: 'SR003',
      applyDate: '2024-08-03',
      status: 'In Progress',
      commission: 'Rs. 700',
    },
    // Add more dummy data as needed
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-700">My Earnings</h1>
        <button className="bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md flex items-center space-x-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <FiDollarSign className="text-xl" />
          <span>Withdraw</span>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-blue-500 p-6 rounded-lg shadow-lg flex items-center space-x-4">
          <div className="bg-blue-700 p-4 rounded-full">
            <FiDollarSign className="text-white text-3xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Lifetime Earning</h3>
            <p className="text-2xl font-bold text-white">Rs. 0</p>
          </div>
        </div>

        <div className="bg-green-500 p-6 rounded-lg shadow-lg flex items-center space-x-4">
          <div className="bg-green-700 p-4 rounded-full">
            <FiDollarSign className="text-white text-3xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Redeemable Amount</h3>
            <p className="text-2xl font-bold text-white">0</p>
          </div>
        </div>

        <div className="bg-yellow-500 p-6 rounded-lg shadow-lg flex items-center space-x-4">
          <div className="bg-yellow-700 p-4 rounded-full">
            <FiDollarSign className="text-white text-3xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Total Withdrawals</h3>
            <p className="text-2xl font-bold text-white">0</p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-600 border-b border-gray-200">
                Service Code
              </th>
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-600 border-b border-gray-200">
                Apply Date
              </th>
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-600 border-b border-gray-200">
                Status
              </th>
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-600 border-b border-gray-200">
                Commission
              </th>
            </tr>
          </thead>
          <tbody>
            {earningsData.length > 0 ? (
              earningsData.map((earning, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {earning.serviceCode}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {earning.applyDate}
                  </td>
                  <td
                    className={`py-2 px-4 border-b border-gray-200 ${
                      earning.status === 'Completed'
                        ? 'text-green-600'
                        : earning.status === 'Pending'
                        ? 'text-yellow-600'
                        : 'text-blue-600'
                    }`}
                  >
                    {earning.status}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {earning.commission}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-4 text-center text-gray-500">
                  No earnings available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Earnings;
