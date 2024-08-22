/** @format */

'use client';
import React from 'react';

// const navbar = () => {
//   return <div>navbar</div>;
// };
// export default navbar;

import Link from 'next/link';
import styles from './navbar.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, useAnimation, easeOut } from 'framer-motion';
// import { colors } from "@mui/material";
import { colors } from '@/utils/Theme';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const [scroll, setScroll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [color, setColor] = useState(false);

  const onModalActive = () => {
    setShowDropDown(true);
  };

  const onModalHide = () => {
    setShowDropDown(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
    setShowDropDown(false);
  };

  useEffect(() => {
    const handleSize = () => {
      if (typeof window !== 'undefined' && window.innerWidth < 870) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
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
  console.log(showModal);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
        setColor(false);
        setShowModal(false);
        if (window.scrollY > 1700) {
          setScroll(false);
          setColor(true);
        }
      }
      if (window.scrollY == 0) {
        setScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scroll]);
  return (
    <div
      style={{
        backgroundColor: pathname === '/' ? (color ? 'black' : ' ') : 'black',
        height:
          !scroll &&
          (typeof window !== 'undefined' ? window?.scrollY !== 0 : false)
            ? '5rem'
            : '',
      }}
      className={`${styles.container} ${scroll ? styles.scrollActive : ' '}`}>
      {showDropDown ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          onMouseLeave={onModalHide}
          className={styles.servicesModal}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <div
            className={styles.flexRowmain}
            style={{
              width: '80%',
              height: '70%',
              gap: isMobile?"1rem":'3rem',
            }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: isMobile?"":'4.7rem',
                gap: '1rem',
              }}>
              {' '}
              <div
                style={{ fontWeight: 'bold', color: 'rgba(155, 134, 254, 1)' }}
                className={styles.modalHeading}>
                Featured Services
              </div>
              <div
                className={styles.flexRow}
                style={{ gap: '0.5rem' }}>
                <div>
                  <div className={styles.serviceHeading}>
                    {' '}
                    <Link
                      onClick={handleClose}
                      href='/services/devsecops'>
                      DevSecOps
                    </Link>
                  </div>
                  <div className={styles.detailsText}>
                    Bridging the Gap between Development, Security, and
                    Operations
                  </div>
                </div>
                <div>
                  <div className={styles.serviceHeading}>
                    {' '}
                    <Link
                      onClick={handleClose}
                      href='/services/incident-management'>
                      Incident Management
                    </Link>
                  </div>
                  <div className={styles.detailsText}>
                    Comprehensive Incident Management for Reliable Operations
                  </div>
                </div>
              </div>
              <div
                className={styles.flexRow}
                style={{ gap: '0.5rem' }}>
                <div>
                  <div className={styles.serviceHeading}>
                    {' '}
                    <Link
                      onClick={handleClose}
                      href='/services/message-brokers'>
                      Message Brokers
                    </Link>
                  </div>
                  <div className={styles.detailsText}>
                    AceMQ Your Trusted Messaging & Queuing Services Partner
                  </div>
                </div>
                <div style={{ marginLeft: isMobile ? '' : '45px' }}>
                  <div className={styles.serviceHeading}>
                    {' '}
                    <Link
                      onClick={handleClose}
                      href='/services/microservices'>
                      {' '}
                      Microservices
                    </Link>
                  </div>
                  <div className={styles.detailsText}>
                    Comprehensive Microservices Design and Development Services
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', width:"16rem" }}>
              <div
                className={styles.lineContainer}
                style={{
                  borderRight: '.1px solid white',
                  height: '23.5rem',
                  position: 'relative',
                  marginRight: '3rem',
                  marginTop: '40px',
                  marginBottom: '40px',
                }}></div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  justifyContent: 'center',
                }}>
                <div
                  style={{
                    fontWeight: 'bold',
                    color: 'rgba(155, 134, 254, 1)',
                  }}
                  className={styles.modalHeading}>
                  Other Services
                </div>
                <div
                  className={styles.widthMid}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}>
                  <div>
                    <div className={styles.serviceHeading}>
                      {' '}
                      <Link
                        onClick={handleClose}
                        href='/openace'>
                        OpenSource Support
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className={styles.serviceHeading}>
                      {' '}
                      <Link
                        onClick={handleClose}
                        href='/gemfire'>
                        GemFire
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className={styles.serviceHeading}>
                      {' '}
                      <Link
                        onClick={handleClose}
                        href='/services/obaas'>
                        Onboarding as a Service
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className={styles.serviceHeading}>
                      {' '}
                      <Link
                        onClick={handleClose}
                        href='/services/data-integration'>
                        Data Analytics Integration
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className={styles.serviceHeading}>
                      {' '}
                      <Link
                        onClick={handleClose}
                        href='/services/automation'>
                        Automated Testing
                      </Link>
                    </div>
                  </div>
                  <div
                    style={{}}
                    className={`${styles.btnContainer} ${styles.widthMid}`}>
                    <Link href={'/services'}>
                      <motion.button
                        onClick={handleClose}
                        key={'id45'}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.91 }}
                        style={{ color: 'rgba(155, 134, 254, 1)' }}
                        className={`${styles.btnSignup} ${styles.serviceBtn}`}>
                        All Services
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {(
            isMobile&&<motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.91 }}
              onClick={() => setShowDropDown(false)}
              style={{ position: 'absolute', top: 10, right: 10 }}>
              <Image
                alt='Cross'
                width={31}
                height={31}
                style={{ width: '2rem', height: 'auto' }}
                src={'/cross.png'}
              />
            </motion.div>
          )}
        </motion.div>
      ) : (
        ''
      )}
      <div className={styles.LinksContainer}>
        <Link
          href='/'
          className={styles.logo}>
          <Image
            height={45}
            width={183}
            className={styles.mainLogo}
            src={'/AceITn.png'}
            alt='logo'
          />
          {/* </div> */}
        </Link>
        {!isMobile && (
          <>
            <Link
              className={`${styles.navLink}  ${
                pathname === '/' && styles.navActive
              }`}
              href='/'>
              Home
            </Link>
            <Link
              className={`${styles.navLink}  ${
                pathname === '/about' && styles.navActive
              }`}
              href='/about'>
              About Us
            </Link>
            <div
              onMouseEnter={onModalActive}
              className={styles.navLink}>
              Services
            </div>
            <Link
              className={`${styles.navLink}  ${
                pathname === '/blog' && styles.navActive
              }`}
              href='/blog'>
              Blog
            </Link>
            <Link
              className={`${styles.navLink}  ${
                pathname === '/stories' && styles.navActive
              }`}
              href='/stories'>
              Customer Stories
            </Link>
          </>
        )}
      </div>
      <Link href={'/contact'}>
        <div className={styles.btnContainer}>
          <motion.button
            style={{ borderColor: colors.primary }}
            key={'id45'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.91 }}
            className={color ? styles.btnSignup1 : styles.btnSignup}>
            {/* <Link href={"/"}>Contact Us</Link> */}
            Contact Us
          </motion.button>
        </div>
      </Link>
      {isMobile && (
        <div>
          <Image
            onClick={() => {
              setShowModal(true);
            }}
            height={45}
            width={183}
            className={styles.mobIcon}
            src={'/navLines.png'}
            alt='logo'
          />

          {showModal && (
            <div
              onClick={() => {
                setShowModal(false);
              }}
              style={{
                position: 'fixed',
                zIndex: 1,
                width: '100vw',
                height: '100vh',
                top: '0',
                left: '0'
              }}>
              <div
                className={styles.modalContainer}
                onMouseLeave={() => {
                  setShowModal(false);
                }}>
                <div
                  style={{
                    display: 'flex',
                    alignSelf: 'flex-end',
                    paddingRight: '1rem',
                    marginTop: '1rem',
                  }}>
                  {' '}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.91 }}
                    onClick={() => {
                      setShowModal(false);
                      setShowDropDown(false);
                    }}>
                    <Image
                      alt='Cross'
                      width={31}
                      height={31}
                      style={{
                        width: '2rem',
                        height: 'auto',
                      }}
                      src={'/cross.png'}
                    />
                  </motion.div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                  }}>
                  <Link
                    onClick={handleClose}
                    style={{}}
                    className={`${styles.navLink}  ${
                      pathname === '/' && styles.navActive
                    }`}
                    href='/'>
                    Home
                  </Link>
                  <Link
                    onClick={handleClose}
                    className={`${styles.navLink}  ${
                      pathname === '/about' && styles.navActive
                    }`}
                    href='/about'>
                    About Us
                  </Link>
                  <div
                    className={styles.navLink}>
                    Services
                  </div>
                  <Link
                    onClick={handleClose}
                    className={`${styles.navLink}  ${
                      pathname === '/blog' && styles.navActive
                    }`}
                    href='/blog'>
                    Blog
                  </Link>
                  <Link
                    onClick={handleClose}
                    className={`${styles.navLink}  ${
                      pathname === '/stories' && styles.navActive
                    }`}
                    href='/stories'>
                    Customer Stories
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
