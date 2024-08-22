"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { duration } from "@mui/material";
import styles from "./message-brokers.module.css";
import { ContactForm } from "@/components/contactForm/ContactForm";
import Link from "next/link";

const Messagebroker = () => {
  const [Box1, setBox1] = useState(false);
  const [Box2, setBox2] = useState(false);
  const [Box3, setBox3] = useState(false);
  const [Box4, setBox4] = useState(false);
  const [Box5, setBox5] = useState(false);
  const [Box6, setBox6] = useState(false);
  const [Box7, setBox7] = useState(false);
  const [Box8, setBox8] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  //  ANIMATION CONTROLS
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  // REFS
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();

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
        backgroundColor: '#fff',
        width: '99vw',
      }}>
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 1 }}>
        <Image
          alt='headerr'
          width={3840}
          height={2148}
          style={{ width: '100vw', height: 'auto' }}
          src={'/headerr.png'}
        />
      </motion.div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '80vw',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <div
          style={{
            color: '#000',
            textAlign: 'center',
            // lineHeight: "1.7",
          }}
          className={styles.text2}>
          At AceMQ, we have developed a comprehensive practice around message
          brokers. Our engineers possess extensive experience working
          {!isMobile && <br />}closely with message broker products, including
          RabbitMQ. Their in-depth knowledge and architectural understanding of
          RabbitMQ allow us to seamlessly
          {!isMobile && <br />}integrate it into your unique technology stack.
          As an{' '}
          <span style={{ fontWeight: 'bold' }}>
            internationally accredited partner of RabbitMQ
          </span>
          , we are the go-to choice for all your message
          {!isMobile && <br />} broker service needs.
        </div>
        <div>
          <Link href={'https://ace-mq-innovatives.vercel.app/'}>
            <motion.button
              key={'id45'}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.99 }}
              className={`${styles.text2} ${styles.learnBtn}`}>
              Learn More
            </motion.button>{' '}
          </Link>
          {/* </Link> */}
        </div>
      </div>

      <div
        style={{
          width: '70vw',
          alignSelf: 'center',
        }}>
        <motion.div
          ref={ref2}
          animate={controls2}
          initial={{ opacity: 0, x: -50, y: -50 }}
          transition={{ duration: 1 }}>
          <div
            style={{
              color: '#000',
              fontWeight: 'bold',
            }}
            className={`${styles.headinglg} ${styles.headingMargin}`}>
            Technologies
          </div>

          <div className={styles.techContainer}>
            <div
              style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
              }}>
              <motion.div
                transition={{ duration: 0.5 }}
                initial={{ y: 0 }}
                animate={Box1 ? { y: 7 } : { y: 0 }}>
                <Image
                  alt='rabbitmqr'
                  width={158}
                  height={152}
                  className={styles.rabbitImg}
                  src={'/rabbitmqr.png'}
                  onMouseEnter={() => setBox1(true)}
                  onMouseLeave={() => setBox1(false)}
                />
              </motion.div>
              <motion.div
                style={{
                  color: '#000',
                  fontWeight: 'bold',
                  marginTop: '1.5vw',
                  opacity: Box1 ? 1 : 0,
                  transition: 'opacity 0.5s ease',
                }}
                className={styles.techHeading}>
                RabbitMQ
              </motion.div>
            </div>

            <div
              style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                marginTop: '6.5vw',
              }}>
              <motion.div
                transition={{ duration: 0.5 }}
                animate={Box2 ? { y: 7 } : { y: 0 }}
                onMouseEnter={() => {
                  setBox2(true);
                }}
                onMouseLeave={() => {
                  setBox2(false);
                }}>
                <Image
                  alt='awssqs'
                  width={158}
                  height={152}
                  src={'/awssqs.png'}
                  className={styles.techImage}
                />
              </motion.div>
              <motion.div
                className={styles.techHeading}
                style={{
                  color: '#000',
                  fontWeight: 'bold',
                  marginTop: '1.5vw',
                  transition: 'opacity 0.5s ease',
                  opacity: Box2 ? 1 : 0,
                }}>
                AWS SQS
              </motion.div>
            </div>

            <div
              style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
              }}>
              <motion.div
                transition={{ duration: 0.5 }}
                animate={Box3 ? { y: 7 } : { y: 0 }}
                onMouseEnter={() => {
                  setBox3(true);
                }}
                onMouseLeave={() => {
                  setBox3(false);
                }}>
                <Image
                  alt='pubsub'
                  width={158}
                  height={152}
                  src={'/pubsub.png'}
                  className={styles.techImage}
                />
              </motion.div>
              <motion.div
                className={styles.techHeading}
                style={{
                  color: '#000',
                  fontWeight: 'bold',
                  marginTop: '1.5vw',
                  opacity: Box3 ? 1 : 0,
                  transition: 'opacity 0.5s ease',
                }}>
                Google <br />
                PubSub
              </motion.div>
            </div>

            <div
              style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                marginTop: '6.5vw',
              }}>
              <motion.div
                animate={Box4 ? { y: 7 } : { y: 0 }}
                transition={{ duration: 0.5 }}
                onMouseEnter={() => {
                  setBox4(true);
                }}
                onMouseLeave={() => {
                  setBox4(false);
                }}>
                <Image
                  alt='pulsar'
                  width={158}
                  height={152}
                  src={'/pulsar.png'}
                  className={styles.techImage}
                />
              </motion.div>
              <motion.div
                className={styles.techHeading}
                style={{
                  color: '#000',
                  fontWeight: 'bold',
                  marginTop: '1.5vw',
                  opacity: Box4 ? 1 : 0,
                  transition: 'opacity 0.5s ease',
                }}>
                Apache <br />
                Pulsar
              </motion.div>
            </div>

            <div
              style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                marginTop: '6.5vw',
              }}>
              <motion.div
                animate={Box5 ? { y: 7 } : { y: 0 }}
                transition={{ duration: 0.5 }}
                onMouseEnter={() => {
                  setBox5(true);
                }}
                onMouseLeave={() => {
                  setBox5(false);
                }}>
                <Image
                  alt='Kafka'
                  width={158}
                  height={152}
                  src={'/kafka.png'}
                  className={styles.techImage}
                />
              </motion.div>
              <motion.div
                className={styles.techHeading}
                style={{
                  color: '#000',
                  fontWeight: 'bold',
                  marginTop: '1.5vw',
                  opacity: Box5 ? 1 : 0,

                  transition: 'opacity 0.5s ease',
                }}>
                Kafka
              </motion.div>
            </div>

            <div
              style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                marginTop: '12.5vw',
              }}>
              <motion.div
                animate={Box6 ? { y: 7 } : { y: 0 }}
                transition={{ duration: 0.5 }}
                onMouseEnter={() => {
                  setBox6(true);
                }}
                onMouseLeave={() => {
                  setBox6(false);
                }}>
                <Image
                  alt='ibm'
                  width={158}
                  height={152}
                  src={'/ibm.png'}
                  className={styles.techImage}
                />
              </motion.div>
              <motion.div
                className={styles.techHeading}
                style={{
                  color: '#000',
                  fontWeight: 'bold',
                  marginTop: '1.5vw',
                  opacity: Box6 ? 1 : 0,
                  transition: 'opacity 0.5s ease',
                }}>
                IBM <br />
                ActiveMQ
              </motion.div>
            </div>

            <div
              style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                marginTop: '6.5vw',
              }}>
              <motion.div
                animate={Box7 ? { y: 7 } : { y: 0 }}
                transition={{ duration: 0.5 }}
                onMouseEnter={() => {
                  setBox7(true);
                }}
                onMouseLeave={() => {
                  setBox7(false);
                }}>
                <Image
                  alt='awss'
                  width={158}
                  height={152}
                  src={'/awss.png'}
                  className={styles.techImage}
                />
              </motion.div>
              <motion.div
                className={styles.techHeading}
                style={{
                  color: '#000',
                  fontWeight: 'bold',
                  marginTop: '1.5vw',
                  opacity: Box7 ? 1 : 0,
                  transition: 'opacity 0.5s ease',
                }}>
                AWS
              </motion.div>
            </div>

            <div
              style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                marginTop: '12.5vw',
              }}>
              <motion.div
                animate={Box8 ? { y: 7 } : { y: 0 }}
                transition={{ duration: 0.5 }}
                onMouseEnter={() => {
                  setBox8(true);
                }}
                onMouseLeave={() => {
                  setBox8(false);
                }}>
                <Image
                  alt='others'
                  width={158}
                  height={152}
                  src={'/others.png'}
                  className={styles.techImage}
                />
              </motion.div>
              <motion.div
                className={styles.techHeading}
                style={{
                  color: '#000',
                  fontWeight: 'bold',
                  marginTop: '1.5vw',
                  opacity: Box8 ? 1 : 0,
                  transition: 'opacity 0.5s ease',
                }}>
                Others
              </motion.div>
            </div>
          </div>
          <div
            style={{
              justifyContent: 'space-between',
              marginTop: '2vw',
            }}
            className={styles.flexRow}>
            <div style={{ marginTop: '2vw' }}>
              <div
                className={styles.headinglg}
                style={{ fontWeight: '600', color: '#5747A5' }}>
                <span style={{ color: '#000', fontWeight: 'normal' }}>Our</span>{' '}
                Services
              </div>
              <div
                style={{ color: '#000' }}
                className={styles.text2}>
                We offer a range of services to address all your messaging and
                {!isMobile && <br />}
                queuing requirements. Our team of seasoned professionals
                {!isMobile && <br />} excels in delivering top-notch solutions
                to enhance the reliability,
                {!isMobile && <br />}
                scalability, and performance of your MQ systems
              </div>
            </div>

            <Image
              alt='advisory1'
              width={1840}
              height={2202}
              className={`${styles.serviceCardTop}  ${styles.assessmentsWidth}`}
              src={'/advisory1.png'}
              style={{
                borderBottomRightRadius: '1vw',
                borderTopRightRadius: '1vw',
              }}
            />
          </div>

          <div
            style={{
              justifyContent: 'space-between',
              marginTop: '2vw',
            }}
            className={styles.flexRow}>
            <Image
              alt='cons'
              width={946}
              height={968}
              className={styles.serviceCard}
              src={'/cons.png'}
              style={{
                borderBottomRightRadius: '1vw',
                borderTopRightRadius: '1vw',
              }}
            />

            <Image
              alt='supp'
              width={946}
              height={968}
              className={styles.serviceCard}
              src={'/supp.png'}
              style={{
                borderBottomRightRadius: '1vw',
                borderTopRightRadius: '1vw',
              }}
            />

            <Image
              alt='train'
              width={946}
              height={968}
              className={styles.serviceCard}
              src={'/train.png'}
              style={{
                borderBottomRightRadius: '1vw',
                borderTopRightRadius: '1vw',
              }}
            />
          </div>
          {/* <div
            className={`${styles.text2} ${styles.consultants}`}
            style={{
              color: "#000",
              textAlign: "center",
              marginTop: "2vw",
            }}
          >
            Our consultants have encountered and successfully resolved a wide
            range of challenges related to message brokers. With years of
            experience in
            {!isMobile && <br />} supporting message broker products and
            environments, our engineers are well-prepared to tackle any issue
            you may face.
          </div> */}
          {isMobile ? (
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '5vw' }}>
              <Image
                alt='orbit'
                width={3084}
                height={1570}
                style={{ width: '80vw', height: 'auto' }}
                src={'/msgGlobe.png'}
              />{' '}
              <div
                className={styles.text1}
                style={{ fontWeight: 'bold', color: 'black' }}>
                RabbitMQ Premier Global Services Partner. Recognized by RabbitMQ
                as a Go-To services partner, AceMQ maintains a global footprint,
                but with our headquarters in North America, we are widely
                recognized as the{' '}
                <Link href={'https://www.rabbitmq.com/commercial-offerings'}>
                  <span className={styles.premerTxt}>
                    Premier North American RabbitMQ Partner.
                  </span>
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <Link href={'https://www.rabbitmq.com/commercial-offerings'}>
                <Image
                  alt='orbit'
                  width={3084}
                  height={1570}
                  style={{ width: '80vw', height: 'auto' }}
                  src={'/orbit.png'}
                  className={styles.headingMargin}
                />
              </Link>
            </div>
          )}
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
              color: '#000',

              fontWeight: 'bold',

              textAlign: 'center',
            }}
            className={styles.headinglg}>
            <span>
              {' '}
              Our <span style={{ color: '#5747A5' }}>Differentiator</span>
              <br /> &{' '}
            </span>
            <span style={{ fontWeight: 'lighter' }}> Value</span>
          </div>

          <div>
            <Image
              alt='perfomance'
              width={3840}
              height={4024}
              className={styles.valueImg}
              src={'/perfomance.png'}
            />
          </div>
          {isMobile ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'black',
                gap: '4vw',
                textAlign: 'center',
                marginBottom: '10vw',
                marginTop: '10vw',
              }}>
              <div
                style={{ marginTop: '10vw', width: '80%', alignSelf: 'center' }}
                className={styles.heading1}>
                {' '}
                <span style={{ fontWeight: 'lighter' }}>
                  Ready to Optimize Your
                </span>{' '}
                <span style={{ color: '#8FD5CC' }}>Messaging and Queuing </span>
                Implementation with{' '}
                <span style={{ fontWeight: 'lighter' }}>
                  {' '}
                  Expert Support and{' '}
                </span>
                Power of
                <span style={{ color: '#8FD5CC' }}>Value-Driven Solutions</span>
              </div>
              <div
                style={{ width: '80%', alignSelf: 'center' }}
                className={styles.text2}>
                Partner with AceMQ, your trusted messaging and queuing services
                provider. Our team of experienced engineers specializes in
                message brokers, including RabbitMQ, and seamlessly integrates
                them into your unique technology stack. As an internationally
                accredited partner of RabbitMQ, we offer comprehensive
                troubleshooting, consulting, and support services tailored to
                your specific requirements.
              </div>
              <motion.button
                style={{
                  marginBottom: '10vw',
                  width: '57%',
                  alignSelf: 'center',
                  height: '8vw',
                }}
                key={'id45'}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.91 }}
                className={styles.btnSignup}>
                Get Started with AceMQ
              </motion.button>
            </div>
          ) : (
            <motion.div
              style={{ marginTop: '5vw', alignSelf: 'center' }}
              key={'id45'}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.99 }}>
              <Image
                alt='optimize'
                width={3240}
                height={1148}
                onClick={() => scrollToContactForm()}
                src={'/optimize.png'}
                style={{
                  width: '80vw',
                  height: 'auto',
                  marginTop: '1vw',
                  marginBottom: '8vw',
                }}
              />
            </motion.div>
          )}

          <ContactForm id='contactForm' />
        </motion.div>
      </div>
    </div>
  );
};

export default Messagebroker;
