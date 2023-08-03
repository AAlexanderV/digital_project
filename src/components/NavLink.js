import { Link } from "react-router-dom";

function NavLink({ name, path }) {
  const currentlyActive = window.location.pathname === path ? " active" : "";

  return (
    <Link
      to={path}
      className={"NavLink" + currentlyActive}
    >
      {name}
    </Link>
  );
}

export default NavLink;
