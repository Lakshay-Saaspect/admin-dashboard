import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { sidebarContent } from "../../constants/sidebar";

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className="flex">
      <section
        className={`transition duration-300 md:translate-x-0 md:relative -translate-x-full absolute z-50 min-w-max ${
          showSidebar ? "translate-x-0" : ""
        }`}
      >
        <Sidebar
          sidebarData={sidebarContent}
          toggleShowSidebar={toggleShowSidebar}
        />
      </section>
      <div className="p-4 flex-1">
        <Navbar toggleShowSidebar={toggleShowSidebar} />
      </div>
    </div>
  );
};

export default Dashboard;
