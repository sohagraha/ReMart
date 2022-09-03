import React from 'react';
import { FaChevronRight, FaHome } from 'react-icons/fa';
import ProductDescription from '../../components/product/ProductDescription';
import ProductDetails from '../../components/product/ProductDetails';
import RelatedProducts from '../../components/product/RelatedProducts';

const Product = () => {
    return (
        <>
            {/* <!-- ./breadcrumb --> */}
            <div class="container py-4 flex items-center gap-3">
                <a href="../index.html" class="text-primary text-base">
                    <FaHome />
                </a>
                <span class="text-sm text-gray-400">
                    <FaChevronRight />
                </span>
                <p class="text-gray-600 font-medium">Product</p>
            </div>
            {/* <!-- ./breadcrumb --> */}
            <ProductDetails />
            <ProductDescription />
            <RelatedProducts />
        </>
    );
};

export default Product;