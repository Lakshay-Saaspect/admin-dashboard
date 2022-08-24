import ToggleButton from "../ToggleButton";
import { BsFillCaretDownFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";

const profileDropdown = [
  {
    label: "Profile",
  },
  {
    label: "Logout",
  },
];

const Navbar = ({ toggleShowSidebar }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  // const handleRandomClick = (e) => {
  //   e.preventDefault();
  //   let elemClassName = e?.target?.className;
  //   console.log(elemClassName);
  //   if (
  //     typeof elemClassName !== "string" ||
  //     elemClassName?.includes("ignoreClick")
  //   ) {
  //     return;
  //   }
  //   console.log(showDropdown);
  //   if (!showDropdown) {
  //     console.log("setting");
  //     setShowDropdown(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("click", handleRandomClick);
  //   return () => {
  //     window.removeEventListener("click", handleRandomClick);
  //   };
  // }, []);

  const toggleShowDropdown = (e) => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className={`p-4 flex items-center justify-between md:justify-end	`}>
      <GiHamburgerMenu
        className="md:hidden cursor-pointer"
        size={20}
        onClick={toggleShowSidebar}
      />
      <section className="flex items-center">
        <ToggleButton />
        <span
          className="cursor-pointer px-2 font-bold ignoreClick"
          onClick={toggleShowDropdown}
        >
          geetansh
          {showDropdown && (
            <section className="gr-dropdownWhite border-red-300	p-4 absolute border-2 rounded font-light ignoreClick">
              <ul>
                {profileDropdown.map((item, index) => {
                  let { label } = item;
                  return (
                    <li
                      key={index}
                      className="my-1 hover:scale-110 hover:underline"
                    >
                      {label}
                    </li>
                  );
                })}
              </ul>
            </section>
          )}
        </span>
        <BsFillCaretDownFill
          size={13}
          className="cursor-pointer"
          onClick={toggleShowDropdown}
        />
      </section>
    </nav>
  );
};

export default Navbar;
