import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Logo from "./imgs/logo-footer.png"

const Footer = ({ handleUserIconClick, handleLocationIconClick, handleOfferClick }) => {
    return (
        <footer style={{ background: "#15151594", marginTop: "50px" }} className=" text-light py-3">
            <Container>
                <Row className="center m-3" md={6}>
                    <img src={Logo} alt="Logo" style={{ maxWidth: '150px' }} />
                </Row>
                <Row>
                    <Col style={{ alignItems: "flex-end" }} className="center footer-kontakt">
                        <Col md={6}>
                            <h5 style={{ color: "rgb(254, 189, 91)" }} >Kontakt</h5>
                            <p> <b>Email:</b> <br /> zbyszek175@vp.pl</p>
                            <p className="tel-footer"><b>Telefon:</b> <br />  +48 602 467 698</p>
                            <p><b>Adres:</b> <br />  Aleja Piłsudskiego 60, <br /> 18-400 Łomża</p>
                        </Col>
                    </Col>

                    <Col style={{ justifyContent: "flex-start" }} className="center">
                        <Col md={6}>
                            <h5 style={{ color: "rgb(254, 189, 91)" }}>Linki</h5>
                            <ul className="list-unstyled">
                                <li><a href="/">Strona główna</a></li>
                                <li><a href="/" style={{ cursor: 'pointer' }} onClick={handleUserIconClick}>O Nas</a></li>
                                <li><a href="/" style={{ cursor: 'pointer' }} onClick={handleOfferClick} >Usługi</a></li>
                                <li><a href="/" style={{ cursor: 'pointer' }} onClick={handleLocationIconClick}>Kontakt</a></li>
                            </ul>
                        </Col>
                    </Col>


                </Row>
                <hr style={{ color: "rgb(254, 189, 91)" }} className="my-2" />
                <Row>
                    <Col>
                        <p className="text-center">
                            © 2023 Wulkanizacja. Wszelkie prawa zastrzeżone. <br />

                            Created with <FontAwesomeIcon icon={faHeart} style={{ color: "rgb(254, 189, 91)", }} /> by
                            <a style={{ color: "white", marginLeft: "6px" }} href="https://www.linkedin.com/in/joanna-cwalina/" rel="noreferrer" target="_blank" >Joanna Cwalina</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
