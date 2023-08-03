function NavLink({ name, path }) {
  const currentlyActive = window.location.pathname === path ? " active" : "";

  return (
    <a
      href={path}
      className={"NavLink" + currentlyActive}
    >
      {name}
    </a>
  );
}

export default NavLink;
