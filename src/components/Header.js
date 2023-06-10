import React from 'react';
import { Container, Navbar, NavDropdown, Nav, Image } from 'react-bootstrap';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faRabbit } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return(
        <section className="pt-5">
            <Container className="maxWidth900px">
                <Navbar bg="white" expand="lg" className="rounded-5">
                            <Navbar.Brand href="#" className="p-0 position-relative col-sm-1 me-sm-4"><Image src="images/dood-logo.png" className="header-logo" width="115" /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto header-navbar">
                                <Nav.Link href="#about">About</Nav.Link>
                                <Nav.Link href="#achieve">Achievement</Nav.Link>
                                <Nav.Link href="#dripmap">Dripmap</Nav.Link>
                                <Nav.Link href="#faq">FAQ</Nav.Link>
                                <Nav.Link href="#team">Team</Nav.Link>
                                <Nav.Link href="#" className="ms-md-3"><i className="fa fa-twitter"></i></Nav.Link>
                             
                                <Nav.Link href="#" className="ms-md-3">Mint</Nav.Link>
                                 {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            </NavDropdown> */}
                            </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                </Container>
        </section>
    );
}


export default Header;