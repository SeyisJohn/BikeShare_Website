import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Col, Nav, Navbar, NavItem} from 'react-bootstrap';
import SBU_logo from './SBU_logo.png';

function Header() {

    return (

        <Navbar sticky="top" expand="lg" bg="dark" variant="dark" style={{width: `100%`, whiteSpace: `nowrap`}}>

            <Col>
                <Navbar.Brand href="/home">
                    <img
                        src={SBU_logo}
                        width="100%"
                        height="auto"
                        className="d-inline-block align-top"
                        alt="SBU logo"
                    />
                </Navbar.Brand>
            </Col>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className = "ml-auto justify-content-center">
                    <NavItem>
                        <Nav.Link href="/About Us">About Us</Nav.Link>
                    </NavItem>

                    <NavItem>
                        <Nav.Link href="/Update Log">Update Log</Nav.Link>
                    </NavItem>

                    <NavItem>
                        <Nav.Link href="/Help">Help</Nav.Link>
                    </NavItem>

                    <NavItem>
                        <Nav.Link href="/Contact Us">Contact Us</Nav.Link>
                    </NavItem>
                </Nav>
                {/* 
                <Nav className = "ml-auto justify-content-end">
                    <NavItem>
                        <Nav.Link href="/Log In">Log In</Nav.Link>
                    </NavItem>
                </Nav> 
                */}
            </Navbar.Collapse>
        </Navbar>


    );

}

export default Header;