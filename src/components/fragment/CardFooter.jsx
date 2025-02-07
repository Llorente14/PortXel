import SocialMediaBar from "./SocialMediaBar";
import CtaBtn from "../element/ctaBtn";

const CardFooter = ({ btn, foot }) => {
  return (
    <>
      <div className="flex flex-col justify-center max-w-full gap-3 sm:gap-0">
        <SocialMediaBar></SocialMediaBar>
        <CtaBtn>{btn}</CtaBtn>
        <p className="font-sans  text-sm sm:text-xs text-gray-400 text-center mt-4">
          {foot}
        </p>
      </div>
    </>
  );
};

export default CardFooter;
