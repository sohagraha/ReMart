import React from 'react';
import { Link } from 'react-router-dom';
import OfferImage from '../../assets/images/offer.jpg';

const Offer = () => {
    return (
        <>
            {/* <!-- ads --> */}
            <div class="container pb-16">
                <Link to={"/shop"}>
                    <img src={OfferImage} alt="ads" class="w-full" />
                </Link>
            </div>
            {/* <!-- ./ads --> */}
        </>
    );
};

export default Offer;