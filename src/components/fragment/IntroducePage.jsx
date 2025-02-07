import IntroduceText from "../element/IntroduceText";
import EmojiSlider from "./EmojiSlider";
const IntroducePage = () => {
  return (
    <div className="flex flex-col mb-12 sm:mb-2">
      <IntroduceText></IntroduceText>
      <div className="max-w-full flex justify-center md:justify-start  ">
        <EmojiSlider></EmojiSlider>
      </div>
    </div>
  );
};

export default IntroducePage;
