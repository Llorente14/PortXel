import TimelineInfo from "../element/TimelineInfo";

const Timeline = ({ title, data }) => {
  return (
    <div className="mb-8">
      <h1 className="text-gray-50 font-sans text-4xl mb-7 tracking-wide">
        {title}
      </h1>
      <ul className="">
        {data.map((item) => (
          <TimelineInfo
            year={item.year}
            head={item.head}
            sub={item.sub}
          ></TimelineInfo>
        ))}
        {/* <TimelineInfo
          year={"Aug 2024 - Present"}
          head={"Undergraduate Informatics Engineering"}
          sub={"Informatics Engineering Tarumanagara University"}
        ></TimelineInfo>
        <TimelineInfo
          year={"2024"}
          head={"Tarsisius 2 Senior High School"}
          sub={"Major Social Science"}
        ></TimelineInfo> */}
      </ul>
    </div>
  );
};

export default Timeline;
