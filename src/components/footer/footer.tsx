/** @format */

"use client";
import React from "react";
import Image from "next/image";
import styles from "./footer.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import axios from "axios";
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const emailRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event:any){
    event.preventDefault();
    const notify = () => toast('Thanks you are now subscribed. ', {
      position: "bottom-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  
    // Collect form data
    const formData = {
      email: emailRef.current?.value || '',
    };

    axios({
      method:"POST",
      //url: 'http://44.239.43.181:8085/v1/sendSesEmail',
      url: 'https://76h86gyo24.execute-api.us-west-2.amazonaws.com/prod/contactUs',
      data:JSON.stringify({
        subject:"This is test email from my app",
        message: formData,
        toaddress: "randall.mcclure@acemq.com",
        toaddress2: "info@ace8tech.com"
    }),
      headers: {
        "Content-Type": "application/json",
      }
    }).then(function (response) {
      // Handle success
      notify();
      console.log(response.data);
  })
  .catch(function (error) {
      // Handle error
      console.error("There was an error!", error);
  });
  }
  return (
    <div className={styles.footerContainer}>
      <div
        className={styles.footerContent}
        style={{
          display: "flex",
          width: "80vw",
          justifyContent: "space-between"
        }}
      >
        <div className={styles.footerItem} style={{}}>
          <div
            className={styles.widthMin}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "3vw",
            }}
          >
            <div style={{}}>
              <Image
                alt="aceLOGO"
                height={896}
                width={1920}
                className={styles.aceLogo}
                src={"/AceITn.png"}
              />
            </div>
          </div>

          <div
            className={styles.widthMin}
            style={{
              display: "flex",
              alignItems: "center",

              marginTop: "1vw",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{}}
            >
              <Image
                className={styles.icon}
                alt="aceLOGO"
                height={896}
                width={1920}
                src={"/call.png"}
              />
            </motion.div>
            <div
              className={styles.text1}
              style={{
                fontWeight: "300",
                marginLeft: "2vw",
                // fontSize: "1vw",
              }}
            >
              305-981-6475
            </div>
          </div>

          <div
            className={styles.widthMin}
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "2vw",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{}}
            >
              <Image
                alt="aceLOGO"
                height={896}
                width={1920}
                className={styles.icon2}
                src={"/location.png"}
              />
            </motion.div>
            <div
              className={styles.text2}
              style={{
                fontWeight: "300",
                marginLeft: "2vw",
              }}
            >
              66 W. Flagler St. 9th Floor <br /> Miami, FL 33130
            </div>
          </div>
        </div>

        <div className={styles.footerItem} style={{ marginLeft: "4vw" }}>
          <div className={styles.heading3}>Navigate</div>
          <Link href={"/"}>
            {" "}
            <div
              className={styles.text2}
              style={{
                marginTop: "2vw",
                fontWeight: "200",
              }}
            >
              Home
            </div>
          </Link>
          <Link href={"/about"}>
            {" "}
            <div
              className={styles.text2}
              style={{
                marginTop: ".8vw",
                fontWeight: "200",
              }}
            >
              About Us
            </div>
          </Link>
          <Link href={"/services"}>
            {" "}
            <div
              className={styles.text2}
              style={{
                marginTop: ".8vw",
                fontWeight: "200",
              }}
            >
              Services
            </div>
          </Link>
          <Link href={"/blog"}>
            {" "}
            <div
              className={styles.text2}
              style={{
                marginTop: ".8vw",
                fontWeight: "200",
              }}
            >
              Blog
            </div>
          </Link>
          <Link href={"/stories"}>
            {" "}
            <div
              className={styles.text2}
              style={{
                marginTop: ".8vw",
                fontWeight: "200",
              }}
            >
              Customer Service
            </div>
          </Link>
        </div>

        <div className={styles.footerItem}>
          <div className={styles.heading3}>Newsletter</div>

          <input
            className={`${styles.text2} ${styles.widthMin}  ${styles.inputContainer}`}
            placeholder="Enter Your Email"
            type="text"
            ref={emailRef}
          />

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={styles.button}
          >
            <Image
              height={100}
              width={100}
              style={{ width: "100%", height: "auto" }}
              alt="Link"
              src={"/submit-btn.png"}
              onClick={handleSubmit}
            />
          </motion.div>
          <ToastContainer />
        </div>

        <div
          className={`${styles.footerItem}  ${styles.marginl}`}
          // style={{ background: "red" }}
        >
          <div className={`${styles.heading3} `}>Connect With Us</div>
          <Link href={"https://www.linkedin.com/company/ace8tech/"}>
            <motion.div
              className={styles.icon3}
              style={{ marginTop: "2.5vw" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                height={100}
                width={100}
                style={{ width: "100%", height: "auto" }}
                alt="Link"
                src={"/link.png"}
              />
            </motion.div>{" "}
          </Link>
        </div>
      </div>
      <div className={`${styles.text1}  ${styles.copyWritsContainer}`}>
        <span style={{ marginRight: ".5vw" }}>©</span> Copyright Ace8Tech.com
        2024. All Rights Reserved
      </div>
    </div>
  );
};
export default Footer;
