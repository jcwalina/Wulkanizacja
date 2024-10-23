import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Logo from "./imgs/logo-footer.png";
import "./styles/footer.scss";

const Footer = ({
  handleUserIconClick,
  handleLocationIconClick,
  handleOfferClick,
}) => {
  return (
    <footer className="text-light py-3">
      <Container>
        <Row className="center m-3" md={6}>
          <img src={Logo} alt="Company Logo" style={{ maxWidth: "150px" }} />
        </Row>
        <Row>
          <Col
            style={{ alignItems: "flex-end" }}
            className="center footer-contact"
          >
            <Col md={6}>
              <h5 className="orange">Kontakt</h5>
              <p>
                <b>Email:</b> <br /> zbyszek175@vp.pl
              </p>
              <p className="tel-footer">
                <b>Telefon:</b> <br /> +48 602 467 698
              </p>
              <p>
                <b>Adres:</b> <br /> Aleja Piłsudskiego 60, <br /> 18-400 Łomża
              </p>
            </Col>
          </Col>

          <Col style={{ justifyContent: "flex-start" }} className="center">
            <Col md={6}>
              <h5 className="orange">Linki</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Strona główna</a>
                </li>
                <li>
                  <a onClick={handleUserIconClick}>O Nas</a>
                </li>
                <li>
                  <a onClick={handleOfferClick}>Usługi</a>
                </li>
                <li>
                  <a onClick={handleLocationIconClick}>Kontakt</a>
                </li>
              </ul>
            </Col>
          </Col>
        </Row>
        <hr className="my-2 orange" />
        <Row>
          <Col>
            <p className="text-center">
              © 2023 Wulkanizacja. Wszelkie prawa zastrzeżone. <br />
              Created with <FontAwesomeIcon icon={faHeart} className="orange" />
              by
              <a
                style={{ color: "white", marginLeft: "6px" }}
                href="https://www.linkedin.com/in/joanna-cwalina/"
                rel="noreferrer"
                target="_blank"
              >
                Joanna Cwalina
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
