import React from 'react';
import { FaChevronRight, FaHome } from 'react-icons/fa';
import ShopFilter from '../../components/filter/ShopFilter';
import ProductCard from '../../components/productCard/ProductCard';
import ShopProducts from '../../components/shopProducts/ShopProducts';


const ShopPage = () => {
    return (
        <>
            <div className="container py-4 flex items-center gap-3">
                <a href="../index.html" className="text-primary text-base">
                    <FaHome />
                </a>
                <span className="text-sm text-gray-400">
                    <FaChevronRight />
                </span>
                <p className="text-gray-600 font-medium">Shop</p>
            </div>


            {/* <!-- shop wrapper --> */}
            <div className="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
                {/* <!-- sidebar --> */}
                <ShopFilter />
                {/* <!-- ./sidebar --> */}
                <ShopProducts />
            </div>
            {/* <!-- ./shop wrapper --> */}






        </>
    );
};

export default ShopPage;