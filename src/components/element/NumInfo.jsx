const NumInfo = ({ num, sub }) => {
  return (
    <div className="min-w-[4em] max-w-[8em] flex flex-col font-sans my-6 text-center leading-4 gap-4 ">
      <p className="text-5xl text-blue-600 font-semibold ">{num}</p>
      <p className="text-sm text-gray-500 w-full">{sub}</p>
    </div>
  );
};
export default NumInfo;
