import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/Profile.jpeg";
import Toolstack from "./Toolstack";
import RowAndColumnSpacing from "./Grid";
import Box from '@mui/material/Box';
import Tilt from "react-parallax-tilt";
const commonStyles = {
  position:"relative",
  bottom:'140px',
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 10,
  width: '20rem',
  height: '26.3rem',
};
function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
                        <Tilt>
            <Box sx={{ ...commonStyles, borderRadius: '16px' }} >
            <img src={laptopImg} alt="about" className="img-fluid" />
            </Box>
              
            </Tilt>
          </Col>
        </Row>
        {/* <RowAndColumnSpacing /> */}
        <h1 className="project-heading">
          Professional <strong className="purple">Skills </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
