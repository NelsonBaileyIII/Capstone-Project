import React from "react";
import { Icon, Container } from "semantic-ui-react";
import "./css/landingPage.css";

const Footer = ({ url }) => {
  return (
    <div>
      <Container className="footer">
        <h5 className="footer-header">© 2021</h5>
        <div className="icon-container">
          <a
            className="icon-div"
            href="https://github.com/NelsonBaileyIII/capstone-color-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="icon-div" name="github" size="big" />
          </a>
          <a
            className="icon-div"
            href="https://www.linkedin.com/in/nelsonbaileyiii/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="icon-div" name="linkedin square" size="big" />
          </a>
          <a
            className="icon-div"
            href="mailto:nelsonbiii@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="icon-div" name="mail" size="big" />
          </a>
        </div>
        <a
          href="https://nelsonbiii.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="portfolio-link">Portfolio</div>
        </a>
      </Container>
    </div>
  );
};

export default Footer;
