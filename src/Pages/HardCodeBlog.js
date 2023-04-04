import React, { useState } from "react";
import BlogCss from "../Components/Blog.module.css";
import Post from "../Components/Post";

const HardCodeBlog = () => {
  return (
    <div className={BlogCss["blog-posts"]}>
      <h1>Advice/News</h1>
      <div className={BlogCss["posts"]}>
        <div className={BlogCss["title-img"]}>
          <h2>Tips to Power Up Your Productivity</h2>
          <img className={BlogCss["post-img"]} src="img/Blogpost1.jpeg" />
        </div>
        <div>
          <p>
            Increased productivity is at the heart of what drives all
            development and increases in performance and profitability.
          </p>
        </div>
        <div className={BlogCss["date-btn"]}>
          <div className={BlogCss.date}>
            <img src="img/Blog-Clock-icon.svg" />
          </div>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default HardCodeBlog;
