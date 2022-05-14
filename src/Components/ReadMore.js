import React from "react";
import AboutCss from "./ReadMore.module.css";

const ReadMore = ({
  closeReadMore,
  header,
  paragraph,
  readMoreList,
  closingTag,
}) => {
  return (
    <div className={AboutCss.container}>
      <div
        className={AboutCss.overlay}
        onClick={() => closeReadMore(false)}
      ></div>
      <img
        className={AboutCss["close-btn"]}
        onClick={() => closeReadMore(false)}
        src="img/icon-close.svg"
      />
      <div className={AboutCss["read-container"]}>
        <h1>{header}</h1>
        <p>{paragraph}</p>
        {readMoreList}
        <h3>{closingTag}</h3>
      </div>
    </div>
  );
};

export default ReadMore;
