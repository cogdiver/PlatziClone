import React, { Component } from "react";

class BlogsPost extends Component {
  render() {
    const { id } = this.props;
    return (
      <div>
        <p>Blog</p>
        <span>{id}</span>
      </div>
    );
  }
}

export default BlogsPost;
