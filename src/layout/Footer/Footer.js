import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import flaticon_svg from "../../assets/images/flaticon.svg";
import { fornite_references, menu_links, contact_data } from "./footer_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const List = ({ renderItem, items }) => items.map(item => renderItem(item));

const renderLinks = ({ type, label, content, faIcon }) => (
  <li className="py-1">
    {type === "string" ? (
      <p className="m-0">
        {faIcon ? (
          <span className="mr-2">
            <FontAwesomeIcon icon={faIcon} />
          </span>
        ) : (
          ""
        )}
        <span>{content}</span>
      </p>
    ) : (
      <a className="text-light" href={content}>
        {faIcon ? (
          <span className="mr-2">
            <FontAwesomeIcon icon={faIcon} />
          </span>
        ) : (
          ""
        )}
        <span>{label}</span>
      </a>
    )}
  </li>
);

const footerSections = [
  { title: "Fortnite official", items: fornite_references },
  { title: "Menu", items: menu_links },
  { title: "Contact", items: contact_data }
];

const Footer = props => {
  return (
    <footer className="pt-5 bg-dark text-light small">
      <Container>
        <Row>
          {footerSections.map(({ title, items }) => (
            <Col xs={12} md={4}>
              <h5>{title}</h5>
              <ul className="list-unstyled">
                <List renderItem={renderLinks} items={items} />
              </ul>
            </Col>
          ))}
        </Row>
        <Row className="pt-3 pb-3">
          <Col>
            <hr className="m-0 pb-3" />
            <div className="text-center">
              This website is made with <FontAwesomeIcon icon={faReact} /> by
              @adnfx2. Icons made by{" "}
              <a
                className="text-white-50"
                href="https://www.flaticon.com/authors/freepik"
                title="Freepik"
              >
                Freepik
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                <img src={flaticon_svg} alt="Flaticon icon" width="75px" />
              </a>{" "}
              licensed by{" "}
              <a
                className="text-white-50"
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
