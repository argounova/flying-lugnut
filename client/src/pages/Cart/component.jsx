import {
    Button,
    Col,
    Container,
    Dropdown,
    DropdownButton,
    Row,
    Stack,
} from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { GET_CAR } from '../../queries/carQueries';

import './style.css';

const Cart = () => {
    const cart = useContext(CartContext);

    cart.items.map(item => (
        const { loading, error, data } = useQuery(GET_CAR, { variables: { item.id } });
        if(loading) return <p>Loading...</p>;
        if(error) return <p>Someting Went Wrong</p>;
        return data;
    ))
        
    console.log(cart);

    return (
        <Container>
            <div>
                <>
                    {
                        cart.items.map(item => (
                            <>
                            {GetEachItem(item.id)}
                            <Row>
                                {/* <p>{data.car.make}</p> */}
                                {/* <p>{data.car.model}</p> */}
                            </Row>
                            </>
                        ))
                    }
                </>
            </div>
            <div>

            </div>
        </Container>
    )
}

export default Cart;