import { useState } from 'react';

const Withdraw = () => {
  const [requests, setRequests] = useState([
    { date: '28 June 2021', details: 'Payment request made of the earning of June.', code: 'MB12AE', amount: 'Rs. 200', status: 'Complete' },
  ]);
  const [filterDate, setFilterDate] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [searchCode, setSearchCode] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [formRemark, setFormRemark] = useState('');

  const filteredRequests = requests.filter(request =>
    (filterDate ? request.date.includes(filterDate) : true) &&
    (filterStatus ? request.status.includes(filterStatus) : true) &&
    (searchCode ? request.code.includes(searchCode) : true)
  );

  const handleRequestPayment = () => {
    setShowPopup(true);
  };

  const handleSubmitRequest = () => {
    console.log('Selected Option:', selectedOption);
    console.log('Remark:', formRemark);
    setSelectedOption('');
    setFormRemark('');
    setShowPopup(false);
  };

  return (
    <div className="max-w-6xl p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Withdraw Requests</h1>
      <div className="mb-4 flex flex-col md:flex-row gap-4">
        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          className="p-2 border border-gray-300 rounded-md flex-1"
        />
        <input
          type="text"
          placeholder="Search by request code"
          value={searchCode}
          onChange={(e) => setSearchCode(e.target.value)}
          className="p-2 border border-gray-300 rounded-md flex-1"
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="p-2 border border-gray-300 rounded-md flex-1"
        >
          <option value="">--Select Status--</option>
          <option value="Complete">Complete</option>
          <option value="Processing">Processing</option>
          <option value="Pending">Pending</option>
          <option value="Rejected">Rejected</option>
        </select>
        <button onClick={handleRequestPayment} className="px-4 py-2 bg-blue-600 text-white rounded-md">
          Request Payment
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Withdraw Request Code</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredRequests.map((request, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.details}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.code}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto w-full">
            <h2 className="text-lg font-semibold mb-4">Request Payment</h2>
            <div className="mb-4">
              <label htmlFor="option" className="block text-sm font-medium text-gray-700">Select Option</label>
              <select
                id="option"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">--Select an option--</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="remark" className="block text-sm font-medium text-gray-700">Remark</label>
              <textarea
                id="remark"
                value={formRemark}
                onChange={(e) => setFormRemark(e.target.value)}
                rows="4"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitRequest}
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Withdraw;
