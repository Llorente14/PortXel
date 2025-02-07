const CardPorto = ({ img, name, desc, link, icon }) => {
  return (
    <>
      <div className=" relative min-w-[70%] border border-gray-500 bg-transparent rounded-lg p-4 lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-4  ">
        <div className="group row-span-2  overflow-hidden rounded-md md:row-span-3 md:aspect-video ">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
            draggable="false"
          >
            <img
              src={img}
              alt="ME"
              className="w-full h-40 object-cover rounded-md cursor-pointer md:min-h-full  group-hover:scale-110 active:scale-95 transition-transform duration-200"
              loading="lazy"
            />
          </a>
        </div>
        <div className="md:row-span-3 lg:row-span-3 ">
          <p className="relative text-lg font-medium text-gray-300 mt-[1em] max-w-fit lg:text-xl lg:mt-0 lg:max-h-max">
            {name}
            <span className="absolute -bottom-1 left-0 w-[110%] border-2 border-blue-600 "></span>
          </p>
          <div className="text-gray-500 lg:mt-[2em]">
            <p className="mt-4 text-sm leading-6 col-start-1 row-start-3 md:text-base lg:text-sm lg:min-h-[7em] ">
              {desc}
            </p>
            <div className="grid grid-cols-5 mt-4 gap-3 grid-rows-1 md:grid-cols-9 lg:mt-[1.5em] lg:gap-5 lg:grid-cols-8 ">
              {icon.map((tech) => (
                <div className="border border-gray-500 hover:scale-125 rounded-full aspect-square flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 ease-in-out porto-svg-sm lg:porto-svg-lg lg:scale-110 ">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPorto;
