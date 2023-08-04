import { Link } from "react-router-dom";
import ArrowSvg from "./ArrowSvg";

function IntroProjectTopImage({ img, name }) {
  return (
    <div className="IntroProjectTopImage">
      <img
        src={img}
        alt={name}
      />
      <Link
        className="overlay"
        to="/projects/"
      >
        <h1 className="project_name">{name}</h1>
        <div className="pointer">
          <p>ПОДРОБНЕЕ</p>
          <ArrowSvg color={"#fff"} />
        </div>
      </Link>
    </div>
  );
}

export default IntroProjectTopImage;
