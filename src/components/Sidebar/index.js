import React, { useEffect, useState } from "react";
import SidebarTree from "./SidebarTree";
import { useSelector } from "react-redux";

const Sidebar = ({ sidebarData, toggleShowSidebar, showSidebar = true }) => {
  const theme = useSelector((state) => state?.theme);
  const [visibility, setVisibility] = useState(true);

  useEffect(() => {
    if (!showSidebar) {
      setTimeout(() => {
        setVisibility(false);
      }, 500);
    } else {
      setVisibility(true);
    }
  }, [showSidebar]);

  return (
    <div
      className={`transition duration-500 w-screen absolute md:relative inline-block md:w-max bg-smoke md:bg-transparent md:opacity-100 md:inline-block md:z-10 ${
        showSidebar ? "z-10" : `opacity-0 ${!visibility && "-z-10"}`
      }`}
      onClick={toggleShowSidebar}
    >
      <div
        className={`transition duration-500 md:translate-x-0 flex items-start h-screen -translate-x-full flex-col p-1 overflow-auto scroll-smooth w-max ${
          theme === "light" ? "bg-grey" : "bg-sidebar_dark text-white"
        } ${showSidebar ? "translate-x-0" : ""}`}
      >
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
