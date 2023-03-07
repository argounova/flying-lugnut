import React from "react";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';
import './style.css';

const ProductCard = (props) => {

    let productImage = props.productImage;
    let productTitle = props.productTitle;
    let productSubtitle = props.productSubtitle;
    let productView = props.productView;

    return ( 
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ width: '400px', height: '400px', marginLeft: '1%', marginRight: '1%' }}>
            <Stack className="d-flex align-items-center justify-content-center" style={{ marginBottom: '-50px' }}>
                <div>
                    <Image src={ productImage } style={{ width: '100%' }}/>
                </div>
                <div className="d-flex align-items-center justify-content-center" style={{ backgroundColor: '#005490', width: '400px' }}>
                    <Stack className='d-flex align-items-center justify-content-center'>
                        <p style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '-4px'}}>{ productTitle }</p>
                        <p style={{ color: '#FFFFFF'}}>{ productSubtitle }</p>
                    </Stack>
                </div>
            </Stack>
            <Button className="product-card-btn" href={ productView }>View</Button>
        </div>
    );
}

export default ProductCard;