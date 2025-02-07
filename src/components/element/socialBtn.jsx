import { a } from "motion/react-client";

export const SocialBtn = ({ id, title, svg, color = "bg-black" }) => {
  return (
    <a
      key={id}
      title={title}
      href=""
      className={`bg-white  rounded-full  size-10  md:size-10  box-border shrink-0 flex items-center justify-center ease-in-out duration-300 hover:fill-white hover:
        ${
          id === "linkedln"
            ? "hover:bg-blue-600"
            : id === "instagram"
            ? "hover:bg-rose-600"
            : id === "youtube"
            ? "hover:bg-red-600"
            : id === "tiktok"
            ? "hover:bg-tiktok"
            : "hover:bg-black hover:border-slate-900 border"
        }
           `}
    >
      {svg}
    </a>
  );
};
