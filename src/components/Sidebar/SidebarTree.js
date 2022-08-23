import { cloneDeep } from "lodash";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const SidebarTree = ({ sidebarTreeData, isExpandedTree }) => {
  const [expanded, setExpanded] = useState([]);

  const handleClick = (e, hasChilren, index, label) => {
    e.stopPropagation();
    if (!hasChilren) {
      console.log(label);
      return;
    }
    let tempExpanded = cloneDeep(expanded);
    if (expanded.includes(index)) {
      // need to close expanded
      tempExpanded = tempExpanded.filter((i) => i !== index);
    } else {
      // need to expand
      tempExpanded.push(index);
    }
    setExpanded(tempExpanded);
  };

  return (
    <div
      className={`w-full ${
        isExpandedTree ? "SidebarTree" : "SidebarTreeCollapsed"
      }`}
    >
      {sidebarTreeData?.map((sidebar, index) => {
        let { label, hasChildren, children } = sidebar;
        let isExpanded = expanded.includes(index);
        return (
          <div
            className={`flex w-full text-left my-1 cursor-pointer flex-col pl-4`}
            key={index}
            onClick={(e) => handleClick(e, hasChildren, index, label)}
          >
            <section className="flex w-full justify-between hover:bg-white hover:text-blue px-3 py-3 rounded-md items-center">
              <span>{label}</span>
              {hasChildren && (
                <span>{isExpanded ? <FaAngleUp /> : <FaAngleDown />}</span>
              )}
            </section>
            {
              <SidebarTree
                sidebarTreeData={children}
                isExpandedTree={isExpanded}
              />
            }
          </div>
        );
      })}
    </div>
  );
};

export default SidebarTree;
