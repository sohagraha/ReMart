import React from 'react';
import OfferImage from '../../assets/images/offer.jpg';

const Offer = () => {
    return (
        <>
            {/* <!-- ads --> */}
            <div class="container pb-16">
                <a href="#">
                    <img src={OfferImage} alt="ads" class="w-full" />
                </a>
            </div>
            {/* <!-- ./ads --> */}
        </>
    );
};

export default Offer;