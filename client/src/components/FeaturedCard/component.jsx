import React from "react";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';
import './style.css';

const FeaturedCard = (props) => {

    let productImage = props.productImage;
    let productTitle = props.productTitle;
    let productSubtitle = props.productSubtitle;
    let productView = props.productView;

    return ( 
        <div className="featured-div" style={{ marginBottom: '2%' }}>
            <Stack className="d-flex align-items-center justify-content-center" style={{ marginBottom: '-15px' }}>
                <div>
                    <Image src={ productImage } style={{ width: '100%' }}/>
                </div>
                <div className="featured-title-div">
                    <Stack className='d-flex align-items-center justify-content-center'>
                        <p className='featured-title'>{ productTitle }</p>
                        <p className='featured-subtitle'>{ productSubtitle }</p>
                    </Stack>
                </div>
            </Stack>
            <Button className="featured-card-btn" href={ productView }>View</Button>
        </div>
    );
}

export default FeaturedCard;