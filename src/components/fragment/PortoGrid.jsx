import CardPorto from "../element/CardPorto";
import { porto } from "../../assets/porto";
const PortoGrid = () => {
  return (
    <div className="max-w-[80%] grid grid-cols-1 items-center gap-10 mx-auto md:gap-14 lg:mb-8 lg:max-w-full lg:grid-cols-1 lg:gap-10 ">
      {porto.map((project) => (
        <CardPorto
          key={project.id}
          name={project.name}
          desc={project.desc}
          img={project.img}
          link={project.link}
          icon={project.skillSVG}
        ></CardPorto>
      ))}
    </div>
  );
};

export default PortoGrid;
