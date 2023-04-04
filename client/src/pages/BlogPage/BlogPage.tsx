import React from "react";
import { useParams } from "react-router-dom";
import styles from "./BlogPage.module.scss";
import { useGetSingleBlogQuery } from "features/Blog/blogApi";
import { formatDate } from "helper";
import BlogPageSkeleton from "components/Skeleton/BlogPageSkeleton/BlogPageSkeleton";
import { AnimatePresence, motion } from "framer-motion";

const BlogPage = () => {
  const { slug } = useParams();
  const { data: blog } = useGetSingleBlogQuery(slug!);
  const formattedDate = formatDate(blog?.createdAt!);

  return (
    <div className={styles.blog}>
      <div className="container">
        <AnimatePresence mode="wait">
          {blog ? (
            <motion.div
              className={styles.wrapper}
              key="blog"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className={styles.top}>
                <div className={styles.details}>
                  <span>{blog?.tag}</span>
                  <p>{formattedDate}</p>
                </div>
                <h1>{blog?.title}</h1>
              </div>
              <div className={styles.bottom}>
                <div className={styles.imageWrapper}>
                  <img src={blog?.imageUrl} alt="" />
                </div>
                <div className={styles.richText}>
                  <h4>First impressions</h4>
                  <p>
                    Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                    semper libero, sit amet adipiscing sem neque sed ipsum.
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos hymenaeos. Donec mi odio, faucibus at,
                    scelerisque quis, convallis in, nisi. Curabitur ullamcorper
                    ultricies nisi. Nam eget dui.
                  </p>
                  <p>
                    Aenean viverra rhoncus pede. Phasellus volutpat, metus eget
                    egestas mollis, lacus lacus blandit dui, id egestas quam
                    mauris ut lacus. Aenean leo ligula, porttitor eu, consequat
                    vitae, eleifend ac, enim. Suspendisse potenti. In turpis.
                  </p>
                  <p>
                    Praesent congue erat at massa. Aenean massa. Sed cursus
                    turpis vitae tortor. Cras non dolor. Suspendisse enim
                    turpis, dictum sed iaculis condimentum nec nisi.
                  </p>
                  <p>‍</p>
                  <h4>Second impressions</h4>
                  <p>
                    Cras sagittis. Nam at tortor in tellus interdum sagittis.
                    Vivamus quis mi. Etiam rhoncus. Sed a libero.
                  </p>
                  <p>
                    Pellentesque egestas, neque sit amet convallis pulvinar,
                    justo nulla eleifend augue, ac auctor orci leo non est. Nam
                    pretium turpis et arcu. Phasellus nec sem in justo
                    pellentesque facilisis. Sed libero. Aliquam lobortis.
                  </p>
                  <p>‍</p>
                  <blockquote>
                    “User engagement and experience has become a major focus for
                    any web-based service in recent years”
                  </blockquote>
                  <p>‍</p>
                  <h4>A perfect fit</h4>
                  <p>
                    Praesent nonummy mi in odio. Aliquam lorem ante, dapibus in,
                    viverra quis, feugiat a, tellus. Nulla porta dolor. Integer
                    ante arcu, accumsan a, consectetuer eget, posuere ut,
                    mauris. In hac habitasse platea dictumst.
                  </p>
                  <p>
                    Praesent ac massa at ligula laoreet iaculis. Etiam ultricies
                    nisi vel augue. Quisque malesuada placerat nisl. Nulla neque
                    dolor, sagittis eget, iaculis quis, molestie non, velit.
                    Duis lobortis massa imperdiet quam.
                    <br />‍
                  </p>
                  <h4>Quality</h4>
                  <p>
                    Suspendisse feugiat. Maecenas tempus, tellus eget
                    condimentum rhoncus, sem quam semper libero, sit amet
                    adipiscing sem neque sed ipsum. Sed libero. In hac habitasse
                    platea dictumst. Pellentesque habitant morbi tristique
                    senectus et netus et malesuada fames ac turpis egestas.
                  </p>
                  <p>
                    Nunc sed turpis. Vestibulum rutrum, mi nec elementum
                    vehicula, eros quam gravida nisl, id fringilla neque ante
                    vel mi. Proin pretium, leo ac pellentesque mollis, felis
                    nunc ultrices eros, sed gravida augue augue mollis justo.
                    Curabitur turpis. Nam at tortor in tellus interdum sagittis.
                  </p>
                  <p>
                    Proin pretium, leo ac pellentesque mollis, felis nunc
                    ultrices eros, sed gravida augue augue mollis justo. Aenean
                    leo ligula, porttitor eu, consequat vitae, eleifend ac,
                    enim. Proin magna. Curabitur a felis in nunc fringilla
                    tristique. Curabitur suscipit suscipit tellus.
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              className={styles.skeleton}
              key="skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { delay: 2 } }}
            >
              <BlogPageSkeleton />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BlogPage;
