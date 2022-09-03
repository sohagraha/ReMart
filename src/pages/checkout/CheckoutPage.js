import React from 'react';
import { FaChevronRight, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Checkout from '../../components/checkout/Checkout';

const CheckoutPage = () => {
    return (
        <>
            {/* <!-- breadcrumb --> */}
            <div class="container py-4 flex items-center gap-3">
                <Link to={"/"} class="text-primary text-base">
                    <FaHome />
                </Link>
                <span class="text-sm text-gray-400">
                    <FaChevronRight />
                </span>
                <p class="text-gray-600 font-medium">Checkout</p>
            </div>
            {/* <!-- ./breadcrumb --> */}
            <Checkout />
        </>
    );
};

export default CheckoutPage;