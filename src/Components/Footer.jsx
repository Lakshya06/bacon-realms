import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(){

    return (
        <>
        <Container className="footer mt-5">
            <hr />
            <Row className="my-5">
                <Col sm={12} md={6} className="text-center text-md-start">
                <h5>
                    Bacon Realms
                </h5>
                <h6>© Bacon realms 2024</h6>
                </Col>
                <Col sm={12} md={6}>
                <Row>
                    <div className="footer-nav text-center text-md-end">
                        <a href="" className="px-3">Home</a>
                        <a href="" className="px-3">Store</a>
                        <a href="" className="px-3">Discord</a>
                        <a href="" className="px-3">Forum</a>
                        <a href="" className="px-3">Support</a>
                        <a href="" className="px-3">Login</a>
                    </div>
                </Row>

                <Row>
                    <span className="footer-icons text-center text-md-end my-2">
                        <a href=""> <i class="fa-brands fa-discord mx-3 mx-md-4"></i></a>
                        <a href=""><i class="fa-brands fa-instagram mx-3 mx-md-4"></i></a>
                        <a href=""><i class="fa-brands fa-youtube mx-3 mx-md-4"></i></a>
                        <a href=""><i class="fa-brands fa-twitter mx-3 mx-md-4"></i></a>
                    </span>
                </Row>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Footer;