const AnchorPage = ({ svg, children }) => {
  return (
    <>
      {/* <div>
        <p className="text-gray-200 text-[10px] font-sans"></p>
      </div> */}
      <h4 className="text-xs text-gray-100 font-light  px-5 py-2 max-w-max mb-8 rounded-[30px] uppercase border border-gray-500 bg-transparent fill-white flex items-center justify-center gap-3 box-border ">
        {svg}
        {children}
      </h4>
    </>
  );
};

export default AnchorPage;
