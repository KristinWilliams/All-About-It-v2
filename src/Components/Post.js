// import React, { Component } from "react";
// import PostCss from "./Post.module.css";
// import axios from "axios";

// const api = axios.create({
//   baseURL: "https://lobster-app-flfvo.ondigitalocean.app/api/articles",
// });

// class Post extends React.Component {
//   constructor() {
//     super();
//     api.get("?populate=img");
//   }
//   render() {
//     return (
//       <div className={PostCss["post-container"]}>
//         <img
//           className={PostCss["back-arrow"]}
//           src="img/White-Arrow-Icon.svg"
//           onClick={() => this.props.backBtn()}
//         />
//         <h1>{this.props.title}</h1>
//         <img className={PostCss["post-img"]} src={this.props.img} />
//         <p>{this.props.content}</p>
//         <div className={PostCss["clock-date"]}>
//           <img src="img/Blog-Clock-icon.svg" />
//           <h5>{this.props.date}</h5>
//         </div>
//       </div>
//     );
//   }
// }

// export default Post;
