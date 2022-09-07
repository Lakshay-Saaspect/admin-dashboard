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
            theme === "light"
              ? "border-blue text-blue"
              : "border-white text-white hover:text-black"
          }`}
        >
          <MdAdd size={20} />
          <span className={`ml-2`}>{btnTitle}</span>
        </button>
      )}
    </div>
  );
};

export default SecondaryNavbar;
