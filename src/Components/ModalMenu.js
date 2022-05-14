import React from "react";
import HomeCss from "./Home.module.css";
import { NavLink } from "react-router-dom";

const ModalMenu = ({ closeModal }) => {
  return (
    <>
      <div className={HomeCss["mobile-menu"]}>
        <img
          src="img/Menu.svg"
          className={HomeCss["close-icon"]}
          onClick={() => closeModal(false)}
        />
        <ul>
          <li>
            <NavLink to="/" activeclassname="active">
              Books <img src="img/Books-icon.svg" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeclassname="active">
              About <img src="img/About-Icon.svg" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" activeclassname="active">
              Blog <img src="img/Blog-Icon.svg" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeclassname="active">
              Contact <img src="img/Contact-Icon.svg" />
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={HomeCss.overlay} onClick={() => closeModal(false)}></div>
    </>
  );
};

export default ModalMenu;
