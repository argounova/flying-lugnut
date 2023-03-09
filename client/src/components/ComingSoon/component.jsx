import React from "react";
import Stack from 'react-bootstrap/Stack';
import './style.css';

const ComingSoon = () => {
    return (
        <div className="comingSoonDiv">
            <Stack className="d-flex align-items-center justify-content-center">
                <p className="comingSoonTitle">Coming Soon</p>
                <p className="comingSoonInfo">Bear with us as Flying Lugnut's new site is being built.  Browse our <a style={{ textDecoration: 'none', color: '#F1D74D'}} href='http://localhost:3000/browse-all'>current inventory</a> or visit our <a style={{ textDecoration: 'none', color: '#F1D74D'}} href="http://flyinglugnut.etsy.com">Etsy shop</a>.</p>
            </Stack>
        </div>
    );
}

export default ComingSoon;