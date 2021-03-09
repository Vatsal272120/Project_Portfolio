import React from "react";
import styles from "./contactComponent.module.scss";
import Div from "../div/index";
import iconEmail from "../../../assets/icons/icon-email.png";
import iconEmailwhite from "../../../assets/icons/icon-email-white.png";
import iconLinkedIn from "../../../assets/icons/icon-linkedin.png";
import iconGithub from "../../../assets/icons/icon-github.png";
import iconResume from "../../../assets/icons/icon-resume.png";
import iconLinkedInWhite from "../../../assets/icons/icon-linkedin-white.png";
import iconGithubWhite from "../../../assets/icons/icon-github-white.png";
import iconResumeWhite from "../../../assets/icons/icon-resume-white.png";

const ContactComponent = ({ className, isWhite, hideResume }) => {
  return (
    <Div
      row
      justify
      align
      className={`${styles.social_container} ${className}`}>
      <a
        className={styles.icon_link}
        target='_blank'
        href='https://github.com/Vatsal272120'>
        <img
          src={isWhite ? iconGithubWhite : iconGithub}
          className={styles.icon}
        />
      </a>
      <a
        className={styles.icon_link}
        target='_blank'
        href='https://www.linkedin.com/in/vatsalpatel272120/'>
        <img
          src={isWhite ? iconLinkedInWhite : iconLinkedIn}
          className={styles.icon}
        />
      </a>
      <a
        className={styles.icon_link}
        target='_blank'
        href='mailto:vatsalpatel1073@gmail.com'>
        <img
          src={isWhite ? iconEmailWhite : iconEmail}
          className={styles.icon}
        />
      </a>
      {!hideResume && (
        <a className={styles.icon_link} target='_blank' href=''>
          <img
            src={isWhite ? iconResumeWhite : iconResume}
            className={styles.icon}
          />
        </a>
      )}
    </Div>
  );
};

export default ContactComponent;
