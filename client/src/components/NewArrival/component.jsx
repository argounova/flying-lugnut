import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import './style.css';

const NewArrival = (props) => {

    let newProductImage = props.newProductImage;
    let newProductTitle = props.newProductTitle;
    let newProductSubtitle = props.newProductSubtitle;
    let etsyLink = props.etsyLink;

    return (
        <>
            <Row style={{ backgroundColor: '#F1D74D' }} className="square border border-dark border-4">
                <Col className="d-flex align-items-center justify-content-center" md={8}>
                    <Stack className="d-flex align-items-center justify-content-center">
                        <p className="new-arrival-title">{ newProductTitle }</p>
                        <p className="new-arrival-subtitle">{ newProductSubtitle }</p>
                    </Stack>
                </Col>
                <Col className="d-flex align-items-center justify-content-center">
                    <Button className="new-arrival-buy-btn" href={ etsyLink } target={ '_blank' }>Buy Now</Button>
                </Col>
            </Row>
            <Row>
                <Image src={ newProductImage }/>
            </Row>
        </>
    );
}

export default NewArrival;