// import React, { useContext, useState } from "react";
// import { Snackbar, IconButton, SnackbarContent } from "@material-ui/core";
// import CloseIcon from "@material-ui/icons/Close";
// import axios from "axios";
// import isEmail from "validator/lib/isEmail";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   FaTwitter,
//   FaLinkedinIn,
//   FaGithub,
//   FaYoutube,
//   FaBloggerB,
//   FaRedditAlien,
//   FaStackOverflow,
//   FaCodepen,
//   FaInstagram,
//   FaGitlab,
//   FaMediumM,
// } from "react-icons/fa";
// import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai";
// import { FiPhone, FiAtSign } from "react-icons/fi";
// import { HiOutlineLocationMarker } from "react-icons/hi";

// import { ThemeContext } from "../../contexts/ThemeContext";

// import { socialsData } from "../../data/socialsData";
// import { contactsData } from "../../data/contactsData";
// import "./Contacts.css";

// function Contacts() {
//   const [open, setOpen] = useState(false);

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const [success, setSuccess] = useState(false);
//   const [errMsg, setErrMsg] = useState("");

//   const { theme } = useContext(ThemeContext);

//   const handleClose = (event, reason) => {
//     if (reason === "clickaway") {
//       return;
//     }

//     setOpen(false);
//   };

//   const useStyles = makeStyles((t) => ({
//     input: {
//       border: `4px solid ${theme.primary80}`,
//       backgroundColor: `${theme.secondary}`,
//       color: `${theme.tertiary}`,
//       fontFamily: "var(--primaryFont)",
//       fontWeight: 500,
//       transition: "border 0.2s ease-in-out",
//       "&:focus": {
//         border: `4px solid ${theme.primary600}`,
//       },
//     },
//     message: {
//       border: `4px solid ${theme.primary80}`,
//       backgroundColor: `${theme.secondary}`,
//       color: `${theme.tertiary}`,
//       fontFamily: "var(--primaryFont)",
//       fontWeight: 500,
//       transition: "border 0.2s ease-in-out",
//       "&:focus": {
//         border: `4px solid ${theme.primary600}`,
//       },
//     },
//     label: {
//       backgroundColor: `${theme.secondary}`,
//       color: `${theme.primary}`,
//       fontFamily: "var(--primaryFont)",
//       fontWeight: 600,
//       fontSize: "0.9rem",
//       padding: "0 5px",
//       transform: "translate(25px,50%)",
//       display: "inline-flex",
//     },
//     socialIcon: {
//       width: "45px",
//       height: "45px",
//       borderRadius: "50%",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       fontSize: "21px",
//       backgroundColor: theme.primary,
//       color: theme.secondary,
//       transition: "250ms ease-in-out",
//       "&:hover": {
//         transform: "scale(1.1)",
//         color: theme.secondary,
//         backgroundColor: theme.tertiary,
//       },
//     },
//     detailsIcon: {
//       backgroundColor: theme.primary,
//       color: theme.secondary,
//       borderRadius: "50%",
//       width: "45px",
//       height: "45px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       fontSize: "23px",
//       transition: "250ms ease-in-out",
//       flexShrink: 0,
//       "&:hover": {
//         transform: "scale(1.1)",
//         color: theme.secondary,
//         backgroundColor: theme.tertiary,
//       },
//     },
//     submitBtn: {
//       backgroundColor: theme.primary,
//       color: theme.secondary,
//       transition: "250ms ease-in-out",
//       "&:hover": {
//         transform: "scale(1.08)",
//         color: theme.secondary,
//         backgroundColor: theme.tertiary,
//       },
//     },
//   }));

//   const classes = useStyles();

//   const handleContactForm = (e) => {
//     e.preventDefault();

//     if (name && email && message) {
//       if (isEmail(email)) {
//         const responseData = {
//           name: name,
//           email: email,
//           message: message,
//         };

//         axios.post(contactsData.sheetAPI, responseData).then((res) => {
//           console.log("success");
//           setSuccess(true);
//           setErrMsg("");

//           setName("");
//           setEmail("");
//           setMessage("");
//           setOpen(false);
//         });
//       } else {
//         setErrMsg("Invalid email");
//         setOpen(true);
//       }
//     } else {
//       setErrMsg("Enter all the fields");
//       setOpen(true);
//     }
//   };

//   return (
//     <div
//       className="contacts"
//       id="contacts"
//       style={{ backgroundColor: theme.secondary }}
//     >
//       <div className="contacts--container">
//         <h1 style={{ color: theme.primary }}>Contacts</h1>
//         <div className="contacts-body">
//           <div className="contacts-form">
//             <form onSubmit={handleContactForm}>
//               <div className="input-container">
//                 <label htmlFor="Name" className={classes.label}>
//                   Name
//                 </label>
//                 <input
//                   placeholder="John Doe"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   type="text"
//                   name="Name"
//                   className={`form-input ${classes.input}`}
//                 />
//               </div>
//               <div className="input-container">
//                 <label htmlFor="Email" className={classes.label}>
//                   Email
//                 </label>
//                 <input
//                   placeholder="John@doe.com"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   type="email"
//                   name="Email"
//                   className={`form-input ${classes.input}`}
//                 />
//               </div>
//               <div className="input-container">
//                 <label htmlFor="Message" className={classes.label}>
//                   Message
//                 </label>
//                 <textarea
//                   placeholder="Type your message...."
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   type="text"
//                   name="Message"
//                   className={`form-message ${classes.message}`}
//                 />
//               </div>

//               <div className="submit-btn">
//                 <button type="submit" className={classes.submitBtn}>
//                   <p>{!success ? "Send" : "Sent"}</p>
//                   <div className="submit-icon">
//                     <AiOutlineSend
//                       className="send-icon"
//                       style={{
//                         animation: !success
//                           ? "initial"
//                           : "fly 0.8s linear both",
//                         position: success ? "absolute" : "initial",
//                       }}
//                     />
//                     <AiOutlineCheckCircle
//                       className="success-icon"
//                       style={{
//                         display: !success ? "none" : "inline-flex",
//                         opacity: !success ? "0" : "1",
//                       }}
//                     />
//                   </div>
//                 </button>
//               </div>
//             </form>
//             <Snackbar
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "center",
//               }}
//               open={open}
//               autoHideDuration={4000}
//               onClose={handleClose}
//             >
//               <SnackbarContent
//                 action={
//                   <React.Fragment>
//                     <IconButton
//                       size="small"
//                       aria-label="close"
//                       color="inherit"
//                       onClick={handleClose}
//                     >
//                       <CloseIcon fontSize="small" />
//                     </IconButton>
//                   </React.Fragment>
//                 }
//                 style={{
//                   backgroundColor: theme.primary,
//                   color: theme.secondary,
//                   fontFamily: "var(--primaryFont)",
//                 }}
//                 message={errMsg}
//               />
//             </Snackbar>
//           </div>

//           <div className="contacts-details">
//             <a
//               // href={`mailto:${contactsData.email}`}
//               className="personal-details"
//             >
//               <div className={classes.detailsIcon}>
//                 <FiAtSign />
//               </div>
//               <p style={{ color: theme.tertiary }}>{contactsData.email}</p>
//             </a>
//             <a
//               // href={`tel:${contactsData.phone}`}
//               className="personal-details"
//             >
//               <div className={classes.detailsIcon}>
//                 <FiPhone />
//               </div>
//               <p style={{ color: theme.tertiary }}>{contactsData.phone}</p>
//             </a>
//             <div className="personal-details">
//               <div className={classes.detailsIcon}>
//                 <HiOutlineLocationMarker />
//               </div>
//               <p style={{ color: theme.tertiary }}>{contactsData.address}</p>
//             </div>

//             <div className="socialmedia-icons">
//               {/* {socialsData.twitter && (
//                                 <a
//                                     href={socialsData.twitter}
//                                     target='_blank'
//                                     rel='noreferrer'
//                                     className={classes.socialIcon}
//                                 >
//                                     <FaTwitter aria-label='Twitter' />
//                                 </a>
//                             )} */}
//               {socialsData.github && (
//                 <a
//                   href={socialsData.github}
//                   target="_blank"
//                   rel="noreferrer"
//                   className={classes.socialIcon}
//                 >
//                   <FaGithub aria-label="GitHub" />
//                 </a>
//               )}
//               {socialsData.linkedIn && (
//                 <a
//                   href={socialsData.linkedIn}
//                   target="_blank"
//                   rel="noreferrer"
//                   className={classes.socialIcon}
//                 >
//                   <FaLinkedinIn aria-label="LinkedIn" />
//                 </a>
//               )}
//               {/* {socialsData.instagram && (
//                                 <a
//                                     href={socialsData.instagram}
//                                     target='_blank'
//                                     rel='noreferrer'
//                                     className={classes.socialIcon}
//                                 >
//                                     <FaInstagram aria-label='Instagram' />
//                                 </a>
//                             )}*/}
//               {/* {socialsData.medium && (
//                 <a
//                   href={socialsData.medium}
//                   target="_blank"
//                   rel="noreferrer"
//                   className={classes.socialIcon}
//                 >
//                   <FaMediumM aria-label="Medium" />
//                 </a>
//               )} */}
//               {/*
//                             {socialsData.blogger && (
//                                 <a
//                                     href={socialsData.blogger}
//                                     target='_blank'
//                                     rel='noreferrer'
//                                     className={classes.socialIcon}
//                                 >
//                                     <FaBloggerB aria-label='Blogger' />
//                                 </a>
//                             )}
//                             {socialsData.youtube && (
//                                 <a
//                                     href={socialsData.youtube}
//                                     target='_blank'
//                                     rel='noreferrer'
//                                     className={classes.socialIcon}
//                                 >
//                                     <FaYoutube aria-label='YouTube' />
//                                 </a>
//                             )}
//                             {socialsData.reddit && (
//                                 <a
//                                     href={socialsData.reddit}
//                                     target='_blank'
//                                     rel='noreferrer'
//                                     className={classes.socialIcon}
//                                 >
//                                     <FaRedditAlien aria-label='Reddit' />
//                                 </a>
//                             )}
//                             {socialsData.stackOverflow && (
//                                 <a
//                                     href={socialsData.stackOverflow}
//                                     target='_blank'
//                                     rel='noreferrer'
//                                     className={classes.socialIcon}
//                                 >
//                                     <FaStackOverflow aria-label='Stack Overflow' />
//                                 </a>
//                             )}
//                             {socialsData.codepen && (
//                                 <a
//                                     href={socialsData.codepen}
//                                     target='_blank'
//                                     rel='noreferrer'
//                                     className={classes.socialIcon}
//                                 >
//                                     <FaCodepen aria-label='CodePen' />
//                                 </a>
//                             )}
//                             {socialsData.gitlab && (
//                                 <a
//                                     href={socialsData.gitlab}
//                                     target='_blank'
//                                     rel='noreferrer'
//                                     className={classes.socialIcon}
//                                 >
//                                     <FaGitlab aria-label='GitLab' />
//                                 </a>
//                             )} */}
//             </div>
//           </div>
//         </div>
//       </div>
//       <img src={theme.contactsimg} alt="contacts" className="contacts--img" />
//     </div>
//   );
// }

// export default Contacts;
import React, { useContext, useState } from "react";
import { Snackbar, IconButton, SnackbarContent } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import isEmail from "validator/lib/isEmail";
import { makeStyles } from "@material-ui/core/styles";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

import { ThemeContext } from "../../contexts/ThemeContext";
import { socialsData } from "../../data/socialsData";
import { contactsData } from "../../data/contactsData";
import "./Contacts.css";

function Contacts() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles(() => ({
    input: {
      border: `4px solid ${theme.primary80}`,
      backgroundColor: theme.secondary,
      color: theme.tertiary,
      fontFamily: "var(--primaryFont)",
      fontWeight: 500,
      transition: "border 0.2s ease-in-out",
      "&:focus": {
        border: `4px solid ${theme.primary600}`,
      },
    },
    message: {
      border: `4px solid ${theme.primary80}`,
      backgroundColor: theme.secondary,
      color: theme.tertiary,
      fontFamily: "var(--primaryFont)",
      fontWeight: 500,
      transition: "border 0.2s ease-in-out",
      "&:focus": {
        border: `4px solid ${theme.primary600}`,
      },
    },
    label: {
      backgroundColor: theme.secondary,
      color: theme.primary,
      fontFamily: "var(--primaryFont)",
      fontWeight: 600,
      fontSize: "0.9rem",
      padding: "0 5px",
      transform: "translate(25px,50%)",
      display: "inline-flex",
    },
    socialIcon: {
      width: "45px",
      height: "45px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "21px",
      backgroundColor: theme.primary,
      color: theme.secondary,
      transition: "250ms ease-in-out",
      "&:hover": {
        transform: "scale(1.1)",
        backgroundColor: theme.tertiary,
      },
    },
    detailsIcon: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      borderRadius: "50%",
      width: "45px",
      height: "45px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "23px",
      transition: "250ms ease-in-out",
    },
    submitBtn: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      transition: "250ms ease-in-out",
      "&:hover": {
        transform: "scale(1.08)",
        backgroundColor: theme.tertiary,
      },
    },
  }));

  const classes = useStyles();

  const handleClose = (_, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  const handleContactForm = async (e) => {
    e.preventDefault();

    if (name && email && message) {
      if (isEmail(email)) {
        const formData = new FormData();
        formData.append("access_key", "4a6549c9-d2aa-4015-93d0-4f8bd27cad85");
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);

        try {
          const response = await axios.post(
            "https://api.web3forms.com/submit",
            formData,
            {
              headers: {
                Accept: "application/json",
              },
            }
          );

          if (response.data.success === true) {
            setSuccess(true);
            setErrMsg("");
            setName("");
            setEmail("");
            setMessage("");
            setOpen(false);
          } else {
            setErrMsg("Submission failed: " + (response.data.message || ""));
            setOpen(true);
          }
        } catch (error) {
          setErrMsg(
            error.response?.data?.message ||
              "Network error: check your Web3Forms key or fields."
          );
          setOpen(true);
          console.error(error);
        }
      } else {
        setErrMsg("Invalid email");
        setOpen(true);
      }
    } else {
      setErrMsg("Enter all the fields");
      setOpen(true);
    }
  };

  return (
    <div
      className="contacts"
      id="contacts"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="contacts--container">
        <h1 style={{ color: theme.primary }}>Contacts</h1>
        <div className="contacts-body">
          <div className="contacts-form">
            <form onSubmit={handleContactForm}>
              <div className="input-container">
                <label htmlFor="Name" className={classes.label}>
                  Name
                </label>
                <input
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="Name"
                  className={`form-input ${classes.input}`}
                />
              </div>
              <div className="input-container">
                <label htmlFor="Email" className={classes.label}>
                  Email
                </label>
                <input
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="Email"
                  className={`form-input ${classes.input}`}
                />
              </div>
              <div className="input-container">
                <label htmlFor="Message" className={classes.label}>
                  Message
                </label>
                <textarea
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  name="Message"
                  className={`form-message ${classes.message}`}
                />
              </div>
              <div className="submit-btn">
                <button type="submit" className={classes.submitBtn}>
                  <p>{!success ? "Send" : "Sent"}</p>
                  <div className="submit-icon">
                    <AiOutlineSend
                      className="send-icon"
                      style={{
                        animation: !success
                          ? "initial"
                          : "fly 0.8s linear both",
                        position: success ? "absolute" : "initial",
                      }}
                    />
                    <AiOutlineCheckCircle
                      className="success-icon"
                      style={{
                        display: !success ? "none" : "inline-flex",
                        opacity: !success ? "0" : "1",
                      }}
                    />
                  </div>
                </button>
              </div>
            </form>
            <Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              open={open}
              autoHideDuration={4000}
              onClose={handleClose}
            >
              <SnackbarContent
                action={
                  <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={handleClose}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                }
                style={{
                  backgroundColor: theme.primary,
                  color: theme.secondary,
                  fontFamily: "var(--primaryFont)",
                }}
                message={errMsg}
              />
            </Snackbar>
          </div>

          <div className="contacts-details">
            <div className="personal-details">
              <div className={classes.detailsIcon}>
                <FiAtSign />
              </div>
              <p style={{ color: theme.tertiary }}>{contactsData.email}</p>
            </div>
            <div className="personal-details">
              <div className={classes.detailsIcon}>
                <FiPhone />
              </div>
              <p style={{ color: theme.tertiary }}>{contactsData.phone}</p>
            </div>
            <div className="personal-details">
              <div className={classes.detailsIcon}>
                <HiOutlineLocationMarker />
              </div>
              <p style={{ color: theme.tertiary }}>{contactsData.address}</p>
            </div>

            <div className="socialmedia-icons">
              {socialsData.github && (
                <a
                  href={socialsData.github}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.socialIcon}
                >
                  <FaGithub aria-label="GitHub" />
                </a>
              )}
              {socialsData.linkedIn && (
                <a
                  href={socialsData.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.socialIcon}
                >
                  <FaLinkedinIn aria-label="LinkedIn" />
                </a>
              )}
              {socialsData.twitter && (
                <a
                  href={socialsData.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.socialIcon}
                >
                  <FaTwitter aria-label="Twitter" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <img src={theme.contactsimg} alt="contacts" className="contacts--img" />
    </div>
  );
}

export default Contacts;
