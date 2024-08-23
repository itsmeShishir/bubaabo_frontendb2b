import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiHome,
  FiUsers,
  FiDollarSign,
  FiClock,
  FiZap,
  FiChevronRight,
  FiChevronLeft,
} from 'react-icons/fi';

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`h-full flex flex-col shadow-lg transition-width duration-300 ${isCollapsed ? 'w-20' : 'w-64'} bg-gradient-to-b from-blue-800 to-blue-900 text-white`}>
      <div className="flex items-center justify-center py-6 border-b border-blue-700">
        {!isCollapsed && <span className="text-2xl font-bold">BIBAABO</span>}
        {isCollapsed && <span className="text-2xl font-bold">B</span>}
      </div>
      <ul className="flex flex-col py-4 space-y-2">
        {/* Dashboard */}
        <li className="px-6 py-2 hover:bg-blue-700">
          <Link to="/admin" className="flex items-center space-x-2">
            <FiHome />
            {!isCollapsed && <span>Dashboard</span>}
          </Link>
        </li>

        {/* Services */}
        <li>
          <button
            className="w-full px-6 py-2 text-left flex justify-between items-center hover:bg-blue-700 focus:outline-none"
            onClick={() => toggleMenu('services')}
          >
            <div className="flex items-center space-x-2">
              <FiUsers />
              {!isCollapsed && <span>Services</span>}
            </div>
            {!isCollapsed && <FiChevronRight className={`${openMenu === 'services' && 'transform rotate-90'}`} />}
          </button>
          {!isCollapsed && openMenu === 'services' && (
            <ul className="pl-12 mt-2 space-y-1">
              <li>
                <Link to="/admin/loan-services" className="block py-1 hover:text-gray-300">
                  Loan Services
                </Link>
              </li>
              <li>
                <Link to="/admin/loan-services" className="block py-1 hover:text-gray-300">
                  Bank Services
                </Link>
              </li>
              <li>
                <Link to="/admin/loan-services" className="block py-1 hover:text-gray-300">
                  Capital Services
                </Link>
              </li>
              <li>
                <Link to="/admin/loan-services" className="block py-1 hover:text-gray-300">
                  Broker
                </Link>
              </li>
              <li>
                <Link to="/admin/loan-services" className="block py-1 hover:text-gray-300">
                  Wallet
                </Link>
              </li>
              <li>
                <Link to="/admin/loan-services" className="block py-1 hover:text-gray-300">
                  Insurance
                </Link>
              </li>
            </ul>
            
          )}
        </li>

        {/* Earnings */}
        <li>
          <Link to="/admin/earnings"
            className="w-full px-6 py-2 text-left flex justify-between items-center hover:bg-blue-700 focus:outline-none"
          >
            <div className="flex items-center space-x-2">
              <FiDollarSign />
              {!isCollapsed && <span>My Earnings</span>}
            </div>
          </Link>
        </li>

        {/* My Service Requests */}
        <li>
          <Link to="/admin/my-service-requests"
            className="w-full px-6 py-2 text-left flex justify-between items-center hover:bg-blue-700 focus:outline-none"
          >
            <div className="flex items-center space-x-2">
              <FiClock />
              {!isCollapsed && <span>My Service Requests</span>}
            </div>
          </Link>
        </li>

        {/* Supports */}
        <li>
          <Link to="/admin/support"
            className="w-full px-6 py-2 text-left flex justify-between items-center hover:bg-blue-700 focus:outline-none"
          >
            <div className="flex items-center space-x-2">
              <FiClock />
              {!isCollapsed && <span>Support</span>}
            </div>
          </Link>
        </li>

        {/* Video Guide */}
        <li>
          <Link to="video-guide"
            className="w-full px-6 py-2 text-left flex justify-between items-center hover:bg-blue-700 focus:outline-none"
          >
            <div className="flex items-center space-x-2">
              <FiZap />
              {!isCollapsed && <span>Video Guide</span>}
            </div>
          </Link>
        </li>
      </ul>

      <div className="mt-auto py-6">
        <button
          onClick={toggleCollapse}
          className="w-full text-center text-sm font-semibold py-2 text-gray-300 hover:text-white flex justify-center"
        >
          {isCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
          {!isCollapsed && <span className="ml-2">Collapse Sidebar</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
