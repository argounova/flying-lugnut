import { 
    Badge,
    Button,
    Container,
    Dropdown,
    DropdownButton,
    Form,
    Nav,
    Navbar,
} from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { FaShoppingBag } from 'react-icons/fa';
import CartProduct from '../CartProduct/component';
import Logo from './flying-lugnut-logo-v1-small.png';
import './style.css';


const Navigation = () => {
    const cart = useContext(CartContext);

    // const checkout = async () => {
    //     await fetch('http://localhost:4000/checkout', {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({items: cart.items})
    //     }).then((response) => {
    //         return response.json();
    //     }).then((response) => {
    //         if(response.url) {
    //             window.location.assign(response.url);
    //         }
    //     });
    // }

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
                                <Nav.Link href="http://localhost:3000/browse-all" style={{ color: '#FFFFFF'}}>Browse All</Nav.Link>
                                <Nav.Link href="http://localhost:3000/coming-soon" style={{ color: '#FFFFFF'}}>Clearance</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    <Nav>
                        <DropdownButton
                            align="end"
                            title={<><Badge bg="none">({cart.items.length})</Badge><FaShoppingBag color='#ffffff' /></>}
                            id="dropdown-menu-align-end"
                            variant="none"
                            size="lg"
                        >
                            <Dropdown.Item>
                                <>
                                    {cart.items.map((currentProduct, idx) => (
                                        <CartProduct
                                            key={idx}
                                            id={currentProduct.id}
                                            quantity={currentProduct.quantity}    
                                        />
                                    ))}
                                </>
                            </Dropdown.Item>
                            <Dropdown.Item href="http://localhost:3000/cart" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.25rem', backgroundColor: '#F1D74D', borderRadius: '5px', border: 'solid #F1D74D 1px' }}>View Cart</Dropdown.Item>
                        </DropdownButton>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;