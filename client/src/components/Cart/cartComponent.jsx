import { Button, Image } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CAR } from '../../queries/carQueries';



function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;

    const { loading, error, data } = useQuery(GET_CAR, { variables: { id } });
    if(loading) return <p>Loading...</p>;
    if(error) return <p>Someting Went Wrong</p>;

    const image = data.car.mainImage;
    const make = data.car.make;
    const model = data.car.model;


    return(
        <>
            <div style={{ textAlign: 'center' }}>
            <span>{make} {model}</span>
            </div>
            <Image src={image} thumbnail={true}/>
            <div className="d-grid">
            <Button variant='danger' size='sm' onClick={() => cart.deleteFromCart(id)}>Remove</Button>
            </div>
            <hr></hr>
        </>
    )
}

export default CartProduct;