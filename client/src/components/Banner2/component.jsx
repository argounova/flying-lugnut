import React from 'react';
import Stack from 'react-bootstrap/Stack';
import './style.css'

const PromoCodeBanner = () => {
    return (
        <div className='promoCodeDiv'>
            <Stack className='d-flex justify-content-center'>
                <p className='promoCodeCall'>Save 10% on 10 cars!  Enter promo code 10FOR10 at checkout.</p>
            </Stack>
        </div>
    );
}

export default PromoCodeBanner;