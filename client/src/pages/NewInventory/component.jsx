import { useQuery } from '@apollo/client';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './style.css';
import ProductCard from '../../components/ProductCard/component';
import Banner1 from '../../components/Banner1/component';
import Banner2 from '../../components/Banner2/component';
import { GET_NEWCARS } from '../../queries/carQueries';

const NewInventory = () => {
    const { loading, error, data } = useQuery(GET_NEWCARS)
    if(loading) return <p>Loading...</p>
    if(error) return <p>Someting Went Wrong</p>

    return (
        <Container fluid>
            <Banner1/>
            <Banner2/>
            <Row className='mt-5 mb-5 d-flex align-items-center justify-content-center g-0'>
                {data.newCars.map(car => (
                    <ProductCard
                        key={car.id}
                        car={car}
                        productTitle={ car.make + ' ' + car.model + ' ' + car.trim }
                        productSubtitle={ car.exteriorColor }
                        productImage={ car.mainImage }
                        productView={ `/cars/${car.id}` }
                    />
                ))}
            </Row>
        </Container>
    )
}

export default NewInventory;