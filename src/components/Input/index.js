const Input = ({ type, header, value, onChange, theme }) => {
  return (
    <div
      className={`transition duration-500 border border-border_grey ${
        theme === "light" ? "hover:border-black" : "hover:border-white"
      } rounded-sm relative my-4 w-11/12`}
    >
      {header && (
        <span
          className={`transition duration-500 input-header absolute px-1 bg-white cursor-default ${
            theme === "light" ? "bg-light" : "bg-dark text-white"
          }`}
        >
          {" "}
          {header}
        </span>
      )}
      <input
        type={type}
        className={`transition duration-500 border-0 outline-none w-full p-2 py-4 ${
          theme === "light" ? "bg-light" : "bg-dark text-white"
        }`}
        placeholder={header}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
