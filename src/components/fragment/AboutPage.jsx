import NumInfo from "../element/NumInfo";

const AboutPage = () => {
  return (
    <>
      <p className="text-2xl  sm:text-3xl text-gray-200 font-sans max-w-3xl leading-normal sm:leading-relaxed mb-[1em]">
        Adapt quickly to challenges and strive for{" "}
        <span className="text-blue-500">Axel</span>lence in every step
      </p>
      <p className="text-[16px] sm:text-sm  text-slate-400 font-sans max-w-2xl leading-6 mb-[2em] sm:my-4">
        I am a Computer Science student at Tarumanagara University, currently
        pursuing my bachelor's degree. I have a strong foundation in
        problem-solving and critical thinking, with growing experience in web
        development and software engineering. I am actively enhancing my skills
        in modern technologies such as React, Node.js, and Tailwind CSS. My goal
        is to become a versatile software engineer capable of delivering
        innovative and efficient solutions to real-world problems."
      </p>
      <div className="flex flex-row gap-12 justify-center md:justify-start">
        <NumInfo num={"4.0"} sub={"sGPA"}></NumInfo>
        <NumInfo
          num={"2nd"}
          sub={"Place at Tarsisius 2 Senior High School."}
        ></NumInfo>
      </div>
    </>
  );
};

export default AboutPage;
