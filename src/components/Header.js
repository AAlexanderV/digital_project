import "../styles/Header.scss";
import NavBar from "./NavBar";
import HeaderLogo from "./HeaderLogo";

function Header() {
  return (
    <div className="Header">
      <HeaderLogo />
      <NavBar />
    </div>
  );
}

export default Header;
