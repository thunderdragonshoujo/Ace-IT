"use client";
import React, { useEffect,useRef,useState } from "react";
import Image from "next/image";
import styles from "./contact.module.css";
import { colors } from "../../utils/Theme";
import { motion, useAnimation } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StoriesPage = () => {
  const [b1h, setB1h] = useState(false);
  const [b2h, setB2h] = useState(false);
  const [b3h, setB3h] = useState(false);
  const [b4h, setB4h] = useState(false);
  const [b5h, setB5h] = useState(false);
  const [isMobile, setisMobile] = useState(false);
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
  const formRef = useRef<HTMLFormElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const roleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(event:any){
    console.log("popping toast");
    event.preventDefault();
    const notify = () => toast('Thank you for your interest, we will contact you soon.', {
      position: "bottom-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
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
        method: "POST",
        url: 'https://76h86gyo24.execute-api.us-west-2.amazonaws.com/prod/contactUs',
        data: JSON.stringify({
          subject: "This is test email from my app",
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
        formRef.current?.reset()
      })
      .catch(function (error) {
        // Handle error
        console.error("There was an error!", error);
      });
    }
  return (
    <div
      className={styles.contactWrapper}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Image
        alt="abt"
        height={896}
        width={1920}
        style={{ width: "100vw", height: "auto" }}
        src={"/abt1.png"}
      />
      <div className={`${styles.header} ${styles.alignCenter}`}>
        <div className={styles.head1}>
          <span className={styles.normal}> Get </span> in
          <span style={{ color: colors.primary }}> Touch</span>
        </div>
        <div className={styles.line1}>
          <div>
            {" "}
            Let us know how we can add value to your organization and we&apos;ll
          </div>

          <div>connect you to one of our experts for a free consultation.</div>
        </div>
      </div>
      <div style={{}} className={styles.flexColumn}>
        <div
          style={{
            position: "relative",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {" "}
          <Image
            alt="abt"
            height={1996}
            width={2122}
            className={styles.contactImg}
            src={"/map.png"}
            style={{
              borderBottomLeftRadius: "1.5vw",
            }}
          />
          <div
            style={{
              width: isMobile ? "60vw" : "19vw",
              height: isMobile ? "15vw" : "5.5vw",
              borderRadius: isMobile ? "2vw" : ".5vw",
              backgroundColor: "rgba(35, 35, 35, 1)",
              position: "absolute",
              bottom: isMobile ? "-6vw" : "3vw",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  color: "rgba(155, 134, 254, 1)",
                  fontWeight: "bold",
                  fontSize: isMobile ? "4vw" : ".9vw",
                }}
              >
                Email Us
              </div>
              <div style={{ fontSize: isMobile ? "2.8vw" : ".7vw" }}>
                info@ace8tech.com
              </div>
            </div>
            <div>
              <div
                style={{
                  color: "rgba(155, 134, 254, 1)",
                  fontWeight: "bold",
                  fontSize: isMobile ? "4vw" : ".9vw",
                }}
              >
                Call Us
              </div>
              <div style={{ fontSize: isMobile ? "2.8vw" : ".7vw" }}>
                305-981-6475
              </div>
            </div>
          </div>
        </div>
        <form ref={formRef}
          style={{ marginTop: isMobile ? "5vw" : "" }}
          className={styles.formContainer}
        >
          <div className={styles.heading2}>
            {" "}
            <span style={{ color: colors.primary }}>Tell Us</span> How We Can
            Help
          </div>
          <div className={styles.formRow}>
            <div className={styles.inputItem}>
              <div>
                <input
                  className={styles.contactInput}
                  placeholder="First Name"
                  type="text"
                  name=""
                  id=""
                  ref={firstNameRef}
                />
              </div>
            </div>
            <div className={styles.inputItem}>
              <div>
                <input
                  className={styles.contactInput}
                  placeholder="Last Name"
                  type="text"
                  name=""
                  id=""
                  ref={lastNameRef}
                />
              </div>
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.inputItem}>
              <div>
                <input
                  className={styles.contactInput}
                  placeholder="Email"
                  type="text"
                  name=""
                  id=""
                  ref={emailRef}
                />
              </div>
            </div>
            <div className={styles.inputItem}>
              <div>
                <input
                  className={styles.contactInput}
                  placeholder="Contact No."
                  type="text"
                  name=""
                  id=""
                  ref={contactRef}
                />
              </div>
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.inputItem}>
              <div>
                <input
                  className={styles.contactInput}
                  placeholder="Company"
                  type="text"
                  name=""
                  id=""
                  ref={companyRef}
                />
              </div>
            </div>
            <div className={styles.inputItem}>
              <div>
                <input
                  className={styles.contactInput}
                  placeholder="Role"
                  type="text"
                  name=""
                  id=""
                  ref={roleRef}
                />
              </div>
            </div>
          </div>
          <div className={styles.inputItem}>
            <div>
              <textarea
                className={styles.contactTextArea}
                placeholder="Description"
                name=""
                id=""
                ref={descriptionRef}
                cols={50}
                rows={10}
              ></textarea>
            </div>
          </div>
          {/* <div className={styles.flexRow}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.91 }}
              className={`${styles.contactCard} ${styles.uploadBtn}`}
            >
              Choose File
            </motion.button>
            <div className={styles.text2}>
              PDF, Word, Excel, PNG, JPEG, and TXT files with less than 25MB in
              size are supported.
            </div>
          </div> */}
          <div className={styles.inputItem}>
            <motion.button
              style={{ backgroundColor: colors.primary }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.91 }}
              className={styles.contactCard}
              onClick={handleSubmit}
            >
              Submit
            </motion.button>
            <ToastContainer position='bottom-right'/>
          </div>
        </form>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2vw",
          backgroundColor: "black",
        }}
      >
        <div
          style={{ textAlign: "center", marginTop: "2vw" }}
          className={styles.heading1}
        >
          Trusted By <span style={{ color: "#8FD5CC" }}>Brands Globally</span>
        </div>

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
        {!isMobile && (
          <div className={styles.cardImgContainer}>
            <div
              onMouseEnter={() => setB1h(true)}
              onMouseLeave={() => setB1h(false)}
              className={styles.serviceImg3}
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
              className={styles.servicesImg2}
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
              className={styles.servicesImg}
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
              className={styles.servicesImg}
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
              }}
              onMouseLeave={() => setB5h(false)}
              className={styles.servicesImg}
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
        {/* <div style={{ height: "10vh", backgroundColor: "white" }}></div> */}
      </div>
    </div>
  );
};
export default StoriesPage;
