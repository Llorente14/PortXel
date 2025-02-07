const SkillCard = ({ icon, name, link }) => {
  return (
    <div className=" group border-2 border-gray-600 box-border text-xs text-center text-gray-500 aspect-square bg-transparent backdrop-blur-sm flex items-center justify-center flex-col  rounded-md hover:text-blue-600 hover:border-blue-500 hover:border-2 hover:text-[13px] transition-all duration-300">
      <div className="skills-svg">{icon}</div>
      <div className="text-center mt-2 font-sans text-sm ">{name}</div>
    </div>
  );
};

export default SkillCard;
