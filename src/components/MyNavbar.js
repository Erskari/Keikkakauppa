import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
const MyNavbar = ({links, setOldGigs, oldGigs}) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Keikkakauppa</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link onSelect={e => setOldGigs (true) } href="oldgigs">Menneet keikat</Nav.Link>
            <Nav.Link onSelect={e => setOldGigs (false) } href="gigs">Tulevat keikat</Nav.Link>
            <Nav.Link href="newgig">Lisää uusi keikka</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar