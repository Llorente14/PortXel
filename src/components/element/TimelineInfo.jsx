const TimelineInfo = ({ year, head, sub }) => {
  return (
    <li className="relative flex gap-6 pb-5">
      <div className="before:absolute before:left-[7.5px]   before:h-full before:w-[2px] before:bg-blue-600 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 fill-blue-600 flex justify-center circleTime-svg"
          viewBox="0 0 16 16"
        >
          <circle cx="8" cy="8" r="8" />
        </svg>
      </div>
      <div className="text-xs text-gray-500 ">
        <p className="text-lg font-semibold font-sans mb-2">{year}</p>
        <p className="text-lg font-semibold font-sans text-gray-100">{head}</p>
        <p className="mt-2">{sub}</p>
      </div>
    </li>
  );
};

export default TimelineInfo;
