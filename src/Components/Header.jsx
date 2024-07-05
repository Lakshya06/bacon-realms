import React, { useState, useEffect } from "react";
import { NavLink, Navigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
                    
                    <NavLink to="/" className={({ isActive }) => isActive ? "mx-4 my-auto active" : "mx-4 my-auto"}> HOME </NavLink>
                    
                    <NavLink to="/store" className={({ isActive }) => isActive ? "mx-4 my-auto active" : "mx-4 my-auto"}>STORE</NavLink>
                    <NavLink to="/discord" className={({ isActive }) => isActive ? "mx-4 my-auto active" : "mx-4 my-auto"}>DISCORD</NavLink>
                    {/* <Nav.Link href="https://discord.com/invite/ugdgjy6TXb" className="mx-4 my-auto">DISCORD</Nav.Link> */}

                    {/* <Navbar.Brand href="#home"> */}
                    <Image src={require("../Assets/logo3.png")} alt="" className="logo my-2 mx-5 d-none d-lg-block" fluid/>
                    {/* </Navbar.Brand> */}

                    <NavLink to="/forum" className={({ isActive }) => isActive ? "mx-4 my-auto active" : "mx-4 my-auto"}>FORUM</NavLink>
                    <NavLink to="/support" className={({ isActive }) => isActive ? "mx-4 my-auto active" : "mx-4 my-auto"}>SUPPORT</NavLink>
                    <NavLink to="/login" className={({ isActive }) => isActive ? "mx-4 my-auto active" : "mx-4 my-auto"}>LOGIN</NavLink>
                    {/* <NavLink to="/register" className={({ isActive }) => isActive ? "mx-4 my-auto active" : "mx-4 my-auto"} id="">REGISTER</NavLink> */}

                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            {/* <hr /> */}
        </header>
    )
}

export default Header;