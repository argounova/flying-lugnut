import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

const NewArrival = (props) => {

    let newProductImage = props.newProductImage;
    let newProductTitle = props.newProductTitle;
    let newProductSubtitle = props.newProductSubtitle;
    let etsyLink = props.etsyLink;

    return (
        <>
            <Row style={{ backgroundColor: '#F1D74D' }} className="square border border-dark border-4 p-0">
                <Col className="d-flex align-items-center justify-content-center p-0">
                    <Stack className="d-flex align-items-center justify-content-center">
                        <p style={{ fontSize: '3rem', marginBottom: '-15px'}}>{ newProductTitle }</p>
                        <p style={{ fontSize: '2rem', marginBottom: '-5px'}}>{ newProductSubtitle }</p>
                    </Stack>
                </Col>
                <Col className="d-flex align-items-center justify-content-center p-0">
                    <Button size='lg' style={{ width: '60%', backgroundColor: '#005490', color: '#FFFFFF'}} href={ etsyLink } target={ '_blank' }>Buy Now</Button>
                </Col>
            </Row>
            <Row className="p-0">
                <Image className="p-0" src={ newProductImage }/>
            </Row>
        </>
    );
}

export default NewArrival;