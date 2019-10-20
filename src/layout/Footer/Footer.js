import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomLink from "../../components/CustomLink/CustomLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import * as references from "../../utils/links/links_references";

const footerSections = [
  { title: "Fortnite official", items: references.fortnite },
  { title: "Menu", items: references.menu },
  { title: "Contact", items: references.contacts }
];

const renderLinks = item => (
  <li key={item.id} className="py-1">
    {item.faIcon && (
      <span className={"mr-2"}>
        <FontAwesomeIcon icon={item.faIcon} />
      </span>
    )}
    {item.type === "string" ? (
      <span>{item.content}</span>
    ) : (
      <CustomLink
        styles="text-light"
        href={item.endpoint}
        placeholder={<span>{item.placeholder}</span>}
        external={item.external}
      />
    )}
  </li>
);

const createLinks = references => {
  return references.reduce((acc, reference) => {
    const { id, name, endpoint, placeholder, external } = reference;
    //  prettier-ignore
    const finalPlaceholder = (
      //  Show placeholder?
      typeof placeholder === "string"
      ? <span>{placeholder}</span>
      // Show image?
      : placeholder.image
        ? <img src={placeholder.image} alt="Flaticon icon" width="75px" />
        // Show icon?
        : placeholder.fa
          ? <span><FontAwesomeIcon icon={placeholder.fa} /> {name}</span>
          : ""
    );

    return {
      ...acc,
      [id]: props => (
        <CustomLink
          styles="text-light"
          href={endpoint}
          placeholder={finalPlaceholder}
          external={external}
        />
      )
    };
  }, {});
};

const Footer = props => {
  const {
    [`id-adnfx2`]: Adnfx2,
    [`id-freepik`]: Freepik,
    [`id-flaticon`]: Flaticon,
    [`id-fa`]: FontAwesome
  } = createLinks(references.copyrights);

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
              <ul className="list-unstyled">
                {items.map(item => renderLinks(item))}
              </ul>
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
