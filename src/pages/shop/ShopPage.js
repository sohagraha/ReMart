import React from 'react';
import { FaChevronRight, FaHome } from 'react-icons/fa';

const ShopPage = () => {
    return (
        <>
            <div class="container py-4 flex items-center gap-3">
                <a href="../index.html" class="text-primary text-base">
                    <FaHome />
                </a>
                <span class="text-sm text-gray-400">
                    <FaChevronRight />
                </span>
                <p class="text-gray-600 font-medium">Shop</p>
            </div>
        </>
    );
};

export default ShopPage;