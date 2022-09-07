import { MdAdd } from "react-icons/md";
import { useSelector } from "react-redux";

const SecondaryNavbar = (props) => {
  const { title, btnTitle, showDefaultRightBtn } = props;
  const theme = useSelector((state) => state?.theme);
  return (
    <div className="flex justify-between px-4 py-4">
      <span className="text-4xl">{title || ""}</span>
      {showDefaultRightBtn !== false && (
        <button
          className={`transition duration-500 flex items-center rounded border-2 hover:bg-sky-100 border-blue p-2 ${
            theme === "light" ? "border-blue" : "border-white"
          }`}
        >
          <MdAdd
            size={20}
            className={`transition duration-500 ${
              theme === "light" ? "text-blue" : "text-white"
            }`}
          />
          <span
            className={`transition duration-500 ml-2 ${
              theme === "light" ? "text-blue" : "text-white"
            }`}
          >
            {btnTitle}
          </span>
        </button>
      )}
    </div>
  );
};

export default SecondaryNavbar;
