import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <img src="https://img.icons8.com/officel/70/react.png" alt="React"></img>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src="https://img.icons8.com/fluency/70/node-js.png" alt="node.js" />

      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
              src="https://img.icons8.com/color/70/java-coffee-cup-logo--v2.png"
              alt="Java"
            ></img>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src="https://img.icons8.com/fluency/70/python.png" alt="Python"></img>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src="https://img.icons8.com/color/70/redux.png" alt="Redux"></img>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
              src="https://img.icons8.com/fluency/70/javascript.png"
              alt="javascript"
            ></img>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
              src="https://img.icons8.com/color/70/amazon-web-services.png"
              alt="amazon-web-services"
            ></img>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
              src="https://img.icons8.com/color/70/amazon-s3.png"
              alt="amazon-s3"
            ></img>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
              src="https://img.icons8.com/color/70/awslambda.png"
              alt="awslambda"
            ></img>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src="https://img.icons8.com/color/70/git.png" alt="git"></img>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src="https://img.icons8.com/color/70/linux.png" alt="linux"></img>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src="https://img.icons8.com/color/70/mongodb.png" alt="mongodb"></img>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src="https://img.icons8.com/color/70/mysql-logo.png" alt="mysql"></img>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
              src="https://img.icons8.com/color/70/postgreesql.png"
              alt="postgreesql"
            ></img>
      </Col>
    </Row>
  );
}

export default Techstack;
