import SkillCard from "../element/SkillCard";

const SkillGrid = ({ skills }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5   gap-4 ">
      {skills.map((skill, index) => (
        <SkillCard
          key={index}
          icon={skill.icon}
          name={skill.name}
          description={skill.description}
        />
      ))}
    </div>
  );
};

export default SkillGrid;
