import { useQuery } from '@apollo/client';
import { GET_FEATUREDCARS } from '../../queries/carQueries';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import './style.css';

// Components
import MainCarousel from '../../components/Carousel/component';
import FeaturedCard from '../../components/FeaturedCard/component';
import NewArrival from '../../components/NewArrival/component';

// Images
import NewCar1 from '../../assets/images/NewArrival/civic-custom-2.jpg';
import NewCar2 from '../../assets/images/NewArrival/civic-ef.jpg';


const Home = () => {
    const { loading, error, data } = useQuery(GET_FEATUREDCARS)
    if(loading) return <p>Loading...</p>
    if(error) return <p>Someting Went Wrong</p>

    return (
        <Container fluid className='p-0'>
            <Row>
                <MainCarousel/>
            </Row>
                <Row className='d-flex align-items-center justify-content-center g-0 pt-5' style={{ backgroundColor: '#fff'}}>
                    {data.featuredCars.map(car => (
                        <FeaturedCard
                            key={car.id}
                            car={car}
                            productTitle={ car.make + ' ' + car.model + ' ' + car.trim }
                            productSubtitle={ car.exteriorColor }
                            productImage={ car.mainImage }
                            productView={ `/cars/${car.id}` }
                        />
                    ))}
                </Row>
            <Row className='d-flex align-items-center justify-content-center g-0' style={{ marginTop: '-1px', backgroundColor: '#fff' }}>
                <Button className='shop-now-btn justify-content-center' style={{ borderRadius: '0px' }} href='http://localhost:3000/browse-all'>SHOP NOW</Button>
            </Row>
            <Row className='d-flex'>
                <Col className='new-arrival-custom-border-left'></Col>
                <Col xs={9} md={8} xxl={7}>
                    <Stack className='d-flex align-items-center justify-content-center p-0'>
                        <p className='new-arrival-heading'>NEW ARRIVALS</p>
                    </Stack>
                </Col>
                <Col className='new-arrival-custom-border-right'></Col>
            </Row>
            <Row className='d-flex align-items-center justify-content-around' style={{ backgroundColor: '#000', paddingTop: '2%', paddingBottom: '2%' }}>
                <NewArrival
                    newProductImage={ NewCar1 }
                    newProductTitle={ 'Race Honda Civic Hatch' }
                    newProductSubtitle={ 'Black Volk TE37' }
                    etsyLink={ 'https://www.etsy.com/listing/1446523173/honda-civic-custom-racing-hatch-with?click_key=0fb008af4d0f325bacdf66dce8d01aa4ffcc9348%3A1446523173&click_sum=83c3ff5e&ref=shop_home_active_1&frs=1' }    
                />
                <NewArrival
                    newProductImage={ NewCar2 }
                    newProductTitle={ '1990 Honda Civic EF' }
                    newProductSubtitle={ 'White Volk TE37' }
                    etsyLink={ 'https://www.etsy.com/listing/1432305938/1990-honda-civic-ef-hatch-with-white?click_key=35e49b5fcca51ba88f7c43044f7c58877876f42d%3A1432305938&click_sum=19b7f682&ref=shop_home_active_2&frs=1' }    
                />
            </Row>
        </Container>
    );
}

export default Home;