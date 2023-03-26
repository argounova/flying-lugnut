import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Logo from './flying-lugnut-logo-v1-small.png';
import CartIcon from './cart.svg';
import { useState, useContext } from 'react';
import { cartContext } from '../../cartContext';
import Cart from '../Cart/component';



const Navigation = () => {
    const cart = useContext(cartContext);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const checkout = async () => {
        await fetch('http://localhost:4000/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if(response.url) {
                window.location.assign(response.url);
            }
        });
    }

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return (
        <>
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
                        <Button variant="outline-light" href="http://localhost:3000/coming-soon">Search</Button>
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
                        <Nav.Link onClick={() => handleShow()}>
                            <img src={CartIcon} alt={'shopping-cart'}/>
                            ({productsCount})
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        {productsCount > 0 ?
                        <>
                            <p>Items in your cart:</p>
                            {cart.items.map((currentProduct, idx) => (
                                <Cart key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></Cart>
                            ))}
                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
                            <Button variant='success' onClick={checkout}>Purchase Items!</Button>
                        </>
                        :
                        <h1>There are no items in your cart!</h1>
                        }
                    </Modal.Body>
            </Modal>
        </>
    );
}

export default Navigation;