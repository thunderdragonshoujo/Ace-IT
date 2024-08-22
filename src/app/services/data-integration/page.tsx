"use client";
import React from "react";
import Image from "next/image";
import styles from "./dataIntegration.module.css";
import { useState, useEffect } from "react";
import { colors } from "../../../utils/Theme";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ContactForm } from "@/components/contactForm/ContactForm";

const DataIntegrationPage = () => {
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
  function scrollToContactForm() {
    // useEffect(() => {
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      if (typeof window !== undefined) {
        const offset = -100; // Adjust this value as needed
        window.scrollBy({ top: offset, behavior: "smooth" });
      }
      contactForm.scrollIntoView({ behavior: "smooth" });
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
        display: "flex",
        flexDirection: "column",
        width: "99vw",
        backgroundColor: "white",
      }}
    >
      <motion.div
        ref={ref}
        initial={{ x: 50, opacity: 0 }}
        animate={controls}
        transition={{ duration: 1 }}
        style={{
          width: "99vw",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          alt="abt"
          height={896}
          width={1920}
          className={styles.headerImg}
          src={"/integrationHeader.jpg"}
        />
      </motion.div>
      {/* Container1 */}
      <div className={styles.contentContainerColumn}>
        <motion.div
          ref={ref2}
          initial={{ y: -100, opacity: 0 }}
          animate={controls2}
          transition={{ duration: 1 }}
          className={styles.headerCard}
        >
          <div
            style={{
              textAlign: "center",
              width: "55vw",
              alignSelf: "center",
              color: "black",
              marginTop: "3vw",
            }}
            className={styles.heading1}
          >
            <span style={{ fontWeight: "lighter" }}> Struggling With</span>{" "}
            <span style={{ color: colors.secondary }}>E-Commerce</span>
            <br />
            System Integration?
          </div>
          <div
            style={{ color: "black" }}
            className={`${styles.intrgrationCard} ${styles.text1} `}
          >
            Are you struggling to integrate your e-commerce system with your
            data analytics platform?
          </div>
          <div
            style={{ color: "#000", textAlign: "center" }}
            className={`${styles.text2}   ${styles.maxWidth}`}
          >
            Look no further than our integration service, which offers a unique
            approach that sets us
            <br /> apart from the competition.
          </div>
        </motion.div>
        <motion.div
          ref={ref3}
          initial={{ x: -50, opacity: 0 }}
          animate={controls3}
          transition={{ duration: 0.5 }}
          className={styles.contentContainerRow}
          style={{ marginTop: isMobile ? "" : "4vw" }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                color: "black",
                width: "43vw",
                lineHeight: isMobile ? "" : "4vw",
              }}
              className={styles.heading1}
            >
              {" "}
              Seamless{" "}
              <span style={{ color: colors.tertiary }}>
                Integration
              </span> with{" "}
              <span style={{ fontWeight: "lighter" }}>Databricks or</span>{" "}
              Snowflake
            </div>
          </div>
          <div>
            <div
              style={{ marginTop: "1vw" }}
              className={`${styles.text2} ${styles.widthMin} ${styles.maxWidth} `}
            >
              Our integration service provides seamless integration with either
              Databricks or Snowflake, ensuring that your e-commerce data is
              seamlessly integrated with your data analytics platform.
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref4}
          initial={{ x: -50, opacity: 0 }}
          animate={controls4}
          transition={{ duration: 0.5 }}
          className={styles.contentContainerRow}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: isMobile ? "" : "2vw",
              width: "35vw",
            }}
          >
            <div
              style={{ color: "black" }}
              className={`${styles.heading1} ${styles.flexCol}`}
            >
              <Image
                className={styles.intergationImg}
                alt="abt"
                height={896}
                width={1920}
                src={"/snowFlake.png"}
              />
              <div> Snowflake</div>
            </div>
          </div>
          <div
            style={{
              color: "black",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: isMobile ? "" : "1.5vw",
              width: "35vw",
            }}
            className={`${styles.heading1} ${styles.flexCol}`}
          >
            <Image
              className={styles.intergationImg}
              alt="abt"
              height={896}
              width={1920}
              src={"/databricks.png"}
            />
            <div>Databricks</div>
          </div>
        </motion.div>

        {/* FLOW CONTAINER  */}
        {isMobile ? (
          <motion.div
            ref={ref5}
            initial={{ x: -50, opacity: 0 }}
            animate={controls5}
            transition={{ duration: 0.5 }}
            style={{ marginTop: "10vw", marginBottom: "10vw" }}
            className={styles.contentContainerRow}
          >
            <Image
              className={styles.mobFlowImage}
              alt="abt"
              height={896}
              width={1920}
              src={"/cardint1.png"}
            />
            <Image
              className={styles.mobFlowImage}
              alt="abt"
              height={896}
              width={1920}
              src={"/cardint2.png"}
            />
            <Image
              className={styles.mobFlowImage}
              alt="abt"
              height={896}
              width={1920}
              src={"/cardint3.png"}
            />
          </motion.div>
        ) : (
          <motion.div
            ref={ref5}
            initial={{ x: -50, opacity: 0 }}
            animate={controls5}
            transition={{ duration: 0.5 }}
            style={{ height: "auto", width: "80vw", alignSelf: "center" }}
          >
            <Image
              alt="abt"
              height={896}
              width={1920}
              style={{
                width: "100%",
                height: "auto",
                alignSelf: "center",
                position: "relative",
                top: "7vw",
              }}
              src={"/integrationFlow.png"}
            />
          </motion.div>
        )}
      </div>
      {/* Lower wrapper */}
      <div
        style={{
          background: "#0D111C",
          width: "99vw",
          //   alignSelf: "flex-start",
        }}
        className="flex flex-col   items-center "
      >
        {/* CARD CONTAINER  */}
        {isMobile ? (
          <motion.div
            ref={ref6}
            initial={{ x: -50, opacity: 0 }}
            animate={controls6}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "black",
              gap: "4vw",
              textAlign: "center",
            }}
          >
            <div
              style={{ marginTop: "10vw", width: "80%", alignSelf: "center" }}
              className={styles.heading1}
            >
              <span style={{ fontWeight: "lighter" }}>Ready to </span> Overcome
              Integration <span style={{ color: "#8FD5CC" }}> Challenges</span>{" "}
              and <span style={{ fontWeight: "lighter" }}> Unlock the </span>{" "}
              Power of Seamless{" "}
              <span style={{ fontWeight: "lighter" }}> Integration </span>{" "}
              <span style={{ color: "#8FD5CC" }}> for E-commerce Success</span>,
            </div>
            <div
              style={{ width: "80%", alignSelf: "center" }}
              className={styles.text2}
            >
              Contact us now to learn more about our unique approach to
              integrating your e-commerce data with your data analytics
              platform. With our seamless integration service, designed to work
              with Databricks or Snowflake, and our expert design and
              architecture consulting, we ensure efficient integration without
              overspending. Experience cost optimization, fault tolerance, and
              maximize the value of your data analytics investment. Don&apos;t
              let integration stand in the way of your e-commerce success—reach
              out to us today.
            </div>
            <motion.button
              style={{
                marginBottom: "10vw",
                width: "57%",
                alignSelf: "center",
                height: "8vw",
              }}
              key={"id45"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.91 }}
              className={styles.btnSignup}
            >
              Contact Us for Seamless Integration
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            ref={ref6}
            onClick={() => scrollToContactForm()}
            initial={{ x: -50, opacity: 0 }}
            animate={controls6}
            transition={{ duration: 0.5 }}
            style={{ width: "80vw", alignSelf: "center" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.91 }}
          >
            <Image
              alt="abt"
              height={896}
              width={1920}
              style={{
                width: "100%",
                height: "auto",
                alignSelf: "center",
                marginTop: "14vw",
              }}
              src={"/integrationCard.png"}
            />
          </motion.div>
        )}

        {/* CONTACT CONTAINER */}

        <ContactForm
          id="contactForm"
          containerStyles={{ marginTop: "8vw", marginBottom: "6vw" }}
        />
      </div>
    </div>
  );
};
export default DataIntegrationPage;
