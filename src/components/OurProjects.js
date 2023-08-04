import "../styles/OurProjects.scss";
import IntroProjectTopImage from "./IntroProjectTopImage";
import IntroProjectBottomImage from "./IntroProjectBottomImage";
import LinkToButton from "./LinkToButton";

import dosugImg from "../images/main_projects/dosug.png";
import museumImg from "../images/main_projects/museum.png";
import bottom1_Img from "../images/main_projects/1.png";
import bottom2_Img from "../images/main_projects/2.png";
import bottom3_Img from "../images/main_projects/3.png";

function OurProjects() {
  const topImages = [
    { img: dosugImg, name: "ДОСУГОВЫЙ ЦЕНТР" },
    { img: museumImg, name: "МУЗЕЙ" },
  ];
  const bottomImages = [bottom1_Img, bottom2_Img, bottom3_Img];

  return (
    <div className="OurProjects">
      <div className="heading">
        <h1>Наши проекты</h1>
      </div>

      <div className="photos_grid_container">
        <div className="grid_top">
          {topImages.map((item) => (
            <IntroProjectTopImage
              img={item.img}
              name={item.name}
              key={item.name}
            />
          ))}
        </div>

        <div className="grid_bottom">
          {bottomImages.map((img, i) => (
            <IntroProjectBottomImage
              img={img}
              key={i}
            />
          ))}
        </div>
      </div>
      <div className="toProjects_button_container">
        <LinkToButton
          linkTo={"/projects/"}
          text={"ВСЕ ПРОЕКТЫ"}
          buttonColor={"#333"}
          textColor={"#fff"}
        />
      </div>
    </div>
  );
}

export default OurProjects;
