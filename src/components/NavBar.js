import NavLink from "./NavLink";

function NavBar() {
  const navMap = [
    { name: "главная", path: "/" },
    { name: "галерея", path: "/gallery/" },
    { name: "проекты", path: "/projects/" },
    { name: "сертификаты", path: "/certificates/" },
    { name: "контакты", path: "/contacts/" },
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
