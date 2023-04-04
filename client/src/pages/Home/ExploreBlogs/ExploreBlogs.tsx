import BlogSkeleton from "components/Skeleton/BlogSkeleton/BlogSkeleton";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import { useGetBlogsQuery } from "../../../features/Blog/blogApi";
import { formatDate } from "../../../helper";
import styles from "./ExploreBlogs.module.scss";

const ExploreBlogs = ({ filter = false, blogPage = true }) => {
  const { data: blogs } = useGetBlogsQuery();
  return (
    <div className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.wrapper}
          style={{ alignItems: blogPage ? "flex-start" : "center" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
          viewport={{ amount: 0.2, once: true }}
        >
          <div
            className={styles.left}
            style={{ alignItems: blogPage ? "flex-start" : "center" }}
          >
            <span>WELLNESS INSIGHTS</span>
            <p style={{ textAlign: blogPage ? "left" : "center" }}>
              Stay informed and inspired on your wellness journey with our blog
              section.
            </p>
            {!blogPage && (
              <Button link="/blog" title="explore all posts" mt="30px" />
            )}
          </div>
          <AnimatePresence mode="wait">
            {blogs ? (
              <motion.div
                className={styles.right}
                key="blogs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {blogs
                  ?.filter((blog) => (filter ? blog.featured : true))
                  .map((blog) => (
                    <div className={styles.blog} key={blog._id}>
                      <Link to={`/blog/${blog.slug}`}>
                        <div className={styles.image}>
                          <img src={blog.imageUrl} alt="" />
                        </div>
                      </Link>
                      <div className={styles.details}>
                        <div className={styles.top}>
                          <Link to={`/blog/${blog.slug}`}>
                            <span className={styles.tag}>{blog.tag}</span>
                          </Link>
                          <p className={styles.date}>
                            {formatDate(blog.createdAt!)}
                          </p>
                        </div>
                        <Link to={`/blog/${blog.slug}`}>
                          <p className={styles.bottom}>{blog.title}</p>
                        </Link>
                      </div>
                    </div>
                  ))}
              </motion.div>
            ) : (
              <motion.div
                className={styles.right}
                key="skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: 2 } }}
              >
                {[1, 2, 3].map((skeleton) => (
                  <BlogSkeleton key={skeleton} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default ExploreBlogs;
