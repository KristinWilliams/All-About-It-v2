import React from "react";
import Books from "../Components/Books";
import HomeCss from "../Components/Home.module.css";
const Home = () => {
  const sevenHeader =
    "Learn the art of becoming a master orator and never feel intimidated by the stage again.";
  const sevenParagraph =
    "This guide will show you some tips and strategies to get over your fears and face your audience with confidence. In 7 Strategies that Highly Effective People Use When They Speak, you’ll discover:";
  const sevenList = () => {
    return (
      <ul>
        <li>
          Practical and actionable techniques to overcome stage fright and
          become a master orator
        </li>
        <li>Step-by-step guide on how to ace the art of public speaking</li>
        <li>
          Shocking facts about fear and anxiety – and what you can do about it,
          based on scientific research
        </li>
        <li>
          Detailed insight into Glossophobia – and some actionable tips on how
          to tackle it
        </li>
        <li>
          Comprehensive walkthrough on overcoming social anxiety in 7 easy steps
        </li>
        <li>
          How to gain command over gestures, expressions and other non-verbal
          elements of communication
        </li>
        <li>
          How to hook the audience within the first few minutes of your speech
          or presentation, and keep them intrigued until the end.
        </li>
      </ul>
    );
  };

  const focusedHeader =
    "Never let procrastination, lack of motivation, or low energy stop you from achieving your dreams again!";

  const focusedParagraph =
    "The key to success isn’t binding yourself to the chair and forcing your mind to stay on track. It’s about using the psychologically appropriate techniques to maximize your time, know your internal and external triggers, and develop a game plan you can actually follow. In Focused to Finish, here is just a fraction of what you will discover:";

  const focusedList = () => {
    return (
      <ul>
        <li>
          21 tactical steps you need to take to gain clarity about your goals,
          eliminate distractions, and get more done in less time
        </li>
        <li>
          Psychologically proven strategies to maintain your attention and
          increase performance
        </li>
        <li>
          Why millionaires don’t use to-do lists -- find out how to schedule
          your time to prioritize work that saves you time, money, and energy
        </li>
        <li>
          How to take breaks that lead to breakthroughs -- know what to do on
          your breaks to maintain productivity
        </li>
        <li>
          Goal-setting hacks to help you sustain momentum (even when you feel
          like you want to give up)
        </li>
        <li>
          A boundaries blueprint to put an end to digital distractions and
          personal distractions, as well as how to say no to the wrong
          opportunities
        </li>
        <li>
          The ultimate guide to becoming the driven, goal-smashing, and
          successful individual you can be
        </li>
      </ul>
    );
  };

  return (
    <div className={HomeCss["home-container"]}>
      <div className={HomeCss.ebook}>
        <h1 className={HomeCss["ebook-header"]}>
          Download Your <span id={HomeCss.free}>free</span> Copy Of The 'Hack
          Your Brain' eBook Today!
        </h1>
        <img src="img/Hack-Your-Brain.jpg" className={HomeCss["ebook-cover"]} />
        <button className={HomeCss["ebook-btn"]}>
          <a href="https://allaboutitpublishing.activehosted.com/f/1">
            grab free copy!
          </a>
        </button>
      </div>

      <h1 className={HomeCss["grab-header"]}>
        Want even more lifestyle tips? Check out my other books!
      </h1>
      <Books
        title="7 Strategies That Highly Effective People Use When They Speak"
        cover="img/7strategies-cover.jpg"
        buy="BUY NOW"
        link="https://www.amazon.com/dp/B09P82DND2/ref=sr_1_16?crid=6149LYQKEXFD&keywords=7+strategies+highly&qid=1640696232&rnid=283155&s=books&sprefix=7+strategies+highly%2Cstripbooks%2C206&sr=1-16"
        header={sevenHeader}
        paragraph={sevenParagraph}
        readMoreList={sevenList()}
        closingTag="And so much more!"
      />

      <Books
        title="Focused to Finish:"
        subtitle="21 Powerful Techniques To Obtain Laser Sharp Focus"
        cover="img/Focused-cover.jpg"
        buy="COMING SOON"
        link="#"
        header={focusedHeader}
        paragraph={focusedParagraph}
        readMoreList={focusedList()}
        closingTag="And so much more!"
      />
    </div>
  );
};

export default Home;
