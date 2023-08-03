import LinkToButton from "./LinkToButton";
import homeImg from "../images/main_slider/home.png";
import officeImg from "../images/main_slider/office.png";
import mallImg from "../images/main_slider/mall.png";

function PhotoSlider({ currentSlide }) {
  const sliderData = [
    { projectName: "HOME", img: homeImg },
    { projectName: "MALL", img: mallImg },
    { projectName: "OFFICE", img: officeImg },
  ];
  return (
    <div className="PhotoSlider">
      <img
        src={sliderData[currentSlide].img}
        alt={sliderData[currentSlide].projectName}
      />

      <LinkToButton
        linkTo={"/projects/"}
        text={"ВЗГЛЯНУТЬ"}
        buttonColor={"#fff"}
        textColor={"#333"}
      />
    </div>
  );
}

export default PhotoSlider;
