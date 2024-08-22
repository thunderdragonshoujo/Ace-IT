"use client";
import React from "react";
import Image from "next/image";
import styles from "./openace.module.css";

import { colors } from "../../utils/Theme";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { ContactForm } from "@/components/contactForm/ContactForm";

const obaasCards = [
  {
    id: 1,
    image: "/1.png",
    heading: "Assessments",
    content:
      "The technical support process starts with an in-depth assessment between the client and our team of Open Source Architects. During this session, the client discusses their specific needs and requirements for technical support, allowing our team to identify areas where we can provide the most value.",
  },

  {
    id: 2,
    image: "/2.png",
    heading: "Remediation",
    content:
      "The next step involves resolving any issues the client may be experiencing with their Open Source technologies. Our team works diligently to identify and troubleshoot any issues that arise, providing timely solutions to ensure the client&apos;s systems continue to run smoothly.",
  },
  {
    id: 3,
    image: "/3.png",
    heading: "Best Practice Configuration and Scalability",
    content:
      "The next step involves ensure that the client&apos;s technology is set up and configured for their particular use case and that supports scalability and growth for the enterprise&apos;s vision and future growth objectives.",
  },
  {
    id: 4,
    image: "/4.png",
    heading: "Ongoing Support",
    content:
      "Finally, Our technical support service is continuous, providing ongoing support and maintenance to ensure that the client’s systems remain up-to-date and optimized for performance. This includes regular software updates, patches, and security fixes..",
  },
];
const OpenAce = () => {
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
  const [isMobile, setIsMobile] = useState(false);

  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();
  const controls7 = useAnimation();
  const controls8 = useAnimation();

  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const [ref5, inView5] = useInView();
  const [ref6, inView6] = useInView();
  const [ref7, inView7] = useInView();
  const [ref8, inView8] = useInView();

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
    controls6.start({ y: 0, opacity: 1 });
  }
  if (inView7) {
    controls7.start({ x: 0, opacity: 1 });
  }
  if (inView8) {
    controls8.start({ x: 0, opacity: 1 });
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
        backgroundColor: "#0C111A",
      }}
    >
      {" "}
      <motion.div
        ref={ref}
        initial={{ x: -50, opacity: 0 }}
        animate={controls}
        transition={{ duration: 1 }}
        style={{
          width: "99vw",
          display: "flex",

          // "#0C111A",
          justifyContent: "center",
        }}
      >
        <Image
          alt="absst"
          height={896}
          width={1920}
          className={styles.openaceHeader}
          src={"/headerAce.png"}
        />
      </motion.div>
      {/* Container1 */}
      <div className={styles.contentContainerColumn}>
        {isMobile ? (
          <motion.div
            ref={ref2}
            initial={{ y: -100, opacity: 0 }}
            animate={controls2}
            transition={{ duration: 1 }}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: "5vw",
            }}
          >
            {" "}
            <Image
              alt="abt"
              height={896}
              width={1920}
              style={{
                width: "70vw",
                height: "auto",
                alignSelf: "center",
              }}
              src={"/openCard.png"}
            />{" "}
            <Image
              alt="abt"
              height={896}
              width={1920}
              style={{
                width: "80vw",
                height: "auto",
                alignSelf: "center",
              }}
              src={"/opencardFlow.png"}
            />
          </motion.div>
        ) : (
          <motion.div
            ref={ref2}
            initial={{ y: -100, opacity: 0 }}
            animate={controls2}
            transition={{ duration: 1 }}
            style={{ alignSelf: "center" }}
          >
            <Image
              alt="abt"
              height={896}
              width={1920}
              style={{
                width: "70vw",
                height: "auto",
                alignSelf: "center",
              }}
              src={"/openceCode.png"}
            />
          </motion.div>
        )}
        <motion.div
          ref={ref3}
          initial={{ x: -50, opacity: 0 }}
          animate={controls3}
          transition={{ duration: 0.5 }}
          className={styles.cardContainer}
        >
          <Image
            alt="abt"
            layout="fill"
            objectFit="cover"
            quality={100}
            style={{ zIndex: 111 }}
            src={"/openBurn.png"}
          />
          <div className={styles.cardContent}>
            <div style={{ alignSelf: "center" }} className={styles.heading1}>
              Who is <span style={{ color: colors.secondary }}> OpenAce?</span>
            </div>
            <div
              style={{ alignSelf: "center", textAlign: "center", width: "87%" }}
              className={styles.text1}
            >
              OpenAce is powered by Ace8 and is backed by a team of Open Source
              Architects, Thought leaders, and contributors with extensive Open
              Source experience. Our passion for Open Source, coupled with
              extensive experience working on an array of Open Source
              implementations globally from a business and technological
              perspective, uniquely equips us to drive true enterprise value
              with Open Source Technologies.
            </div>
            <div
              style={{ position: "absolute", bottom: 0 }}
              className={styles.btnContainer}
            >
              <motion.button
                onClick={() => scrollToContactForm()}
                key={"id45"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.91 }}
                className={styles.btnSignup}
              >
                Talk to an Expert
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref4}
          initial={{ x: -50, opacity: 0 }}
          animate={controls4}
          transition={{ duration: 0.5 }}
          style={{ alignSelf: "center" }}
        >
          <Image
            alt="abt"
            height={896}
            width={1920}
            className={styles.supportImage}
            src={"/innerHeaderAce.png"}
          />
        </motion.div>
      </div>
      {/* CONTENT  */}{" "}
      <div className={styles.contentContainerColumn}>
        <motion.div
          ref={ref5}
          initial={{ x: -50, opacity: 0 }}
          animate={controls5}
          transition={{ duration: 0.5 }}
          className={styles.contentContainerRow}
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                color: "white",
                width: "39vw",
                alignSelf: "center",
                marginBottom: "1.5vw",
              }}
              className={styles.headerHeading}
            >
              Our <span style={{ fontWeight: "200" }}>Support</span> Process
            </div>
            <div className={`${styles.heading2}  ${styles.headingWidth}`}>
              {" "}
              <span style={{ fontWeight: "lighter" }}>
                Maximize Your System&apos;s
              </span>{" "}
              Uptime with
              <span style={{ color: colors.secondary }}>
                {" "}
                OpenAce Technical Support
              </span>{" "}
            </div>
            <div
              style={{
                marginBottom: "2vw",
                textAlign: "center",
                alignSelf: "center",
                // fontSize: isMobile ? "" : "1.1vw",
              }}
              className={styles.text1}
            >
              OpenAce Technical Support Services provide enterprises with access
              to experienced Open Source Architects and <br />
              Developers, offering 24/7 support for a wide range of Open Source
              technologies. From installation and configuration
              <br /> to training, and migration, our customized support ensures
              that your Open Source systems remain reliable and <br /> optimized
              for maximum performance and efficiency for your specific Use Case.
            </div>

            {isMobile ? (
              <div className={styles.cardsContainer}>
                {obaasCards.map((item, index) => {
                  return (
                    <div className={styles.detailsCard} key={item.id}>
                      <div>
                        {" "}
                        <Image
                          alt="abt"
                          height={896}
                          width={1920}
                          className={
                            !(item.id === 1) ? styles.itemImg : styles.itemImg1
                          }
                          src={item.image}
                        />
                      </div>
                      <div key={item.id} className={styles.obaasCard}>
                        <div className={styles.text3}>
                          <div
                            className={styles.text1}
                            // style={{ fontWeight: "bold", fontSize: "1.1vw" }}
                          >
                            {item.id === 2 ? (
                              <span>
                                <span style={{ fontWeight: "100" }}>Best </span>
                                Practice{" "}
                                <span style={{ fontWeight: "100" }}>
                                  Configuration
                                </span>{" "}
                                and Scalability
                              </span>
                            ) : item.id === 4 ? (
                              <span>
                                Ongoing{" "}
                                <span style={{ fontWeight: "100" }}>
                                  Support
                                </span>
                              </span>
                            ) : (
                              <span>{item.heading}</span>
                            )}
                          </div>
                          {item.content}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <Image
                alt="abt"
                height={896}
                width={1920}
                className={styles.SuppportContainer}
                src={"/openCards.png"}
              />
            )}
          </div>
        </motion.div>

        <motion.div
          ref={ref6}
          initial={{ y: -50, opacity: 0 }}
          animate={controls6}
          transition={{ duration: 0.5 }}
          style={{ gap: "1vw", marginTop: 0 }}
          className={styles.contentContainerColumn}
        >
          {" "}
          <div
            style={{
              textAlign: "center",
              width: "50vw",
              alignSelf: "center",
              color: "white",
              marginTop: "3vw",
            }}
            className={styles.heading1}
          >
            <span style={{ color: colors.primary }}>Technical </span>Support
            <span style={{ fontWeight: "200" }}> Benefits </span>
            <br />
          </div>
          <div style={{ textAlign: "center" }} className={styles.textLg}>
            Make Your Open Source Technologies Enterprise-Ready
          </div>
          {/* Cards  */}
          <div
            style={{ marginTop: "4vw", alignSelf: "center" }}
            className={styles.flexRow}
          >
            <div className={styles.infoCards} style={{ marginTop: "5vw" }}>
              <div
                className={styles.heading3}
                style={{
                  lineHeight: isMobile ? "" : "2.5vw",
                  marginBottom: isMobile ? "" : "1vw",
                }}
              >
                Faster <span style={{ fontWeight: "lighter" }}>Issue</span>{" "}
                <span style={{ color: colors.primary }}>Resolution</span>
              </div>
              <div className={styles.text2}>
                With 24/7 support and experienced Open
                <br /> Source Architects, OpenAce quickly
                <br /> identifies and resolves any issues with your
                <br />
                Open Source systems, minimizing
                <br /> disruptions to your business operations.
              </div>
            </div>
            <div
              className={`${styles.infoCards}`}
              style={{ marginBottom: "5vw" }}
            >
              <div
                className={styles.heading3}
                style={{
                  lineHeight: isMobile ? "" : "2.5vw",
                  marginBottom: isMobile ? "" : "1vw",
                }}
              >
                <span style={{ fontWeight: "lighter" }}>Improved</span> System
                <span style={{ color: colors.primary }}> Reliability</span>
              </div>
              <div className={styles.text2}>
                Proactive monitoring and maintenance prevent issues before they
                occur, <br /> ensuring your systems run smoothly.
              </div>
            </div>
            <div className={styles.infoCards} style={{ marginTop: "5vw" }}>
              <div
                className={styles.heading3}
                style={{
                  lineHeight: isMobile ? "" : "2.5vw",
                  marginBottom: isMobile ? "" : "1vw",
                }}
              >
                Access to{" "}
                <span style={{ fontWeight: "lighter" }}> Expert </span>
                <span style={{ color: colors.primary }}> Guidance </span>
              </div>
              <div className={styles.text2}>
                With 24/7 support and experienced Open <br /> Source Architects,
                OpenAce quickly <br /> identifies and resolves any issues with
                your <br />
                Open Source systems, minimizing <br /> disruptions to your
                business operations.
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "center" }}>
            {" "}
            <Image
              alt="abt"
              height={896}
              width={1920}
              className={styles.aceLogo}
              src={"/logopenace.png"}
            />
          </div>
          <div
            style={{ marginTop: "2vw", alignSelf: "center" }}
            className={styles.flexRow}
          >
            <div className={styles.infoCards} style={{ marginTop: "-5vw" }}>
              <div
                className={styles.heading3}
                style={{
                  lineHeight: isMobile ? "" : "2.5vw",
                  marginBottom: isMobile ? "" : "1vw",
                }}
              >
                Customized <br />
                <span style={{ fontWeight: "lighter" }}> Support </span>
                <span style={{ color: colors.primary }}> Solutions </span>
              </div>
              <div className={styles.text2}>
                Tailored support solutions maximize the value of your Open
                Source investments.
              </div>
            </div>
            <div
              className={`${styles.infoCards} ${styles.bottom}`}
              // style={{ marginTop: "5vw" }}
            >
              <div
                className={styles.heading3}
                style={{
                  lineHeight: isMobile ? "" : "2.5vw",
                  marginBottom: isMobile ? "" : "1vw",
                }}
              >
                Cost-
                <span style={{ color: colors.primary }}>Effective </span>
                <span style={{ fontWeight: "lighter" }}> Support </span>
              </div>
              <div className={styles.text2}>
                OpenAce&apos;s subscription-based model <br /> offers a
                cost-effective solution for <br /> businesses looking to
                optimize their <br />
                Open Source systems.
              </div>
            </div>
            <div className={styles.infoCards} style={{ marginTop: "-5vw" }}>
              <div
                className={`${styles.heading3} ${styles.setionWidth}`}
                style={{
                  lineHeight: isMobile ? "" : "2.5vw",
                  marginBottom: isMobile ? "" : "1vw",
                }}
              >
                Greater <span style={{ fontWeight: "lighter" }}> Peace </span>{" "}
                of
                <span style={{ color: colors.primary }}> Mind </span>
              </div>
              <div className={styles.text2}>
                With OpenAce&apos;s technical support, <br /> businesses can
                confidently focus on core <br /> activities, free from worries
                about <br />
                technical issues.
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref7}
          initial={{ x: -50, opacity: 0 }}
          animate={controls7}
          transition={{ duration: 0.5 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1vw",
          }}
        >
          <div>
            <div
              style={{ textAlign: "center" }}
              className={styles.headerHeading}
            >
              {" "}
              <span style={{ fontWeight: "lighter", alignSelf: "center" }}>
                {" "}
                Case{" "}
              </span>{" "}
              Studies
            </div>
          </div>

          <div style={{ position: "relative" }}>
            {" "}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Image
                alt="abt"
                height={896}
                width={1920}
                style={{
                  width: "70%",
                  height: "auto",
                }}
                src={"/caseCard.png"}
              />
            </div>
            <div
              style={{ position: "absolute", bottom: 0 }}
              className={styles.btnContainer}
            >
              <motion.button
                key={"id45"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.91 }}
                className={styles.btnSignup}
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
      {/* CARD CONTAINER  */}
      {isMobile ? (
        <motion.div
          onClick={() => scrollToContactForm()}
          ref={ref8}
          initial={{ x: 50, opacity: 0 }}
          animate={controls8}
          transition={{ duration: 0.5 }}
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "black",
            gap: "4vw",
            textAlign: "center",
            marginTop: "10vw",
          }}
        >
          <div
            style={{ marginTop: "10vw", width: "80%", alignSelf: "center" }}
            className={styles.heading1}
          >
            <span style={{ fontWeight: "lighter" }}>Unlock</span>the Power of{" "}
            <span style={{ color: "#8FD5CC" }}> Open Source</span> for Your
            <span style={{ fontWeight: "lighter" }}> Business Today </span>{" "}
          </div>
          <div
            style={{ width: "80%", alignSelf: "center" }}
            className={styles.text2}
          >
            OpenAce provides businesses with access to experienced Open Source
            Architects who can help them unlock the power of Open Source
            technologies. Contact us today to learn how we can assist you in
            leveraging Open Source to achieve your business objectives.
          </div>
          <motion.button
            style={{
              marginBottom: "10vw",
              width: "28%",
              alignSelf: "center",
              height: "8vw",
            }}
            key={"id45"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.91 }}
            className={styles.btnSignup}
          >
            Talk To An Expert
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          ref={ref8}
          initial={{ x: 50, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.91 }}
          onClick={() => scrollToContactForm()}
          animate={controls8}
          transition={{ duration: 0.5 }}
          style={{ width: "80vw", alignSelf: "center" }}
        >
          <Image
            alt="abt"
            height={896}
            width={1920}
            style={{
              width: "100%",
              height: "auto",
              alignSelf: "center",
              marginTop: "4vw",
            }}
            src={"/openaceu.png"}
          />
        </motion.div>
      )}
      {/* CONTACT CONTAINER */}
      <ContactForm
        id="contactForm"
        containerStyles={{ marginTop: "8vw", marginBottom: "6vw" }}
      />
    </div>
  );
};
export default OpenAce;
