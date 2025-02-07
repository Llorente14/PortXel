const CtaBtn = ({ children }) => {
  return (
    <button
      type="button"
      className="px-4 py-2 bg-sky-500 border-[1px] transition ease-in-out duration-300 border-sky-500   text-black rounded-full font-semibold hover:bg-transparent hover:text-sky-500"
    >
      {children}
    </button>
  );
};

export default CtaBtn;
