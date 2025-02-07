const CardMain = ({ img, email, children }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl gap-2 sm:gap-0 ">
      <img
        src={img}
        alt=""
        className="aspect-square size-full sm:w-[95%] sm:h-[95%] "
      />
      <p className="text-gray-200 font-sans text-md">{email}</p>
      <p className="text-gray-100 font-sans font-bold text-md">{children}</p>
    </div>
  );
};

export default CardMain;
