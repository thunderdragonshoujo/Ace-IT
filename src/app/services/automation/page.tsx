"use client";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import styles from "./automation.module.css";
import { colors } from "../../../utils/Theme";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ContactForm } from "@/components/contactForm/ContactForm";

const AutomationPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Animation Controls //
  const control = useAnimation();
  const control1 = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();
  const control4 = useAnimation();

  // Animation InViews //

  const [ref, InView] = useInView();
  const [ref1, InView1] = useInView();
  const [ref2, InView2] = useInView();
  const [ref3, InView3] = useInView();
  const [ref4, InView4] = useInView();

  if (InView) {
    control.start({ opacity: 1, x: 0 });
  }
  if (InView1) {
    control1.start({ opacity: 1, y: 0, x: 0 });
  }
  if (InView2) {
    control2.start({ opacity: 1, x: 0 });
  }
  if (InView3) {
    control3.start({ opacity: 1, x: 0, y: 0 });
  }
  if (InView4) {
    control4.start({ opacity: 1, x: 0 });
  }
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
  useEffect(() => {
    const handleSize = () => {
      if (typeof window !== "undefined" && window.innerWidth < 870) {
        setIsMobile(true);
        console.log("True", isMobile);
      } else {
        setIsMobile(false);
        console.log("False", isMobile);
      }
    };

    if (typeof window !== "undefined") {
      handleSize();
      window.addEventListener("resize", handleSize);

      return () => {
        window.removeEventListener("resize", handleSize);
      };
    }
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '99vw',
        backgroundColor: '#0d111c',
      }}>
      <motion.div
        animate={control}
        ref={ref}
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        {' '}
        <div
          style={{
            width: '100%',
            height: '50vw',
            backgroundColor: '#090c16',
            borderBottomLeftRadius: '60vw',
            borderBottomRightRadius: '60vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {isMobile ? (
            <Image
              alt='abt'
              height={896}
              width={1920}
              style={{
                width: '75vw',
                height: 'auto',

                marginTop: '35vw',
              }}
              src={'/autoHeaderMob.png'}
            />
          ) : (
            <Image
              alt='abt'
              height={933}
              width={2804}
              style={{
                width: '65vw',
                height: 'auto',
                alignSelf: 'center',
                // borderRadius: "3vw",
              }}
              src={'/automatedd.png'}
            />
          )}
        </div>
        {isMobile ? (
          <Image
            alt='abt'
            height={896}
            width={1920}
            style={{
              width: '85vw',
              height: 'auto',
              marginTop: '30vw',

              alignSelf: 'center',
            }}
            src={'/autoMobCode.png'}
          />
        ) : (
          <Image
            alt='abt'
            height={896}
            width={1920}
            style={{
              width: '60vw',
              height: 'auto',
              alignSelf: 'center',
              marginTop: '-10vw',
            }}
            src={'/automationCode.png'}
          />
        )}
      </motion.div>
      {/* Container1 */}
      <div className={styles.contentContainerColumn}>
        <motion.div
          animate={control1}
          initial={{ opacity: 0, x: -50, y: -50 }}
          transition={{ duration: 1 }}
          ref={ref1}
          style={{}}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <div className={`${styles.heading1} ${styles.manualsContainer}`}>
              Are You <span style={{ fontWeight: 'lighter' }}> Tired of</span>{' '}
              <span style={{ color: colors.secondary }}> Manual Testing?</span>
            </div>
            <div
              style={{ textAlign: 'center', fontSize: isMobile ? '' : '.8vw' }}
              className={`${styles.text2} ${styles.contentWidth}`}>
              Are you tired of manually testing your e-commerce application,
              wasting valuable time and resources on tedious and{' '}
              {!isMobile && <br />}repetitive tasks? Our automated testing
              service offers a unique approach that sets us apart from the
              competition.
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
            <div
              className={styles.contentContainerRow}
              style={{
                alignItems: isMobile ? 'normal' : 'center',
                width: '65vw',
                marginTop: '2vw',
              }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className={styles.heading1}>
                  {' '}
                  <span
                    style={{ fontWeight: 'lighter', color: colors.secondary }}>
                    Our
                  </span>{' '}
                  Offerings
                </div>
                <div
                  style={{ lineHeight: '4vw' }}
                  className={styles.text1}>
                  Our offerings include:
                </div>
              </div>
              <div>
                <Image
                  alt='abt'
                  height={896}
                  width={1920}
                  className={styles.imageFlow}
                  style={{
                    height: 'auto',
                    alignSelf: 'center',
                  }}
                  src={'/contaut1.png'}
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref2}
          initial={{ x: -50, opacity: 0 }}
          animate={control2}
          transition={{ duration: 1 }}>
          <div
            style={{
              width: '80vw',
              position: 'relative',
              left: '-5vw',
            }}
            className={styles.contentContainerRow}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className={`${styles.heading1} ${styles.widthH}`}>
                <span style={{ fontWeight: 'lighter' }}>Thorough</span>{' '}
                <span style={{ color: '#8FD5CC' }}></span>{' '}
                <span style={{ color: '#8FD5CC' }}>Testing</span>{' '}
                <span style={{ fontWeight: 'lighter' }}>with</span> Three
                Critical
                <span style={{ color: '#8FD5CC' }}> Components</span>
              </div>
              <div
                style={{
                  marginTop: isMobile ? '' : '1vw',
                  fontSize: isMobile ? '' : '.93vw',
                }}
                className={styles.text2}>
                Our approach includes three critical components that ensure
                {!isMobile && <br />} your e-commerce application is thoroughly
                tested:
              </div>
              <div>
                <Image
                  alt='abt'
                  height={896}
                  width={1920}
                  className={styles.lineWidth}
                  style={{
                    height: 'auto',
                    alignSelf: 'center',
                  }}
                  src={'/autoLine1.png'}
                />
              </div>
              <div
                style={{ fontSize: isMobile ? '' : '.95vw' }}
                className={styles.text2}>
                Through crowd-sourced development of test cases, we bring{' '}
                {!isMobile && <br />}
                together a community of testers to create comprehensive and
                diverse test cases for your application. Our AI-enhanced test
                {!isMobile && <br />}code then ensures that these test cases are
                efficient and effective, saving you time and resources.
              </div>
            </div>
            <div>
              <Image
                alt='abt'
                height={896}
                width={1920}
                style={{
                  width: '160vw',
                  height: 'auto',
                  marginTop: '3vw',
                  alignSelf: 'center',
                  position: 'relative',
                  right: '-12vw',
                }}
                src={'/codeauto.png'}
              />
            </div>
          </div>
          <div
            style={{
              gap: '3vw',
              alignItems: 'center',
              width: '80vw',
              alignSelf: 'center',
              marginTop: isMobile ? '' : '5vw',
            }}
            className={styles.contentContainerRow}>
            <div>
              <Image
                alt='abt'
                height={896}
                width={1920}
                style={{
                  width: '167vw',
                  height: 'auto',
                  alignSelf: 'center',
                }}
                src={'/cicd.png'}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className={styles.heading1}>
                <span style={{ fontWeight: 'lighter' }}>Seamless</span>{' '}
                <span style={{ color: colors.secondary }}>Integration</span>
                <br /> and Support
              </div>
              <div
                style={{
                  marginTop: '1vw',
                  fontSize: isMobile ? '' : '.95vw',
                  width: isMobile ? '' : '34vw',
                }}
                className={styles.text2}>
                Finally, we seamlessly integrate the execution of these
                automated
                {!isMobile && <br />}tests into your existing CI/CD pipeline,
                ensuring that your application {!isMobile && <br />}is
                thoroughly tested with every update. And if you don&apos;t have
                a CI/CD pipeline, we can help you get started on the path to
                more efficient and reliable software delivery.
              </div>
            </div>
          </div>
        </motion.div>
        {/* CARD CONTAINER  */}

        <motion.div
          ref={ref3}
          animate={control3}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1 }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => scrollToContactForm()}
            style={{ width: '80vw', alignSelf: 'center' }}>
            {isMobile ? (
              <Image
                alt='abt'
                height={896}
                width={1920}
                style={{
                  width: '100%',
                  height: 'auto',
                  marginTop: '3vw',
                  alignSelf: 'center',
                }}
                src={'/mobileCardAutomation.png'}
              />
            ) : (
              <Image
                alt='abt'
                height={896}
                width={1920}
                style={{
                  width: '100%',
                  height: 'auto',
                  marginTop: '3vw',
                  alignSelf: 'center',
                }}
                src={'/automationCard.png'}
              />
            )}
          </motion.div>

          {/* CONTACT CONTAINER */}
          <ContactForm
            id='contactForm'
            containerStyles={{ marginTop: '8vw', marginBottom: '6vw' }}
          />
        </motion.div>
      </div>
    </div>
  );
};
export default AutomationPage;
