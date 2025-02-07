const CardHeader = ({ title, children }) => {
  return (
    <div className="flex text-center gap-7 items-center justify-between">
      <h1 className="font-bold text-2xl text-slate-50">{title}</h1>
      <p className="font-sans font-semibold text-sm text-gray-100">
        {children}
      </p>
    </div>
  );
};

export default CardHeader;
