import PageLayout from "../components/layout/PageLayout";
import SkillGrid from "../components/fragment/SkillGrid";
import { skills } from "../assets/skills";
const Skills = () => {
  return (
    <>
      <PageLayout
        svg={
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m15 5 4 4"></path>
            <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"></path>
            <path d="m8 6 2-2"></path>
            <path d="m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z"></path>
            <path d="m18 16 2-2"></path>
            <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"></path>
          </svg>
        }
        name={"SKILLS"}
      >
        <div className="py-4 pb-8 px-4">
          <h1 className="text-4xl text-white  mb-8 text-center lg:text-start">
            My{" "}
            <span className="rotate-45 text-blue-500 font-semibold ">
              Skills
            </span>
          </h1>
          <SkillGrid skills={skills} />
        </div>
      </PageLayout>
    </>
  );
};

export default Skills;
