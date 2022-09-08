const Button = ({ text, onClick }) => {
  return (
    <button
      className={`w-11/12 bg-blue text-white py-4 rounded-sm my-4 uppercase tracking-widest drop-shadow-xl hover:bg-dark_blue hover:drop-shadow-2xl`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
