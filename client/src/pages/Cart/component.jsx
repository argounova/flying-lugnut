import {
    Button,
    Col,
    Container,
    Dropdown,
    DropdownButton,
    Row,
    Stack,
} from 'react-bootstrap';
import { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { CartContext } from '../../context/CartContext';
import { GET_CAR } from '../../queries/carQueries';

import './style.css';

const Cart = () => {
    const cart = useContext(CartContext);
    console.log(cart);
    // const { loading, error, data } = useQuery(GET_CAR, { variables: { id } });
    // if(loading) return <p>Loading...</p>;
    // if(error) return <p>Someting Went Wrong</p>;

    return (
        <Container>
            <div>
                <Row>
                    <p></p>
                    {/* <p>{data.car.make}</p> */}
                    {/* <p>{data.car.model}</p> */}
                </Row>
            </div>
            <div>

            </div>
        </Container>
    )
}

export default Cart;