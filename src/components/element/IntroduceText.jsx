const IntroduceText = ({ title, desc, sub }) => {
  return (
    <>
      <h1 className="text-5xl sm:text-6xl text-white tracking-wide mb-4 sm:mb-2 ">
        It`s <span className="text-blue-600 font-bold">AXEL</span>
      </h1>
      <h1 className="text-4xl sm:text-6xl text-white tracking-wide mb-10 ">
        Programmer and Developer
      </h1>
      <p className="text-sm text-gray-600 tracking-wide">
        Hanya seorang mahasiswa suka belajar tentang teknologi
      </p>
    </>
  );
};

export default IntroduceText;
