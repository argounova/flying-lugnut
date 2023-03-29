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
        <Container>
            <div>
                <ListGroup>
                    {Object.values(cart.items).map(car => (
                        <ListGroup.Item key={car.id}>
                            <Row>
                                <Col>
                                    <Image src={car.image} alt={car.make} thumbnail={true} />
                                </Col>
                                <Col>
                                    <span>{car.make} {car.model} {car.trim}</span>
                                </Col>
                                <Col>
                                    ${car.price}
                                </Col>
                                <Col>
                                    <Button
                                        variant='outline-danger'
                                        onClick={() => cart.deleteFromCart(car.id)}
                                    >Remove</Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
            <div>

            </div>
        </Container>
    )
}

export default Cart;