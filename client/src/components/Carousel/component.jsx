import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Stack from 'react-bootstrap/Stack';
import './style.css';

// Carousel Images
let CarouselImage1 = require('../../assets/images/Carousel/carousel-image1.jpg');
let CarouselImage2 = require('../../assets/images/Carousel/carousel-image2.jpg');
let CarouselImage3 = require('../../assets/images/Carousel/carousel-image3.jpg');
let CarouselImage4 = require('../../assets/images/Carousel/carousel-image4.jpg');
let CarouselImage5 = require('../../assets/images/Carousel/carousel-image5.jpg');
let CarouselImage6 = require('../../assets/images/Carousel/carousel-image6.jpg');
let CarouselImage7 = require('../../assets/images/Carousel/carousel-image7.jpg');
let CarouselImage8 = require('../../assets/images/Carousel/carousel-image8.jpg');


const MainCarousel = () => {
    return (
        <Container>
            <Row className="p-0">
                <Carousel className="main-carousel" fade controls={false} indicators={false}>
                    <Carousel.Item>
                        <Image
                            className='d-block w-100'
                            src={CarouselImage1}
                            alt='Custom Hot Wheels Nissan Z with Volk TE37 wheels and Yokohama Advan Racing Tires'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className='d-block w-100'
                            src={CarouselImage2}
                            alt='Custom Hot Wheels Drift Nissan Maxima with Gold Volk TE37 wheels and Yokohama Advan Racing Tires'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className='d-block w-100'
                            src={CarouselImage3}
                            alt='Custom Hot Wheels Volk TE37 wheels and Yokohama Advan Racing Tires'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className='d-block w-100'
                            src={CarouselImage4}
                            alt='Custom Hot Wheels Volk TE37 wheels and Yokohama Advan Racing Tires'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className='d-block w-100'
                            src={CarouselImage5}
                            alt='Custom Hot Wheels with Volk TE37 wheels and Yokohama Advan Racing Tires'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className='d-block w-100'
                            src={CarouselImage6}
                            alt='Custom Hot Wheels with Volk TE37 wheels and Yokohama Advan Racing Tires'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className='d-block w-100'
                            src={CarouselImage7}
                            alt='Custom Hot Wheels with Volk TE37 wheels and Yokohama Advan Racing Tires'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className='d-block w-100'
                            src={CarouselImage8}
                            alt='Custom Hot Wheels with Volk TE37 wheels and Yokohama Advan Racing Tires'
                        />
                    </Carousel.Item>
                </Carousel>
            </Row>
            <Row className='d-flex'>
                <Col className='custom-border-left'></Col>
                <Col xs={9} md={8} xxl={7}>
                    <Stack className='d-flex align-items-center justify-content-center p-0'>
                        <p className='audiowide'>FLYING LUGNUT</p>
                        <p className='fasterone'>Custom Hot Wheels</p>
                    </Stack>
                </Col>
                <Col className='custom-border-right'></Col>
            </Row>
        </Container>
    );
}

export default MainCarousel;