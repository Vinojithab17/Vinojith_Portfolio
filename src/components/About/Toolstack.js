import React from "react";
import { Col, Row } from "react-bootstrap";



function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
      <img width="48" height="48" src="https://img.icons8.com/color/110/intellij-idea.png" alt="intellij-idea"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg" alt="postman" width="50" height="50"/>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="50" height="50"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img width="48" height="48" src="https://img.icons8.com/color/110/pycharm.png" alt="pycharm"/>
      </Col>
    </Row>
  );
}

export default Toolstack;
