import React from "react";
import ContactCss from "../Components/Contact.module.css";
const Contact = () => {
  return (
    <div className={ContactCss.container}>
      <div className={ContactCss["contact-container"]}>
        <h1>Get in Touch</h1>
        <ul>
          <li>
            <img src="img/Email-icon.svg" />
            <a href="mailto:marketing@allaboutitpublishing.com">
              marketing@allaboutitpublishing.com
            </a>
          </li>
          <li>
            <img src="img/Phone-icon.svg" />
            <a href="tel:(832) 246 4303">(832) 246 4303</a>
          </li>
          <li>
            <img src="img/Facebook-icon.svg" />
            <a href="https://www.facebook.com/groups/allaboutsuccessnowinnercircle">
              Join The Facebook Group
            </a>
          </li>
        </ul>
      </div>
      <div className={ContactCss["blog-suggestions"]}>
        <h1>Blog Suggestions</h1>
        <p>
          Do you have a topic you like us to discuss on the blog? Type your
          suggestions here!
        </p>
        <form
          action="https://formsubmit.co/marketing@allaboutitpublishing.com"
          method="POST"
        >
          <textarea
            name="comment"
            className={ContactCss["contact-form"]}
            placeholder="Type your comment..."
            required
          ></textarea>
          <input
            type="text"
            name="name"
            placeholder="Name (optional)"
            className={ContactCss.name}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
