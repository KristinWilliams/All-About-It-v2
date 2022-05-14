import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ModalMenu from "./ModalMenu";
import HomeCss from "./Home.module.css";

const Navbar = function () {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      {openMenu ? <ModalMenu closeModal={setOpenMenu} /> : null}
      <div className={HomeCss.nav}>
        <img
          src="img/Menu.svg"
          className={HomeCss["menu-icon"]}
          onClick={() => setOpenMenu(true)}
        />
        <img src="img/All-about-it-logo.svg" className={HomeCss["logo-nav"]} />
        <ul className={HomeCss["desktop-nav"]}>
          <li>
            <NavLink to="/" activeclassname="active">
              Books
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeclassname="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" activeclassname="active">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeclassname="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
