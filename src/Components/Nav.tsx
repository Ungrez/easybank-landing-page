import "../sass/ComponentsStyles/Nav.scss";
import { useState } from "react";

const Nav = () => {
  const [showNav, setNav] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setNav(!showNav);
  };
  return (
    <nav id="nav">
      <div id="nav_logo"></div>
      <div id="nav_links" className={showNav ? "active" : ""}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </div>
      <div
        onClick={handleOpenMenu}
        id="nav_hamburger"
        className={showNav ? "active" : ""}
      ></div>
      <button>Request Invite</button>
    </nav>
  );
};

export default Nav;
