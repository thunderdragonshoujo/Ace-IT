/** @format */

'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './devsecops.module.css';
import { colors } from '../../../utils/Theme';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ContactForm } from '@/components/contactForm/ContactForm';

const DevSecOps = () => {
  const [isMobile, setIsMobile] = useState(false);

  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();

  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const [ref5, inView5] = useInView();
  const [ref6, inView6] = useInView();

  if (inView) {
    controls.start({ x: 0, opacity: 1 });
  }
  if (inView2) {
    controls2.start({ y: 0, opacity: 1 });
  }
  if (inView3) {
    controls3.start({ x: 0, opacity: 1 });
  }
  if (inView4) {
    controls4.start({ x: 0, opacity: 1 });
  }
  if (inView5) {
    controls5.start({ x: 0, opacity: 1 });
  }
  if (inView6) {
    controls6.start({ x: 0, opacity: 1 });
  }
  useEffect(() => {
    const handleSize = () => {
      if (typeof window !== 'undefined' && window.innerWidth < 870) {
        setIsMobile(true);
        console.log('True', isMobile);
      } else {
        setIsMobile(false);
        console.log('False', isMobile);
      }
    };

    if (typeof window !== 'undefined') {
      handleSize();
      window.addEventListener('resize', handleSize);

      return () => {
        window.removeEventListener('resize', handleSize);
      };
    }
  }, []);

  function scrollToContactForm() {
    // useEffect(() => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      if (typeof window !== undefined) {
        const offset = -100; // Adjust this value as needed
        window.scrollBy({ top: offset, behavior: 'smooth' });
      }
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
    // }, []);
  }
  return (
    <div
      className={styles.containerWidth}
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
      }}>
      <motion.div
        ref={ref5}
        initial={{ x: -50, opacity: 0 }}
        animate={controls5}
        transition={{ duration: 0.5 }}
        className={styles.containerWidth}
        style={{
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Image
          alt='abt'
          height={896}
          width={1920}
          draggable={false}
          className={styles.devCover}
          style={{
            height: 'auto',
            alignSelf: 'center',
            marginTop: '7rem',
            marginBottom: '7rem',
            userSelect: 'none',
          }}
          src={'/coverdevsec.png'}
        />
      </motion.div>

      {/* Container1 */}
      <div className={styles.contentContainerColumn}>
        {' '}
        <motion.div
          style={{ alignSelf: 'center' }}
          ref={ref}
          initial={{ x: 50, opacity: 0 }}
          animate={controls}
          transition={{ duration: 1 }}>
          <Image
            alt='abt'
            height={896}
            width={1920}
            draggable={false}
            className={styles.devCode}
            style={{
              height: 'auto',
              alignSelf: 'center',
              position: 'relative',
              top: '-7rem',
            }}
            src={'/devsecode.png'}
          />
        </motion.div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: isMobile?'-4rem':"",
          }}>
          <motion.div
            ref={ref2}
            initial={{ y: -100, opacity: 0 }}
            animate={controls2}
            transition={{ duration: 1 }}
            className={styles.contentContainerRow}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{ color: 'black', lineHeight: isMobile ? '' : '3rem' }}
                className={`${styles.heading1} ${styles.headingWidth}`}>
                {' '}
                Continuous{' '}
                <span style={{ color: colors.secondary }}>Value</span> <br />
                <span style={{ fontWeight: 'lighter' }}>
                  Delivery
                </span> with{' '}
                <span style={{ color: colors.secondary }}>DevOps</span>
              </div>
              <div
                style={{
                  lineHeight: '2rem',
                  color: 'black',
                  marginTop: '2rem',
                  marginLeft: isMobile ? '1.5rem' : '',
                }}
                className={styles.text1}>
                Our DevOps services include:
                <Image
                  alt='abt'
                  height={896}
                  width={1920}
                  draggable={false}
                  style={{
                    height: 'auto',
                    marginTop: '2rem',
                  }}
                  className={`${styles.codeImg}  ${styles.LgImages}`}
                  src={'/content1.png'}
                />
              </div>
            </div>
            <div className={styles.LgImages}>
              <Image
                alt='abt'
                height={896}
                width={1920}
                draggable={false}
                style={{}}
                src={'/dev.jpg'}
                className={`${styles.loopImg} `}
              />
              <div
                style={{}}
                className={styles.loopcontent}>
                At{' '}
                <span
                  style={{
                    color: '#FF88C3',
                    padding: '3px',
                    paddingLeft: '9px',
                    paddingRight: '8px',
                    borderRadius: '5px',
                    borderColor: '#FFE1F0',
                    borderWidth: '1.3px',
                  }}>
                  [Ace8]
                </span>{' '}
                we understand the need for efficient and secure software
                delivery. Our DevSecOps {!isMobile && <br />} approach combines
                the strengths of development, security, and operations into one
                cohesive team. By {!isMobile && <br />} embraacing DevOps
                principles, we enable you to continously deliver value to your
                customers.
              </div>
            </div>
          </motion.div>
          <motion.div
            ref={ref3}
            initial={{ x: -50, opacity: 0 }}
            animate={controls3}
            transition={{ duration: 0.5 }}
            className={styles.contentContainerRow}>
            <Image
              alt='abt'
              height={896}
              width={1920}
              draggable={false}
              style={{
              marginBottom: isMobile ? "2rem" :"", 
                height: 'auto',
              }}
              src={'/devsecode2.png'}
              className={`${styles.code2}  ${styles.LgImages}`}
            />

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{ color: 'black', lineHeight: isMobile ? '' : '3rem' }}
                className={`${styles.heading1} ${styles.headingWidth}`}>
                <span>
                  Security as
                  <span style={{ fontWeight: 'lighter' }}> the</span>
                </span>
                <br />
                <span style={{ color: '#458D84' }}>Top Priority</span>
              </div>
              <div
                style={{
                  color: 'black',
                  lineHeight: '2rem',
                  marginTop: '2rem',
                  marginLeft:isMobile?"1.5rem":""
                }}
                className={styles.text1}>
                Our security services encompass:
              </div>
              <Image
                alt='abt'
                height={896}
                width={1920}
                draggable={false}
                style={{
                  height: 'auto',
                  alignSelf: 'center',
                  marginTop: '2vh',
                }}
                className={`${styles.codeImg}  ${styles.LgImages}`}
                src={'/content2.png'}
              />
            </div>
          </motion.div>
          <div
            style={{
              textAlign: 'center',
              lineHeight: isMobile ? '' : '3rem',
              alignSelf: 'center',
              color: 'black',
            }}
            className={`${styles.heading1} ${styles.lgHeadingWidth}`}>
            <span style={{ fontWeight: 'lighter' }}> Cultural</span>{' '}
            Transformation <br />{' '}
            <span style={{ fontWeight: 'lighter' }}>For</span>{' '}
            <span style={{ color: colors.secondary }}> Success</span>
            <br />
          </div>

          <div
            style={{
              color: 'black',
              textAlign: 'center',
              alignSelf: 'center',
              marginTop: '2rem',
              marginBottom: '2rem',
            }}
            className={`${styles.text2} ${styles.contentWidth}`}>
            DevSecOps is more than just a methodology; it&apos;s a cultural
            shift that drives collaboration and efficiency across your
            organization.
          </div>
        </div>
        <motion.div
          ref={ref4}
          initial={{ x: -50, opacity: 0 }}
          animate={controls4}
          transition={{ duration: 0.5 }}
          className={styles.contentContainerRow}
          style={{ marginBottom: isMobile ? '' : '0vw' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Image
              alt='abt'
              height={896}
              draggable={false}
              width={1920}
              style={{
                height: 'auto',
                alignSelf: 'center',
              }}
              className={`${styles.meetingImg}  ${styles.LgImages}`}
              src={'/codetrans.png'}
            />
          </div>
          <div>
            <Image
              alt='abt'
              height={896}
              draggable={false}
              width={1920}
              style={{
                height: 'auto',
                margin: isMobile?"0 auto":""
              }}
              className={`${styles.meetingImg}  ${styles.LgImages}`}
              src={'/devsecode3.png'}
            />
          </div>
        </motion.div>
      </div>

      {/* CARD CONTAINER  */}
      {isMobile ? (
        <motion.div
          ref={ref6}
          initial={{ x: -50, opacity: 0 }}
          animate={controls6}
          transition={{ duration: 0.5 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'black',
            gap: '4vw',
            textAlign: 'center',
          }}>
          <div
            style={{ marginTop: '10vw', width: '80%', alignSelf: 'center' }}
            className={styles.heading1}>
            <span style={{ fontWeight: 'lighter' }}>Ready to Bridge</span> the
            Gap Between <span style={{ color: '#8FD5CC' }}> Development</span>,
            Security, and Operations{' '}
            <span style={{ fontWeight: 'lighter' }}>and Unleash the Full</span>{' '}
            <span style={{ color: '#8FD5CC' }}>
              Potential of Your Organization
            </span>
          </div>
          <div
            style={{ width: '80%', alignSelf: 'center' }}
            className={styles.text2}>
            Learn more about our DevSecOps approach and how it can drive
            continuous value delivery, prioritize security, and foster a culture
            of collaboration and efficiency. Contact us today to embark on a
            transformative journey and build robust, secure, and scalable
            software solutions.
          </div>
          <motion.button
            onClick={() => scrollToContactForm()}
            style={{
              marginBottom: '10vw',
              width: '50%',
              alignSelf: 'center',
              height: '8vw',
            }}
            key={'id45'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.91 }}
            className={styles.btnSignup}>
            Learn More about DevSecOps
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          ref={ref6}
          initial={{ x: -50, opacity: 0 }}
          animate={controls6}
          transition={{ duration: 0.5 }}
          style={{ width: 'clamp(40rem,80vw,70rem)', alignSelf: 'center' }}>
          <Image
            alt='abt'
            height={896}
            width={1920}
            draggable={false}
            onClick={() => scrollToContactForm()}
            style={{
              width: '100%',
              height: 'auto',
              alignSelf: 'center',
              marginTop: '4rem',
            }}
            src={'/devSecCard.png'}
          />
        </motion.div>
      )}

      {/* CONTACT CONTAINER */}

      <ContactForm
        id='contactForm'
        containerStyles={{
          marginTop: isMobile ? '0px' : '8rem',
          marginBottom: isMobile ? '0px' : '6rem',
          paddingBottom: isMobile ? '20px' : '',
          width: isMobile ? '100vw' : '',
          borderRadius:isMobile?"0rem":"0.5rem"
        }}
      />
    </div>
  );
};

export default DevSecOps;
