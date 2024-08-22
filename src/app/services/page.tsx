"use client";
import React from "react";
import Image from "next/image";
import styles from "./services.module.css";
import { colors } from "../../utils/Theme";
import { color, motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Servicepage = () => {
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

  function scrollToContactForm() {
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      if (typeof window !== undefined) {
        const offset = -100; // Adjust this value as needed
        window.scrollBy({ top: offset, behavior: "smooth" });
      }
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "99vw" }}>
      <Image
        alt="abt"
        height={896}
        width={1920}
        className={styles.headerImg}
        src={"/servicesHeader.png"}
      />
      <motion.div
        ref={ref}
        animate={control}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 1 }}
        className={`${styles.header} ${styles.alignCenter}`}
      >
        <span className={styles.head1}>
          <span className={styles.normal}>We Make You</span>
          <span style={{ color: colors.primary, fontWeight: 900 }}>
            {" "}
            Move Faster, <br />
          </span>
          Reliably.{" "}
          <span className={styles.normal}>
            Increase Your Velocity <br />
          </span>{" "}
          & Resilience With{" "}
          <span style={{ color: colors.primary, fontWeight: 900 }}>Ace8.</span>{" "}
          <br />
        </span>
        <span style={{ lineHeight: "2.5vw" }} className={styles.line1}>
          We believe we should never stop innovating and neither should you. We
          can {!isMobile && <br />} provide many types of engagements from
          architectural and implementation {!isMobile && <br />} assessments to
          full delivery of Environments as a Service (EaaS).
        </span>
      </motion.div>

      <motion.div
        animate={control1}
        initial={{ x: -50, y: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        ref={ref1}
        style={{
          alignItems: "center",
          width: "99vw",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Image
          alt="helpClient"
          width={1583}
          height={1112}
          className={styles.helpClient}
          src={"/helpClient.png"}
        />
      </motion.div>
      <motion.div
        ref={ref2}
        animate={control2}
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        className={styles.consultingMain}
      >
        <div
          style={{
            fontWeight: "bold",
            color: "#000",
            marginTop: "4vw",
          }}
          className={styles.heading1}
        >
          Our <span style={{ fontWeight: "normal" }}>Consulting </span>{" "}
          <span style={{ color: "#458D84" }}>Capabilities:</span>
        </div>

        <div className={styles.envParent}>
          <div>
            <div
              className={styles.heading3}
              style={{ color: "#458D84", fontWeight: "bold" }}
            >
              Environment <br />
              <span style={{ color: "#000", fontWeight: "normal" }}>
                Management{" "}
                <span style={{ fontWeight: "bold" }}>
                  and
                  <br /> Automation
                </span>
              </span>
            </div>
            <div>
              <Image
                className={styles.imgCard}
                alt="automation"
                width={393}
                height={222}
                src={"/automation.png"}
                style={{ marginTop: "1vw" }}
              />
            </div>
          </div>

          <div>
            <div
              className={styles.heading3}
              style={{ color: "#000", fontWeight: "bold" }}
            >
              Incident <br />
              <span style={{ color: "#458D84" }}>Management </span>
            </div>
            <div>
              <Image
                alt="automation"
                width={393}
                height={222}
                src={"/incident.png"}
                className={styles.imgCard}
                style={{ marginTop: "1vw" }}
              />
            </div>
          </div>

          <div>
            <div
              className={styles.heading3}
              style={{ color: "#458D84", fontWeight: "bold" }}
            >
              Data <br />
              <span style={{ color: "#000" }}>Management </span>
            </div>
            <div>
              <Image
                alt="automation"
                width={393}
                height={222}
                src={"/data.png"}
                className={styles.imgCard}
                style={{ marginTop: "1vw" }}
              />
            </div>
          </div>
        </div>
        <div className={styles.devScop}>
          <div>
            <div
              className={styles.heading2}
              style={{
                color: "#232323",
                fontWeight: "bold",
              }}
            >
              DevSecOps:
            </div>

            <div
              className={styles.text1}
              style={{
                color: "#000",
                fontWeight: "bold",
                marginTop: ".3vw",
              }}
            >
              Bridging the Gap between Development, Security,
              <br /> & Operations
            </div>
            <div
              className={styles.text2}
              style={{
                color: "#000",
                marginTop: ".5vw",
                marginBottom: "1.2vw",
                fontSize: isMobile ? "" : "1.1vw",
                fontWeight: "500",
              }}
            >
              Combine Strengths, Deliver Securely, and Thrive
            </div>

            <div>
              <Image
                alt="dev"
                width={505}
                height={258}
                src={"/dev.png"}
                className={styles.imgdev}
              />
            </div>
            <motion.div
              className={styles.btnReadMore}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.99 }}
            >
              <Link href={"/services/devsecops"}>
                <Image
                  alt="read"
                  width={505}
                  height={258}
                  className={styles.btnReadMore}
                  src={"/read2.png"}
                />
              </Link>
            </motion.div>
            {/* <div>
              <Link href={"/services/devsecops"}>
                <motion.button
                  key={"id45"}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.99 }}
                  className={`${styles.text2} ${styles.btnReadMore}`}
                >
                  Read More
                </motion.button>{" "}
              </Link>
            </div> */}
          </div>

          <div>
            <Image
              alt="dvimg"
              width={842}
              height={469}
              src={"/dvimg.png"}
              className={styles.imgDev}
              style={{ marginTop: "2vw" }}
            />
          </div>
        </div>
        <div
          className={`${styles.flexRow}  ${styles.widthMid}`}
          style={{
            justifyContent: "space-between",
            marginTop: "4vw",
            width: "85vw",
          }}
        >
          <div style={{ marginTop: "6vw" }}>
            <Image
              alt="chart"
              width={914}
              height={267}
              className={styles.imgMid}
              src={"/chart.png"}
              style={{ width: "45vw" }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1vw",
              }}
            >
              <div>
                <Image
                  alt="chart"
                  width={914}
                  height={267}
                  className={styles.expimg}
                  style={{
                    height: "auto",
                    marginLeft: "1vw",
                    marginTop: "-1vw",
                  }}
                  src={"/chartopt.png"}
                />
              </div>

              <div
                style={{
                  backgroundColor: colors.primary,
                  height: "7vw",
                  borderWidth: ".01vw",
                  borderColor: "#FF88C3",
                  // width: "0vw",
                }}
              ></div>

              <div
                className={styles.text2}
                style={{
                  color: "#000",
                  marginLeft: 10,
                  fontSize: ".82vw",
                  lineHeight: "1.4vw",
                }}
              >
                <span
                  style={{
                    color: "#FF88C3",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  Are you tired of lengthy onboarding processes and inefficient
                  <br /> software delivery? <br />
                </span>
                Our Onboarding as a Service (OBaaS) solution offers a <br />
                streamlined approach to CI/CD services, accelerating your
                <br /> development and testing cycle
              </div>
            </div>
          </div>

          <div>
            <div
              className={styles.heading2}
              style={{
                color: "#000",
                fontWeight: "bold",
              }}
            >
              Onboarding <span style={{ fontWeight: "normal" }}>as</span>
              <br /> a <span style={{ color: "#FF88C3" }}>Service</span>
            </div>

            <div
              className={styles.text1}
              style={{
                color: "#000",
                fontWeight: "bold",
                marginTop: ".3vw",
              }}
            >
              Streamline Your CI/CD Process
            </div>
            <div
              className={styles.text2}
              style={{
                color: "#000",
                fontSize: isMobile ? "" : "1.1vw",
                fontWeight: "500",
                marginTop: ".2vw",
                marginBottom: ".2vw",
              }}
            >
              Deliver Software Faster and Efficiently
            </div>
            <div className={styles.text2} style={{ color: "#000" }}>
              Are you tired of lengthy onboarding processes and inefficient
              software
              <br /> delivery? Our Onboarding as a Service (OBaaS) solution
              offers a<br /> streamlined approach to CI/CD services,
              accelerating your development <br /> and testing cycle
            </div>
            <div>
              <Image
                alt="obrd"
                width={505}
                height={258}
                src={"/obrd.png"}
                className={styles.imgdev}
                style={{
                  marginTop: "1vw",
                }}
              />
            </div>
            <div>
              <Link href={"/services/obaas"}>
                <motion.button
                  key={"id45"}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.99 }}
                  style={{
                    borderColor: "rgba(248, 136, 198, 1)",
                    color: "#000",
                    fontWeight: "bold",
                    borderWidth: "0.15vw",
                    borderRadius: ".5vw",
                  }}
                  className={`${styles.text2} ${styles.btnReadMore}`}
                >
                  Read More
                </motion.button>
              </Link>
            </div>
            {/* <div>
              <Link href={"/services/obaas"}>
                <motion.button
                  key={"id45"}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.99 }}
                  className={`${styles.text2} ${styles.btnReadMore}`}
                >
                  Read More
                </motion.button>
              </Link>
            </div> */}
          </div>
        </div>

        <div
          className={`${styles.flexRow}  ${styles.widthmin}`}
          style={{
            justifyContent: "space-between",
            marginTop: "7vw",
          }}
        >
          <div style={{ marginTop: ".5vw" }}>
            <div
              className={styles.heading2}
              style={{
                color: "#5747A5",
                fontWeight: "bold",
              }}
            >
              Incident <span style={{ color: "#000" }}> Management</span>
            </div>

            <div
              className={styles.text1}
              style={{
                color: "#000",
                fontWeight: "bold",

                marginTop: ".3vw",
              }}
            >
              Bridging the Gap between Development, <br /> Security, &
              Operations
            </div>
            <div
              className={styles.text2}
              style={{
                color: "#000",
                fontSize: isMobile ? "" : "1.1vw",
                fontWeight: "500",

                marginTop: ".5vw",
                marginBottom: "1.2vw",
              }}
            >
              Combine Strengths, Deliver Securely, and Thrive
            </div>

            <div>
              <Image
                alt="inci"
                width={505}
                height={258}
                src={"/inci.png"}
                className={styles.imgMin}
              />
            </div>

            <div>
              <Link href={"services/incident-management"}>
                <motion.button
                  key={"id45"}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.99 }}
                  style={{
                    borderColor: "#5747A5",
                    color: "#000",
                    fontWeight: "bold",
                    borderWidth: "0.15vw",
                    borderRadius: ".5vw",
                  }}
                  className={`${styles.text2} ${styles.btnReadMore}`}
                >
                  Read More
                </motion.button>
              </Link>
            </div>
          </div>

          <div>
            <Image
              alt="time"
              width={2000}
              height={2000}
              src={"/time.png"}
              className={styles.imgTime}
            />
            <div
              className={`${styles.text2} ${styles.imgExp}`}
              style={{
                color: "#000",
                textAlign: "center",
                marginTop: "1.3vw",
                fontSize: ".9vw",
              }}
            >
              Don&apos;t settle for subpar incident management services that
              leave you vulnerable
              <br /> to downtime and loss of revenue.{" "}
              <span style={{ fontWeight: "bold", color: "#5747A5" }}>
                Trust our unique approach{" "}
              </span>
              and experience
              <br /> the peace of mind that comes with knowing your systems are
              in good hands.
            </div>
          </div>
        </div>

        <div
          className={`${styles.flexRow}  ${styles.widthMid}`}
          style={{
            justifyContent: "space-between",
            marginTop: "4vw",
          }}
        >
          <div>
            <Image
              alt="msgLeft"
              width={505}
              height={258}
              src={"/msgLeft1.png"}
              className={styles.imgMid}
              style={{ marginTop: "4vw", width: "42vw" }}
            />
            <div
              className={`${styles.text2} ${styles.mContainer}`}
              style={{
                color: "#000",
                fontSize: ".82vw",
              }}
            >
              High availability is crucial for middleware handling asynchronous
              <br /> messaging. We specialize in creating resilient clusters and
              <br /> implementing disaster recovery solutions.Experience
              scalable and
              <br /> reliable messaging with AceMQ. Contact us today to learn
              more.
            </div>
          </div>

          <div style={{}}>
            <div
              className={styles.heading2}
              style={{
                color: "#5747A5",
                fontWeight: "bold",
              }}
            >
              Message<span style={{ color: "#000" }}> Brokers </span>
            </div>

            <div
              className={styles.text1}
              style={{
                color: "#000",
                fontWeight: "bold",

                marginTop: ".3vw",
              }}
            >
              Scalable Systems with AceMQ
            </div>
            <div
              className={styles.text2}
              style={{
                color: "#000",
                marginTop: ".5vw",
                marginBottom: ".2vw",
                fontSize: isMobile ? "" : "1.1vw",
                fontWeight: "500",
              }}
            >
              Achieve Scalability with Asynchronous Messaging
            </div>

            <div className={styles.text2} style={{ color: "#000" }}>
              At AceMQ, we provide expert guidance for scalable systems through
              <br />
              asynchronous messaging. Our services cover the selection of
              appropriate
              <br /> message patterns and testing of throughput and latency to
              ensure optimal
              <br /> performance.
            </div>
            <div>
              <Image
                className={styles.imgMin}
                alt="mesg"
                width={505}
                height={258}
                src={"/mesg.png"}
                style={{ marginTop: "1vw" }}
              />
            </div>
            <motion.div
              className={styles.btnReadMore}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.99 }}
            >
              <Link href={"/services/message-brokers"}>
                <Image
                  alt="read"
                  width={505}
                  height={258}
                  className={styles.btnReadMore}
                  src={"/read2.png"}
                />
              </Link>
            </motion.div>
            {/* <div>
              <Link href={"/services/message-brokers"}>
                <motion.button
                  key={"id45"}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.99 }}
                  className={`${styles.text2} ${styles.btnReadMore}`}
                >
                  Read More
                </motion.button>{" "}
              </Link>
            </div> */}
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={ref3}
        animate={control3}
        transition={{ duration: 1 }}
        initial={{ opacity: 0, x: -50 }}
        style={{
          width: "99vw",
          backgroundColor: "#0D1117",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className={`${styles.flexRow}  ${styles.widthMax}`}
          style={{
            justifyContent: "flex-end",
            marginTop: "5vw",
          }}
        >
          <div style={{ marginRight: "5vw", marginTop: "1vw" }}>
            <div
              className={styles.heading2}
              style={{
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              Microservices{" "}
              <span style={{ color: "#FF88C3" }}>
                Design and
                <br /> Development{" "}
              </span>{" "}
              and Refactoring
            </div>
            <div className={styles.text1} style={{ marginBottom: ".5vw" }}>
              Transform Your Microservices
            </div>
            <div className={styles.text2} style={{ color: "#fff" }}>
              AceMQ offers comprehensive microservices design, development, and
              refactoring services
              <br /> that strictly adhere to industry best practices, including
              loose coupling and the 12Factor
              <br /> approach.
            </div>
            <div>
              <Image
                alt="imagee1"
                width={505}
                height={258}
                src={"/imagee1.png"}
                className={styles.imgApproach}
                style={{ marginTop: "1vw" }}
              />
            </div>

            <div
              className={styles.text2}
              style={{
                color: "#fff",

                fontWeight: "bold",
                marginTop: "1.5vw",
                marginLeft: "2vw",
              }}
            >
              Trust AceMQ to empower your business with scalable, efficient, and
              <br />
              maintainable microservices. Contact us today to discuss your
              design,
              <br />
              development, and refactoring needs.
            </div>

            <motion.div
              className={styles.btnReadMore}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.99 }}
            >
              <Link href={"/services/microservices"}>
                <Image
                  alt="read"
                  width={505}
                  height={258}
                  className={styles.btnReadMore}
                  src={"/read.png"}
                />
              </Link>
            </motion.div>
          </div>

          <div>
            <Image
              alt="apimanag"
              width={1824}
              height={1514}
              src={"/apimanag.png"}
              style={{
                marginTop: "1vw",
              }}
              className={styles.imgMid}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "99vw",
            flexDirection: "column",
            marginTop: "8vw",
            alignItems: "center",
          }}
        >
          <div
            className={`${styles.flexRow}  ${styles.widthmin}`}
            style={{
              justifyContent: "space-between",
              height: "auto",
            }}
          >
            <div>
              <Image
                alt="exp"
                width={505}
                height={258}
                className={styles.imgExp}
                src={"/exp.png"}
              />
            </div>

            <div style={{ marginTop: "1vw", marginLeft: "10vw" }}>
              <div
                className={styles.heading2}
                style={{
                  fontWeight: "bold",
                  color: "#5747A5",
                }}
              >
                Automated <span style={{ color: "#fff" }}>Testing</span>
              </div>
              <div
                className={styles.text1}
                style={{
                  marginBottom: "1vw",

                  fontWeight: "600",
                }}
              >
                Streamline Your Testing Process with <br />
                Automated Testing
              </div>
              <div
                style={{
                  marginBottom: ".5vw",
                  fontSize: isMobile ? "" : "1.1vw",
                  fontWeight: "500",
                }}
              >
                Save Time and Resources with Our Unique Approach
              </div>
              <div
                className={styles.text2}
                style={{
                  color: "#fff",
                }}
              >
                Are you tired of manual testing for your e-commerce application?
                Our
                <br /> automated testing service offers a unique approach that
                saves time,
                <br /> resources, and sets us apart from the competition.
              </div>
              <div>
                <Image
                  alt="grp"
                  width={1214}
                  height={1454}
                  src={"/grp.png"}
                  className={styles.imgGrp}
                  style={{ marginTop: "1vw" }}
                />
              </div>

              <div
                className={styles.text2}
                style={{
                  color: "#fff",

                  fontWeight: "500",
                  marginTop: ".8vw",
                }}
              >
                Our thorough testing approach consists of three critical
                components: crowd-
                <br />
                sourced development of diverse test cases, AI-enhanced test
                code, and seamless
                <br /> integration into your existing CI/CD pipeline.
              </div>

              <motion.div
                className={styles.btnReadMore}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.99 }}
              >
                <Link href={"/services/automation"}>
                  <Image
                    alt="read"
                    width={505}
                    height={258}
                    className={styles.btnReadMore}
                    src={"/read.png"}
                  />
                </Link>
              </motion.div>
            </div>
          </div>

          <div
            className={`${styles.flexRow}  ${styles.widthMid}`}
            style={{
              justifyContent: "space-between",
              marginTop: "6vw",
            }}
          >
            <div style={{ marginTop: "1vw" }}>
              <div
                className={styles.heading2}
                style={{
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                Data<span style={{ color: "#FF88C3" }}> Analytics</span>
                {!isMobile && <br />} Integration
              </div>
              <div
                className={styles.text1}
                style={{
                  marginBottom: "1vw",
                  fontWeight: "600",
                }}
              >
                Seamless Integration for E-commerce and
                <br />
                Data Analytics
              </div>
              <div style={{ marginBottom: ".5vw" }}>
                Unlock the Power of Your Data
              </div>

              <div>
                <Image
                  alt="anylitic"
                  width={505}
                  height={258}
                  src={"/anylitic.png"}
                  className={styles.imgMin}
                  style={{ marginTop: "1vw" }}
                />
              </div>

              <motion.div
                className={styles.btnReadMore}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.99 }}
              >
                <Link href={"/services/data-integration"}>
                  <Image
                    alt="read"
                    width={505}
                    height={258}
                    className={styles.btnReadMore}
                    src={"/read.png"}
                  />
                </Link>
              </motion.div>
              {/* <div>
                <Link href={"/services/data-integration"}>
                  <motion.button
                    key={"id45"}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.99 }}
                    style={{ color: "white" }}
                    className={`${styles.text2} ${styles.btnReadMore} `}
                  >
                    Read More
                  </motion.button>
                </Link>
              </div> */}
            </div>

            <div>
              <Image
                className={styles.imgPy}
                alt="py"
                width={1960}
                height={1350}
                src={"/py.png"}
                style={{ marginTop: "1vw" }}
              />
            </div>
          </div>

          {isMobile ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "black",
                gap: "4vw",
                textAlign: "center",
                marginBottom: "10vw",
                marginTop: "10vw",
              }}
            >
              <div
                style={{ marginTop: "10vw", width: "80%", alignSelf: "center" }}
                className={styles.heading1}
              >
                Increase
                <span style={{ fontWeight: "lighter" }}>
                  {" "}
                  your velocity{" "}
                </span>{" "}
                and{" "}
                <span style={{ color: "#8FD5CC" }}>
                  {" "}
                  resilience with Ace8
                </span>{" "}
              </div>
              <div
                style={{ width: "80%", alignSelf: "center" }}
                className={styles.text2}
              >
                We make you move faster, reliably, unlocking your full
                potential. From architectural and implementation assessments to
                full deliveries, we believe in continuous innovation. Our
                offerings span assessments and services covering Microservices,
                Message Brokers, DevSecOps, and more. Explore our optimized
                products like Onboarding as as Service and Golang Starter Kits
                to help kickstart your Digital Transformation Today. Ready to
                innovate relentlessly? Choose Ace8 for transformative tech
                solutions.
              </div>
              <motion.button
                onClick={() => scrollToContactForm()}
                style={{
                  marginBottom: "10vw",
                  width: "66%",
                  alignSelf: "center",
                  height: "8vw",
                }}
                key={"id45"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.91 }}
                className={styles.btnSignup}
              >
                Contact Us for Streamlined Software Delivery
              </motion.button>
            </div>
          ) : (
            <motion.div
              onClick={() => scrollToContactForm()}
              style={{ marginTop: "5vw", marginBottom: "10vw" }}
              key={"id45"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.99 }}
            >
              <Image
                alt="inc"
                width={6480}
                height={2296}
                src={"/inc.png"}
                style={{ width: "80vw", height: "auto", marginTop: "1vw" }}
              />
            </motion.div>
          )}

          {/* <div
            style={{ background: "red", width: "100%", height: "10vw" }}
          
          > */}
          <ContactForm id="contactForm" />
          {/* </div> */}
        </div>
      </motion.div>
    </div>
  );
};
export default Servicepage;
