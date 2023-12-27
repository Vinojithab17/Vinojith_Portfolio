import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">VINOJITH GUNARATNE </span>
            from <span className="purple"> Ampara, Sri Lanka.</span>
            <br />
            Currently I am an undergraduate in University of Moratuwa,
            departmant of Computer Science and Engineering.
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching TV
            </li>
          </ul> */}

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
