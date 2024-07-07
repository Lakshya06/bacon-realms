import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

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
                        <Link to="/" className="px-3">Home</Link>
                        <Link to="/store" className="px-3">Store</Link>
                        <Link to="/discord" className="px-3">Discord</Link>
                        <Link to="/forum" className="px-3">Forum</Link>
                        <Link to="/support" className="px-3">Support</Link>
                        <Link to="/login" className="px-3">Login</Link>
                    </div>
                </Row>

                <Row>
                    <span className="footer-icons text-center text-md-end my-2">
                        <Link to="https://discord.com/invite/ugdgjy6TXb"> <i class="fa-brands fa-discord mx-3 mx-md-4"></i></Link>
                        <Link to="https://www.instagram.com/bacon.realms?igsh=MWhqZXdvYndxOWd1Nw=="><i class="fa-brands fa-instagram mx-3 mx-md-4"></i></Link>
                        <Link to="https://youtube.com/@asuna0099?si=bIDPnQ7nEngyKOoY"><i class="fa-brands fa-youtube mx-3 mx-md-4"></i></Link>
                        <Link to="https://x.com/BaconRealm86265?t=1Hjz9lGA1rn0_rG-R-2lCw&s=09"><i class="fa-brands fa-twitter mx-3 mx-md-4"></i></Link>
                    </span>
                </Row>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Footer;