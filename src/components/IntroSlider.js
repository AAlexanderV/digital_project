import "../styles/IntroSlider.scss";
import Description from "./Description";
import PhotoSlider from "./PhotoSlider";
import { useState } from "react";

function IntroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="IntroSlider">
      <Description
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
      <PhotoSlider currentSlide={currentSlide} />
    </div>
  );
}

export default IntroSlider;
