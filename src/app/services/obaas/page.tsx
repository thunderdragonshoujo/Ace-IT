/** @format */

'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './obaas.module.css';
import { colors } from '../../../utils/Theme';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ContactForm } from '@/components/contactForm/ContactForm';
import Link from 'next/link';

const ObaasCards = [
  {
    id: 1,
    image: 1,
    heading: 'Rapid ROI',
    content:
      ': OBaaS not only accelerates onboarding but also pays for itself with the time saved waiting for provisioning.',
  },
  {
    id: 2,
    image: 4,
    heading: 'Integrated with Enterprise Systems',
    content:
      ': Seamlessly connect with your other enterprise systems, creating a cohesive development environment.',
  },
  {
    id: 3,
    image: 2,
    heading: 'Swift Onboarding into Any Cloud',
    content:
      ': Our solution provides a fast and painless onboarding experience into any cloud environment, ensuring developers can dive into meaningful work promptly.',
  },
  {
    id: 4,
    image: 5,
    heading: 'Fully Managed and Running on Your Infrastructure',
    content:
      ': Enjoy the advantages of a fully managed service while running on your infrastructure, providing flexibility and control',
  },
  {
    id: 5,
    image: 3,
    heading: 'Comprehensive Developer Toolkit',
    content:
      ': Equip your developers with the full suite of tools needed for their tasks, enhancing their efficiency from day one.',
  },
];
const Obaas = () => {
  const [isMobile, setIsMobile] = useState(false);
  //  ANIMATION CONTROLS
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();
  const controls7 = useAnimation();

  // REFS
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const [ref5, inView5] = useInView();
  const [ref6, inView6] = useInView();
  const [ref7, inView7] = useInView();
  const [ref8, inView8] = useInView();
  const [ref9, inView9] = useInView();

  // Animation trigger
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
  if (inView7) {
    controls7.start({ x: 0, opacity: 1 });
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
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '99vw',
        backgroundColor: 'white',
      }}>
      <motion.div
        ref={ref}
        initial={{ x: -50, opacity: 0 }}
        animate={controls}
        transition={{ duration: 1 }}
        className={`${styles.header} ${styles.alignCenter}`}>
        <div className={styles.headerContentContainer}>
          <span className={styles.head1}>
            Unlock <span className={styles.normal}> Developer </span>
            <span style={{ color: colors.primary }}> Productivity</span>
            <span className={styles.normal}> with </span>
            <span style={{ color: '#fff' }}>Onboarding as a Service</span>{' '}
            <br />
            (OBaaS)
          </span>
        </div>

        <span className={styles.line1}>
          Fast-Track Onboarding for Immediate Impact
        </span>
      </motion.div>

      {/* Container1 */}
      <motion.div
        ref={ref2}
        initial={{ y: -50, opacity: 0 }}
        animate={controls2}
        transition={{ duration: 1 }}
        className={styles.contentContainerColumn}>
        <Image
          alt='abt'
          height={896}
          width={1920}
          className={`${styles.coverCodeimge}  `}
          src={'/obaascode.png'}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
          <div
            style={{ marginBottom: '5vw' }}
            className={styles.contentContainerRow}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className={`${styles.text1} ${styles.obaasPara}`}>
                At Ace8, we acknowledge a critical industry challenge—delayed
                developer productivity due to lengthy onboarding processes,
                leading to significant financial losses. Developers often remain
                idle, costing businesses millions annually.
              </div>
            </div>
            <div>
              <Image
                alt='abt'
                height={896}
                width={1920}
                className={styles.flowImage}
                src={'/flowobaas.png'}
              />
            </div>
          </div>
        </div>
      </motion.div>
      {/* CONTENT  */}

      <motion.div
        ref={ref3}
        initial={{ x: -50, opacity: 0 }}
        animate={controls3}
        transition={{ duration: 1 }}
        style={{
          background: 'black',
          width: '99vw',
          display: 'flex',
          flexDirection: 'column',
        }}>
        {' '}
        <div className={styles.contentContainerColumn}>
          <div className={styles.contentContainerRow}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className={`${styles.headSolution}  ${styles.heading1}`}>
                Our Solution:
              </div>
              <div
                style={{ color: 'white', marginBottom: '2vw' }}
                className={`${styles.heading2}  ${styles.headingWidth}`}>
                <span style={{ color: colors.secondary }}>Dev Containers</span>{' '}
                <span style={{ fontWeight: '200' }}>for Swift, Customized</span>{' '}
                Onboarding
              </div>
              <div
                style={{ fontSize: isMobile ? '' : '.9vw' }}
                className={styles.text1}>
                Enter a solution-oriented approach! We advocate for &quot;dev
                containers&quot;{!isMobile && <br />} to seamlessly connect
                developers to cloud environments within hours,
                {!isMobile && <br />} not weeks. This revolutionary method
                customizes dev-containers to fit{!isMobile && <br />} the
                specific roles of your developers, ensuring rapid onboarding and
                {!isMobile && <br />}
                substantial cost savings.
              </div>
              {/* Cards small */}

              <div
                style={{ marginTop: '4vw' }}
                className={styles.flexRow}>
                <div className={styles.infoCards}>
                  <div className={styles.heading3}>
                    <span style={{ fontWeight: '200' }}>Customized</span>{' '}
                    Dev-Containers:
                  </div>
                  <div
                    className={styles.text2}
                    style={{ marginTop: '1.5vw' }}>
                    Tailored to fit the unique roles of your developers, our
                    solution ensures they get to meaningful work swiftly, saving
                    both time and resources.
                  </div>
                </div>
                <div className={styles.infoCards}>
                  <div className={styles.heading3}>
                    Fast and <span style={{ fontWeight: '200' }}>Painless</span>{' '}
                    Onboarding
                  </div>
                  <div
                    className={styles.text2}
                    style={{ marginTop: '1.5vw' }}>
                    A streamlined process that equips developers with all
                    necessary tools, eliminating idle time and expediting their
                    journey to productivity.
                  </div>
                </div>
              </div>
            </div>

            <Image
              alt='abt'
              height={896}
              width={1920}
              className={`${styles.codeImg} ${styles.mTop}   ${styles.mbottom}`}
              src={'/code2Obaas.png'}
            />
          </div>
          <div
            style={{ marginTop: '2vw' }}
            className={styles.flexRow}>
            <div className={styles.infoCards}>
              <div className={styles.heading3}>
                {' '}
                <span style={{ fontWeight: '200' }}>SecOps</span>
                -Vetted Tooling:
              </div>
              <div
                className={styles.text2}
                style={{ marginTop: '1.5vw' }}>
                Trust in a mix of tools vetted by your Security Operations
                (SecOps) team, ensuring a secure and compliant onboarding
                experience.
              </div>
            </div>{' '}
            <div
              style={{ width: '19vw' }}
              className={styles.infoCards}>
              <div className={styles.heading3}>
                Integration with
                <span style={{ fontWeight: '200' }}> Enterprise </span> Systems
              </div>
              <div
                className={styles.text2}
                style={{ marginTop: '1.5vw' }}>
                Seamlessly integrate with your existing enterprise systems,
                including AWS Cloud, Jira, Bitbucket, GitHub, and more.
              </div>
            </div>{' '}
            <div className={styles.infoCards}>
              <div className={styles.heading3}>
                Fully <span style={{ fontWeight: '200' }}> Managed </span>{' '}
                Service
              </div>
              <div
                className={styles.text2}
                style={{ marginTop: '1.5vw' }}>
                Enjoy the benefits of a fully managed service running on your
                infrastructure, minimizing the burden on your team.
              </div>
            </div>
          </div>
          <div
            style={{}}
            className={`${styles.headOnboarding} ${styles.heading1}`}>
            Why <span style={{ fontWeight: '200' }}>Choose </span>
            <span style={{ color: colors.primary }}> OBaaS</span> for{' '}
            <span style={{ fontWeight: '200' }}>Developer </span>
            Onboarding?
            <br />
          </div>
          <Image
            alt='abt'
            height={896}
            width={1920}
            style={{
              width: '80vw',
              height: 'auto',
              alignSelf: 'center',
              marginTop: '3vw',
            }}
            className={`${styles.mTop} `}
            src={'/heroku.png'}
          />
          <div className={styles.cardsContainer}>
            {ObaasCards.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={styles.obaasCard}>
                  <div className={styles.alignCenter}>
                    {' '}
                    <div
                      style={{
                        color: 'rgba(121, 114, 189, 1)',
                      }}
                      className={styles.numberStyles}>
                      {item.image}
                    </div>
                  </div>
                  <div
                    // style={
                    //   item.id === 1
                    //     ? { marginLeft: "2vw" }
                    //     : { marginLeft: "2vw" }
                    // }
                    className={styles.text2}>
                    <span style={{ fontWeight: 'bold' }}>{item.heading}</span>
                    {item.content}
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.btnContainer}>
            <Link href={'/contact'}>
              <motion.button
                key={'id45'}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.91 }}
                className={styles.btnSignup}>
                {/* <Link href={"/"}>Contact Us</Link> */}
                Propel Your Developers to Productivity with OBaaS
              </motion.button>
            </Link>
          </div>
          <div className={styles.infoText}>
            <span style={{ color: colors.secondary }}>
              Accelerate onboarding,
            </span>{' '}
            <span style={{ fontWeight: '200' }}>reduce </span>
            idle time, and{' '}
            <span style={{ fontWeight: '200' }}>witness immediate </span>
            productivity gains.{' '}
            <span style={{ fontWeight: '200' }}>Choose </span>
            <span style={{ color: colors.secondary }}>OBaaS</span> for a
            customized, fully managed,
            <span style={{ fontWeight: '200' }}> and </span>
            swift onboarding experience.
          </div>
        </div>
      </motion.div>
      {/* CARD CONTAINER  */}

      <motion.div
        ref={ref4}
        initial={{ x: -50, opacity: 0 }}
        animate={controls4}
        transition={{ duration: 1 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        {isMobile ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'black',
              gap: '4vw',
              textAlign: 'center',
              marginTop: '10vw',
            }}>
            <div
              style={{ marginTop: '10vw', width: '80%', alignSelf: 'center' }}
              className={styles.heading1}>
              <span style={{ color: '#8FD5CC' }}> Ready to revolutionize</span>{' '}
              your <span style={{ fontWeight: 'lighter' }}> developer </span>{' '}
              onboarding and unlock unparalleled
              <span style={{ fontWeight: 'lighter' }}>
                {' '}
                productivity?{' '}
              </span>{' '}
            </div>
            <div
              style={{ width: '80%', alignSelf: 'center' }}
              className={styles.text2}>
              Choose Ace8&apos;s OBaaS for swift, customized onboarding that
              delivers immediate impact. Accelerate your developers&apos;journey
              to meaningful work, eliminate idle time, and enjoy the benefits of
              a fully managed service running on your infrastructure. Don&apos;t
              let delayed onboarding hinder your productivity and cost your
              business millions. Contact us today to explore how &rdquoDev
              Containers&rdquo can fast-track your onboarding process and
              maximize your ROI.
            </div>
            <motion.button
              style={{
                marginBottom: '10vw',
                width: '65%',
                alignSelf: 'center',
                height: '8vw',
              }}
              key={'id45'}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.91 }}
              className={styles.btnSignup}>
              Transform Developer Onboarding with OBaaS
            </motion.button>
          </div>
        ) : (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => scrollToContactForm()}
            style={{ width: '80vw', alignSelf: 'center' }}>
            <Image
              alt='abt'
              height={896}
              width={1920}
              style={{
                width: '100%',
                height: 'auto',
                alignSelf: 'center',
                marginTop: '4vw',
              }}
              src={'/obaasCard.png'}
            />
          </motion.div>
        )}

        {/* CONTACT CONTAINER */}

        <ContactForm
          id='contactForm'
          containerStyles={{ marginTop: '8vw', marginBottom: '6vw' }}
        />
      </motion.div>
    </div>
  );
};
export default Obaas;
