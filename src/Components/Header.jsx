import React, { useState, useEffect } from "react";
// import { Link, Navigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';

function Header(){

    return (
        <header>
            <Navbar expand="lg" className="acme-regular" data-bs-theme="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#home" className="mobile-logo d-block d-md-none"><img src={require("../Assets/logo3.png")} alt=""/> <span className="align-middle">BACON REALMS</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto m-auto navbar-dark mt-2 mt-md-0">
                    <Nav.Link href="" className="mx-4 my-auto active">HOME</Nav.Link>
                    <Nav.Link href="" className="mx-4 my-auto">STORE</Nav.Link>
                    <Nav.Link href="" className="mx-4 my-auto">DISCORD</Nav.Link>

                    {/* <Navbar.Brand href="#home"> */}
                    <Image src={require("../Assets/logo3.png")} alt="" className="logo my-2 mx-5 d-none d-lg-block" fluid/>
                    {/* </Navbar.Brand> */}
                    

                    <Nav.Link href="" className="mx-4 my-auto">FORUM</Nav.Link>
                    <Nav.Link href="" className="mx-4 my-auto">SUPPORT</Nav.Link>
                    <Nav.Link href="" className="mx-4 my-auto">LOGIN</Nav.Link>

                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}

export default Header;