import { React, useState } from "react";
import HomeCss from "./Home.module.css";
import ReadMore from "./ReadMore";

const Books = function ({
  title,
  subtitle,
  cover,
  buy,
  link,
  header,
  paragraph,
  readMoreList,
  closingTag,
}) {
  const [openMore, setOpenMore] = useState(false);
  return (
    <div className={HomeCss["book-container"]}>
      {openMore ? (
        <ReadMore
          closeReadMore={setOpenMore}
          header={header}
          paragraph={paragraph}
          readMoreList={readMoreList}
          closingTag={closingTag}
        />
      ) : null}

      <h1 className={HomeCss["book-title"]}>
        {title} <br />
        {subtitle}
      </h1>

      <img src={cover} className={HomeCss["book-cover"]} />

      <button className={HomeCss["buy-btn"]}>
        <a href={link}>{buy}</a>
      </button>
      <button
        className={HomeCss["read-more"]}
        onClick={() => setOpenMore(true)}
      >
        Read More
      </button>
    </div>
  );
};

export default Books;
