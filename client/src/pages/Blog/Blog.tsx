import ExploreBlogs from "pages/Home/ExploreBlogs/ExploreBlogs";
import React from "react";
import styles from "./Blog.module.scss";

const Blog = () => {
  return (
    <div className={styles.blog}>
      <ExploreBlogs />
    </div>
  );
};

export default Blog;
