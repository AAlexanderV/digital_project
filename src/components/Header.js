import "../styles/Header.scss";
import NavBar from "./NavBar";
import HeaderLogo from "./Logo";

function Header() {
  return (
    <div className="Header">
      <HeaderLogo svgColor={"#333"} />
      <NavBar />
    </div>
  );
}

export default Header;
