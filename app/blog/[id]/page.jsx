import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis hic quam, nihil libero sunt consequatur atque delectus rerum ipsum.</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iure velit nam. Beatae, debitis illum minus rerum laudantium consequatur numquam ea doloribus nemo!
          </p>
          <div className={styles.author}>
            <Image
              src=""
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}></span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src=""
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         
        </p>
      </div>
    </div>
  );
};

export default BlogPost;