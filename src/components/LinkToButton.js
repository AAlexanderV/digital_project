import { Link } from "react-router-dom";
import ArrowSvg from "./ArrowSvg";
import "../styles/LinkToButton.scss";

function LinkToButton({ linkTo, text, buttonColor, textColor }) {
  return (
    <Link
      to={linkTo}
      style={{ backgroundColor: buttonColor }}
      className="LinkToButton"
    >
      <p style={{ color: textColor, marginRight: "15px" }}>{text}</p>
      <ArrowSvg color={textColor} />
    </Link>
  );
}

export default LinkToButton;
