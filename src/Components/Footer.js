import React from "react";
import HomeCss from "./Home.module.css";

const Footer = function () {
  return (
    <div className={HomeCss.footer}>
      <ul className={HomeCss["footer-desktop"]}>
        <a href="mailto:marketing@allaboutitpublishing.com">
          <li>
            <img src="img/Email-icon.svg" /> marketing@allaboutitpublishing.com
          </li>
        </a>
        <a href="tel:(832) 246 4303">
          <li>
            <img src="img/Phone-icon.svg" /> (832) 246 4303
          </li>
        </a>
        <a href="https://www.facebook.com/groups/allaboutsuccessnowinnercircle">
          <li>
            <img src="img/Facebook-Icon.svg" /> Facebook Group
          </li>
        </a>
      </ul>
      <img src="img/All-about-it-logo.svg" className={HomeCss["footer-logo"]} />
    </div>
  );
};

export default Footer;
