/** @format */

'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';

import styles from './incident-management.module.css';
import { ContactForm } from '@/components/contactForm/ContactForm';
import { useInView } from 'react-intersection-observer';

const IncidentManagementPage = () => {
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
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '99vw',
      }}>
      <div
        style={{
          backgroundImage: "url('/top.png')",
          backgroundSize: 'cover',
          width: '99vw',
          height: isMobile ? '55vw' : '45vw',
          mixBlendMode: 'overlay',
        }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '99vw',
            height: isMobile ? '55vw' : '45vw',
            backgroundColor: 'navy',
            mixBlendMode: 'overlay',
          }}
        />
      </div>
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        style={{
          position: 'absolute',
          marginTop: '12vw',
          alignItems: 'center',
          flexDirection: 'column',
          display: 'flex',
          alignSelf: 'center',
        }}>
        <div className={styles.headertxt}>
          Comprehensive{' '}
          <span style={{ color: '#fff', fontWeight: '300' }}>
            Incident <br /> Management{' '}
            <span style={{ fontWeight: 'bold' }}>for</span>
          </span>{' '}
          Reliable <br />{' '}
          <span style={{ color: '#fff', fontWeight: '300' }}>Operations</span>
        </div>
        <div
          className={styles.text1}
          style={{
            fontWeight: '300',
            textAlign: 'center',
            color: '#fff',
          }}>
          Trust our Unique Approach for Effective Incident Resolution
        </div>
      </motion.div>

      <div
        style={{
          backgroundColor: '#06091b',
          height: 'auto',
          width: '99vw',
          paddingBottom: '6vw',
        }}>
        <div
          className={`${styles.flexRow}  ${styles.alignCenter}`}
          style={{
            justifyContent: 'flex-end',
            marginTop: '6vw',
          }}>
          <div
            className={styles.mobColumn}
            style={{ marginTop: '2.5vw' }}>
            <div
              className={styles.heading1}
              style={{
                fontWeight: 'bold',
                color: '#ff88c3',
              }}>
              Experience Proactive
              <br />{' '}
              <span style={{ fontWeight: '300', color: '#fff' }}>
                Incident Management
              </span>
            </div>

            <div>
              <Image
                alt='exper'
                width={1398}
                height={164}
                src={'/exper.png'}
                className={styles.expCard}
                style={{ marginTop: '2vw' }}
              />
            </div>

            <div
              className={styles.text2}
              style={{
                marginTop: '1.5vw',
                marginBottom: '1.5vw',
              }}>
              Look no further than our incident management service, with a
              unique approach that
              <br /> sets us apart from the competition.
            </div>

            <div className={styles.text2}>
              Our approach focuses on two critical components often overlooked
              in traditional incident
              <br /> management strategies: intense documentation efforts and
              the design and execution of chaos
              <br /> engineering experiments. By thoroughly documenting your
              system and running simulated chaos
              <br /> scenarios, we ensure that we are fully prepared to handle
              any incident that comes our way.
            </div>
          </div>
          <div>
            <Image
              alt='pro'
              width={1838}
              height={1298}
              src={'/pro.png'}
              className={styles.imageWidthMid}
              style={{}}
            />
          </div>
        </div>
        <motion.div
          ref={ref2}
          animate={controls2}
          initial={{ x: -50, y: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            alignItems: 'center',
            flexDirection: 'column',
            display: 'flex',
          }}>
          <div
            className={`${styles.gap}  ${styles.mBottom}`}
            style={{
              width: '70vw',
              textAlign: 'center',
              marginTop: '5vw',
              flexDirection: 'column',
              alignItems: 'center',
              display: 'flex',
            }}>
            <div
              className={styles.heading1}
              style={{
                fontWeight: 'bold',
                color: '#fff',
                paddingBottom: 10,
              }}>
              Leveraging <span style={{ fontWeight: '300' }}>the Power of</span>
              {!isMobile && <br />}
              <span style={{ color: '#9b86fe' }}> Netflix Dispatch</span>
            </div>
            <div
              className={styles.text2}
              style={{
                marginTop: '.3vw',
                marginBottom: '1.5vw',
                border: '',
              }}>
              Ace8&apos;s Incident Management offering takes full advantage of
              Netflix Dispatch, the revolutionary incident
              <br /> management tool that leverages AI, ML, and predictive
              analytics. It automates incident triage, assigns tasks,
              <br /> and suggests resolutions for rapid response.
            </div>

            <div
              style={{
                color: 'white',
                padding: '10px',
                paddingLeft: '25px',
                paddingRight: '25px',
                background: 'linear-gradient(to bottom,  #5D385A,#3F376C)',
                fontSize: isMobile ? '8px' : '11px',
                fontWeight: '200',
                borderRadius: '10px',
                textAlign: isMobile ? 'justify' : 'unset',
              }}>
              By analyzing data, it identifies vulnerbilities, recommends
              preventive measures, and predicts incident impact. Netflix
              Dispatch streamlines {!isMobile && <br />} operations, ensuring
              efficient problem-solving and maximum productivity. Experience the
              future of incident management and unlock success
              {!isMobile && <br />}with Ace&apos;8 Incident Management powered
              by Netflix Dispatch.
            </div>
            <div
              className={styles.text2}
              style={{
                marginTop: '1vw',
              }}>
              Additionally, we take care of the setup of database accesses for
              production and non-production environments, <br /> ensuring
              controlled access based on role-based policies.
            </div>
          </div>
          <div>
            <Image
              alt='dispatch'
              width={1492}
              height={639}
              src={'/dispatch.png'}
              style={{ width: '70vw', height: 'auto', marginTop: '2.5vw' }}
            />
          </div>

          <div
            className={`${styles.flexRow} ${styles.alignCenter} `}
            style={{
              width: '80vw',
              justifyContent: 'space-between',
              alignSelf: 'flex-start',
              alignItems: 'center',
              marginTop: '6vw',
              margin: '0 auto',
            }}>
            <div style={{}}>
              <Image
                alt='customer'
                width={1065}
                height={532}
                src={'/customer.png'}
                className={styles.imageWidthmax}
                style={{ marginTop: '2.5vw' }}
              />
            </div>
            <div
              className={styles.alignwidth}
              style={{
                marginLeft: isMobile ? '0vw' : '0',
              }}>
              <div
                className={`${styles.heading1}  `}
                style={{
                  color: '#8fd5cc',
                  fontWeight: 'bold',
                }}>
                Rapid Response <br />{' '}
                <span style={{ fontWeight: '300', color: '#fff' }}>
                  {' '}
                  and 24/7 Support{' '}
                </span>
              </div>

              <div
                className={`${styles.text2}   ${styles.widthContainer}`}
                style={{
                  marginTop: '.3vw',
                  fontSize: isMobile ? '' : '.75vw',
                  lineHeight: isMobile ? '' : '1.4vw',
                }}>
                In addition, our full 24/7 support with a less than 1-hour
                Service Level
                {!isMobile && <br />} Agreement (SLA) for Sev 1 incidents means
                that you can trust us to
                {!isMobile && <br />} handle even the most critical incidents
                with urgency and efficiency.
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div
        style={{
          backgroundColor: '#fff',
          width: '99vw',
          paddingBottom: '6vw',
          alignItems: 'center',
          flexDirection: 'column',
          display: 'flex',
        }}>
        <motion.div
          ref={ref3}
          animate={controls3}
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '70vw',
          }}>
          <div
            className={styles.heading1}
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#5747a5',
              marginTop: '4vw',
              lineHeight: '4vw',
            }}>
            Ace8{' '}
            <span style={{ color: '#000' }}>
              Incident <br />
              <span style={{ fontWeight: '300' }}>Management</span> Plans
            </span>
          </div>

          <div
            style={{
              marginTop: isMobile ? '3vw' : '4vw',
              right: isMobile ? '' : '15vw',

              position: isMobile ? 'unset' : 'relative',
            }}>
            {isMobile && (
              <div
                style={{
                  display: 'flex',
                  position: isMobile ? 'unset' : 'absolute',
                  bottom: isMobile ? '' : '15vw',
                  marginTop: '2vw',
                  marginBottom: '2vw',
                }}
                className={styles.contentCard}>
                <div
                  className={styles.heading1}
                  style={{
                    fontWeight: 'bold',
                    color: '#000',
                    lineHeight: isMobile ? '5.5vw' : '4vw',
                    width: isMobile ? '60vw' : '35vw',
                  }}>
                  <span style={{ fontWeight: '300' }}> Streamline </span>
                  <span style={{ color: '#000' }}>Your</span>{' '}
                  <span style={{ color: '#5747a5' }}>
                    Incident{' '}
                    <span style={{ fontWeight: '300' }}> Management</span>{' '}
                  </span>
                  with Ace8
                </div>
              </div>
            )}
            <div>
              <Image
                alt='dash'
                width={900}
                height={663}
                src={'/dash.png'}
                // className={styles.imageWidthMid}
                style={{ width: isMobile ? '80vw' : '50vw', height: 'auto' }}
              />
            </div>

            {!isMobile && (
              <div
                style={{
                  display: 'flex',
                  position: isMobile ? 'unset' : 'absolute',
                  bottom: isMobile ? '' : '15vw',
                }}
                className={styles.contentCard}>
                <div
                  className={styles.heading1}
                  style={{
                    fontWeight: 'bold',
                    color: '#000',
                    lineHeight: isMobile ? '5.5vw' : '4vw',
                    width: isMobile ? '60vw' : '35vw',
                  }}>
                  <span style={{ fontWeight: '300' }}> Streamline </span>
                  <span style={{ color: '#000' }}>Your</span>{' '}
                  <span style={{ color: '#5747a5' }}>
                    Incident{' '}
                    <span style={{ fontWeight: '300' }}> Management</span>{' '}
                  </span>
                  with Ace8
                </div>
              </div>
            )}
          </div>
          <div
            className={`${styles.flexRow}  ${styles.alignCenter}`}
            style={{
              width: '75vw',
              justifyContent: 'space-between',
              alignSelf: 'center',
              marginTop: '6vw',
              gap: '2vw',
            }}>
            <div className={styles.mobColumn}>
              <div
                className={styles.heading1}
                style={{
                  fontWeight: 'bold',
                  color: '#000',
                  lineHeight: isMobile ? '5.5vw' : '4vw',
                }}>
                <span style={{ fontWeight: '300' }}>Understanding</span>
                <span>&nbsp;Workflows in</span>
                <span style={{ color: '#FF88C3' }}>
                  &nbsp;Incident Management
                </span>
              </div>

              <div
                className={styles.text2}
                style={{
                  marginTop: '.3vw',
                  marginBottom: '1vw',
                  color: '#000',
                }}>
                Workflows can be defined as a sequence of steps and tasks
                followed
                {!isMobile && <br />} to achieve a specific goal. In incident
                management, workflows are
                {!isMobile && <br />} essential for processing data and ensuring
                smooth progression from
                {!isMobile && <br />} one step/task to another. Without the
                movement of data, a workflow does not exist.
              </div>

              <div
                className={styles.text2}
                style={{
                  fontWeight: '500',
                  color: '#000',
                }}>
                There are three main types of workflows commonly used:
              </div>

              <div style={{ display: 'flex', marginTop: '10px', gap: '10px' }}>
                <div>
                  <Image
                    alt='flow'
                    width={1450}
                    height={558}
                    src={'/circle(2).png'}
                    style={{
                      width: isMobile ? '3rem' : '0.8rem',
                      marginTop: isMobile ? '2px' : '3px',
                    }}
                  />
                  <Image
                    alt='flow'
                    width={1450}
                    height={558}
                    src={'/line.png'}
                    style={{
                      height: isMobile ? '4.7rem' : '3.5rem',
                      width: '1.2px',
                      borderRadius: '10px',
                      margin: '3px auto',
                    }}
                  />
                  <Image
                    alt='flow'
                    width={1450}
                    height={558}
                    src={'/circle(2).png'}
                    style={{
                      width: isMobile ? '0.8rem' : '0.8rem',
                      marginTop: isMobile ? '2px' : '3px',
                    }}
                  />
                  <Image
                    alt='flow'
                    width={1450}
                    height={558}
                    src={'/line.png'}
                    style={{
                      height: isMobile ? '5.5rem' : '3.5rem',
                      width: '1.2px',
                      borderRadius: '10px',
                      margin: '3px auto',
                    }}
                  />
                  <Image
                    alt='flow'
                    width={1450}
                    height={558}
                    src={'/circle(2).png'}
                    style={{
                      width: isMobile ? '0.8rem' : '0.8rem',
                      marginTop: isMobile ? '2px' : '3px',
                    }}
                  />
                </div>
                <div
                  style={{
                    fontSize: isMobile ? '10px' : '12.4px',
                    color: 'black',
                  }}>
                  <span style={{ fontWeight: '700' }}>Project Workflow:</span>{' '}
                  Project workflows are structured and consist of a predefined
                  set of {!isMobile && <br />}
                  steps necessary to complete a project. For example, releasing
                  a new feature in your {!isMobile && <br />}
                  system application follows a project workflow. <br /> <br />
                  <span style={{ fontWeight: '700' }}>Case Workflow:</span> Case
                  workflows do not have a known set of steps required to
                  complete a {!isMobile && <br />}
                  task. The path reveals itself as you progress through the
                  task. A support ticket is a good {!isMobile && <br />}
                  example of a case workflow where the steps to solve the issue
                  are not known initially. <br /> <br />
                  <span style={{ fontWeight: '700' }}>
                    Process Workflow:
                  </span>{' '}
                  Process workflows involve a predictable and repetitive set of
                  steps {!isMobile && <br />}
                  required to complete a task. The path is known before the
                  workflow begins. DevOps and {!isMobile && <br />}
                  incident management workflows are example of process
                  workflows.
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: '1vw',
                marginLeft: '6vw',
              }}>
              <Image
                alt='alrt'
                width={1472}
                height={1748}
                src={'/alrt.png'}
                className={styles.imgWidthmin}
              />
            </div>
          </div>

          <div
            style={{
              justifyContent: 'space-between',
              marginTop: '5vw',
              width: '75vw',
              gap: '10px',
            }}
            className={`${styles.flexRow}`}>
            <div>
              <Image
                alt='newdash'
                width={1678}
                height={1364}
                src={'/newdash.png'}
                className={styles.imageWidthMin}
                style={{
                  marginTop: '1vw',
                }}
              />
            </div>

            <div className={styles.mobColumn}>
              <div
                className={styles.heading1}
                style={{
                  fontWeight: 'bold',
                  color: '#5747A5',
                  lineHeight: isMobile ? '5.5vw' : '4.5vw',
                }}>
                <span style={{ color: '#232323' }}> Ace8</span>&nbsp;Incident{' '}
                <br />
                Management{' '}
                <span style={{ fontWeight: '300', color: '#232323' }}>
                  Workflow
                </span>
              </div>
              <div
                className={styles.text2}
                style={{
                  marginTop: '.3vw',
                  marginBottom: '1vw',
                  color: '#000',
                }}>
                Incident management refers to the processes and steps taken to
                {!isMobile && <br />}
                respond to anything that disrupts normal system operations. It
                involves detecting{!isMobile && <br />} incidents, communicating
                them to stakeholders, and utilizing appropriate
                {!isMobile && <br />}tools to resolve them.
              </div>

              <div style={{ display: 'flex', marginTop: '10px', gap: '10px' }}>
                <div>
                  <Image
                    alt='flow'
                    width={1450}
                    height={558}
                    src={'/circle(2).png'}
                    style={{
                      width: isMobile ? '3rem' : '0.8rem',
                      marginTop: isMobile ? '2px' : '3px',
                    }}
                  />
                  <Image
                    alt='flow'
                    width={1450}
                    height={558}
                    src={'/line.png'}
                    style={{
                      height: isMobile ? '3.5rem' : '3.5rem',
                      width: '1.2px',
                      borderRadius: '10px',
                      margin: '3px auto',
                    }}
                  />
                  <Image
                    alt='flow'
                    width={1450}
                    height={558}
                    src={'/circle(2).png'}
                    style={{
                      width: isMobile ? '0.8rem' : '0.8rem',
                      marginTop: isMobile ? '2px' : '3px',
                    }}
                  />
                  <Image
                    alt='flow'
                    width={1450}
                    height={558}
                    src={'/line.png'}
                    style={{
                      height: isMobile ? '3.6rem' : '3.5rem',
                      width: '1.2px',
                      borderRadius: '10px',
                      margin: '3px auto',
                    }}
                  />
                  <Image
                    alt='flow'
                    width={1450}
                    height={558}
                    src={'/circle(2).png'}
                    style={{
                      width: isMobile ? '0.8rem' : '0.8rem',
                      marginTop: isMobile ? '2px' : '3px',
                    }}
                  />
                  <Image
                    alt='flow'
                    width={1450}
                    height={558}
                    src={'/line.png'}
                    style={{
                      height: isMobile ? '2.7rem' : '2.2rem',
                      width: '1.2px',
                      borderRadius: '10px',
                      margin: '3px auto',
                    }}
                  />
                  <Image
                    alt='flow'
                    width={1450}
                    height={558}
                    src={'/circle(2).png'}
                    style={{
                      width: isMobile ? '0.8rem' : '0.8rem',
                      marginTop: isMobile ? '2px' : '3px',
                    }}
                  />
                </div>
                <div
                  style={{
                    fontSize: isMobile ? '10px' : '12.4px',
                    color: 'black',
                  }}>
                  <span style={{ fontWeight: '700' }}>
                    Identification & logging:
                  </span>{' '}
                  Incidents are identified either manually or by a user or{' '}
                  {!isMobile && <br />}
                  automatically through monitoring tools. James Whilhoite is
                  responsible for entering the {!isMobile && <br />} incident
                  details as a ticket in Jira
                  <br /> <br />
                  <span style={{ fontWeight: '700' }}>
                    Categorization:
                  </span>{' '}
                  Once and incident is identified, it is categorized to
                  determine how it will be {!isMobile && <br />}
                  handled and prioritized. An incident manager is assigned to
                  the ticket, initiating the next {!isMobile && <br />}
                  stage in the workflow.
                  <br /> <br />
                  <span style={{ fontWeight: '700' }}>Investigation:</span>{' '}
                  Incident managers investigate the incident, troubleshooting
                  and defining {!isMobile && <br />} the problem to develop an
                  initial hypothesis. workflows. <br /> <br />
                  <span style={{ fontWeight: '700' }}>
                    Escalated Daignosis:
                  </span>{' '}
                  Incidents may be minor, and their details can be logged or
                  notifications
                  {!isMobile && <br />}
                  sent without escalation. Escalation occurs based on the
                  assigned categorization and the
                  {!isMobile && <br />}
                  responsible individuals for response procedures.
                </div>
              </div>
            </div>
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
                width: '99vw',
              }}>
              <div
                style={{
                  marginTop: '10vw',
                  width: '100%',
                  alignSelf: 'center',
                }}
                className={styles.heading1}>
                <span style={{ fontWeight: 'lighter' }}>
                  Ready to Streamline Your{' '}
                </span>{' '}
                <span style={{ color: '#8FD5CC' }}>
                  {' '}
                  Incident Management and Experience{' '}
                </span>{' '}
                <span style={{ fontWeight: 'lighter' }}>
                  {' '}
                  Efficient Workflows for
                </span>{' '}
                <span style={{ color: '#8FD5CC' }}>
                  {' '}
                  Effective Incident Resolution?
                </span>
              </div>
              <div
                style={{ width: '80%', alignSelf: 'center' }}
                className={styles.text2}>
                Contact us now and unlock the power of comprehensive incident
                management with Ace8. Trust our unique approach, powered by
                Netflix Dispatch, to handle any incident with urgency,
                precision, and 24/7 support. Don&apos;t wait for critical
                incidents to disrupt your operations—take control and ensure
                reliable operations today.
              </div>
              <motion.button
                onClick={() => scrollToContactForm()}
                style={{
                  marginBottom: '10vw',
                  width: '53%',
                  alignSelf: 'center',
                  height: '8vw',
                }}
                key={'id45'}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.91 }}
                className={styles.btnSignup}>
                Optimize Your Incident Management
              </motion.button>
            </div>
          ) : (
            <motion.div
              style={{ marginTop: '5vw', marginBottom: '6vw' }}
              key={'id45'}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.99 }}>
              <Image
                alt='stream'
                width={3240}
                onClick={() => scrollToContactForm()}
                height={1148}
                src={'/stream.png'}
                style={{ width: '80vw', height: 'auto', marginTop: '1vw' }}
              />
            </motion.div>
          )}
          <ContactForm id='contactForm' />
        </motion.div>
      </div>
    </div>
  );
};
export default IncidentManagementPage;
