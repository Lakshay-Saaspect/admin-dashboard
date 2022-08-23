import React from "react";
import SidebarTree from "./SidebarTree";

const Sidebar = ({ sidebarData }) => {
  return (
    <div className="bg-grey flex items-start h-screen flex-col p-2 overflow-auto scroll-smooth">
      <div className="flex px-7 py-3">
        <span>icon</span>
        <span className="ml-9">MPPLJobs Super Admin</span>
      </div>
      <hr className="w-[90%] self-center my-5 border-2" />
      <SidebarTree sidebarTreeData={sidebarData} isExpandedTree={true} />
    </div>
  );
};

export default Sidebar;
