import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import myImgNoBack from "../../Assets/Vinojith-removebg-preview.png";
import Box from '@mui/material/Box';
import Tilt from "react-parallax-tilt";

const commonStyles = {
  position:"relative",
  bottom:'40px',
  m: 1,
  width: '20rem',
  height: '22.4rem',
};

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> VINOJITH GUNARATNE</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>

            <Tilt>
            <Box sx={{ ...commonStyles, borderRadius: '16px' }} >
            <img src={myImgNoBack} className="img-fluid" alt="avatar" style={{ "-webkit-filter": "drop-shadow(7px 7px 7px #FFF)", "filter" : "drop-shadow(7px 7px 7px #FFF)"
        }}  />
            </Box>
              
            </Tilt>
              {/* <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              /> */}
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
