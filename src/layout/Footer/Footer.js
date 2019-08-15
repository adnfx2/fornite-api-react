import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import flaticon_svg from "../../assets/images/flaticon.svg";

const Footer = props => {
  return (
    <footer style={{ overflow: "hidden" }} className="pt-5 bg-dark">
      <Container>
        <Row>
          <Col>
            <ul>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
            </ul>
          </Col>
          <Col>
            <div>
              Icons made by{" "}
              <a
                href="https://www.flaticon.com/authors/freepik"
                title="Freepik"
              >
                Freepik
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                <img src={flaticon_svg} alt="Flaticon icon" width="100px"/>
              </a>{" "}
              licensed by{" "}
              <a
                href="http://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
              >
                CC 3.0 BY
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
