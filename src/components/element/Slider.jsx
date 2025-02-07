const Slider = ({ value, handleSliderChange }) => {
  return (
    <input
      type="range"
      id="emoji-slider"
      value={value}
      onChange={handleSliderChange}
      min={0}
      max={4}
      step={1}
      className="w-64 h-2 bg-blue-900 rounded-lg cursor-pointer accent-slate-950 "
    />
  );
};

export default Slider;
