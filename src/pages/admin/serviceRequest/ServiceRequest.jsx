import { useState } from 'react';
import { FiEye, FiEdit } from 'react-icons/fi';

function ServiceRequest() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const serviceRequests = [
    {
      id: 1,
      code: 'SR001',
      serviceRequest: 'IT Support',
      fullName: 'John Doe',
      status: 'Pending',
      requestDate: '2024-08-01',
    },
    {
      id: 2,
      code: 'SR002',
      serviceRequest: 'Network Setup',
      fullName: 'Jane Smith',
      status: 'Completed',
      requestDate: '2024-08-02',
    },
    {
      id: 3,
      code: 'SR003',
      serviceRequest: 'Software Installation',
      fullName: 'Alice Johnson',
      status: 'In Progress',
      requestDate: '2024-08-03',
    },
  ];

  const handleViewClick = (request) => {
    setSelectedRequest(request);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRequest(null);
  };

  return (
    <div className="flex flex-col p-4 lg:p-6">
      <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md w-full border-t-4 border-blue-500">
        <h2 className="text-lg lg:text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
          My Service Request List
        </h2>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
          <div className="flex items-center space-x-2 mb-2 lg:mb-0">
            <label htmlFor="entries" className="text-sm text-gray-600">
              Show
            </label>
            <select
              id="entries"
              className="shadow-sm appearance-none border rounded py-1 px-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <span className="text-sm text-gray-600">entries</span>
          </div>
          <div className="relative w-full lg:w-auto">
            <input
              type="text"
              placeholder="Search"
              className="w-full shadow-sm appearance-none border rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-2 lg:px-4 text-left text-xs lg:text-sm font-medium text-gray-600 border-b border-gray-200">
                  #
                </th>
                <th className="py-2 px-2 lg:px-4 text-left text-xs lg:text-sm font-medium text-gray-600 border-b border-gray-200">
                  Code
                </th>
                <th className="py-2 px-2 lg:px-4 text-left text-xs lg:text-sm font-medium text-gray-600 border-b border-gray-200">
                  Service Request
                </th>
                <th className="py-2 px-2 lg:px-4 text-left text-xs lg:text-sm font-medium text-gray-600 border-b border-gray-200">
                  Full Name
                </th>
                <th className="py-2 px-2 lg:px-4 text-left text-xs lg:text-sm font-medium text-gray-600 border-b border-gray-200">
                  Status
                </th>
                <th className="py-2 px-2 lg:px-4 text-left text-xs lg:text-sm font-medium text-gray-600 border-b border-gray-200">
                  Request Date
                </th>
                <th className="py-2 px-2 lg:px-4 text-left text-xs lg:text-sm font-medium text-gray-600 border-b border-gray-200">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {serviceRequests.length > 0 ? (
                serviceRequests.map((request) => (
                  <tr key={request.id}>
                    <td className="py-2 px-2 lg:px-4 border-b border-gray-200">
                      {request.id}
                    </td>
                    <td className="py-2 px-2 lg:px-4 border-b border-gray-200">
                      {request.code}
                    </td>
                    <td className="py-2 px-2 lg:px-4 border-b border-gray-200">
                      {request.serviceRequest}
                    </td>
                    <td className="py-2 px-2 lg:px-4 border-b border-gray-200">
                      {request.fullName}
                    </td>
                    <td
                      className={`py-2 px-2 lg:px-4 border-b border-gray-200 ${
                        request.status === 'Completed'
                          ? 'text-green-600'
                          : request.status === 'Pending'
                          ? 'text-yellow-600'
                          : 'text-blue-600'
                      }`}
                    >
                      {request.status}
                    </td>
                    <td className="py-2 px-2 lg:px-4 border-b border-gray-200">
                      {request.requestDate}
                    </td>
                    <td className="py-2 px-2 lg:px-4 border-b border-gray-200 flex space-x-2">
                      <button
                        onClick={() => handleViewClick(request)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <FiEye />
                      </button>
                      <button className="text-green-500 hover:text-green-700">
                        <FiEdit />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="py-4 text-center text-gray-500">
                    No data available in table
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-4">
          <p className="text-sm text-gray-600 mb-2 lg:mb-0">
            Showing {serviceRequests.length} to {serviceRequests.length} of{' '}
            {serviceRequests.length} entries
          </p>
          <div className="flex space-x-2">
            <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Previous
            </button>
            <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Next
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-4 lg:p-6 w-11/12 md:w-3/4 lg:w-1/2">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Service Request Details</h3>
            {selectedRequest && (
              <div>
                <p><strong>Code:</strong> {selectedRequest.code}</p>
                <p><strong>Service Request:</strong> {selectedRequest.serviceRequest}</p>
                <p><strong>Full Name:</strong> {selectedRequest.fullName}</p>
                <p><strong>Status:</strong> {selectedRequest.status}</p>
                <p><strong>Request Date:</strong> {selectedRequest.requestDate}</p>
              </div>
            )}
            <div className="mt-6 flex justify-end">
              <button
                onClick={closeModal}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServiceRequest;
