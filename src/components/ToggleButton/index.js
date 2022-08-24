import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const ToggleButton = () => {
  const [checked, setChecked] = useState(false);
  const toggleChecked = () => {
    setChecked(!checked);
  };
  return (
    <div className="flex items-center justify-center self-center mx-4">
      <label htmlFor="themeToggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="themeToggle"
            className="sr-only"
            value={checked}
            onChange={toggleChecked}
          />
          <div className="block bg-gray-600 w-10 h-6 rounded-full toggle"></div>
          <div className="dot absolute left-1 top-1 right-1 bottom-1 bg-transparent w-4 h-4 rounded-full transition">
            {checked ? (
              <FaMoon className="text-white" />
            ) : (
              <BsSunFill className="text-lime-300" />
            )}
          </div>
        </div>
      </label>
    </div>
  );
};

export default ToggleButton;
