import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/AdminHeader";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex bg-gray-100 font-sans h-screen">
      <Sidebar /> 
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        <div className="flex-1 p-6 bg-gray-100 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
