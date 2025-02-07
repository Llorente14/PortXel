import React, { useState } from "react";
import Slider from "../element/Slider";

const EmojiSlider = () => {
  const [sliderValue, setSliderValue] = useState(2);
  const handleSliderChange = (event) => {
    setSliderValue(parseInt(event.target.value));
  };
  // Array of emojis and their descriptions
  const emojis = ["😡", "😐", "🧐", "😎", "🥶"];
  const descriptions = [
    "Jelek banget designnya",
    "I have no reaction",
    "Keren dan modern",
    "Yes yes yes",
    "Dingin tetapi tidak kejam",
  ];

  return (
    <div className="flex flex-col items-center  space-y-6  p-6 rounded-lg shadow-md ">
      {/* Label */}
      <label
        htmlFor="emoji-slider"
        className="text-lg font-semibold text-white"
      >
        Kasih Emot Dulu!
      </label>

      {/* Shadcn Slider */}
      <Slider
        sliderValue={sliderValue}
        handleSliderChange={handleSliderChange}
      ></Slider>

      {/* Emoji Display */}
      <div
        className="text-5xl transition-transform duration-200 ease-in-out transform"
        style={{ transform: `scale(${1 + sliderValue * 0.05})` }}
      >
        {emojis[sliderValue]}
      </div>

      {/* Emoji Description */}
      <p className="text-white font-medium">{descriptions[sliderValue]}</p>
    </div>
  );
};

export default EmojiSlider;
