import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import List from "../../components/List/List";
import CustomLink from "../../components/CustomLink/CustomLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import {
  contactsReferences,
  menuReferences,
  fortniteReferences,
  copyrightsReferences
} from "../../utils/links/links_references";

const footerSections = [
  { title: "Fortnite official", items: fortniteReferences },
  { title: "Menu", items: menuReferences },
  { title: "Contact", items: contactsReferences }
];

const renderLinks = ({ itemRef, item }) => (
  <li key={itemRef} className="py-1">
    {item.faIcon && (
      <span className={"mr-2"}>
        <FontAwesomeIcon icon={item.faIcon} />
      </span>
    )}
    {item.type === "string" ? (
      <span>{item.content}</span>
    ) : (
      <CustomLink
        classes="text-light"
        href={item.endpoint}
        placeholder={<span>{item.placeholder}</span>}
        external={item.external}
      />
    )}
  </li>
);

const createLinks = refereces =>
  refereces.keys.reduce((acc, reference) => {
    const { endpoint, placeholder, external } = refereces[reference];

    const finalPlaceholder =
      typeof placeholder === "string" ? (
        <span>{placeholder}</span>
      ) : placeholder.image ? (
        <img src={placeholder.image} alt="Flaticon icon" width="75px" />
      ) : placeholder.fa ? (
        <span>
          <FontAwesomeIcon icon={placeholder.fa} /> {reference}
        </span>
      ) : null;

    return {
      ...acc,
      [reference]: () => (
        <CustomLink
          classes="text-light"
          href={endpoint}
          placeholder={finalPlaceholder}
          external={external}
        />
      )
    };
  }, {});

const Footer = props => {
  const { Adnfx2, Freepik, Flaticon, FontAwesome } = createLinks(
    copyrightsReferences
  );

  return (
    <footer className="pt-5 bg-dark text-light small">
      <Container>
        <Row>
          {footerSections.map(({ title, items }) => (
            <Col
              key={title}
              className="pr-md-2 pl-md-2 pr-lg-5 pl-lg-5"
              xs={12}
              md={4}
            >
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
              <Adnfx2 />. Icons made by <Freepik /> from <Flaticon /> and{" "}
              <FontAwesome />.
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
