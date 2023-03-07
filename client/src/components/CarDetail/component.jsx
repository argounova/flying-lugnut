import { useQuery } from '@apollo/client';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import './style.css';
import { GET_CAR } from '../../queries/carQueries';
import Banner1 from '../Banner1/component';
import Arrow from './arrow-left.svg';

const CarDetail = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_CAR, { variables: { id } });
    if(loading) return <p>Loading...</p>;
    if(error) return <p>Someting Went Wrong</p>;


    return(
        <>
        <Banner1/>
        <Container style={{ marginTop: '2%', marginBottom: '2%'}}>
            <Row>
                <Col md={8}>
                    <Image src={ data.car.mainImage }/>
                </Col>
                <Col>
                    <Stack gap={3}>
                        <Stack className='d-flex justify-content-end' direction="horizontal" gap={2}>
                            <Button className='back-btn' onClick={() => navigate(-1)}>
                                <Image src={ Arrow }/>Back
                            </Button>
                        </Stack>
                        <Button className='buy-on-etsy-btn' href={ data.car.etsyLink } target={ '_blank' }>Buy on Etsy</Button>
                        <p style={{ fontSize: '2rem'}} className='car-price'>{ '$' + data.car.price + '.95' }</p>
                        <div className='info-div'>
                            <p style={{ textDecoration: 'underline', fontSize: '2rem'}}>{ data.car.make + ' ' + data.car.model + ' ' + data.car.trim }</p>
                            <ul>
                                <li>{ data.car.seriesName + ' Collection' }</li>
                                <li>{ 'Number ' + data.car.thisCarInSeries + ' of ' + data.car.totalCarsInSeries + ' in the series' }</li>
                                <li>Includes original packaging</li>
                            </ul>
                            <p style={{ textAlign: 'center'}}>{ data.car.detailDescription + '. Each item is photographed individually so what you see is actually what you get!' }</p>
                        </div>
                    </Stack>
                </Col>
            </Row>
            <Row style={{ marginTop: '2%', marginBottom: '2%'}}>
                <Stack gap={4}>
                    <Image src={ data.car.detailImage1 }/>
                    <Image src={ data.car.detailImage2 }/>
                    <Image src={ data.car.detailImage3 }/>
                </Stack>
            </Row>
        </Container>
        </>
    );
}

export default CarDetail;