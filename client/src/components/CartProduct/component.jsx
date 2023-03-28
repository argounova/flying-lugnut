import { 
    Button,
    Image,
    Stack
} from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CAR } from '../../queries/carQueries';
import './style.css';

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;

    const { loading, error, data } = useQuery(GET_CAR, { variables: { id } });
    if(loading) return <p>Loading...</p>;
    if(error) return <p>Someting Went Wrong</p>;

    const image = data.car.mainImage;

    return(
        <>
            <Stack gap={1}>
                <Image src={image} thumbnail={true}/>
                <div className='d-grid'>
                    <Button variant='outline-danger' size='sm' onClick={() => cart.deleteFromCart(id)}>
                        Remove
                    </Button>
                </div>
            </Stack>
            <hr></hr>
        </>
    )
}

export default CartProduct;