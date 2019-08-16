import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import List from "../../components/List/List";
import CustomLink from "../../components/CustomLink/CustomLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import flaticon_svg from "../../assets/images/flaticon.svg";
import { fornite_references, menu_links, contact_data } from "./footer_data";
import { faReact, faFontAwesomeFlag } from "@fortawesome/free-brands-svg-icons";

const footerSections = [
  { title: "Fortnite official", items: fornite_references },
  { title: "Menu", items: menu_links },
  { title: "Contact", items: contact_data }
];

const renderLinks = ({ type, label, content, faIcon, external }) => (
  <li className="py-1">
    {faIcon && (
      <span className={"mr-2"}>
        <FontAwesomeIcon icon={faIcon} />
      </span>
    )}
    {(type === "string" && <span>{content}</span>) || (
      <CustomLink
        classes="text-light"
        href={content}
        content={<span>{label}</span>}
        external={external}
      />
    )}
  </li>
);

const CopyrightsLinks = {
  Freepik: () => (
    <CustomLink
      classes="text-white-50"
      href="https://www.flaticon.com/authors/freepik"
      title="Freepik"
      content="Freepik"
      external={true}
    />
  ),
  Flaticon: () => (
    <CustomLink
      href="https://www.flaticon.com/"
      title="Flaticon"
      content={<img src={flaticon_svg} alt="Flaticon icon" width="75px" />}
      external={true}
    />
  ),
  Fa: () => (
    <CustomLink
      classes="text-white-50"
      href="https://fontawesome.com"
      title="FontAwesome"
      content={
        <span>
          <FontAwesomeIcon icon={faFontAwesomeFlag} /> FontAwesome
        </span>
      }
      external={true}
    />
  ),
  Adnfx2: () => (
    <CustomLink
      classes="text-white-50"
      href="https://adnfx2.github.io/adn-react-portfolio/"
      title="adnfx2"
      content="@adnfx2"
      external={true}
    />
  )
};

const Footer = props => {
  const { Adnfx2, Freepik, Flaticon, Fa } = CopyrightsLinks;
  return (
    <footer className="pt-5 bg-dark text-light small">
      <Container>
        <Row>
          {footerSections.map(({ title, items }) => (
            <Col xs={12} md={4}>
              <h5>{title}</h5>
              <List
                renderItem={renderLinks}
                items={items}
                classes="list-unstyled"
              />
            </Col>
          ))}
        </Row>
        <Row className="pt-3 pb-3">
          <Col>
            <hr className="m-0 pb-3" />
            <div className="text-center">
              This website is made with <FontAwesomeIcon icon={faReact} /> by{" "}
              <Adnfx2 />. Icons made by <Freepik /> from <Flaticon /> and <Fa />
              .
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
