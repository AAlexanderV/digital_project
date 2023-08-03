import NavLink from "./NavLink";

function NavBar() {
  const navMap = [
    { name: "ГЛАВНАЯ", path: "/" },
    { name: "ГАЛЕРЕЯ", path: "/gallery/" },
    { name: "ПРОЕКТЫ", path: "/projects/" },
    { name: "КОНТАКТЫ", path: "/contacts/" },
  ];
  return (
    <div className="NavBar">
      <nav>
        {navMap.map((linkDetails) => {
          return (
            <NavLink
              name={linkDetails.name}
              path={linkDetails.path}
              key={linkDetails.path}
            />
          );
        })}
      </nav>
    </div>
  );
}

export default NavBar;
