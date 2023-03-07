import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
// import Link from 'react-bootstrap/NavLink';

import Instagram from './instagram-icon.svg';
import Facebook from './facebook-icon.svg';
import Twitter from './twitter-icon.svg';
import Twitch from './twitch-icon.svg';

const Footer = () => {
    return (
        <Container fluid style={{ background: '#005490', paddingTop: '1%', paddingBottom: '2%'}}>
            <Row>
                <Col sm={2}>
                    <Stack>
                        <a style={{ color: '#FFFFFF', textDecoration: 'none' }} href="http://localhost:3000/coming-soon">About Us</a>
                        <a style={{ color: '#FFFFFF', textDecoration: 'none' }} href="http://localhost:3000/coming-soon">Blogs</a>
                        <a style={{ color: '#FFFFFF', textDecoration: 'none' }} href="http://localhost:3000/coming-soon">Contact Us</a>
                        <a style={{ color: '#FFFFFF', textDecoration: 'none' }} href="http://localhost:3000/coming-soon">Store</a>
                    </Stack>
                </Col>
                <Col sm={8}>
                    <Stack className='d-flex align-items-center justify-content-center'>
                        <Stack className='d-flex align-items-center justify-content-center' direction="horizontal" gap={4}>
                            <a href="https://www.instagram.com/flyinglugnut/" target="_blank" rel="noreferrer">
                                <Image src={Instagram} width="40" height="40"/>
                            </a>
                            <Image src={Facebook} width="40" height="40"/>
                            <Image src={Twitter} width="40" height="40"/>
                            <Image src={Twitch} width="40" height="40"/>
                        </Stack>
                        <p style={{ color: '#FFFFFF', fontSize: '2rem' }}>Stay connected with us for the latest custom Hot Wheels!</p>
                        <Form style={{ width: '50%' }} className="d-flex">
                            <Form.Control
                            type="search"
                            placeholder="Enter your email"
                            className="me-2"
                            aria-label="Search"
                            />
                            <Button variant="danger" href="http://localhost:3000/coming-soon">Subscribe</Button>
                        </Form>
                    </Stack>
                </Col>
                <Col sm={2}>
                    <Stack>
                        <p style={{ color: '#FFFFFF', fontSize: '1.25rem' }}>Partners</p>
                        <a style={{ color: '#FFFFFF', textDecoration: 'none' }} href="http://localhost:3000/coming-soon">Digital Motorsport Solutions</a>
                        <a style={{ color: '#FFFFFF', textDecoration: 'none' }} href="http://localhost:3000/coming-soon">Willow Photo Works</a>
                    </Stack>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;