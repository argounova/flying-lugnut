import {
    Button,
    Col,
    Container,
    Dropdown,
    DropdownButton,
    Image,
    ListGroup,
    Row,
    Stack,
} from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import './style.css';

const Cart = () => {
    const cart = useContext(CartContext);
    console.log(cart);

     return (
        <Container fluid className='d-flex flex-row'>
            <div>
                <ListGroup>
                    {Object.values(cart.items).map(car => (
                        <ListGroup.Item key={car.id}>
                            <Row className='d-flex align-items-center'>
                                <Col>
                                    <Image src={car.image} alt={car.make} thumbnail={true} />
                                </Col>
                                <Col className='cart-desc'>
                                    <span>{car.make} {car.model} {car.trim}</span>
                                </Col>
                                <Col className='cart-desc'>
                                    ${car.price}
                                </Col>
                                <Col className='d-flex justify-content-center'>
                                    <Button
                                        variant='danger'
                                        onClick={() => cart.deleteFromCart(car.id)}
                                    >Remove</Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
            <div className='cart-total'>
                <ListGroup>
                    <ListGroup.Item>
                        <Row style={{ fontSize: '1.5vw' }}>Subtotal: ${cart.getTotalCost()}</Row>
                        <Row style={{ fontSize: '1.3vw' }}>Shipping: FREE</Row>
                        <Row style={{ fontSize: '1.25vw' }}>Tax: Calculated at checkout</Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <Button
                            variant='dark'
                            style={{ width: '100%' }}
                            size='lg'
                        >Proceed to Checkout</Button>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </Container>
    )
}

export default Cart;