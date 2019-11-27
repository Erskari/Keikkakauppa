import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
const MyNavbar = ({links, setOldGigs, oldGigs}) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Keikkakauppa</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link onSelect={e => setOldGigs (true) } href="#">Tulevat keikat</Nav.Link>
            <Nav.Link onSelect={e => setOldGigs (false) } href="#">Menneet keikat</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
               
                {links.map(link => <NavDropdown.Item href={link}>{link}</NavDropdown.Item>)}
                
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                Dank memes
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar