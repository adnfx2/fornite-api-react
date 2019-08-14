import React from "react";
import { Container, Row, Col, Media } from "react-bootstrap";
import { features } from "./Features_data";

const renderList = items =>
  items
    ? items.map(({ title, body, image }) => (
        <Col key={title} md={4} className=" pl-3 pr-3">
          <Media className="flex-column align-items-center ">
            <img src={image} alt="alt" width={24 * 4} height={24 * 4} />
            <Media.Body className={"text-center"}>
              <h3 className="m-0 pt-4 pb-4">{title}</h3>
              <p>{body}</p>
            </Media.Body>
          </Media>
        </Col>
      ))
    : "nothing";

const Home = props => (
  <React.Fragment>
    <h1 className="text-center pb-5">Are you looking for...</h1>
    <Container fluid={true}>
      <Row noGutters={true}>{renderList(features)}</Row>
    </Container>
  </React.Fragment>
);

export default Home;
