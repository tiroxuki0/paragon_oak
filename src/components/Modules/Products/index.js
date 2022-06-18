import React from "react";
import "./Products.scss";
import { Container, Row, Col } from "react-bootstrap";
import { products } from "../../../assets";

const headingInformation = {
  title: "You & Us",
  description_short: "Let's build this together.",
  description:
    "Heart of oak … three words that for centuries have represented all that is best and strong about Britain. Now Paragon Oak is proud to carry that great tradition forward into the 21st century. For we specialise in the design, manufacture and installation of stunning oak framed buildings.",
};

const productsInformation = [
  {
    title: "be inspired",
    heading: "Residential projects",
    href: "#",
    bg: products.house1,
  },
  {
    title: "be inspired",
    heading: "Commercial projects",
    href: "#",
    bg: products.house2,
  },
  {
    title: "be inspired",
    heading: "Turnkey service",
    href: "#",
    bg: products.house3,
  },
  {
    title: "be inspired",
    heading: "Our process",
    href: "#",
    bg: products.house4,
  },
];

const Products = () => {
  return (
    <section className="products">
      <Container>
        <p className="title">{headingInformation.title}</p>
        <h3 className="description_short">
          {headingInformation.description_short}
        </h3>
        <p className="description">{headingInformation.description}</p>
        <Row>
          {productsInformation.map((e, index) => {
            return (
              <Col lg={6} md={6} xs={12} key={index}>
                <div
                  className="products_item"
                  style={{
                    backgroundImage: `url(${e.bg})`,
                    backgroundPosition: "center",
                  }}
                >
                  <a href={e.href}>
                    <div className="border-top"></div>
                    <div className="border-left"></div>
                    <div className="border-right"></div>
                    <div className="border-bottom"></div>
                    <p className="title">{e.title}</p>
                    <h2 className="heading">{e.heading}</h2>
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Products;
