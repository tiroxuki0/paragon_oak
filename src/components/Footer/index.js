import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.scss";
import {
  footerRightBg,
  carousel1,
  carousel2,
  carousel3,
  carousel4,
} from "../../assets";

const carousels = [
  {
    src: carousel1,
  },
  {
    src: carousel2,
  },
  {
    src: carousel3,
  },
  {
    src: carousel4,
  },
];

const footerMenu = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "Our roots",
    href: "#",
  },
  {
    name: "Project sequece",
    href: "#",
  },
  {
    name: "Aftercare",
    href: "#",
  },
  {
    name: "Residential",
    href: "#",
  },
  {
    name: "Commercial",
    href: "#",
  },
  {
    name: "Sustainability",
    href: "#",
  },
  {
    name: "Blog",
    href: "#",
  },
  {
    name: "Contact us",
    href: "#",
  },
];

const contact = {
  phone: "012345689",
  mail: "citythree.11798@gmail.com",
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="flex">
          <div className="footer-content__left">
            <p className="alpha primary tiempos-fine">
              Reinvent your space, with us.
            </p>
            <p className="title national-book ">Contact Us</p>
            <p className="info tiempos-fine">
              {contact.phone}
              <a href={`mailto: ${contact.mail}`}>{contact.mail}</a>
            </p>
          </div>
          <div className="footer-content__right">
            <nav className="footer__nav">
              <div className="menu-footer-menu-container">
                <ul id="menu-footer-menu" className="menu">
                  {footerMenu.map((e, index) => {
                    return (
                      <li
                        key={index}
                        id={`menu-item-${index}`}
                        className="menu-item "
                      >
                        <a href={e.href} aria-current="page">
                          {e.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="footer__logos">
          {carousels.map((e, index) => {
            return <img src={e.src} alt={e.src} key={index} />;
          })}
        </div>
      </div>
      <a
        className="footer__map"
        target="_blank"
        rel="noopener"
        href="https://www.google.com/maps/place/Paragon+oak+ltd/@53.6638792,-1.68243,17z/data=!3m1!4b1!4m5!3m4!1s0x487bdf143ca52f23:0xeeedf27faa6b0694!8m2!3d53.6638792!4d-1.6802413"
        style={{ backgroundImage: `url(${footerRightBg})` }}
      >
        <div className="footer-map__content">
          <p className="small-text nation national--semi caps">
            Paragon Oak
            <span
              style={{ fontSize: "12px", position: "relative", top: "-8px" }}
            >
              ®
            </span>
          </p>
          <p className="title tiempos-headline caps">
            Office &amp;<br></br>
            Workshop
          </p>
          <p className="national-book base-text">
            Wheatley Park, MirfieldWest Yorkshire, WF14 8HE
          </p>
        </div>
      </a>
    </footer>
  );
};

export default Footer;
