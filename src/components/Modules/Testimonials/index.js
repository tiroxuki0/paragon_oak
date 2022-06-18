import React from "react";
import "./Testimonials.scss";
import { Container, Row, Col } from "react-bootstrap";
import { testimonialsBg } from "../../../assets";
import InView from "../../../javascript/InView";

const testimonialsInformation = {
  title: "testimonials",
  heading: "We love to take on complex challenges",
  description:
    "Paragon Oak’s award-winning reputation is testimony to more than 30 years of experience and knowledge. During this time we have taken pride in delivering the finest-quality design combined with exemplary customer service. Importantly, we understand how the best solutions always come from developing a close, trusted relationship with clients. Don’t just take our word for it. Get inspired by taking a leaf from some of our delighted customers.",
  background: testimonialsBg,
};

const pararaph = {
  text: "From design to completion working with the paragon oak team was a pleasure. We’re delighted with the finished product which has enhanced our enjoyment of our home and our garden, not to mention it’s value. We were most impressed by the speed and flexibility of the team and will definitely work with them again.",
  author: "Mr & Mrs Hoggarth",
};

const Testimonials = () => {
  const testimonialsImg = React.useRef(null);
  /* React.useEffect(() => {
    InView(testimonialsImg.current);
  }, []); */
  return (
    <section className="testimonials">
      <Container>
        <Row className="testimonials-inner">
          <Col lg={8} md={8} xs={12}>
            <p className="title">{testimonialsInformation.title}</p>
            <h2 className="heading">{testimonialsInformation.heading}</h2>
            <p className="description">{testimonialsInformation.description}</p>
            <div className="pararaph">
              <p className="text">
                &ldquo;
                {pararaph.text}
                &rdquo;
              </p>
              <h3 className="author">{pararaph.author}</h3>
            </div>
          </Col>
          <Col lg={4} md={4} xs={12}>
            <div
              className="testimonials-img"
              style={{ backgroundImage: `url(${testimonialsBg})` }}
              ref={testimonialsImg}
            ></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
