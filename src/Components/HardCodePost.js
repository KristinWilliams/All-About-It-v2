import { React, useState } from "react";
import PostCss from "./Post.module.css";

const HardCodePost = ({ backBtn }) => {
  return (
    <div className={PostCss["post-container"]}>
      <img
        className={PostCss["back-arrow"]}
        src="img/White-Arrow-Icon.svg"
        onClick={() => backBtn(true)}
      />
      <h1>Tips to Power Up Your Productivity</h1>
      <img className={PostCss["post-img"]} src="img/Blogpost1.jpeg" />
      <p>
        Increased productivity is at the heart of what drives all development
        and increases in performance and profitability. A combination of
        intelligent planning and focused efforts, productivity is something that
        can be continuously improved. Being more productive means you can get
        more out of each and every day. It means you can do more in less time
        and with less resources. It means you can become the most efficient and
        productive version of yourself so you can achieve things you once
        considered to be in the too hard basket. It’s about changing habits,
        attitudes, and patterns. In sum - it’s not easy! Harnessing the power of
        productivity can drastically change the way you feel in your job, in
        your home life and in your own development. We all want to feel more
        productive and in control of our personal and professional lives. The
        question at the heart of this desire is ‘how do I become more
        productive?’ We will be discussing insights on how to become more
        productive by focusing on three key areas: Time, Energy and Attention.
        In the Time section Time tips to reduce the time you spend on low
        priority tasks. Check out the Energy section to find tips on how to give
        yourself an extra boost through those harder days. Finally, the
        Attention section will give you some hints on how to focus better and
        achieve highly where you need to. If this interests you head over to the{" "}
        <a href="  https://www.facebook.com/groups/allaboutsuccessnowinnercircle  ">
          Facebook Group
        </a>{" "}
        to get this and much more- you will also get to interact with me one on
        one!
      </p>
      <div className={PostCss["clock-date"]}>
        <img src="img/Blog-Clock-icon.svg" />
        <h5>3/15/2023</h5>
      </div>
    </div>
  );
};

export default HardCodePost;
