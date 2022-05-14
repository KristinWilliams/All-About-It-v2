import React from "react";
import AboutCss from "../Components/About.module.css";

const About = () => {
  return (
    <div className={AboutCss["about-container"]}>
      <div className={AboutCss.header}>
        <h1> Who is J.R Brown?</h1>
        <p>
          J.R Brown has a Masters of Science in Human Services and a Bachelors
          of Social Work from the University of Mississippi.
        </p>
      </div>
      <ul>
        <li>Lives in Upstate New York</li>
        <li>Former teacher, now entrepreneur with a successful business</li>
        <li>Used to work as a university lecturer in behavioral psychology</li>
        <li>
          Quit his profession as a teacher/lecturer to open his own business and
          run his private courses to help people transform their habits
        </li>
        <li>
          Has a strong desire to help people in today's ever-changing world by
          addressing issues about living and working in a fast-paced world while
          sustaining balance, control, and meaningful focus
        </li>
        <li>
          Helping you achieve laser-sharp focus is simple when you know what is
          distracting people and it's not always the obvious things
        </li>
        <li>
          J. R. Brown wants to shine a light on the things that we can control
          and the that we can't, so that we can focus on the things that matter
        </li>
      </ul>
    </div>
  );
};

export default About;
