import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from './flying-lugnut-logo-v1-small.png';
import CartIcon from './cart.svg';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="sm" variant="dark" style={{ background: '#005490'}}>
            <Container fluid>
                <Navbar.Brand href="http://localhost:3000/">
                    <img
                        alt=""
                        src={Logo}
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Find Hot Wheels"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-light">Search</Button>
                </Form>
                <Navbar.Toggle aria-controls="toggle-nav"/>
                    <Navbar.Collapse 
                        className="justify-content-end"
                        id="toggle-nav"
                    >
                        <Nav>
                            <Nav.Link href="http://localhost:3000/new-inventory" style={{ color: '#F1D74D'}}>New Inventory</Nav.Link>
                            <Nav.Link href="http://localhost:3000/browse-all">Browse All</Nav.Link>
                            <Nav.Link href="http://localhost:3000/coming-soon">Clearance</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                <Nav>
                    <Nav.Link href="http://localhost:3000/coming-soon">
                        <img src={CartIcon} alt={'shopping-cart'}/>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;