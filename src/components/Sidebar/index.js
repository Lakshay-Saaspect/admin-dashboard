import React from "react";
import SidebarTree from "./SidebarTree";
import { useSelector } from "react-redux";

const Sidebar = ({ sidebarData, toggleShowSidebar }) => {
  const theme = useSelector((state) => state?.theme);
  console.log("----- ", theme);
  return (
    <div
      className={`transition duration-500 w-screen inline-block bg-smoke md:w-max ${
        theme === "light" ? "bg-grey" : "bg-sidebar_dark text-white"
      }`}
      onClick={toggleShowSidebar}
    >
      <div className="bg-transparent flex items-start h-screen flex-col p-1 overflow-auto scroll-smooth w-max">
        <div className="flex px-7 py-3">
          <span>icon</span>
          <span className="ml-9 font-bold">MPPLJobs Super Admin</span>
        </div>
        <hr className="w-[90%] self-center my-3 border-2" />
        <SidebarTree sidebarTreeData={sidebarData} isExpandedTree={true} />
      </div>
    </div>
  );
};

export default Sidebar;
