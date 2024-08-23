const UpdateProfile = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 border-b-2 pb-4">Contact Person Detail :</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Salutation *</label>
          <select className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Select</option>
            {/* Add more options */}
            <option>Mr.</option>
            <option>Mrs.</option>
            <option>Ms.</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Full Name *</label>
          <input type="text" className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Gender *</label>
          <select className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Select</option>
            {/* Add more options */}
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Email *</label>
          <input type="email" className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Mobile *</label>
          <input type="text" className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-700 mb-6 border-b-2 pb-4">Business Detail :</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Organization Name (*)</label>
          <input type="text" value="Education Test" className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Associated With *</label>
          <select className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>ECAN</option>
            <option>1</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Business Type *</label>
          <input type="text" value="Consultancy" className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">PAN/VAT (*)</label>
          <input type="text" className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Registration Number (*)</label>
          <input type="text" className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Company Phone</label>
          <input type="text" className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Company Email</label>
          <input type="email" className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Company Website</label>
          <input type="text" className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-700 mb-6 border-b-2 pb-4">Bank Detail :</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Bank Name *</label>
          <select className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Select</option>
            <option>NIC ASIA Bank</option>
            <option>Global IME Bank</option>
            <option>Himalayan Bank</option>
            {/* Add more options */}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Bank Branch *</label>
          <input type="text" className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Bank Account *</label>
          <input type="text" className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Account Holder Name *</label>
          <input type="text" className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-700 mb-6 border-b-2 pb-4">Company Address Detail :</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Province *</label>
          <select className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Select</option>
            {/* Add more options */}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">District *</label>
          <select className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Select</option>
            {/* Add more options */}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Local Body *</label>
          <select className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Select</option>
            {/* Add more options */}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Ward no. *</label>
          <input type="text" className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Tole/Street Name</label>
          <input type="text" className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-700 mb-6 border-b-2 pb-4">Documents :</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Organization Logo</label>
          <input type="file" className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Update
        </button>
      </div>
    </div>
  );
}

export default UpdateProfile;
