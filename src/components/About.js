import "../styles/About.scss";
import LinkToButton from "./LinkToButton";

import image_1 from "../images/about/1.png";
import image_2 from "../images/about/2.png";
import image_3 from "../images/about/3.png";

function About() {
  return (
    <div className="About">
      <div className="about_images">
        <div className="image_container left">
          <img
            src={image_1}
            alt="about us"
          />
          <img
            src={image_3}
            alt="about us"
            className="img_overflow"
          />
        </div>

        <div className="image_container right">
          <img
            src={image_2}
            alt="about us"
          />
        </div>
      </div>

      <div className="about_description">
        <h1>О компании</h1>
        <p className="description_text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        <LinkToButton
          linkTo={"/projects/"}
          text={"ЧИТАТЬ"}
          buttonColor={"#fff"}
          textColor={"#333"}
        />
      </div>
    </div>
  );
}

export default About;
