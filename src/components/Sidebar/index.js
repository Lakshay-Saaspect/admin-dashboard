import React from "react";
import SidebarTree from "./SidebarTree";

const Sidebar = ({ sidebarData, toggleShowSidebar }) => {
  return (
    <div
      className="w-screen inline-block bg-smoke md:w-max"
      onClick={toggleShowSidebar}
    >
      <div className="bg-grey flex items-start h-screen flex-col p-1 overflow-auto scroll-smooth w-max">
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
