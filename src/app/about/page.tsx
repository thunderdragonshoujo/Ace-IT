/** @format */
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import styles from "./about.module.css";
import { colors } from "../../utils/Theme";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Aboutpage = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [b1h, setB1h] = useState(false);
  const [b2h, setB2h] = useState(false);
  const [b3h, setB3h] = useState(false);
  const [b4h, setB4h] = useState(false);
  const [b5h, setB5h] = useState(false);
  // Animation Controls //
  const control = useAnimation();
  const control1 = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();
  const control4 = useAnimation();
  const control5 = useAnimation();

  // Animation InViews //

  const [ref, InView] = useInView();
  const [ref1, InView1] = useInView();
  const [ref2, InView2] = useInView();
  const [ref3, InView3] = useInView();
  const [ref4, InView4] = useInView();
  const [ref5, InView5] = useInView();

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
  if (InView5) {
    control5.start({ opacity: 1, y: 0, x: 0 });
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
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      {!isMobile && (
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            alt="abt"
            height={896}
            width={1920}
            style={{
              width: "99vw",
              height: "auto",
            }}
            src={"/AboutHeader.png"}
          />
          <div
            style={{
              width: "99vw",
              height: "100%",
              backgroundColor: "#000",
              position: "absolute",
              mixBlendMode: "soft-light",
            }}
          ></div>

          <motion.div
            ref={ref}
            animate={control}
            initial={{ x: -50, opacity: 0 }}
            transition={{ duration: 1 }}
            className={`${styles.header} ${styles.alignCenter}`}
          >
            <span className={styles.head1}>
              Passionate{" "}
              <span className={styles.normal}>
                {" "}
                About <br /> Providing
              </span>
              <span style={{ color: colors.primary, fontWeight: 900 }}>
                {" "}
                Extreme Value
              </span>{" "}
              <br />
            </span>
            <span className={styles.line1}>
              Ace8 is people focused organization that is dedicated to
              underpromising and overdeliverying. We have a strong{" "}
              {!isMobile && <br />} belief system and set of{" "}
              <span style={{ color: colors.primary }}>values </span> that we
              lead with in all of our client interactions.
            </span>
          </motion.div>
        </div>
      )}
      {isMobile && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{}}>
            <Image
              alt="abt"
              height={896}
              width={1920}
              style={{ width: "99vw", height: "auto" }}
              src={"/mblAbout.png"}
            />
          </div>

          <motion.div
            ref={ref}
            animate={control}
            initial={{ x: -50, opacity: 0 }}
            transition={{ duration: 1 }}
            style={{ position: "absolute", textAlign: "center" }}
            // className={`${styles.header} ${styles.alignCenter}`}
          >
            <div>
              <span className={styles.head1}>
                Passionate{" "}
                <span className={styles.normal}>
                  {" "}
                  <br /> About Providing
                </span>
                <br />
                <span style={{ color: colors.primary, fontWeight: 900 }}>
                  {" "}
                  Extreme Value
                </span>{" "}
                <br />
              </span>
            </div>
            <div className={styles.line1}>
              Ace8 is people focused organization that is dedicated <br /> to
              underpromising and overdeliverying. We have a<br /> strong{" "}
              {!isMobile && <br />} belief system and set of{" "}
              {/* <span style={{ color: colors.primary }}> */}
              values {/* </span> */}
              that we lead with <br />
              in all of our client interactions.
            </div>
          </motion.div>
        </div>
      )}
      {/* Truesed Container */}

      <motion.div
        ref={ref5}
        animate={control5}
        initial={{ x: 50, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div
          className={styles.contentContainer}
          style={{ backgroundColor: "#050717" }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "2vw" }}>
            <div className={styles.devContentContainer}>
              <div
                className={styles.h3}
                style={{ fontSize: isMobile ? "" : "2.4rem" }}
              >
                Strategically Aligned{!isMobile && <br />} With{" "}
                <span style={{ color: colors.primary }}> Industry Leaders</span>
              </div>
            </div>

            {isMobile ? (
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                style={{
                  height: "20vh",
                  width: "80vw",
                }}
              >
                <SwiperSlide
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Image
                    alt="bg"
                    height={896}
                    width={1920}
                    src={"/brand1h.png"}
                    style={{ width: "20vw", height: "auto" }}
                  />
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Image
                    alt="bg"
                    height={896}
                    width={1920}
                    src={"/brand2k.png"}
                    style={{ width: "40vw", height: "auto" }}
                  />
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Image
                    alt="bg"
                    height={896}
                    width={1920}
                    src={"/brand3h.png"}
                    style={{ width: "40vw", height: "auto" }}
                  />
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Image
                    alt="bg"
                    height={896}
                    width={1920}
                    src={"/brand4h.png"}
                    style={{ width: "40vw", height: "auto" }}
                  />
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Image
                    alt="bg"
                    height={896}
                    width={1920}
                    src={"/brand5h.png"}
                    style={{ width: "30vw", height: "auto" }}
                  />
                </SwiperSlide>
              </Swiper>
            ) : (
              <div
                style={{
                  display: "flex",
                  width: "70vw",
                  gap: "4vw",
                  alignItems: "center",
                  height: "6vw",
                  flexDirection: "row",
                }}
              >
                <div
                  onMouseEnter={() => setB1h(true)}
                  onMouseLeave={() => setB1h(false)}
                  style={{
                    position: "relative",
                    width: "5vw",
                    height: "auto",
                  }}
                >
                  <Image
                    alt="bg"
                    height={896}
                    width={1920}
                    src={b1h ? "/brand1h.png" : "/brand1.png"}
                  />
                </div>
                <div
                  onMouseEnter={() => {
                    setB2h(true);
                    console.log("sss");
                  }}
                  onMouseLeave={() => setB2h(false)}
                  style={{
                    position: "relative",
                    width: "17vw",
                    height: "auto",
                  }}
                >
                  <Image
                    alt="bg"
                    height={896}
                    width={1920}
                    src={b2h ? "/brand2k.png" : "/brand2.png"}
                  />
                </div>
                <div
                  onMouseEnter={() => {
                    setB3h(true);
                    console.log("sss");
                  }}
                  onMouseLeave={() => setB3h(false)}
                  style={{
                    position: "relative",
                    width: "14vw",
                    height: "auto",
                  }}
                >
                  <Image
                    alt="bg"
                    height={896}
                    width={1920}
                    src={b3h ? "/brand3h.png" : "/brand3.png"}
                  />
                </div>

                <div
                  onMouseEnter={() => {
                    setB4h(true);
                    console.log("sss");
                  }}
                  onMouseLeave={() => setB4h(false)}
                  style={{
                    position: "relative",
                    width: "14vw",
                    height: "auto",
                  }}
                >
                  <Image
                    alt="bg"
                    height={896}
                    width={1920}
                    src={b4h ? "/brand4h.png" : "/brand4.png"}
                  />
                </div>

                <div
                  onMouseEnter={() => {
                    setB5h(true);
                    console.log("sss");
                  }}
                  onMouseLeave={() => setB5h(false)}
                  style={{
                    position: "relative",
                    width: "14vw",
                    height: "auto",
                  }}
                >
                  <Image
                    alt="bg"
                    height={896}
                    width={1920}
                    src={b5h ? "/brand5h.png" : "/brand5.png"}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
      {/* ------ */}

      <div
        style={{
          background: "#fff",
          flexDirection: "column",

          alignItems: "center",
          display: "flex",
        }}
      >
        <motion.div
          ref={ref1}
          animate={control1}
          initial={{ y: -50, x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          style={{ width: "70vw" }}
        >
          <div className={styles.storyText}>
            Our <span style={{ color: "#000" }}>Story</span>{" "}
          </div>

          <div className={styles.stryMain}>
            <div className={styles.storyText1}>
              Ace8 is a globally recognized full-stack specialist at the
              forefront of DevSecOps, Cloud, Data, and Message Queueing
              solutions. Our core competencies lie in{"\n"}delivering
              cutting-edge technologies and services in 8 specific domains
              ranging from Advanced Architectures to Microservices, Code &
              Development. With a firm commitment to both cloud-based and
              on-premise solutions, Ace8 has established itself as the leading
              multi-vendor partner since its inception in 2016.
            </div>
          </div>

          <div className={styles.stryMain}>
            <div className={styles.storyText1}>
              Our best-of-breed approach sets us apart, empowering organizations
              worldwide to select tailor-made services and strategies that align
              with their unique requirements,{"\n"}regardless of their size or
              industry. Over the years, Ace8 has successfully migrated and
              guided over 50+ organizations on their digital transformation
              journey.
            </div>
          </div>

          <div
            className={styles.flexRow}
            style={{ gap: "2vw", marginTop: "2vw" }}
          >
            <div
              className={styles.blockChianContainer}
              style={{
                flexDirection: "column",
                position: "relative",
                display: "flex",
              }}
            >
              <Image
                alt="blockChain"
                height={487}
                width={700}
                style={{ height: "auto" }}
                src={"/BlockChain.png"}
                className={styles.blockChianContainer}
              />

              <Image
                className={styles.blockChainCode}
                alt="blockChain"
                height={351}
                width={231}
                style={{
                  height: "auto",
                  position: "absolute",
                  bottom: "-5vw",
                  left: "-3vw",
                }}
                src={"/BlockChainCode.png"}
              />
            </div>

            <div
              className={`${styles.storyText2}  ${styles.contentWidth} ${styles.mt10}`}
            >
              Ace8&apos;s comprehensive solutions offer unparalleled flexibility
              to organizations,{"\n"}transforming them into digital agencies
              capable of enhancing customer relationships and introducing
              innovative services, products, and business models. We firmly
              believe that embracing an API-first and Cloud-first <br />
              strategy is the key to unlocking this flexibility in technology,
              knowledge, and financial success.
              <br />
              <div
                className={`${styles.storyText2}  ${styles.contentWidth}`}
                style={{ marginTop: "2vw" }}
              >
                To enable organizations to embrace this vision, Ace8 provides a
                wide range of services, including Advanced Architectures,
                Messaging and Queuing, DevSecOps, Cloud-Native, Extreme
                Automation, Data Management and Solutions, Support and Incident
                Management and Micorservices, Code, and Development. With a
                dedicated team of over 50+ experts specializing in our 8
                domains, Ace8 stands tall as one of the most esteemed Digital
                Transformation specialists worldwide.
                <br />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref2}
          initial={{ x: -50, opacity: 0 }}
          animate={control2}
          transition={{ duration: 1 }}
          style={{ width: "70vw" }}
        >
          <div className={styles.Aceheading} style={{ color: "#000" }}>
            The Ace8 <span style={{ color: "#eb9fff" }}>domains</span>
          </div>
          <div className={styles.storyText1}>
            At Ace8, we empower businesses to thrive in the digital age through
            cutting-edge technology services spanning eight crucial domains.
            From Advanced Architectures to Microservices, Code & Development,
            we&apos;re dedicated to delivering unparalleled expertise and
            innovative solutions tailored to meet your specific needs.
          </div>

          <Image
            alt="GroupServices"
            width={1682}
            height={536}
            style={{
              width: "87vw",
              height: "auto",
              marginTop: "3vw",
              backgroundColor: "red",
            }}
            src={"/GroupServices.png"}
          />
        </motion.div>

        <motion.div
          ref={ref3}
          animate={control3}
          initial={{ x: -50, y: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          className={styles.mb10}
          style={{
            width: "70vw",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            className={styles.Aceheading}
            style={{ color: "#000", marginTop: "5vw" }}
          >
            Our<span style={{ color: "#eb9fff" }}> Industries</span>
          </div>
          <div className={styles.storyText1}>
            Ace8 is a globally recognized full-stack specialist at the forefront
            of DevOps, Cloud, Data, and Messaging and Queueing solutions. Our
            core competencies lie in delivering cutting-edge technologies and
            services for API management, Integration technology, and Identity
            Management. With a firm commitment to both cloud- based and
            on-premise iPaaS solutions, Ace8 has established itself as the
            leading multi-vendor Integration Partner since its inception in
            2007.
          </div>

          {isMobile ? (
            <>
              <div>
                <Image
                  alt="abt"
                  height={896}
                  width={1920}
                  style={{ width: "80vw", height: "auto" }}
                  src={"/flow1.png"}
                />
              </div>
              <div>
                <Image
                  alt="abt"
                  height={896}
                  width={1920}
                  style={{ width: "80vw", height: "auto" }}
                  src={"/flow2.png"}
                />
              </div>
              <div>
                <Image
                  alt="abt"
                  height={896}
                  width={1920}
                  style={{ width: "80vw", height: "auto" }}
                  src={"/flow3.png"}
                />
              </div>
              <div>
                <Image
                  alt="abt"
                  height={896}
                  width={1920}
                  style={{
                    width: "80vw",
                    height: "auto",
                    marginTop: "2vw",
                    marginBottom: "4vw",
                  }}
                  src={"/flow4.png"}
                />
              </div>
            </>
          ) : (
            <div>
              <Image
                alt="abt"
                height={896}
                width={1920}
                style={{
                  width: "80vw",
                  height: "auto",
                  marginTop: "2vw",
                  marginBottom: "3vw",
                }}
                src={"/industries.png"}
              />
            </div>
          )}

          {/* NNN */}
        </motion.div>
      </div>
      <div
        style={{
          width: "99vw",
          backgroundColor: "#0D1117",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <motion.div
          ref={ref4}
          initial={{ x: -50, opacity: 0 }}
          animate={control4}
          transition={{ duration: 1 }}
          className={styles.gap10}
          style={{
            display: "flex",
            backgroundColor: "#0D1117",
            flexDirection: "column",
            height: "auto",
            alignItems: "center",
            width: "70vw",
            justifyContent: "center",
          }}
        >
          <div
            className={`${styles.heading2} `}
            style={{
              textAlign: "center",
              marginTop: "5vw",
              fontWeight: "lighter",
            }}
          >
            With over 100 years of experience,
            <span style={{ color: "#fff", fontWeight: "bold" }}>and </span>
            <span style={{ color: "#8ACDC5", fontWeight: "bold" }}>
              the
              {!isMobile && <br />} desire to always stay on the cutting edge,
            </span>
            <span style={{ color: "#fff", fontWeight: "lighter" }}> we</span>
            {!isMobile && <br />}
            are empowered{" "}
            <span style={{ color: "#fff", fontWeight: "bold" }}>
              to transform your business.
            </span>
          </div>

          <div
            className={`${styles.heading2}  `}
            style={{ fontWeight: "bold", marginTop: "2vw" }}
          >
            <span style={{ color: "#8ACDC5" }}>Our</span> Belief
          </div>

          {isMobile ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                alignItems: "center",
                gap: "19vw",
              }}
            >
              <div>
                <Image
                  alt="abt"
                  height={896}
                  width={1920}
                  style={{ width: "80vw", height: "auto" }}
                  src={"/expflow1.png"}
                />
              </div>
              <div>
                <Image
                  alt="abt"
                  height={896}
                  width={1920}
                  style={{ width: "80vw", height: "auto" }}
                  src={"/expflow2.png"}
                />
              </div>
              <div>
                <Image
                  alt="abt"
                  height={896}
                  width={1920}
                  style={{ width: "80vw", height: "auto" }}
                  src={"/expflow3.png"}
                />
              </div>
            </div>
          ) : (
            <div>
              <Image
                alt="abt"
                height={896}
                width={1920}
                style={{ width: "100vw", height: "auto" }}
                src={"/tree.png"}
              />
            </div>
          )}
          {isMobile ? (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "7vw" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "2vw",
                  textAlign: "center",
                  width: "40vw",
                }}
              >
                <div className={styles.numberStyles}>01</div>
                <Image
                  alt="abt"
                  height={896}
                  width={1920}
                  style={{ width: "25vw", height: "auto" }}
                  src={"/1wflow.png"}
                />
                <div className={styles.text1}>We love Challenges</div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "2vw",
                  textAlign: "center",
                  width: "40vw",
                }}
              >
                <div className={styles.numberStyles}>02</div>
                <Image
                  alt="abt"
                  height={896}
                  width={1920}
                  style={{ width: "25vw", height: "auto" }}
                  src={"/2wflow.png"}
                />
                <div className={styles.text1}>
                  We love solving business problems
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "2vw",
                  textAlign: "center",
                  width: "40vw",
                }}
              >
                <div className={styles.numberStyles}>03</div>
                <Image
                  alt="abt"
                  height={896}
                  width={1920}
                  style={{ width: "25vw", height: "auto" }}
                  src={"/3wflow.png"}
                />
                <div className={styles.text1}>
                  We love engaging with our customers
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "2vw",
                  textAlign: "center",
                  width: "40vw",
                }}
              >
                <div className={styles.numberStyles}>04</div>
                <Image
                  alt="abt"
                  height={896}
                  width={1920}
                  style={{ width: "25vw", height: "auto" }}
                  src={"/4wflow.png"}
                />
                <div className={styles.text1}>
                  We genuinely enjoy working with intelligent people
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "2vw",
                  textAlign: "center",
                  width: "40vw",
                }}
              >
                <div className={styles.numberStyles}>05</div>
                <Image
                  alt="abt"
                  height={896}
                  width={1920}
                  style={{ width: "25vw", height: "auto" }}
                  src={"/5wflow.png"}
                />
                <div className={styles.text1}>
                  We believe our efforts should contribute to the greater
                  community
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {isMobile ? (
            <div>
              <Image
                alt="value"
                height={896}
                width={1920}
                style={{ width: "75vw", height: "auto", marginTop: "2.5vw" }}
                src={"/aboutmobplan.png"}
              />
            </div>
          ) : (
            <div>
              <Image
                alt="value"
                height={896}
                width={1920}
                style={{ width: "82vw", height: "auto", marginTop: "2.5vw" }}
                src={"/values.png"}
              />
            </div>
          )}

          <div style={{ display: "flex", gap: "2vw" }}>
            <motion.div
              key={"id18"}
              whileHover={{ scale: isMobile ? 1 : 1.1 }}
              whileTap={{ scale: isMobile ? 1 : 0.9 }}
              style={{
                justifyContent: "space-around",
                alignItems: "center",
                width: "70vw",
                flexDirection: isMobile ? "column" : "row",
              }}
              className={styles.devSection}
            >
              <div className={styles.devContentContainer}>
                <div
                  className={styles.h3}
                  style={{ fontSize: isMobile ? "" : "2vw" }}
                >
                  Strategically Aligned{!isMobile && <br />} With{" "}
                  <span style={{ color: colors.primary }}>
                    {" "}
                    Industry Leaders
                  </span>
                </div>
              </div>
              {isMobile && (
                <Swiper
                  loop={true}
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={false}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                  style={{
                    height: "20vh",
                    width: "40vw",
                  }}
                >
                  <SwiperSlide
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Image
                      style={{ width: "25vw", height: "auto" }}
                      alt="bg"
                      height={896}
                      width={1920}
                      // className={styles.indImage}
                      src={"/aws.png"}
                    />
                  </SwiperSlide>
                  <SwiperSlide
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{ width: "60vw", height: "auto" }}
                      src={"/vmware.png"}
                    />
                  </SwiperSlide>
                  <SwiperSlide
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{ width: "60vw", height: "auto" }}
                      src={"/rabbitmq.png"}
                    />
                  </SwiperSlide>
                  <SwiperSlide
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Image
                      alt="bg"
                      height={95}
                      width={348}
                      style={{ width: "60vw", height: "auto" }}
                      src={"/broadcom.png"}
                    />
                  </SwiperSlide>
                </Swiper>
              )}
              {!isMobile && (
                <>
                  <div>
                    <Image
                      style={{
                        width: isMobile ? "15vw" : "4vw",
                        height: "auto",
                        marginTop: isMobile ? "2vw" : "0vw",
                      }}
                      alt="bg"
                      height={896}
                      width={1920}
                      // className={styles.indImage}
                      src={"/aws.png"}
                    />
                  </div>
                  <div>
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      className={styles.indImage}
                      src={"/vmware.png"}
                    />
                  </div>
                  <div>
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      className={styles.indImage}
                      src={"/rabbitmq.png"}
                    />
                  </div>
                  <div>
                    <Image
                      alt="bg"
                      height={95}
                      width={348}
                      className={styles.indImage}
                      src={"/broadcom.png"}
                    />
                  </div>
                </>
              )}
            </motion.div>
          </div>
          {/* <div>
          <Image
          alt="value"
          height={896}
          width={1920}
          style={{ width: "100vw", height: "auto", marginTop: "6.5vw" }}
          src={"/strategy.png"}
          />
        </div> */}
        </motion.div>
      </div>
    </div>
  );
};

//
export default Aboutpage;
