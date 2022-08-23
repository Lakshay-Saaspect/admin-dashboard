import React from "react";
import Sidebar from "../../components/Sidebar";
import { sidebarContent } from "../../constants/sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar sidebarData={sidebarContent} />
      <div className="p-4">
        <span>Hello from Dashboard</span>
      </div>
    </div>
  );
};

export default Dashboard;
