import { SocialBtn } from "../element/socialBtn";
import logoSvg from "../../assets/social-logo";

export default function SocialMediaBar() {
  return (
    <div className="flex gap-3 my-5 p-0 max-w-full justify-center md:gap-8 lg:justify-center lg:gap-2 md:min-w-max shrink-0 ">
      {logoSvg.map((logo) => (
        <SocialBtn
          key={logo.id}
          id={logo.id}
          title={logo.title}
          svg={logo.svg}
          color={logo.color}
        ></SocialBtn>
      ))}
    </div>
  );
}

{
  /* <div className="rounded-full border-[1px] border-gray-500 w-10 h-10 "></div>

<div className="rounded-full border-[1px] border-gray-500 w-10 h-10 "></div>
<div className="rounded-full border-[1px] border-gray-500 w-10 h-10 "></div>
<div className="rounded-full border-[1px] border-gray-500 w-10 h-10 "></div> */
}
