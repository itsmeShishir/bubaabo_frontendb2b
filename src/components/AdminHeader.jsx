import { useState } from 'react';
import { FiBell, FiUser, FiChevronDown, FiSettings, FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <div className="relative">
          
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FiBell className="text-gray-600 text-2xl cursor-pointer" />
            <span className="absolute top-0 left-4 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">3+</span>
          </div>
        </div>

        <div className="relative">
          <button onClick={toggleDropdown} className="flex items-center space-x-2 focus:outline-none">
            <span className="text-gray-700">Douglas McGee</span>
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" 
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <FiChevronDown className="text-gray-600" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
              <Link to="/admin/my-details" className="flex items-center px-4 py-2 hover:bg-gray-100">
                <FiUser className="mr-2" />
                <span>Profile</span>
              </Link>
              <Link to="/admin/update-password" className="flex items-center px-4 py-2 hover:bg-gray-100">
                <FiSettings className="mr-2" />
                <span>Change Password</span>
              </Link>
              <hr className="my-2" />
              <button className="flex items-center px-4 py-2 w-full text-left hover:bg-gray-100">
                <FiLogOut className="mr-2" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
