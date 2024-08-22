/** @format */

'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// import { colors, duration } from "@mui/material";
import styles from './microsevices.module.css';
import { colors } from '../../../utils/Theme';
import { ContactForm } from '@/components/contactForm/ContactForm';

const MicroServices = () => {
  const [isMobile, setIsMobile] = useState(false);

  //  ANIMATION CONTROLS
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();

  // REFS
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();

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
  // Animation trigger
  if (inView) {
    controls.start({ x: 0, opacity: 1 });
  }
  if (inView2) {
    controls2.start({ x: 0, y: 0, opacity: 1 });
  }
  if (inView3) {
    controls3.start({ x: 0, opacity: 1 });
  }
  if (inView4) {
    controls4.start({ x: 0, opacity: 1 });
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

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        width: '99vw',
      }}>
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 1 }}>
        <div>
          <Image
            alt='headerr'
            width={3840}
            height={2148}
            draggable={false}
            className={styles.headerrImg}
            src={'/headerrm.png'}
          />
        </div>
        <div>
          <Image
            alt='headerr'
            width={3840}
            height={2148}
            draggable={false}
            style={{
              width: '99vw',
              height: 'auto',
              position: 'absolute',
              top: 0,
            }}
            src={'/head.gif'}
          />
        </div>
      </motion.div>
      <motion.div
        ref={ref2}
        animate={controls2}
        initial={{ opacity: 0, x: -50, y: -50 }}
        transition={{ duration: 1 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '80vw',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <div className={`${styles.heading1}  ${styles.mainHeadingLg}`}>
          Comprehensive{' '}
          <span style={{ fontWeight: 'lighter' }}>Microservices Design</span>{' '}
          and <span style={{ color: colors.tertiary }}> Development </span>
          Services
        </div>
        <Image
          alt='headerr'
          width={3840}
          draggable={false}
          height={2148}
          className={styles.scalableImg}
          src={'/microLineH.png'}
        />

        <div
          className={styles.text2}
          style={{
            color: '#000',
            textAlign: 'center',
          }}>
          AceMQ provides comprehensive microservices design and development
          services to empower you in building highly scalable, efficient, and
          maintainable microservices. Our team of experts strictly adheres to
          industry best practices and including loose coupling. With a
          specialization in eCommerce services for customers, carts, orders,
          returns, payments, and accounting, we offer a range of solutions
          tailored to your specific needs.
        </div>
        <div>
          <Image
            alt='headerr'
            width={3840}
            draggable={false}
            height={2148}
            className={styles.sideBanner}
            src={'/cardMicro.png'}
          />
        </div>
      </motion.div>

      <motion.div
        ref={ref3}
        animate={controls3}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 1 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <div
          style={{
            width: '80vw',
            alignSelf: 'center',
            backgroundColor: '#fff',
          }}>
          <div className={styles.flexRow}>
            <div style={{ marginTop: '2vw' }}>
              <div
                style={{
                  color: colors.secondary,
                }}
                className={styles.numberStyles}>
                01
              </div>
              <div className={`${styles.heading1}  ${styles.headingmin}`}>
                <span style={{ color: colors.secondary }}>Start Strong</span>{' '}
                <span style={{ fontWeight: 'lighter' }}>
                  With
                  <br /> Golang{' '}
                </span>
                Starter Kits
              </div>
              <div>
                {' '}
                <Image
                  alt='advisory1'
                  width={1840}
                  height={2202}
                  draggable={false}
                  className={styles.flowImg}
                  src={'/microc1.png'}
                />
              </div>
            </div>
            <div>
              <Image
                alt='advisory1'
                width={1840}
                height={2202}
                draggable={false}
                className={styles.codeImg}
                src={'/micro1.png'}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            width: '80vw',
            alignSelf: 'center',
            backgroundColor: '#fff',
          }}>
          <div className={styles.flexRow}>
            <div>
              <Image
                alt='advisory1'
                width={1840}
                height={2202}
                draggable={false}
                className={styles.codeImg}
                src={'/micro2.png'}
              />
            </div>
            <div style={{ marginTop: '2vw' }}>
              <div
                style={{
                  color: '#458D84',
                }}
                className={styles.numberStyles}>
                02
              </div>
              <div className={`${styles.heading1}  ${styles.headingmin}`}>
                <span style={{ color: '#458D84' }}> Expert Guidance </span>{' '}
                <br />
                <span style={{ color: '#000', fontWeight: 'normal' }}>
                  Through Microservices
                </span>{' '}
                Architecture
              </div>
              <div>
                {' '}
                <Image
                  alt='optimize'
                  width={3240}
                  height={1148}
                  draggable={false}
                  src={'/microc2.png'}
                  className={styles.flowImg}
                  style={{
                    marginTop: '1vw',
                    marginBottom: '2vw',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/*  REFACTOR --------- */}

      <motion.div
        ref={ref4}
        animate={controls4}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 1 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <div className={styles.refactorContainer}>
          {/* heading containers */}
          <div
            style={{
              width: '80vw',
              alignSelf: 'center',
              display: 'flex',
              justifyContent: 'center',

              // backgroundColor: "#fff",
            }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '6vw',
                flexDirection: 'column',
              }}>
              <div
                style={{
                  marginTop: '2vw',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                {' '}
                {/* heading */}
                <div
                  className={`${styles.heading1}  ${styles.headingmin}`}
                  style={{
                    color: 'white',
                    width: '80vw',
                    textAlign: 'center',
                  }}>
                  <span style={{ fontWeight: 'lighter' }}>Refactor Your</span>{' '}
                  <span style={{ color: colors.secondary }}>
                    {' '}
                    Microservices
                    <br /> Architecture
                  </span>{' '}
                  to AWS Lambda
                </div>
                <div
                  className={styles.Awslamdatext}
                  style={{
                    color: '#fff',
                    textAlign: 'center',
                    border: '2px dashed #F481BA',
                    padding: isMobile ? 6 : 15,
                    alignSelf: 'center',
                    lineHeight: 1.6,
                    borderRadius: 13,
                  }}>
                  If you&apos;re considering migrating your microservices
                  architecture to AWS Lamda, our expert team is here to
                  streamline the process for maximum efficency. From meticulous
                  planning and automated conversion to comprehensive redesign
                  and implementation, we have you covered at every step.
                </div>
                {/*  code  */}
                <div style={{ alignSelf: 'center' }}>
                  {' '}
                  <Image
                    alt='optimize'
                    width={3240}
                    height={1148}
                    draggable={false}
                    src={'/microc3.png'}
                    className={styles.mainHeadingLg}
                    style={{
                      marginTop: '1vw',
                      width: '70vw',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* CONTAINER 1  ------------ */}
          <div
            style={{
              width: '80vw',
              alignSelf: 'center',
              // backgroundColor: "#fff",
            }}>
            <div
              style={{ marginTop: isMobile ? '' : '2vw' }}
              className={styles.flexRow}>
              <div>
                <Image
                  alt='advisory1'
                  width={1840}
                  draggable={false}
                  height={2202}
                  className={styles.codeImg}
                  src={'/microc4.png'}
                />
              </div>
              <div style={{ marginTop: '2vw' }}>
                <div
                  className={styles.numberStyles}
                  style={{
                    color: colors.primary,
                  }}>
                  01
                </div>
                <div
                  className={`${styles.heading1}  ${styles.headingmin}`}
                  style={{
                    color: 'white',
                  }}>
                  {' '}
                  <span style={{ color: colors.primary }}>
                    {' '}
                    Careful Planning
                  </span>{' '}
                  <br />
                  <span style={{ fontWeight: 'lighter' }}>
                    and Automated
                  </span>{' '}
                  Conversion
                </div>
                <div>
                  {' '}
                  <Image
                    alt='optimize'
                    width={3240}
                    draggable={false}
                    height={1148}
                    src={'/refc1.png'}
                    className={styles.flowImg}
                    style={{
                      marginTop: '1vw',
                      marginBottom: '2vw',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/*  CONTAINER 2  --------------- */}
          <div
            style={{
              width: '80vw',
              alignSelf: 'center',
            }}>
            <div
              className={styles.flexRow}
              style={{ marginTop: isMobile ? '' : '2vw' }}
              // style={{ marginTop: isMobile ? "" : "0" }}
            >
              <div style={{ marginTop: '2vw' }}>
                <div
                  className={styles.numberStyles}
                  style={{
                    color: colors.secondary,
                  }}>
                  02
                </div>
                <div
                  className={`${styles.heading1}  ${styles.headingmin}`}
                  style={{
                    color: 'white',
                  }}>
                  <span style={{ fontWeight: 'lighter' }}>Redesign </span>and
                  {!isMobile && <br />}{' '}
                  <span style={{ color: colors.secondary }}>Optimization</span>{' '}
                </div>
                <div>
                  {' '}
                  <Image
                    alt='advisory1'
                    width={3240}
                    draggable={false}
                    height={1148}
                    className={styles.flowImg}
                    src={'/refc2.png'}
                  />
                </div>
              </div>
              <div>
                <Image
                  alt='advisory1'
                  width={1840}
                  height={2202}
                  draggable={false}
                  className={styles.codeImg}
                  src={'/cref2.png'}
                />
              </div>
            </div>
          </div>

          {/*CONTAINER  3 -------------- */}
          <div
            style={{
              width: '80vw',
              alignSelf: 'center',
            }}>
            <div className={styles.flexRow}>
              <div>
                <Image
                  alt='advisory1'
                  width={1840}
                  draggable={false}
                  height={2202}
                  className={styles.codeImg}
                  src={'/cref3.png'}
                />
              </div>
              <div style={{ marginTop: '2vw' }}>
                <div
                  className={styles.numberStyles}
                  style={{
                    color: colors.primary,
                  }}>
                  03
                </div>
                <div
                  className={`${styles.heading1}  ${styles.headingmin}`}
                  style={{
                    color: 'white',
                  }}>
                  {' '}
                  <span style={{ fontWeight: 'lighter' }}>
                    Enhanced
                    <br /> Functionality
                  </span>{' '}
                  <span style={{ color: colors.primary }}>
                    {' '}
                    and Configuration
                  </span>{' '}
                </div>
                <div>
                  {' '}
                  <Image
                    alt='optimize'
                    width={3240}
                    draggable={false}
                    height={1148}
                    src={'/refc3.png'}
                    className={styles.flowImg}
                    style={{
                      marginTop: '1vw',
                      marginBottom: '2vw',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {isMobile ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'black',
              gap: '4vw',
              marginTop:"-2px",
              textAlign: 'center'
            }}>
            <div
              style={{ marginTop: '10vw', width: '80%', alignSelf: 'center' }}
              className={styles.heading1}>
              <span style={{ fontWeight: 'lighter' }}> Trust AceMQ for </span>{' '}
              <span style={{ color: '#8FD5CC' }}>
                {' '}
                Microservices Design, Development,
              </span>{' '}
              <span style={{ fontWeight: 'lighter' }}> and </span>{' '}
              <span style={{ color: '#8FD5CC' }}>Refactoring</span>
            </div>
            <div
              style={{ width: '80%', alignSelf: 'center' }}
              className={styles.text2}>
              Ready to build scalable, efficient, and maintainable
              microservices? Trust Ace8 for comprehensive microservices design,
              development, and refactoring services. Accelerate your development
              with our Golang starter kits and expert guidance through the
              complexities of microservices architecture. <br /><br />If you&apos;re
              considering migrating to AWS Lambda, our expert team will
              streamline the process for maximum efficiency, from careful
              planning and automated conversion to comprehensive redesign and
              optimization. Take your microservices to the next level with Ace8.
            </div>
            <motion.button
              style={{
                marginBottom: '10vw',
                width: '57%',
                alignSelf: 'center',
                height: '8vw',
              }}
              key={'id45'}
              onClick={() => scrollToContactForm()}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.91 }}
              className={styles.btnSignup}>
              Get Started with AceIT
            </motion.button>
          </div>
        ) : (
          <motion.div
            style={{ marginTop: '8vw', alignSelf: 'center' }}
            className={styles.cardContainer}
            key={'id45'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.99 }}>
            <Image
              style={{ width: '100%', height: 'auto' }}
              alt='optimize'
              width={3240}
              onClick={() => scrollToContactForm()}
              draggable={false}
              height={1148}
              src={'/microCard.png'}
            />
          </motion.div>
        )}

        <ContactForm
          id='contactForm'
          containerStyles={{ position: 'relative', top: isMobile?"0px":'-8vw', marginBottom: isMobile?"0px":"", paddingBottom:isMobile?"20px":""}}
        />
      </motion.div>
    </div>
  );
};

export default MicroServices;
