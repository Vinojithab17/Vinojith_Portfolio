import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Vinojith.jpeg";
import myImgNoBack from "../../Assets/Vinojith-removebg-preview.png";
import homeLogo from "../../Assets/home-main.svg";

import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineMail,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Box from '@mui/material/Box';

const commonStyles = {
  position:"relative",
  bottom:'120px',
};
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            An engineering student with a strong background in <span className="purple">Software Engineering</span> , I am
actively seeking opportunities to work as a full-stack or backend developer.
              <br />
              <br />I am fluent in
              <i>
                <b className="purple"> Java, Javascript and Python. </b>
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
            <Box sx={{ ...commonStyles, borderRadius: '16px' }} >
            <img src={homeLogo} className="img-fluid" alt="avatar" style={{ "-webkit-filter": "drop-shadow(7px 7px 7px #FFF)", "filter" : "drop-shadow(7px 7px 7px #FFF)"
        }}  />
            </Box>
              
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              <span className="purple">Connect </span>with me
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/Vinojithab17"
                style={{ color: "white" }}
                target="_blank" 
                rel="noreferrer"
className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/profile.php?id=100006721306800"
                style={{ color: "white" }}
                target="_blank" 
                rel="noreferrer"
className="icon-colour  home-social-icons"
              >
                <AiFillFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/vinojith-g/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noreferrer"
className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="gunaratne.19@cse.mrt.ac.lk"
                style={{ color: "white" }}
                target="_blank" 
                rel="noreferrer"
className="icon-colour home-social-icons"
              >
                <AiOutlineMail />
              </a>
            </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
