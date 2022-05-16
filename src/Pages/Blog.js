import React from "react";
import axios from "axios";
import BlogCss from "../Components/Blog.module.css";
import Post from "../Components/Post";

const api = axios.create({
  baseURL: "https://all-about-it.herokuapp.com/api/articles",
});

class Blog extends React.Component {
  state = {
    posts: [],
    displayBlog: true,
    title: "",
    img: "",
    content: "",
    date: "",
  };
  constructor() {
    super();
    api.get("?populate=img").then((res) => {
      this.setState({ posts: res.data.data });
      console.log(res.data.data);
    });
  }

  render() {
    return (
      <>
        {this.state.displayBlog ? (
          <div className={BlogCss["blog-posts"]}>
            <h1>Advice/News</h1>
            {this.state.posts.map((post) => (
              <div className={BlogCss["posts"]} key={post.id}>
                <div className={BlogCss["title-img"]}>
                  <h2>{post.attributes.Title}</h2>
                  <img
                    className={BlogCss["post-img"]}
                    src={`https://all-about-it.herokuapp.com${post.attributes.img.data.attributes.formats.thumbnail.url}`}
                  />
                </div>
                <div>
                  <p>{post.attributes.description}</p>
                </div>
                <div className={BlogCss["date-btn"]}>
                  <div className={BlogCss.date}>
                    <img src="img/Blog-Clock-icon.svg" />
                    <h5>{post.attributes.date}</h5>
                  </div>
                  <button
                    onClick={() => {
                      this.setState({
                        displayBlog: false,
                        title: post.attributes.Title,
                        img: post.attributes.img.data.attributes.formats.small
                          .url,
                        content: post.attributes.content,
                        date: post.attributes.date,
                      });
                    }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Post
            title={this.state.title}
            img={this.state.img}
            content={this.state.content}
            date={this.state.date}
            backBtn={() => this.setState({ displayBlog: true })}
          />
        )}
      </>
    );
  }
}

export default Blog;
