"use client";
import Image from "next/image";
import styles from "./home.module.css";
import { colors } from "@/utils/Theme";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
  const [b1h, setB1h] = useState(false);
  const [b2h, setB2h] = useState(false);
  const [b3h, setB3h] = useState(false);
  const [b4h, setB4h] = useState(false);
  const [b5h, setB5h] = useState(false);

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const roleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(event:any){
    event.preventDefault();
    const notify = () => toast('Thank you for your interest, we will contact you soon.', {
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
      firstName: firstNameRef.current?.value || '',
      lastName: lastNameRef.current?.value || '',
      email: emailRef.current?.value || '',
      contact: contactRef.current?.value || '',
      company: companyRef.current?.value || '',
      role: roleRef.current?.value || '',
      description: descriptionRef.current?.value || ''
    };

    axios({
      method:"POST",
      //url: 'http://44.239.43.181:8085/v1/sendSesEmail',
      url: 'https://zit7ilzh5f.execute-api.us-east-1.amazonaws.com/aws/contact',
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

  //  ANIMATION CONTROLS
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();
  const controls7 = useAnimation();
  const controls8 = useAnimation();
  const controls9 = useAnimation();
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
  const [displayNav, setDsiplayNav] = useState(true);
  const [isMobile, setisMobile] = useState(false);
  const [title, setTitle] = useState("Featured Services");
  const [imgUrl, setImgUrl] = useState("");
  const [ide, setide] = useState(0);
  const [visibility, setVisibility] = useState(false);

  const headings = [
    {
      head: "Featured Services",
      pic: "/auto1.png",
      desc: "/landingHead.png",
    },
    {
      head: "DevSecOps",
      pic: "/devIcon.png",
      desc: "Bridging the gap between development,  security, and operations. Achieve efficient and secure software delivery through collaboration, automation, and a security-first approach.",
    },
    {
      head: "Onboarding as a Service",
      pic: "/do4.png",
      desc: "Accelerate software delivery with our streamlined  CI/CD solution, including automated onboarding and customizable off-boarding for efficient development cycles. Spin up entire environments in hours not days.",
    },
    {
      head: "Incident Managements",
      pic: "/do5.png",
      desc: "Top-notch full-stack  incident management services that prioritize preparation, documentation, and proactive measures to minimize downtime and avoid loss of revenue.",
    },
    {
      head: "Message Brokers",
      pic: "/message.png",
      desc: "Your trusted partner for seamless integration of message brokers. With troubleshooting expertise, consulting and assessment services, and comprehensive support, we optimize performance and ensure smooth operations for your technology stack.",
    },
    {
      head: "Microservices Design",
      pic: "/do6.png",
      desc: "AceMQ offers comprehensive microservices design, development, and refactoring services that strictly adhere to industry best practices, including loose coupling and the 12Factor approach.",
    },
    {
      head: "Data Analytics Integration",
      pic: "/do2.png",
      desc: "Differentiating through our unique integration approach. Seamlessly integrate e-commerce data with Databricks/Snowflake. Design consulting, cost optimization, and fault tolerance ensure efficient, uninterrupted access to critical data.",
    },
    {
      head: "Automated Testing",
      pic: "/do3.png",
      desc: "Experience the efficiency of automated testing for your e-commerce application. Our unique approach includes AI-enhanced test code, seamless  CI/CD integration, and crowd-sourced test case development to save time and resources. ",
    },
  ];
  const items = [];
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
  if (inView8) {
    controls8.start({ x: 0, opacity: 1 });
  }
  if (inView9) {
    setDsiplayNav(false);
    // controls9.start({ x: 0, opacity: 1 });
  }

  const handleTitleChange = (obj: any) => {
    console.log(obj.image, "img");
    console.log("IMG", obj?.pic);
    setImgUrl(obj?.pic);
    setTitle(obj?.title);
    setide(obj?.id);
  };

  useEffect(() => {
    const handleSize = () => {
      if (typeof window !== undefined && window.innerWidth < 870) {
        setisMobile(true);
      } else {
        setisMobile(false);
      }
    };

    if (typeof window !== undefined) {
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
        height: "",
      }}
    >
      <Image
        alt="abt"
        height={896}
        width={1920}
        style={{
          width: "100vw",
          height: "auto",
          position: "absolute",
          top: "-5vw",
        }}
        src={"/bg1.png"}
      />
      <Image
        alt="abt"
        className={styles.headerLine}
        height={896}
        width={1920}
        src={"/headerLineBottom.png"}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: isMobile ? "99vw" : "90vw",
          // position: "absolute",
          position: "relative",
          // top: "-60.9vw",
          marginTop: "7vw",
          justifyContent: "center",
        }}
      >
        {/* CONTAINER 1  */}
        <div className={styles.contentContainer1}>
          {!isMobile && (
            <div style={{}} className={styles.linesDiv}>
              <div>
                <Image
                  className={styles.lineStyles}
                  alt="bg"
                  height={896}
                  width={1920}
                  src={"/line1.png"}
                />
              </div>
            </div>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "26vw",
            }}
          >
            <div
              style={{ fontSize: isMobile ? "8vw" : "3vw" }}
              className={styles.head1}
            >
              We Empower
            </div>
            {/* <div className={styles.h2}>Innovations</div> */}
            <div
              style={{
                color: colors.primary,
                fontSize: "6vw",
                lineHeight: isMobile ? "8vw" : "4vw",
              }}
              className={styles.headL}
            >
              Innovations
            </div>
            <div className={styles.line1}>
              We are a people-focused organization that solves business{" "}
              {isMobile && <br />}problems through {!isMobile && <br />}{" "}
              technology.
            </div>
            <motion.button
              key={"id23"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              // className={classes.btnPayment}
              type="submit"
              className={styles.btn}
            >
              Learn more
            </motion.button>
          </div>
        </div>
        {/* CONTAINER 2  */}
        <motion.div
          ref={ref}
          initial={{ x: 50, opacity: 0 }}
          animate={controls}
          transition={{ duration: 1 }}
          className={styles.contentContainer}
        >
          {!isMobile && (
            <div className={styles.lineDiv}>
              <div>
                <Image
                  className={styles.lineStyles}
                  alt="bgx"
                  height={896}
                  width={1920}
                  // style={{ width: "2vw", height: "auto" }}
                  src={"/line2.png"}
                />
              </div>
            </div>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2vw",
            }}
          >
            <div
              className={styles.h3}
              style={{
                marginTop: isMobile ? "20vw" : "0vw",
                marginLeft: isMobile ? "18vw" : "0vw",
              }}
            >
              Trusted By{" "}
              <span style={{ color: "#9B86FE" }}>Brands Globally</span>
            </div>
            {!isMobile && (
              <div
                style={{
                  display: "flex",
                  width: isMobile ? "99vw" : "80vw",
                  gap: "4vw",
                  alignItems: "center",
                  height: isMobile ? "auto" : "6vw",
                  flexDirection: isMobile ? "column" : "row",
                  paddingTop: isMobile ? "2vw" : "0vw",
                  paddingBottom: isMobile ? "2vw" : "0vw",
                }}
              >
                <div
                  onMouseEnter={() => setB1h(true)}
                  onMouseLeave={() => setB1h(false)}
                  style={{
                    position: "relative",
                    width: isMobile ? "10vw" : "5vw",
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
                    width: isMobile ? "20vw" : "17vw",
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
                    width: isMobile ? "20vw" : "14vw",
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
                    width: isMobile ? "20vw" : "14vw",
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
                    width: isMobile ? "20vw" : "14vw",
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
            {isMobile && (
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
            )}
          </div>
        </motion.div>
        {/* CONTAINER 3  */}
        <motion.div
          ref={ref2}
          initial={{ y: -100, opacity: 0 }}
          animate={controls2}
          transition={{ duration: 1 }}
          className={styles.contentContainer}
          // style={{ marginBottom: "21vw" }}
        >
          {!isMobile && (
            <div className={styles.linesDiv}>
              <div>
                <Image
                  className={styles.lineStyles}
                  alt="bg"
                  height={896}
                  width={1920}
                  // style={{ width: "3vw", height: "auto" }}
                  src={"/line3.png"}
                />
              </div>
            </div>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2vw",
              width: isMobile ? "99vw" : "53vw",
              position: "relative",
            }}
          >
            <div
              style={{
                fontSize: isMobile ? "4vw" : "1.7vw",
                marginLeft: isMobile ? "38vw" : "0vw",
              }}
            >
              Who we are
            </div>

            <div
              style={{
                fontSize: isMobile ? "4vw" : "3vw",
                fontWeight: "bold",
                lineHeight: isMobile ? "5vw" : "4vw",
                textAlign: isMobile ? "center" : "unset",
                width: isMobile ? "80vw" : "auto",
                alignSelf: "center",
              }}
            >
              We are a
              <span
                style={{
                  color: "#FF88C3",
                }}
              >
                {" "}
                People-Focused {!isMobile && <br />} Organization
              </span>{" "}
              that{" "}
              <span style={{ fontWeight: "lighter" }}>
                {" "}
                Solves
                {!isMobile && <br />} Business Problems
              </span>
              <span style={{ color: "#9B86FE" }}>
                {" "}
                Through {!isMobile && <br />}
                Technology<span style={{ color: "white" }}>.</span>
              </span>
            </div>
            <div
              style={{
                fontSize: isMobile ? "3vw" : "1vw",
                lineHeight: isMobile ? "4vw" : "1.8vw",
                textAlign: isMobile ? "center" : "unset",
                width: isMobile ? "90vw" : "auto",
                alignSelf: isMobile ? "center" : "unset",
                marginTop: isMobile ? "1vw" : "0vw",
              }}
            >
              Ace8 is not just technology services company; we are your
              strategic partner in navigating the ever-evolving landscape of
              technology. We offer an opportunity to envision your solution as a
              roadmap where we collaborate to create, reinvent, and continuously
              deploy services, capabilities, and solutions to solve your
              business challenges.
            </div>
            {isMobile && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  marginTop: "2vw",
                }}
              >
                <Image
                  alt="bg"
                  height={896}
                  width={1920}
                  style={{ width: "60vw", height: "auto" }}
                  src={"/home1.png"}
                />
              </div>
            )}

            <div
              style={{
                display: "flex",
                alignItems: isMobile ? "center" : "normal",
                flexDirection: "column",
              }}
            >
              <Link href={"/about"}>
                <motion.button
                  key={"id1"}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  // style={{
                  //   alignSelf: isMobile ? "center" : "normal",
                  // }}
                  className={styles.btn}
                >
                  More About Us
                </motion.button>
              </Link>
            </div>
          </div>

          {!isMobile && (
            <div>
              <Image
                alt="bg"
                height={896}
                width={1920}
                style={{ width: "40vw", height: "auto" }}
                src={"/home1.png"}
              />
            </div>
          )}
        </motion.div>
        {/* CONTAINER 4  */}
        <motion.div
          ref={ref3}
          initial={{ x: -50, opacity: 0 }}
          animate={controls3}
          transition={{ duration: 0.5 }}
          className={styles.contentContainer}
        >
          {!isMobile && (
            <div className={styles.linesDiv}>
              <div>
                <Image
                  className={styles.lineStyles}
                  alt="bg"
                  height={896}
                  width={1920}
                  // style={{ width: "3vw", height: "auto" }}
                  src={"/line4.png"}
                />
              </div>
            </div>
          )}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: isMobile ? "3vw" : "0vw",
              width: "99vw",
            }}
          >
            <div
              className={styles.sectionHeadings}
              style={{
                color: "#FF88C3",
                gap: "3vw",
                textAlign: isMobile ? "center" : "unset",
                marginTop: isMobile ? "" : "3vw",
              }}
            >
              Our
              <span
                style={{
                  color: "white",
                }}
              >
                {" "}
                8 Domains
              </span>{" "}
            </div>
            <div
              style={{
                fontSize: isMobile ? "3vw" : ".9vw",
                lineHeight: isMobile ? "4vw" : "1.8vw",
                textAlign: isMobile ? "center" : "unset",
                width: isMobile ? "80vw" : "auto",
                alignSelf: isMobile ? "center" : "normal",
                marginBottom: isMobile ? 0 : "4vw",
              }}
            >
              At Ace8, we empower businesses to thrive in the digital age
              through cutting-edge technology services spanning eight crucial
              domains. From Advanced Architectures to Microservices, Code &
              Development, we&apos;re dedicated to delivering unparalleled
              expertise and innovative solutions tailored to meet your specific
              needs.
            </div>
            <div className={styles.domainsContainer}>
              <div className={styles.servicesContainer}>
                <div
                  style={{
                    position: "relative",
                    top: isMobile ? "0vw" : "3vw",
                  }}
                  className={styles.serviceItem}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "1vw",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "15vw" : "5vw",
                        height: "auto",
                      }}
                      src={"/serviceIcon1.png"}
                    />
                    {/* <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "5vw" : "2.5vw",
                        height: "auto",
                      }}
                      src={"/1.png"}
                    /> */}
                    <div
                      style={{
                        color: colors.secondary,
                      }}
                      className={styles.numberStyles}
                    >
                      1
                    </div>
                  </div>
                  <div className={styles.serviceHeading}>
                    Advanced Architectures <br />{" "}
                    <span style={{ color: "#FF88C3" }}>(AceEA)</span>
                  </div>
                  <div
                    // style={{ lineHeight: "1.8vw" }}
                    className={styles.servieText}
                  >
                    Our team of experts excels in designing and implementing
                    advanced technology enterprise architectures, ensuring your
                    systems are not just up to date, but ahead of the curve.
                  </div>
                </div>
                <div
                  className={styles.serviceItem}
                  style={{ marginTop: isMobile ? "0" : "-4vw" }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "1vw",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "15vw" : "5vw",
                        height: "auto",
                      }}
                      src={"/s2.png"}
                    />
                    <div
                      style={{
                        color: colors.secondary,
                      }}
                      className={styles.numberStyles}
                    >
                      2
                    </div>
                  </div>
                  <div className={styles.serviceHeading}>
                    Messaging Queuing
                    <br />
                    <span style={{ color: "#FF88C3" }}>(AceMQ)</span>
                  </div>
                  <div style={{}} className={styles.servieText}>
                    Seamless communication is the backbone of any successful
                    enterprise. Ace8 specializes in crafting robust messaging
                    queuing solutions to optimize your data flow and enhance
                    collaboration.
                  </div>
                </div>
                <div
                  className={styles.serviceItem}
                  style={{ marginTop: isMobile ? "0" : "-4vw" }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "1vw",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "15vw" : "5vw",
                        height: "auto",
                      }}
                      src={"/s3.png"}
                    />
                    <div
                      style={{
                        color: colors.secondary,
                      }}
                      className={styles.numberStyles}
                    >
                      3
                    </div>
                  </div>
                  <div className={styles.serviceHeading}>
                    DevSecOps
                    <br />
                    <span style={{ color: "#FF88C3" }}>(AceDSO)</span>
                  </div>
                  <div
                    // style={{ lineHeight: "1.8vw" }}
                    className={styles.servieText}
                  >
                    Security is at the core of everything we do. With our
                    DevSecOps practices, we seamlessly integrate security into
                    the development process, providing you with a robust and
                    secure foundation.
                  </div>
                </div>
                <div
                  style={{
                    position: "relative",
                    top: isMobile ? "0vw" : "3vw",
                  }}
                  className={styles.serviceItem}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "1vw",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "15vw" : "5vw",
                        height: "auto",
                      }}
                      src={"/s4.png"}
                    />
                    <div
                      style={{
                        color: colors.secondary,
                      }}
                      className={styles.numberStyles}
                    >
                      4
                    </div>
                  </div>
                  <div className={styles.serviceHeading}>
                    Cloud-Native
                    <br /> <span style={{ color: "#FF88C3" }}>(AceCloud)</span>
                  </div>
                  <div
                    // style={{ lineHeight: "1.8vw" }}
                    className={styles.servieText}
                  >
                    Ace8 pioneers Cloud-Native solutions, leveraging the power
                    of the cloud to enhance scalability, flexibility, and
                    efficiency. Transform your business operations with our
                    expert cloud services.
                  </div>
                </div>
              </div>
              {!isMobile && (
                <div
                  className={styles.DomainLogoContainer}
                  // style={{ backgroundColor: "red" }}
                >
                  <Image
                    alt="bg"
                    height={896}
                    width={1920}
                    style={{ width: "35vw", height: "auto", marginTop: "-3vw" }}
                    src={"/largeLogo.png"}
                  />
                </div>
              )}
              <div className={styles.servicesContainer} style={{}}>
                <div
                  style={{
                    position: "relative",
                    bottom: isMobile ? "0vw" : "3vw",
                  }}
                  className={styles.serviceItem}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "1vw",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "15vw" : "5vw",
                        height: "auto",
                      }}
                      src={"/s5.png"}
                    />
                    <div
                      style={{
                        color: colors.secondary,
                      }}
                      className={styles.numberStyles}
                    >
                      5
                    </div>
                  </div>
                  <div className={styles.serviceHeading}>
                    Extreme Automation
                    <br />{" "}
                    <span style={{ color: "#FF88C3" }}>(AceAutomate)</span>
                  </div>
                  <div
                    // style={{ lineHeight: "1.8vw" }}
                    className={styles.servieText}
                  >
                    Efficiency is key. Ace8 excels in Extreme Automation,
                    optimizing your workflows and processes, allowing your
                    business to operate at maximum productivity.
                  </div>
                </div>
                <div
                  className={styles.serviceItem}
                  style={{ marginTop: isMobile ? "0" : "4vw" }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "1vw",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "15vw" : "5vw",
                        height: "auto",
                      }}
                      src={"/s6.png"}
                    />
                    <div
                      style={{
                        color: colors.secondary,
                      }}
                      className={styles.numberStyles}
                    >
                      6
                    </div>
                  </div>
                  <div className={styles.serviceHeading}>
                    Data Management and Solutions
                    <br />
                    <span style={{ color: "#FF88C3" }}>(AceData)</span>
                  </div>
                  <div
                    // style={{ lineHeight: "1.8vw" }}
                    className={styles.servieText}
                  >
                    Unlock the full potential of your data with Ace8&apos;s
                    comprehensive Data Management and Solutions. From storage to
                    analytics, we ensure your data is a valuable asset, not a
                    challenge.
                  </div>
                </div>
                <div
                  className={styles.serviceItem}
                  style={{ marginTop: isMobile ? "0" : "4vw" }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "1vw",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "15vw" : "5vw",
                        height: "auto",
                      }}
                      src={"/s7.png"}
                    />
                    <div
                      style={{
                        color: colors.secondary,
                      }}
                      className={styles.numberStyles}
                    >
                      7
                    </div>
                  </div>
                  <div className={styles.serviceHeading}>
                    Support and Incident Management
                    <br />
                    <span style={{ color: "#FF88C3" }}>(AceFortify)</span>
                  </div>
                  <div
                    // style={{ lineHeight: "1.8vw" }}
                    className={styles.servieText}
                  >
                    Our dedicated support and incident management services
                    guarantee that your systems remain operational, minimizing
                    downtime and ensuring a seamless experience for your users.
                  </div>
                </div>
                <div
                  style={{
                    position: "relative",
                    bottom: isMobile ? "0vw" : "3vw",
                  }}
                  className={styles.serviceItem}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "1vw",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "15vw" : "5vw",
                        height: "auto",
                      }}
                      src={"/s8.png"}
                    />
                    <div
                      style={{
                        color: colors.secondary,
                      }}
                      className={styles.numberStyles}
                    >
                      8
                    </div>
                  </div>
                  <div className={styles.serviceHeading}>
                    Microservices/Code <br />
                    /Development
                    <br />
                    <span style={{ color: "#FF88C3" }}>(AceMS)</span>
                  </div>
                  <div
                    // style={{ lineHeight: "1.8vw" }}
                    className={styles.servieText}
                  >
                    Agility with our Microservices/Code/Development expertise.
                    Ace8 empowers you to build and scale applications with ease,
                    fostering innovation and rapid development cycles.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.buttonContainer} style={{}}>
              <Link href={"https://conntalent.com/"}>
                {isMobile && (
                  <motion.button
                    key={"id1"}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={styles.domainButton}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "black",
                        borderRadius: "100%",
                        height: isMobile ? "9vw" : "5vw",
                        width: isMobile ? "9vw" : "5vw",
                      }}
                    >
                      <Image
                        alt="bg"
                        height={896}
                        width={1920}
                        style={{ width: "5vw", height: "auto" }}
                        src={"/user.png"}
                      />
                    </div>
                    <div className={styles.BtnContentContainer}>
                      <div className={styles.btnHeading}>
                        Top-Tier Talent (Conntal)
                      </div>
                      <div
                        style={{ lineHeight: isMobile ? "3.5vw" : "1.8vw" }}
                        className={styles.btnText}
                      >
                        Conntal supports all of our divisions of Ace8 and
                        provides our eternal teams and clients with best of
                        breed talent.
                      </div>
                    </div>
                  </motion.button>
                )}
                {!isMobile && (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Image
                      // className={styles.lineStyles}
                      alt="bg"
                      height={334}
                      width={1318}
                      style={{
                        width: isMobile ? "50vw" : "35vw",
                        height: "auto",
                        // marginRight: "10vw",
                        // marginTop: "5vw",m
                        marginBottom: "15vw",
                      }}
                      src={"/tierbtn.png"}
                    />
                  </motion.div>
                )}
              </Link>
            </div>
          </div>
        </motion.div>
        {/*  CONTAINER 5  */}
        <motion.div
          ref={ref4}
          initial={{ x: -50, opacity: 0 }}
          animate={controls4}
          transition={{ duration: 0.5 }}
          className={styles.contentContainer}
        >
          {!isMobile && (
            <div className={styles.linesDiv}>
              <div>
                <Image
                  className={styles.lineStyles}
                  alt="bg"
                  height={896}
                  width={1920}
                  // style={{ width: "3vw", height: "auto" }}
                  src={"/line5.png"}
                />
              </div>
            </div>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
              left: isMobile ? "0vw" : "-5vw",
              alignSelf: isMobile ? "center" : "normal",
              width: isMobile ? "80vw" : "auto",
              marginTop: isMobile ? "7vw" : "",
            }}
          >
            <div
              style={{
                position: isMobile ? "static" : "relative",
                left: "5vw",
                display: "flex",
                gap: "2vw",
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2vw",
                }}
              >
                <div className={styles.btnFeatures}>Featured Services</div>
                <div
                  style={{
                    fontSize: isMobile ? "5vw" : "3vw",
                    color: "white",
                    fontWeight: "bold",
                    marginTop: isMobile ? "2vw" : "",
                  }}
                >
                  What We Can {!isMobile && <br />} Do{" "}
                  <span style={{ fontWeight: "200" }}> For You:</span>
                </div>
                <div
                  style={{ textAlign: isMobile ? "center" : "unset" }}
                  className={styles.servieText}
                >
                  Ace8 offers a suite of cutting-edge services, from Message
                  Brokers {!isMobile && <br />}to DevSecOps, empowering
                  enterprises with services to thrive {!isMobile && <br />} in
                  today&apos;s digital economy. With streamlined data flow and
                  robust {!isMobile && <br />} development practices, Ace8
                  ensures unparalleled efficiency {!isMobile && <br />} and
                  resilience, driving extreme value for modern businesses.
                </div>
              </div>
              <div className={styles.featuredRight}>
                <div className={styles.featuredInnerChild}>
                  {headings.map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() =>
                          handleTitleChange({
                            title: item.head,
                            pic: item.pic,
                            id: index,
                          })
                        }
                        className={
                          title === item.head ? styles.selectfeatur : ""
                        }
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "2vw",
                          padding: "0.5vw",
                          height: "auto",
                          borderRadius: "1vw",
                        }}
                      >
                        <div className={styles.autoImage}>
                          <Image
                            className={styles.featuredImage}
                            alt="bg"
                            height={896}
                            width={1920}
                            src={item.pic}
                          />
                        </div>
                        <div
                          className={
                            index === 0
                              ? styles.featuredHading
                              : styles.featuredText
                          }
                        >
                          {item.head}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",

                    width: "50%",
                  }}
                >
                  {ide === 0 ? (
                    <div>
                      <Image
                        alt="bg"
                        height={40}
                        width={39}
                        style={{
                          width: "2vw",
                          marginBottom: "1vw",
                          height: "auto",
                          color: "transparent",
                        }}
                        src={"/landingHead.png"}
                      />
                    </div>
                  ) : (
                    <div>
                      <Image
                        alt="bg"
                        height={40}
                        width={39}
                        style={{
                          width: "2vw",
                          marginBottom: "1vw",
                          height: "auto",
                          color: "transparent",
                        }}
                        src={imgUrl}
                      />
                    </div>
                  )}
                  <div className={styles.featuredInnerHeading}>{title}</div>
                  {title === "Featured Services" && (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {" "}
                      <Image
                        alt="bg"
                        height={896}
                        width={1920}
                        style={{
                          width: isMobile ? "40vw" : "18vw",
                          marginTop: "6vw",
                          height: "auto",
                        }}
                        src={"/landingHead.png"}
                      />
                    </div>
                  )}
                  {headings.map((item, index) => {
                    if (ide === 0) {
                      return;
                    }
                    return (
                      <div key={index}>
                        <div className={styles.servieText}>
                          {ide === index && item.desc}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                marginTop: isMobile ? "5vw" : "0vw",
                gap: isMobile ? "0vw" : "2vw",
              }}
            >
              <Link href={"/services/message-brokers"}>
                <motion.div
                  key={"id10"}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={styles.featuredItem}
                >
                  <div style={{ display: "flex", gap: "1vw" }}>
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "8vw" : "3vw",
                        height: "auto",
                      }}
                      src={"/message.png"}
                    />
                  </div>
                  <div className={styles.serviceHeading}>Message Brokers</div>
                  <div className={styles.servieText}>
                    Your trusted partner for seamless integration of message
                    brokers. With troubleshooting expertise, consulting and
                    assessment services, and comprehensive support, we optimize
                    performance and ensure smooth operations for your technology
                    stack.
                    <Image
                      // style={{ display: visibility ? "none" : "block" }}
                      className={styles.featureArrow}
                      height={896}
                      width={1920}
                      src={"/arrowRight.png"}
                      alt={""}
                    ></Image>
                  </div>
                </motion.div>
              </Link>
              <Link href={"/services/data-integration"}>
                <motion.div
                  key={"id11"}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={styles.featuredItem}
                >
                  <div style={{ display: "flex", gap: "1vw" }}>
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "8vw" : "3vw",
                        height: "auto",
                      }}
                      src={"/do2.png"}
                    />
                  </div>
                  <div className={styles.serviceHeading}>
                    Data Analytics Integration 
                  </div>
                  <div className={styles.servieText}>
                    Differentiating through our unique integration approach.
                    Seamlessly integrate e-commerce data with
                    Databricks/Snowflake. Design consulting, cost optimization,
                    and fault tolerance ensure efficient, uninterrupted access
                    to critical data.
                    <Image
                      // style={{ display: visibility ? "none" : "block" }}
                      className={styles.featureArrow}
                      height={896}
                      width={1920}
                      src={"/arrowRight.png"}
                      alt={""}
                    ></Image>
                  </div>
                </motion.div>{" "}
              </Link>
              <Link href={"/services/automation"}>
                <motion.div
                  key={"id12"}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={styles.featuredItem}
                >
                  <div style={{ display: "flex", gap: "1vw" }}>
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "8vw" : "3vw",
                        height: "auto",
                      }}
                      src={"/do3.png"}
                    />
                  </div>
                  <div className={styles.serviceHeading}>Automated Testing</div>
                  <div className={styles.servieText}>
                    Experience the efficiency of automated testing for your
                    e-commerce application. Our unique approach includes
                    AI-enhanced test code, seamless CI/CD integration, and
                    crowd-sourced test case development to save time and
                    resources.
                    <Image
                      // style={{ display: visibility ? "none" : "block" }}
                      className={styles.featureArrow}
                      height={896}
                      width={1920}
                      src={"/arrowRight.png"}
                      alt={""}
                    ></Image>
                  </div>
                </motion.div>{" "}
              </Link>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: isMobile ? "0vw" : "2vw",
              }}
            >
              <Link href={"/services/obaas"}>
                <motion.div
                  key={"id13"}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={styles.featuredItem}
                >
                  <div style={{ display: "flex", gap: "1vw" }}>
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "8vw" : "3vw",
                        height: "auto",
                      }}
                      src={"/do4.png"}
                    />
                  </div>
                  <div className={styles.serviceHeading}>
                    Onboarding as a Service
                  </div>
                  <div className={styles.servieText}>
                    Accelerate software delivery with our streamlined CI/CD
                    solution, including automated onboarding and customizable
                    off-boarding for efficient development cycles. Spin up
                    entire environments in hours not days.
                    <Image
                      // style={{ display: visibility ? "none" : "block" }}
                      className={styles.featureArrow}
                      height={896}
                      width={1920}
                      src={"/arrowRight.png"}
                      alt={""}
                    ></Image>
                  </div>
                </motion.div>
              </Link>
              <Link href={"/services/incident-management"}>
                <motion.div
                  key={"id14"}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={styles.featuredItem}
                >
                  <div style={{ display: "flex", gap: "1vw" }}>
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "8vw" : "3vw",
                        height: "auto",
                      }}
                      src={"/do5.png"}
                    />
                  </div>
                  <div className={styles.serviceHeading}>
                    Incident Management
                  </div>
                  <div className={styles.servieText}>
                    Top-notch full-stack incident management services that
                    prioritize preparation, documentation, and proactive
                    measures to minimize downtime and avoid loss of revenue.
                    <Image
                      // style={{ display: visibility ? "none" : "block" }}
                      className={styles.featureArrow}
                      height={896}
                      width={1920}
                      src={"/arrowRight.png"}
                      alt={""}
                    ></Image>
                  </div>
                </motion.div>
              </Link>
              <Link href={"/services/microservices"}>
                <motion.div
                  key={"id15"}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={styles.featuredItem}
                >
                  <div style={{ display: "flex", gap: "1vw" }}>
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "8vw" : "3vw",
                        height: "auto",
                      }}
                      src={"/do6.png"}
                    />
                  </div>
                  <div className={styles.serviceHeading}>
                    Microservices Design, Development & Refactoring
                  </div>
                  <div className={styles.servieText}>
                    AceMQ offers comprehensive microservices design,
                    development, and refactoring services that strictly adhere
                    to industry best practices, including loose coupling and the
                    12Factor approach.
                    <Image
                      // style={{ display: visibility ? "none" : "block" }}
                      className={styles.featureArrow}
                      height={896}
                      width={1920}
                      src={"/arrowRight.png"}
                      alt={""}
                    ></Image>
                  </div>
                </motion.div>
              </Link>
            </div>

            {/* -------------- */}

            <div
              style={{
                display: "flex",
              }}
            >
              {/* <div className={styles.featuredItem}> */}
              <Link href={"/services/devsecops"}>
                <motion.div
                  key={"id16"}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={styles.devSection}
                >
                  <div className={styles.devContentContainer}>
                    <div style={{ display: "flex", gap: "1vw" }}>
                      <Image
                        alt="bg"
                        height={896}
                        width={1920}
                        style={{
                          width: isMobile ? "8vw" : "3vw",
                          height: "auto",
                        }}
                        src={"/devIcon.png"}
                      />
                    </div>
                    <div className={styles.serviceHeading}>DevSecOps</div>
                    <div className={styles.servieText}>
                      Bridging the gap between development, security, and
                      operations.
                      {!isMobile && <br />}
                      Achieve efficient and secure software delivery through
                      collaboration,
                      {!isMobile && <br />}
                      automation, and a security-first approach.
                    </div>
                  </div>
                  <div>
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      className={styles.loopImg}
                      src={"/loop.png"}
                    />
                  </div>
                </motion.div>
              </Link>
            </div>

            {/* -------------- */}
            <div
              className={styles.amongContainer}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2vw",
              }}
            >
              <div>
                <div
                  className={`${styles.txtCenter} ${styles.sectionHeadings}`}
                >
                  <span style={{ color: "#FF88C3" }}>Among </span>{" "}
                  <span style={{ fontWeight: "normal" }}>The</span> Best
                </div>
                <div
                  className={styles.servieText}
                  style={{ textAlign: isMobile ? "center" : "unset" }}
                >
                  Ace8 has helped Premiere Companies Worldwide reach Exceptional
                  Outcomes.
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "2vw",
                  flexDirection: isMobile ? "column" : "row",
                }}
              >
                <div className={styles.amongContainer}>
                  <div className={styles.amongHeading}>
                    Microservices Migration
                  </div>
                  <Link href={"/stories"}>
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      className={styles.loopImg}
                      src={"/story1.png"}
                    />
                  </Link>
                </div>{" "}
                <div className={styles.amongContainer}>
                  <div className={styles.amongHeading}>Critical Web Launch</div>
                  <Link href={"/stories"}>
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      className={styles.loopImg}
                      src={"/story2.png"}
                    />{" "}
                  </Link>
                </div>
              </div>
            </div>

            {/* Strategy Container */}
            <div style={{ display: "flex", gap: "2vw" }}>
              {/* <div className={styles.featuredItem}> */}
              <motion.div
                key={"id18"}
                whileHover={{ scale: isMobile ? 1 : 1.1 }}
                whileTap={{ scale: isMobile ? 1 : 0.9 }}
                style={{
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: isMobile ? "80vw" : "",
                }}
                className={styles.devSection}
              >
                <div className={styles.devContentContainer}>
                  <div
                    className={styles.h3}
                    style={{ fontSize: isMobile ? "" : "2.5vw" }}
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
                      height: "30vh",
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
                        style={{ width: "35vw", height: "auto" }}
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
                          width: isMobile ? "15vw" : "5vw",
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

            {/* -------------- productivity */}
            {!isMobile && (
              <div
                className={styles.contentContainer}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "3vw",
                  position: "relative",
                }}
              >
                <Image
                  alt="bg"
                  height={896}
                  width={1920}
                  className={styles.amongImage}
                  src={"/productivity.png"}
                  style={{ marginTop: "1vw" }}
                />

                <Link href={"/services/incident-management"}>
                  <motion.button
                    key={"id221"}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={styles.btn}
                    style={{
                      alignSelf: "center",
                      position: "absolute",
                      bottom: "9vw",
                      left: "50vw",
                    }}
                  >
                    Learn more
                  </motion.button>
                </Link>
              </div>
            )}
            {isMobile && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    fontSize: "6vw",
                    fontWeight: "bold",
                    lineHeight: "8vw",
                    textAlign: "center",
                    marginTop: "2vw",
                  }}
                >
                  How to <span style={{ fontWeight: "300" }}>Proactively</span>{" "}
                  <br />
                  Minimize{" "}
                  <span style={{ color: colors.primary }}>Incidents</span>
                </div>
                <div
                  style={{
                    fontSize: "3vw",
                    lineHeight: "4vw",
                    textAlign: "center",
                    marginTop: "2vw",
                  }}
                >
                  Learn how Ace8 leverages Netflix Dispatch and other
                  Industry-leading technologies and practices to offer the ONLY
                  proactive incident management.
                </div>

                <Link href={"/services/incident-management"}>
                  <motion.button
                    key={"id221"}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={styles.btn}
                    style={{ marginTop: "4vw" }}
                  >
                    Learn more
                  </motion.button>
                </Link>
              </div>
            )}
          </div>
        </motion.div>
        {/* CONTAINER 6 */}
        <motion.div
          style={{ height: "58vw" }}
          ref={ref5}
          initial={{ x: -50, opacity: 0 }}
          animate={controls5}
          transition={{ duration: 0.5 }}
          className={styles.contentContainer}
        >
          {!isMobile && (
            <div className={styles.linesDiv}>
              <div>
                <Image
                  className={styles.lineStyles}
                  alt="bg"
                  height={896}
                  width={1920}
                  // style={{ width: "3vw", height: "auto" }}
                  src={"/line6.png"}
                />
              </div>
            </div>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2vw",
              width: isMobile ? "90vw" : "79vw",
              alignSelf: isMobile ? "center" : "normal",
              marginTop: isMobile ? "4vw" : "0vw",
            }}
          >
            <div
              style={{
                fontSize: isMobile ? "5vw" : "3vw",
                fontWeight: "bold",
                lineHeight: "4vw",
                textAlign: isMobile ? "center" : "unset",
              }}
            >
              <span
                style={{
                  color: "#FF88C3",
                }}
              >
                {" "}
                <span style={{ fontWeight: "lighter", color: "white" }}>
                  {" "}
                  OUR
                </span>{" "}
                FORMULA
                <br />
              </span>
            </div>
            <div
              style={{
                fontSize: isMobile ? "3vw" : "1vw",
                lineHeight: isMobile ? "3.5vw" : "1.8vw",
                textAlign: isMobile ? "center" : "unset",
              }}
            >
              With years of expertise we have distilled what works and what{" "}
              {!isMobile && <br />}
              doesn&apos;t. Scalable solutions that not only account for new{" "}
              {!isMobile && <br />}
              technologies, but most importantly leverage your existing{" "}
              {!isMobile && <br />} systems, timelines, and budget.
            </div>
            {!isMobile && (
              <Image
                alt="bg"
                height={896}
                width={1920}
                className={styles.formulaTree}
                src={"/formulaTree.png"}
              />
            )}
            {isMobile && (
              <div>
                <Image
                  alt="bg"
                  height={560}
                  width={1170}
                  className={styles.formulaTree}
                  src={"/align.png"}
                />

                <Image
                  alt="bg"
                  height={560}
                  width={1170}
                  className={styles.formulaTree}
                  src={"/discvry.png"}
                />

                <Image
                  alt="bg"
                  height={560}
                  width={1170}
                  className={styles.formulaTree}
                  src={"/cntnsdev.png"}
                />

                <Image
                  alt="bg"
                  height={560}
                  width={1170}
                  className={styles.formulaTree}
                  src={"/revhand.png"}
                />
              </div>
            )}
          </div>
        </motion.div>
        {/* CONTAINER 7  */}
        <motion.div
          style={{ height: "26vw" }}
          ref={ref6}
          initial={{ x: -50, opacity: 0 }}
          animate={controls6}
          transition={{ duration: 0.5 }}
          className={styles.contentContainer}
        >
          {!isMobile && (
            <div className={styles.linesDiv}>
              <div>
                <Image
                  className={styles.lineStyles}
                  alt="bg"
                  height={896}
                  width={1920}
                  // style={{ width: "3vw", height: "auto" }}
                  src={"/line7.png"}
                />
              </div>
            </div>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2vw",
              width: isMobile ? "80vw" : "50vw",
              alignSelf: isMobile ? "center" : "normal",
              marginTop: isMobile ? "150vw" : "0vw",
            }}
          >
            <div
              style={{
                marginLeft: isMobile ? "0vw" : "",
                textAlign: isMobile ? "center" : "unset",
              }}
              className={styles.sectionHeadings}
            >
              <span
                style={{
                  color: "#FF88C3",
                }}
              >
                {" "}
                OUR
              </span>{" "}
              MISSION
            </div>
            <div
              style={{
                fontSize: isMobile ? "3vw" : "1vw",
                lineHeight: isMobile ? "4vw" : "1.8vw",
                textAlign: isMobile ? "center" : "unset",
              }}
            >
              Our company’s mission first and foremost is to ‘EMPOWER PEOPLE’.
              We look to {!isMobile && <br />} disrupt the industry. Not only
              with our technical prowess, but the way we interface
              {!isMobile && <br />} with our clients, build relationships, and
              deliver results. We build people-focused {!isMobile && <br />}
              organizations and that shows forth in all of all interactions.
            </div>

            {!isMobile && (
              <motion.button
                key={"id221"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.btn}
                style={{ alignSelf: isMobile ? "center" : "unset" }}
              >
                Learn more
              </motion.button>
            )}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: isMobile ? "center" : "normal",
              flexDirection: "column",
            }}
          >
            <Image
              className={styles.globeImg}
              alt="bg"
              height={896}
              width={1920}
              style={{
                width: isMobile ? "60vw" : "40vw",
                height: "auto",
                borderRadius: "100vw",
              }}
              src={"/globe.png"}
            />
          </div>
          {isMobile && (
            <motion.button
              key={"id221"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={styles.btn}
              style={{ alignSelf: isMobile ? "center" : "unset" }}
            >
              Learn more
            </motion.button>
          )}
        </motion.div>
        {/* CONTAINER 8  */}
        <motion.div
          ref={ref7}
          initial={{ x: -50, opacity: 0 }}
          animate={controls7}
          transition={{ duration: 0.5 }}
          className={styles.contentContainer}
        >
          {!isMobile && (
            <div className={styles.linesDiv}>
              <div>
                <Image
                  className={styles.lineStyles}
                  alt="bg"
                  height={896}
                  width={1920}
                  src={"/line8.png"}
                />
              </div>
            </div>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2vw",
              width: "79vw",
              marginTop: isMobile ? "250vw" : "0vw",
              alignSelf: isMobile ? "center" : "normal",
            }}
          >
            <div
              className={styles.sectionHeadings}
              style={{
                lineHeight: "4vw",
                marginLeft: isMobile ? "0vw" : "",
                textAlign: isMobile ? "center" : "unset",
              }}
            >
              <span> OUR</span>
              <span
                style={{
                  color: colors.primary,
                }}
              >
                {" "}
                APPROACH
              </span>{" "}
            </div>
            <div
              style={{
                fontSize: isMobile ? "3vw" : "1vw",
                lineHeight: isMobile ? "4vw" : "1.8vw",
                textAlign: isMobile ? "center" : "unset",
              }}
            >
              Our purpose is to unite, empower and develop incredible people to
              deliver
              {!isMobile && <br />}
              unfathomable innovation through intelligent digital experiences
            </div>
            <div>
              {!isMobile && (
                <div
                  style={{
                    display: "flex",
                    gap: "2vw",
                    justifyContent: "space-between",
                  }}
                >
                  <motion.div
                    key={"id30"}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      className={styles.appImg}
                      src={"/approach1.png"}
                    />{" "}
                  </motion.div>
                  <motion.div
                    key={"id31"}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {" "}
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      className={styles.appImg}
                      src={"/approach2.png"}
                    />{" "}
                  </motion.div>
                  <motion.div
                    key={"id32"}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {" "}
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      className={styles.appImg}
                      src={"/approach3.png"}
                    />
                  </motion.div>
                </div>
              )}
              {isMobile && (
                <div
                  style={{
                    gap: "3vw",
                    justifyContent: "space-between",
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "2vw",
                  }}
                >
                  <motion.div
                    key={"id30"}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      className={styles.appImg}
                      src={"/approach1.png"}
                    />{" "}
                  </motion.div>
                  <motion.div
                    key={"id31"}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {" "}
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      className={styles.appImg}
                      src={"/approach2.png"}
                    />{" "}
                  </motion.div>
                  <motion.div
                    key={"id32"}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {" "}
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      className={styles.appImg}
                      src={"/approach3.png"}
                    />
                  </motion.div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
        {/*  CONTAINER 9  */}
        <motion.div
          ref={ref8}
          initial={{ x: -50, opacity: 0 }}
          animate={controls8}
          transition={{ duration: 0.5 }}
          className={styles.contentContainer}
          style={{
            alignItems: isMobile ? "center" : "normal",
          }}
        >
          {!isMobile && (
            <div className={styles.linesDiv}>
              <div style={{}}>
                <Image
                  className={styles.lineStyles}
                  alt="bg"
                  height={896}
                  width={1920}
                  src={"/ContactLine.png"}
                />
              </div>
            </div>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2vw",
              width: isMobile ? "80vw" : "50vw",
              alignSelf: isMobile ? "center" : "normal",
              marginTop: isMobile ? "5vw" : "0vw",
            }}
          >
            <div
              style={{
                fontSize: isMobile ? "5vw" : "3vw",
                fontWeight: "bold",
                lineHeight: "4vw",
                textAlign: isMobile ? "center" : "unset",
              }}
            >
              <span
                style={{
                  color: colors.secondary,
                }}
              >
                {" "}
                <span style={{ color: "white" }}>CONTACT</span> US <br />
              </span>{" "}
            </div>
            {!isMobile && (
              <Image
                className={styles.contactImage}
                alt="bg"
                height={896}
                width={1920}
                // style={{ width: "40vw", height: "auto" }}
                src={"/contactImage.png"}
              ></Image>
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2vw",
              alignItems: isMobile ? "center" : "normal",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: isMobile ? "center" : "normal",
                flexDirection: "column",
              }}
            >
              {" "}
              <Image
                style={{ width: isMobile ? "80vw" : "40vw", height: "auto" }}
                alt="bg"
                height={896}
                width={1920}
                // style={{ width: "40vw", height: "auto" }}
                src={"/addImg.png"}
              ></Image>
            </div>

            <div className={styles.headingSendUs}>
              Send <span style={{ color: colors.primary }}>Us</span>{" "}
              <span style={{ fontWeight: "lighter" }}>a Message</span>
            </div>
            <div className={styles.contactText}>
              Have any questions regarding our services? Send us your message.
            </div>
            <div className={styles.formContainer}>
              <div style={{ display: "flex", gap: "1.2vw" }}>
                <div
                  className={styles.inputItem}
                  // style={{
                  //   display: "flex",
                  //   flexDirection: "column",
                  //   gap: "2vw",
                  // }}
                >
                  <div className={styles.contactHeading}>First Name</div>
                  <div>
                    <input
                      className={styles.contactInput}
                      placeholder="Enter Your First Name..."
                      type="text"
                      name=""
                      id=""
                      ref={firstNameRef}
                    />
                  </div>
                </div>
                <div className={styles.inputItem}>
                  <div className={styles.contactHeading}>Last Name</div>
                  <div>
                    <input
                      className={styles.contactInput}
                      placeholder="Enter Your Last Name..."
                      type="text"
                      name=""
                      id=""
                      ref={lastNameRef}
                    />
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "1.2vw" }}>
                <div
                  className={styles.inputItem}
                  // style={{
                  //   display: "flex",
                  //   flexDirection: "column",
                  //   gap: "2vw",
                  // }}
                >
                  <div className={styles.contactHeading}>Email</div>
                  <div>
                    <input
                      className={styles.contactInput}
                      placeholder="Enter Your Email Address..."
                      type="text"
                      name=""
                      id=""
                      ref={emailRef}
                    />
                  </div>
                </div>
                <div
                  className={styles.inputItem}
                  // style={{
                  //   display: "flex",
                  //   flexDirection: "column",
                  //   gap: "2vw",
                  // }}
                >
                  <div className={styles.contactHeading}>Contact Number</div>
                  <div>
                    <input
                      className={styles.contactInput}
                      placeholder="Enter Your Contact Number..."
                      type="text"
                      name=""
                      id=""
                      ref={contactRef}
                    />
                  </div>
                </div>
              </div>
              <div
                className={styles.inputItem}
                // style={{
                //   display: "flex",
                //   flexDirection: "column",
                //   gap: "2vw",
                // }}
              >
                <div className={styles.contactHeading}>
                  What can we help you with?
                </div>
                <div>
                  <textarea
                    className={styles.contactTextArea}
                    placeholder="Describe your problem in at least 250 characters..."
                    name=""
                    id=""
                    cols={50}
                    rows={10}
                    ref={descriptionRef}
                  ></textarea>
                </div>
              </div>
            </div>
            {/* <div style={{ display: "flex", gap: "2vw" }}>
              <input
                className={styles.contactCheckBox}
                type="checkbox"
                color={colors.primary}
              />
              <div className={styles.contactText}>
                By ticking this box, I am consenting to be sent monthly articles
                and promotions through WaveNet newsletter.
              </div>
            </div> */}
            <motion.button
              key={"id2"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              // className={classes.btnPayment}
              type="submit"
              className={styles.btn}
              style={{
                width: isMobile ? "20vw" : "",
                // backgroundColor: "red",
              }}
              onClick={handleSubmit}
            >
              Send
            </motion.button>
            <ToastContainer />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
