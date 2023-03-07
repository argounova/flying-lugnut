import React from 'react';
import Stack from 'react-bootstrap/Stack';
import './style.css';

const FreeShippingBanner = () => {
    return (
        <div className='bannerDiv'>
            <Stack className='d-flex align-items-center justify-content-center'>
                <p className='bannerCall'>Free standard shipping!</p>
                <p className='bannerDetail'>No minimum order...lower 48 states only.</p>
            </Stack>
        </div>
    );
}

export default FreeShippingBanner;