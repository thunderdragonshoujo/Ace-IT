/** @format */

"use client";
import React from "react";
import Image from "next/image";
import styles from "./stories.module.css";
import { colors } from "../../utils/Theme";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

// import { Link } from "next/link";
// import { useRouter } from "next/router";
const DummyPosts = [
  {
    id: 1,
    title: "Critical Web Launch",
    userImage: "/ps1.png",
    content: "Migrating from C++ to Java for a Time-Critical Web Launch",
    image: "/st1.png",
  },
  {
    id: 2,
    title: "Microservices Migration",
    userImage: "/ps2.png",
    content: "Accelerated Migration of Custom Microservices to AWS Lambda",
    image: "/st2.png",
  },
  {
    id: 3,
    title: "Web Launch",
    userImage: "/ps3.png",
    content: "Rapid Web Launch with Infrastructure as Code (IaC)",
    image: "/st3.png",
  },
  {
    id: 4,
    title: "Real-Time Payment Processor Production Issues",
    userImage: "/ps4.png",
    content:
      "Remediating performance and scaling issues with a RabbitMQ cluster in production",
    image: "/st4.png",
  },
  {
    id: 5,
    title: "RabbitMQ in Kubernetes",
    userImage: "/ps5.png",
    content: "Configuring RabbitMQ in Kubernetes for success",
    image: "/st5.png",
  },
];

const StoriesPage = () => {
  // const router = useRouter();

  //  ANIMATION CONTROLS
  const controls = useAnimation();
  const controls2 = useAnimation();

  // REFS
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();

  // Animation trigger
  if (inView) {
    controls.start({ x: 0, opacity: 1 });
  }
  if (inView2) {
    controls2.start({ y: 0, opacity: 1 });
  }

  const handlePostClick = (post: any) => {
    console.log("called");
    const propsToPass = {
      title: post.title,
      content: post.content,
      author: post.useImage,
    };

    console.log(propsToPass, " content");
    // router.push("");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "99%",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Image
          alt="abt"
          height={896}
          width={1920}
          style={{
            width: "99vw",
            height: "620px",
            objectFit: "cover",
          }}
          src={"/bgHStories.png"}
        />
        <motion.div
          ref={ref}
          initial={{ x: -50, opacity: 0 }}
          animate={controls}
          transition={{ duration: 1 }}
          className={`${styles.header} ${styles.alignCenter}`}
        >
          <span className={styles.head1}>
            Customer<span style={{ color: colors.primary }}> Stories</span>
          </span>
        </motion.div>
      </div>

      <motion.div
        ref={ref2}
        initial={{ y: -50, opacity: 0 }}
        animate={controls2}
        transition={{ duration: 1 }}
        className={styles.contentContainer}
      >
        <div className={styles.postsContainer}>
          {DummyPosts.map((item) => {
            return (
              <div key={item.id} className={styles.postItem}>
                <div
                  style={{
                    position: "relative",
                    border: ".1vw solid rgba(128, 128, 128, 0.201)",
                    borderRadius: "10%",
                  }}
                >
                  <Image
                    alt="abt"
                    height={896}
                    draggable={false}
                    width={1920}
                    className={styles.storyImage}
                    src={item.image}
                  />{" "}
                  <Image
                    alt="abt"
                    height={896}
                    draggable={false}
                    width={1920}
                    className={styles.StoryIcon}
                    src={item.userImage}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  {/* <div className={styles.featuredContainer}></div> */}
                  <div className={styles.head2}>{item.title}</div>
                  <div className={styles.serviceText2}>{item.content}</div>
                  <Link
                    href={{
                      pathname: `/stories/${item.id}`,
                      query: {
                        content: item.content,
                        title: item.title,
                        user: item.userImage,
                        image: item.image,
                      },
                    }}
                  >
                    {" "}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.91 }}
                      style={{
                        color: "black",
                        alignSelf: "start",
                        marginTop: "1rem",
                      }}
                      // onClick={() => handlePostClick(item)}
                      className={styles.btnPrimary}
                    >
                      Learn more
                    </motion.button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
export default StoriesPage;
