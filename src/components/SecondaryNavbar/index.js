import { MdAdd } from "react-icons/md";

const SecondaryNavbar = (props) => {
  const { title, btnTitle, showDefaultRightBtn } = props;
  return (
    <div className="flex justify-between px-4 py-4">
      <span className="text-4xl">{title || ""}</span>
      {showDefaultRightBtn !== false && (
        <button className="flex items-center rounded border-2 hover:bg-sky-100 hover:border-blue border-transparent p-2">
          <MdAdd size={20} />
          <span className="ml-2">{btnTitle}</span>
        </button>
      )}
    </div>
  );
};

export default SecondaryNavbar;
