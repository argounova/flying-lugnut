import { useQuery } from '@apollo/client';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { GET_CAR } from '../../queries/carQueries';
import { BsArrowLeftCircle } from 'react-icons/bs';
import {
    Container,
    Row,
    Col,
    Image,
    Stack,
    Button
} from 'react-bootstrap';
import './style.css';
import Banner1 from '../Banner1/component';

const CarDetail = () => {
    const navigate = useNavigate();
    const cart = useContext(CartContext);

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
                                <BsArrowLeftCircle size={'2rem'} />
                            </Button>
                        </Stack>
                        { data.car.inStock &&
                            <Button className='buy-on-etsy-btn' onClick={() => cart.addToCart(data)}>Add To Cart</Button>
                        }
                        { !data.car.inStock &&
                            <div className='out-of-stock'>Out of stock</div> 
                        }
                        <p style={{ fontSize: '2rem'}} className='car-price'>{ '$' + data.car.price + '.95' }</p>
                        <div className='info-div'>
                            <p style={{ textDecoration: 'underline', fontSize: '2rem', textAlign: 'center'}}>{ data.car.make + ' ' + data.car.model + ' ' + data.car.trim }</p>
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