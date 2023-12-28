import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import chatify from "../../Assets/Projects/AirSig (2).png";
import bitsOfCode from "../../Assets/Projects/airline.png";
import editor from "../../Assets/Projects/roster.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="In-Air Signature"
              description="Final year research and development project. Developing an innovative in-air signature authentication system addressing
              Intermittent Spatial Segmentation challenges (Handling Non-continuous signatures).
              using 2D and 3D camera approaches,"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="B Airways"
              description="Web app for an imaginary airline to provide services of booking tickets online. Technologies : React, Node.js, MySQL"
              ghLink="https://github.com/Vinojithab17/airline-reservation"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Roster Scheduler"
              description="Shift scheduler for the doctors in a specific ward, the shifts will be decided using constraints satisfaction problem."
              ghLink="https://github.com/cedar247"
              demoLink="https://cedar247.netlify.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
