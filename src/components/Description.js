import ArrowSvg from "./ArrowSvg";

function Description({ currentSlide, setCurrentSlide }) {
  const sliderData = [
    { projectName: "HOME", day: "01", month: "02" },
    { projectName: "MALL", day: "10", month: "05" },
    { projectName: "OFFICE", day: "15", month: "09" },
  ];

  function prevSlide() {
    currentSlide <= 0 ? setCurrentSlide(sliderData.length - 1) : setCurrentSlide(currentSlide - 1);
  }

  function nextSlide() {
    currentSlide >= sliderData.length - 1 ? setCurrentSlide(0) : setCurrentSlide(currentSlide + 1);
  }

  return (
    <div className="Description">
      <div className="project_name">
        <div className="project">PROJECT</div>
        <div className="name">{sliderData[currentSlide].projectName}</div>
      </div>

      <div className="slider_buttons">
        <div className="buttons_container">
          <button
            className="prev_button"
            onClick={prevSlide}
          >
            <ArrowSvg color={"#333333"} />
          </button>

          <button
            className="next_button"
            onClick={nextSlide}
          >
            <ArrowSvg color={"#333333"} />
          </button>
        </div>
      </div>

      <div className="date">
        <div className="day">{sliderData[currentSlide].day}</div>
        <div className="separator"></div>
        <div className="month">{sliderData[currentSlide].month}</div>
      </div>
    </div>
  );
}

export default Description;
