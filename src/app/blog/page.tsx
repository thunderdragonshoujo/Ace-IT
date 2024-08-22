/** @format */

'use client';
import React from 'react';
import Image from 'next/image';
import styles from './blog.module.css';
import { colors } from '../../utils/Theme';
// import { color } from "framer-motion";

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const DummyPosts = [
  {
    id: 1,
    label: 'Mongoose IM Instant Messaging',
    title: 'MongooseIM 6.2: Easy to set up, use and manage',
    content:
      'Discover MongooseIM 6.2 for streamlined messaging with easy clustering and updated XMPP extensions, enhancing user-friendliness and cost efficiency.',
    image: '/post1.png',
  },
  {
    id: 2,
    label: 'Mongoose IM Instant Messaging',
    title: 'MongooseIM 6.2: Easy to set up, use and manage',
    content:
      'Discover MongooseIM 6.2 for streamlined messaging with easy clustering and updated XMPP extensions, enhancing user-friendliness and cost efficiency.',
    image: '/post2.png',
  },
  {
    id: 3,
    label: 'Mongoose IM Instant Messaging',
    title: 'MongooseIM 6.2: Easy to set up, use and manage',
    content:
      'Discover MongooseIM 6.2 for streamlined messaging with easy clustering and updated XMPP extensions, enhancing user-friendliness and cost efficiency.',
    image: '/post3.png',
  },
  {
    id: 4,
    label: 'Mongoose IM Instant Messaging',
    title: 'MongooseIM 6.2: Easy to set up, use and manage',
    content:
      'Discover MongooseIM 6.2 for streamlined messaging with easy clustering and updated XMPP extensions, enhancing user-friendliness and cost efficiency.',
    image: '/post4.png',
  },
  {
    id: 5,
    label: 'Mongoose IM Instant Messaging',
    title: 'MongooseIM 6.2: Easy to set up, use and manage',
    content:
      'Discover MongooseIM 6.2 for streamlined messaging with easy clustering and updated XMPP extensions, enhancing user-friendliness and cost efficiency.',
    image: '/post5.png',
  },
  {
    id: 6,
    label: 'Mongoose IM Instant Messaging',
    title: 'MongooseIM 6.2: Easy to set up, use and manage',
    content:
      'Discover MongooseIM 6.2 for streamlined messaging with easy clustering and updated XMPP extensions, enhancing user-friendliness and cost efficiency.',
    image: '/post6.png',
  },
  {
    id: 7,
    label: 'Mongoose IM Instant Messaging',
    title: 'MongooseIM 6.2: Easy to set up, use and manage',
    content:
      'Discover MongooseIM 6.2 for streamlined messaging with easy clustering and updated XMPP extensions, enhancing user-friendliness and cost efficiency.',
    image: '/post7.png',
  },
  {
    id: 8,
    label: 'Mongoose IM Instant Messaging',
    title: 'MongooseIM 6.2: Easy to set up, use and manage',
    content:
      'Discover MongooseIM 6.2 for streamlined messaging with easy clustering and updated XMPP extensions, enhancing user-friendliness and cost efficiency.',
    image: '/post8.png',
  },
  {
    id: 9,
    label: 'Mongoose IM Instant Messaging',
    title: 'MongooseIM 6.2: Easy to set up, use and manage',
    content:
      'Discover MongooseIM 6.2 for streamlined messaging with easy clustering and updated XMPP extensions, enhancing user-friendliness and cost efficiency.',
    image: '/post9.png',
  },
];
const BlogPage = () => {
  const controls = useAnimation();
  const controls2 = useAnimation();

  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();

  if (inView) {
    controls.start({ x: 0, opacity: 1 });
  }
  if (inView2) {
    controls2.start({ y: 0, opacity: 1 });
  }
  return (
    <div className={styles.blogContainer}>
      <div
        className={`${styles.header} ${styles.alignCenter}`}
        style={{ backgroundImage: "url('/blg1.png')" }}>
        <span className={styles.head1}>
          Our <span style={{ color: colors.primary }}>Blogs</span>
        </span>
      </div>
      <div className={styles.contentContainer}>
        {/* POST CARD */}
        <motion.div
          ref={ref}
          initial={{ x: 50, opacity: 0 }}
          animate={controls}
          transition={{ duration: 1 }}
          className={styles.bloglgCard}>
          {' '}
          <Image
            className={styles.cardImage}
            alt='abt'
            height={896}
            width={1920}
            src={'/bcardImg.png'}
          />
          <div className={styles.cardWidth}>
            <div className={styles.featuredContainer}>
              <div
                className={styles.serviceText1}
                style={{ color: colors.primary }}>
                Featured
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: '13px',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}>
                <div>
                  <Image
                    alt='abt'
                    height={896}
                    width={1920}
                    style={{
                      width: '16px',
                      height: 'auto',
                    }}
                    src={'/calenderIcon.png'}
                  />
                </div>
                <div
                  className={styles.serviceText1}
                  style={{
                    color: colors.primary,
                  }}>
                  12 jan 2024
                </div>
              </div>
            </div>
            <div className={styles.head2}>Advent of Code 2023</div>
            <div
              style={{ marginTop: '15px', marginBottom: '10px' }}
              className={styles.serviceText1}>
              Lorem Ipsumis simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s.
            </div>
            <button className={styles.btn}>Read Post</button>
          </div>
        </motion.div>
        <motion.div
          ref={ref2}
          initial={{ y: -100, opacity: 0 }}
          animate={controls2}
          transition={{ duration: 1 }}
          className={styles.postsContainer}>
          {/* <div className={styles.postItem}></div> */}
          {DummyPosts.map((item) => {
            return (
              <div
                key={item.id}
                className={styles.postItem}>
                {' '}
                <Image
                  className={styles.postImage}
                  alt='abt'
                  height={896}
                  width={1920}
                  src={item.image}
                />
                <div>
                  <div className={styles.featuredContainer}>
                    <div
                      className={styles.serviceText2}
                      style={{ color: colors.secondary }}>
                      {item.label}
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        gap: '.6vw',
                        alignItems: 'center',
                      }}>
                      <div>
                        <Image
                          alt='abt'
                          height={896}
                          width={1920}
                          style={{
                            width: 'clamp(0.4rem, 1vw, 1rem)',
                            height: 'auto',
                          }}
                          src={'/calenderp.png'}
                        />
                      </div>
                      <div
                        className={styles.serviceText2}
                        style={{ color: colors.secondary }}>
                        12 jan 2024
                      </div>
                    </div>
                  </div>
                  <div className={styles.head3}>{item.title}</div>
                  <div className={styles.serviceText2}>{item.content}</div>
                  <button
                    style={{ borderBottom: `.2vw solid ${colors.secondary}` }}
                    className={styles.btn}>
                    Read Post
                  </button>
                </div>
              </div>
            );
          })}
        </motion.div>
        <motion.button
          key={'id23'}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            color: colors.secondary,
            alignSelf: 'center',
            marginBottom: '5rem',
          }}
          className={styles.btnPrimary}>
          View more
        </motion.button>
      </div>
    </div>
  );
};
export default BlogPage;
