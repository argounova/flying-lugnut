import { useQuery } from '@apollo/client';
import { GET_FOURCARS } from '../../queries/carQueries';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import './style.css';
import HW1 from '../../assets/images/hw-shelbygt500-freeship-companion.jpg';

// Components
import MainCarousel from '../../components/Carousel/component';
import FeaturedCard from '../../components/FeaturedCard/component';
import NewArrival from '../../components/NewArrival/component';

// Images
import NewCivicEG from '../../assets/images/NewArrival/new-honda-civic-eg.jpg';
import NewCivicEF from '../../assets/images/NewArrival/new-honda-civic-ef.jpg';


const Home = () => {
    const { loading, error, data } = useQuery(GET_FOURCARS)
    if(loading) return <p>Loading...</p>
    if(error) return <p>Someting Went Wrong</p>

    return (
        <Container fluid className='p-0'>
            <Row>
                <MainCarousel/>
            </Row>
            <Row className='d-flex align-items-center justify-content-center g-0 pt-5' style={{ backgroundColor: '#fff'}}>
                {data.fourCars.map(car => (
                    <FeaturedCard
                        key={car.id}
                        car={car}
                        productTitle={ car.make + ' ' + car.model + ' ' + car.trim }
                        productSubtitle={ car.exteriorColor }
                        productImage={ car.mainImage }
                        productView={ `/cars/${car.id}` }
                    />
                ))}
                <Button className='view-all-inventory justify-content-center' style={{ borderRadius: '0px' }} href='http://localhost:3000/browse-all'>SHOP NOW</Button>
            </Row>
            {/* <Row className='g-0' style={{ marginTop: '2%' }}>
                <Col className='free-ship-banner d-flex'>
                    <Stack className='d-flex align-items-center justify-content-center' gap={5}>
                        <div className='d-flex flex-column align-items-center'>
                            <p>Free standard shipping!</p>
                            <h3>No minimum order...lower 48 states only!</h3>
                        </div>
                        <Button className='free-ship-banner-btn' size='lg' href='http://localhost:3000/browse-all'>SHOP NOW</Button>
                    </Stack>
                </Col>
                <Col>
                    <Image src={HW1} fluid/>
                </Col>
            </Row> */}
            <p style={{ fontSize: '5rem', textAlign: 'center', color: '#fff', marginBottom: '-20px', backgroundColor: '#000'}}>New Arrivals</p>
            <Row style={{ backgroundColor: '#000' }}>
                <Col>
                    <NewArrival
                        newProductImage={ NewCivicEG }
                        newProductTitle={ '1992 Honda Civic EG' }
                        newProductSubtitle={ 'White Volk TE37' }
                        etsyLink={ 'https://www.etsy.com/listing/1412950110/1992-honda-civic-eg-hatch-teal-with?click_key=3d579f915fd65ee0ce6b0462575ed973d02ccbb8%3A1412950110&click_sum=bbe9588b&ref=shop_home_active_3&frs=1' }    
                    />
                </Col>
                <Col>
                    <NewArrival
                        newProductImage={ NewCivicEF }
                        newProductTitle={ '1990 Honda Civic EF' }
                        newProductSubtitle={ 'Black Volk TE37' }
                        etsyLink={ 'https://www.etsy.com/listing/1427163409/1990-honda-civic-ef-hatch-with-black?click_key=c218b7cfe3d1383f9b1ac9800fc46ddd7f21f1bb%3A1427163409&click_sum=0594d979&ref=shop_home_active_2&frs=1' }    
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;